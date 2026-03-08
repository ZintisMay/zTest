let ZT_SOURCE = "";
let ALLTESTS_SOURCE = "";

Promise.all([
  fetch("zTest/Z_T.js").then((r) => r.text()),
  fetch("allTests.js").then((r) => r.text()),
]).then(([zt, at]) => {
  ZT_SOURCE = zt;
  ALLTESTS_SOURCE = at;
});

let activeGroupId = null;
let activeSectionKey = null;
let activeSection = null;

function renderQuestionCards() {
  const leftPanel = document.querySelector(".panel:first-child");
  leftPanel.style.display = "flex";
  leftPanel.style.flexDirection = "column";

  allTests.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.classList.add("question-group");

    const header = document.createElement("div");
    header.classList.add("question-group-header");

    const headerLabel = document.createElement("span");
    headerLabel.textContent = `${group.id}: ${group.title}`;

    const headerCount = document.createElement("span");
    headerCount.classList.add("question-group-count");
    const total = Object.keys(group.sections).length;
    headerCount.textContent = `0/${total}`;

    header.appendChild(headerLabel);
    header.appendChild(headerCount);
    header.addEventListener("click", () => {
      groupEl.classList.toggle("open");
    });
    groupEl.appendChild(header);

    const subList = document.createElement("div");
    subList.classList.add("question-sublist");

    Object.entries(group.sections).forEach(([key, section]) => {
      const route = `#${group.id}-${key}`;
      const item = document.createElement("div");
      item.classList.add("question-item");
      item.dataset.hash = route;
      item.textContent = section.title;
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.hash = route;
      });
      subList.appendChild(item);
    });

    groupEl.dataset.groupId = group.id;
    groupEl.appendChild(subList);
    leftPanel.appendChild(groupEl);
  });
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  const topCenter = document.querySelector(".top-center");

  for (const group of allTests) {
    for (const [key, section] of Object.entries(group.sections)) {
      if (hash === `#${group.id}-${key}`) {
        topCenter.textContent = `${group.id}: ${group.title} — ${section.title}`;
        activeGroupId = group.id;
        activeSectionKey = key;
        activeSection = section;
        document.querySelectorAll(".question-item").forEach((el) => el.classList.remove("question-item-active"));
        document.querySelectorAll(".question-group").forEach((el) => el.classList.remove("open"));

        const activeItem = document.querySelector(`.question-item[data-hash="#${group.id}-${key}"]`);
        if (activeItem) {
          activeItem.classList.add("question-item-active");
          activeItem.closest(".question-group").classList.add("open");
        }

        renderTests(section);
        updateProgress();
        const entry = getSaves()[hash] || {};
        editor.setValue(entry.code || "");
        if (entry.results) applyTestResults(entry.results);
        return;
      }
    }
  }
  topCenter.textContent = "";
  renderTests(null);
  updateProgress();
});

function renderTests(section) {
  const testsPanel = document.querySelector(".tests-content");
  testsPanel.innerHTML = "";

  if (!section) return;

  const header = document.createElement("div");
  header.classList.add("test-pane-header");

  const headerTitle = document.createElement("div");
  headerTitle.textContent = section.title;

  const headerInstructions = document.createElement("div");
  headerInstructions.classList.add("test-pane-header-instructions");
  headerInstructions.textContent = section.instructions;

  header.appendChild(headerTitle);
  header.appendChild(headerInstructions);
  testsPanel.appendChild(header);

  section.tests.forEach((t) => {
    const pane = document.createElement("div");
    pane.classList.add("test-pane");
    pane.textContent = t.description;
    testsPanel.appendChild(pane);
  });
}

const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  lineWrapping: true,
  gutters: ["CodeMirror-lint-markers"],
  lint: { esversion: 11 },
});

editor.setValue("");

let saveTimer;
editor.on("change", () => {
  const hash = window.location.hash;
  if (!hash) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveEntry(hash, { code: editor.getValue() });
  }, 300);
});

function getSaves() {
  return JSON.parse(localStorage.getItem("Z_T_saves") || "{}");
}

function saveEntry(hash, patch) {
  const saves = getSaves();
  saves[hash] = { ...saves[hash], ...patch };
  localStorage.setItem("Z_T_saves", JSON.stringify(saves));
}

let messageHandler = null;

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "s" || e.key === "Enter")) {
    e.preventDefault();
    runCode();
  }
});

function runCode() {
  try {
    const formatted = prettier.format(editor.getValue(), {
      parser: "babel",
      plugins: prettierPlugins,
    });
    editor.setValue(formatted);
  } catch (e) {
    // syntax error — skip formatting, let the run proceed to show the error
  }

  const code = editor.getValue();
  const terminalPanel = document.querySelector(".terminal-output");

  terminalPanel.innerHTML = "";

  const existing = document.getElementById("sandbox");
  if (existing) existing.remove();

  const iframe = document.createElement("iframe");
  iframe.id = "sandbox";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  if (messageHandler) window.removeEventListener("message", messageHandler);

  messageHandler = (e) => {
    if (e.data.type === "log") {
      appendToTerminal(e.data.data.join(" "), "terminal-line");
    } else if (e.data.type === "error") {
      appendToTerminal(e.data.data, "terminal-error");
    } else if (e.data.type === "results") {
      applyTestResults(e.data.data, true);
    }
  };

  window.addEventListener("message", messageHandler);

  const testRunnerScript = activeSection ? `
    Z_T.displayResults = function(results) {
      const clean = JSON.parse(JSON.stringify(results, (key, val) => {
        if (val instanceof Error) return val.message;
        if (typeof val === "function") return undefined;
        return val;
      }));
      window.parent.postMessage({ type: "results", data: clean }, "*");
    };
    Z_T.addBigCheckMark = function() {};
    const _suite = { "${activeSectionKey}": allTests.find(g => g.id === "${activeGroupId}").sections["${activeSectionKey}"] };
    Z_T.testAll(_suite);
  ` : "";

  const iframeDoc = iframe.contentDocument;
  iframeDoc.open();
  iframeDoc.write(`
    <script>
      window.console.log = function(...args) {
        if (typeof args[0] === "string" && args[0].startsWith("%c")) return;
        window.parent.postMessage({ type: "log", data: args.map(String) }, "*");
      };
      window.onerror = function(message, source, line) {
        window.parent.postMessage({ type: "error", data: "Line " + line + ": " + message }, "*");
        return true;
      };
    <\/script>
    <script>${ZT_SOURCE}<\/script>
    <script>${ALLTESTS_SOURCE}<\/script>
    <script>${code}<\/script>
    <script>${testRunnerScript}<\/script>
  `);
  iframeDoc.close();
}

function getNextHash() {
  let found = false;
  for (const group of allTests) {
    for (const key of Object.keys(group.sections)) {
      if (found) return `#${group.id}-${key}`;
      if (group.id === activeGroupId && key === activeSectionKey) found = true;
    }
  }
  return null;
}

function getPrevHash() {
  let prev = null;
  for (const group of allTests) {
    for (const key of Object.keys(group.sections)) {
      if (group.id === activeGroupId && key === activeSectionKey) return prev;
      prev = `#${group.id}-${key}`;
    }
  }
  return null;
}

function goNext() {
  const next = getNextHash();
  if (next) window.location.hash = next;
}

function goBack() {
  const prev = getPrevHash();
  if (prev) window.location.hash = prev;
}

function updateProgress() {
  const progressEl = document.querySelector(".progress");
  if (!activeGroupId || !activeSectionKey) {
    progressEl.textContent = "0 / 0";
    return;
  }
  const group = allTests.find((g) => g.id === activeGroupId);
  if (!group) return;
  const keys = Object.keys(group.sections);
  const current = keys.indexOf(activeSectionKey) + 1;
  const total = keys.length;
  progressEl.textContent = `${current} / ${total}`;
}

function updateNavState() {
  const saves = getSaves();

  document.querySelectorAll(".question-item").forEach((item) => {
    const hash = item.dataset.hash;
    const sectionKey = hash.substring(hash.indexOf("-") + 1);
    const entry = saves[hash];
    const complete = entry?.results?.[sectionKey]?.results?.every((r) => r.result === null);
    item.classList.toggle("question-item-complete", !!complete);
  });

  document.querySelectorAll(".question-group").forEach((group) => {
    const items = [...group.querySelectorAll(".question-item")];
    const completeCount = items.filter((item) => item.classList.contains("question-item-complete")).length;
    const allComplete = completeCount === items.length && items.length > 0;
    const someComplete = completeCount > 0 && !allComplete;
    group.classList.toggle("question-group-complete", allComplete);
    group.classList.toggle("question-group-partial", someComplete);
    const countEl = group.querySelector(".question-group-count");
    if (countEl) countEl.textContent = `${completeCount}/${items.length}`;
  });
}

function applyTestResults(data, shouldAdvance = false) {
  if (!activeSectionKey || !data[activeSectionKey]) return;
  const existingEntry = getSaves()[window.location.hash];
  const alreadyPassed = existingEntry?.results?.[activeSectionKey]?.results?.every((r) => r.result === null);
  const results = data[activeSectionKey].results;
  const panes = document.querySelector(".tests-content").querySelectorAll(".test-pane");
  panes.forEach((pane, i) => {
    if (!results[i]) return;
    const passed = results[i].result === null;
    pane.classList.remove("test-pass", "test-fail");
    pane.classList.add(passed ? "test-pass" : "test-fail");
    let errEl = pane.querySelector(".test-error");
    if (!passed) {
      if (!errEl) {
        errEl = document.createElement("div");
        errEl.classList.add("test-error");
        pane.appendChild(errEl);
      }
      errEl.textContent = results[i].result;
    } else if (errEl) {
      errEl.remove();
    }
  });

  saveEntry(window.location.hash, { results: data });
  updateNavState();

  const allPassed = data[activeSectionKey].results.every((r) => r.result === null);
  if (shouldAdvance && allPassed && alreadyPassed) {
    const next = getNextHash();
    if (next) window.location.hash = next;
  }
}

function resetQuestion() {
  const hash = window.location.hash;
  if (!hash) return;
  editor.setValue("");
  saveEntry(hash, { code: "", results: null });
  runCode();
}

function clearTerminal() {
  document.querySelector(".terminal-output").innerHTML = "";
}

function appendToTerminal(text, className) {
  const terminalPanel = document.querySelector(".terminal-output");
  const line = document.createElement("div");
  line.classList.add(className);
  line.textContent = text;
  terminalPanel.appendChild(line);
}

renderQuestionCards();
updateNavState();
updateProgress();
initDivider();

function initDivider() {
  const handle = document.querySelector(".divider-handle");
  const codePanel = document.querySelector(".panel-code");
  const terminalPanel = document.querySelector(".panel-terminal");

  let isDragging = false;
  let startY, startCodeHeight, startTerminalHeight;

  handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startCodeHeight = codePanel.getBoundingClientRect().height;
    startTerminalHeight = terminalPanel.getBoundingClientRect().height;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.clientY - startY;
    const newCodeHeight = startCodeHeight + delta;
    const newTerminalHeight = startTerminalHeight - delta;
    if (newCodeHeight < 50 || newTerminalHeight < 50) return;
    codePanel.style.flex = "none";
    codePanel.style.height = newCodeHeight + "px";
    terminalPanel.style.flex = "none";
    terminalPanel.style.height = newTerminalHeight + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
