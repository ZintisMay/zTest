function renderQuestionCards() {
  const leftPanel = document.querySelector(".panel:first-child");
  leftPanel.style.display = "flex";
  leftPanel.style.flexDirection = "column";

  allTests.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.classList.add("question-group");

    const header = document.createElement("div");
    header.classList.add("question-group-header");
    header.textContent = `${group.id}: ${group.title}`;
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
      item.textContent = section.title;
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.hash = route;
      });
      subList.appendChild(item);
    });

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
        renderTests(section);
        const saved = localStorage.getItem(hash);
        editor.setValue(saved ? JSON.parse(saved) : "");
        return;
      }
    }
  }
  topCenter.textContent = "";
  renderTests(null);
});

function renderTests(section) {
  const testsPanel = document.querySelector(".panel-tests");
  testsPanel.innerHTML = "";

  if (!section) return;

  testsPanel.style.alignItems = "";
  testsPanel.style.justifyContent = "";

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
});

editor.setValue("");

editor.on("change", () => {
  const hash = window.location.hash;
  if (!hash) return;
  localStorage.setItem(hash, JSON.stringify(editor.getValue()));
});

let messageHandler = null;

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    runCode();
  }
});

function runCode() {
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
    }
  };

  window.addEventListener("message", messageHandler);

  const iframeDoc = iframe.contentDocument;
  iframeDoc.open();
  iframeDoc.write(`
    <script>
      window.console.log = function(...args) {
        window.parent.postMessage({ type: "log", data: args.map(String) }, "*");
      };
      window.onerror = function(message, source, line) {
        window.parent.postMessage({ type: "error", data: "Line " + line + ": " + message }, "*");
        return true;
      };
    <\/script>
    <script>${code}<\/script>
  `);
  iframeDoc.close();
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
