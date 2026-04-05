let ZT_SOURCE = '';
let ALLTESTS_SOURCE = '';

const RUN_HOTKEY = 'CTRL+ENTER → run';
const NEXT_HOTKEY = 'CTRL+SHIFT+ENTER → next';

Promise.all([
  fetch('zTest/Z_T.js').then((r) => r.text()),
  fetch('allTests.js').then((r) => r.text()),
]).then(([zt, at]) => {
  ZT_SOURCE = zt;
  ALLTESTS_SOURCE = at;
});

function toggleMenu() {
  document.getElementById('side-menu').classList.toggle('open');
}

function startTour() {
  toggleMenu();
  introJs()
    .setOptions({
      steps: [
        {
          element: document.querySelector('.panel:first-child'),
          title: 'Lessons',
          intro:
            'This panel lists all available lessons and exercises. Click a group to expand it, then select a question to begin.',
        },
        {
          element: document.querySelector('.question-group'),
          title: 'Question Groups',
          intro:
            'Questions are organised into groups. Click a group header to expand it and see the individual questions inside.',
        },
        {
          element: document.querySelector('.panel-tests'),
          title: 'Question',
          intro:
            'This panel shows the active question — its title, instructions, and the individual tests your code must pass.',
        },
        {
          element: document.querySelector('.panel-code'),
          title: 'Code Editor',
          intro:
            'Write your solution here. The editor supports syntax highlighting and will auto-format your code when you run it.',
        },
        {
          element: document.getElementById('run-btn'),
          title: 'Run Button',
          intro:
            'Click Run (or press Ctrl+Enter) to execute your code against the tests. Results appear instantly in the Question panel.',
        },
        {
          element: document.querySelector('.panel-terminal'),
          title: 'Terminal',
          intro:
            'Any console.log output or runtime errors from your code appear here.',
        },
        {
          element: document.querySelector('.save-indicator'),
          title: 'Auto-Save',
          intro:
            'Your code and progress are automatically saved in the browser. You can close the page and pick up right where you left off.',
        },
      ],
    })
    .start();
}

const modalContent = {
  'What is Z_Test?': {
    title: 'What is Z_Test?',
    body: '<p>Z_Test is a browser-based JavaScript teaching and exercise framework.</p><p>It is best for beginning Javascript students who are just learning the syntax, and for more advanced students who want some quick practice.</p><p>If you find Z_Test easy and finish it quickly, congrats!<br>You are no longer a beginner :)</p>',
  },
  'How to use Z_Test': {
    title: 'How to use Z_Test',
    body: 'Select a question from the Lessons panel, write your solution in the Code editor, then press Ctrl+Enter to run.',
  },
  'Problems / Feedback': {
    title: 'Problems / Feedback',
    body: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeR7BFQTAhtvxfI8UrqF3iHyi-z9m6GGX3lrlwgnK_Re11xLg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`,
  },
  About: {
    title: 'About',
    body: `<p>Z_Test is an open source project.</p>        <p>Released under the <strong>MIT License</strong>.</p>
<a href="https://github.com/ZintisMay/zTest" target="_blank" rel="noopener">Find the code here: github.com/ZintisMay/zTest</a>
        <p>Contact me here: <a href="https://bsky.app/profile/zintismay.bsky.social" target="_blank" rel="noopener">@zintismay.bsky.social</a></p>`,
  },
};

function openModal(key) {
  const content = modalContent[key];
  document.getElementById('modal-title').textContent = content.title;
  document.getElementById('modal-content').innerHTML = content.body;
  document.getElementById('modal-backdrop').classList.add('open');
  toggleMenu();
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

function parseHash(hash) {
  const [groupId, sectionKey] = hash.replace('#', '').split('-');
  return { groupId, sectionKey };
}

let activeGroupId = null;
let activeItem = null;

function renderQuestionCards() {
  const leftPanel = document.querySelector('.panel-nav-content');

  allTests.forEach((group) => {
    const groupEl = document.createElement('div');
    groupEl.classList.add('question-group');

    const header = document.createElement('div');
    header.classList.add('question-group-header');

    const headerLabel = document.createElement('span');
    headerLabel.textContent = `${group.id}: ${group.title}`;

    const headerCount = document.createElement('span');
    headerCount.classList.add('question-group-count');
    const total = group.items.filter((i) => i.type === 'test').length;
    headerCount.textContent = `0/${total}`;

    header.appendChild(headerLabel);
    header.appendChild(headerCount);
    header.addEventListener('click', () => {
      groupEl.classList.toggle('open');
    });
    groupEl.appendChild(header);

    const subList = document.createElement('div');
    subList.classList.add('question-sublist');

    group.items.forEach((groupItem) => {
      const route = `#${group.id}-${groupItem.key}`;
      const navItem = document.createElement('div');
      navItem.classList.add('question-item');
      if (groupItem.type === 'lesson')
        navItem.classList.add('question-item-lesson');
      navItem.dataset.hash = route;
      navItem.textContent =
        groupItem.type === 'lesson'
          ? `Lesson: ${groupItem.title}`
          : `Test: ${groupItem.title}`;
      navItem.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.hash = route;
      });
      subList.appendChild(navItem);
    });

    groupEl.dataset.groupId = group.id;
    groupEl.appendChild(subList);
    leftPanel.appendChild(groupEl);
  });
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const topCenter = document.querySelector('.top-center');
  terminalOutput.innerHTML = '';
  const hint = document.querySelector('.run-hint');
  hint.textContent = RUN_HOTKEY;
  hint.classList.remove('run-hint-complete');
  if (messageHandler) {
    window.removeEventListener('message', messageHandler);
    messageHandler = null;
  }

  for (const group of allTests) {
    for (const item of group.items) {
      if (hash === `#${group.id}-${item.key}`) {
        topCenter.textContent =
          item.type === 'lesson'
            ? `${group.id}: ${group.title} — Lesson: ${item.title}`
            : `${group.id}: ${group.title} — ${item.title}`;
        activeGroupId = group.id;
        activeItem = item;
        document
          .querySelectorAll('.question-item')
          .forEach((el) => el.classList.remove('question-item-active'));
        document
          .querySelectorAll('.question-group')
          .forEach((el) => el.classList.remove('open'));
        const navEl = document.querySelector(
          `.question-item[data-hash="${hash}"]`,
        );
        if (navEl) {
          navEl.classList.add('question-item-active');
          navEl.closest('.question-group').classList.add('open');
        }
        if (item.type === 'lesson') {
          renderLesson(item);
          editor.setValue(item.sampleCode || '');
        } else {
          renderTests(item, group.help);
          updateProgress();
          const entry = getSaves()[hash] || {};
          editor.setValue(entry.code || item.sampleCode || '');
          if (entry.results) applyTestResults(entry.results);
        }
        return;
      }
    }
  }
  topCenter.textContent = '';
  renderTests(null);
  updateProgress();
});

function renderTests(section, helpUrl) {
  const testsPanel = document.querySelector('.tests-content');
  testsPanel.innerHTML = '';

  if (!section) return;

  const header = document.createElement('div');
  header.classList.add('test-pane-header');

  const headerTitle = document.createElement('div');
  headerTitle.textContent = section.title;

  const headerInstructions = document.createElement('div');
  headerInstructions.classList.add('test-pane-header-instructions');
  headerInstructions.innerHTML = section.instructions;

  header.appendChild(headerTitle);
  header.appendChild(headerInstructions);
  testsPanel.appendChild(header);

  section.tests.forEach((t) => {
    const pane = document.createElement('div');
    if (t.intro) {
      pane.classList.add('test-pane', 'test-pane-intro');
    } else {
      pane.classList.add('test-pane');
    }
    pane.textContent = t.description;
    testsPanel.appendChild(pane);
  });

  if (helpUrl) {
    const helpLink = document.createElement('a');
    helpLink.classList.add('help-link');
    helpLink.href = helpUrl;
    helpLink.target = '_blank';
    helpLink.rel = 'noopener';
    helpLink.textContent = 'Need help? Look it up →';
    testsPanel.appendChild(helpLink);
  }
}

function renderLesson(lesson) {
  const testsPanel = document.querySelector('.tests-content');
  testsPanel.innerHTML = '';

  const header = document.createElement('div');
  header.classList.add('test-pane-header');
  const headerTitle = document.createElement('div');
  headerTitle.textContent = `Lesson: ${lesson.title}`;
  header.appendChild(headerTitle);
  testsPanel.appendChild(header);

  const body = document.createElement('div');
  body.classList.add('lesson-body');
  body.innerHTML = lesson.text;
  testsPanel.appendChild(body);
}

const terminalOutput = document.querySelector('.terminal-output');

const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
  mode: 'javascript',
  theme: 'dracula',
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  lineWrapping: true,
  gutters: ['CodeMirror-lint-markers'],
  lint: { esversion: 11 },
});

editor.setValue('');

let saveTimer;
editor.on('change', () => {
  const hash = window.location.hash;
  if (!hash) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveEntry(hash, { code: editor.getValue() });
  }, 300);
});

function getSaves() {
  return JSON.parse(localStorage.getItem('Z_T_saves') || '{}');
}

function saveEntry(hash, patch) {
  const saves = getSaves();
  saves[hash] = { ...saves[hash], ...patch };
  localStorage.setItem('Z_T_saves', JSON.stringify(saves));
}

let messageHandler = null;

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
    e.preventDefault();
    const isLesson = activeItem?.type === 'lesson';
    const isComplete = isQuestionComplete(window.location.hash);
    if (isLesson || isComplete) {
      const next = getNextItemHash();
      if (next) window.location.hash = next;
    }
  } else if (e.ctrlKey && (e.key === 's' || e.key === 'Enter')) {
    e.preventDefault();
    runCode();
  }
});

function buildAstFlags(code) {
  try {
    const { ast } = prettier.__debug.parse(code, {
      parser: 'babel',
      plugins: prettierPlugins,
    });

    const ops = new Set();
    const logicalOps = new Set();
    const assignOps = new Set();
    const stmts = new Set();
    const decls = new Set();
    let hasTernary = false;
    let hasArrowFunction = false;
    let hasTemplateLiteral = false;
    let hasTemplateLiteralWithInterpolation = false;
    let hasSpread = false;
    let hasRest = false;
    let hasDestructuring = false;
    let hasDotNotation = false;
    let hasBracketNotation = false;
    let hasIfTrue = false;
    let hasIfFalse = false;
    let hasIfWithNot = false;
    const ifConditionIdentifiers = new Set();

    function containsIdentifier(node, name) {
      if (!node || typeof node !== 'object' || !node.type) return false;
      if (node.type === 'Identifier' && node.name === name) return true;
      return Object.values(node).some((val) => {
        if (Array.isArray(val))
          return val.some((n) => containsIdentifier(n, name));
        if (val && typeof val === 'object' && val.type)
          return containsIdentifier(val, name);
        return false;
      });
    }

    function containsNot(node) {
      if (!node || typeof node !== 'object' || !node.type) return false;
      if (node.type === 'UnaryExpression' && node.operator === '!') return true;
      return Object.values(node).some((val) => {
        if (Array.isArray(val)) return val.some(containsNot);
        if (val && typeof val === 'object' && val.type) return containsNot(val);
        return false;
      });
    }

    function walk(node) {
      if (!node || typeof node !== 'object' || !node.type) return;
      switch (node.type) {
        case 'BinaryExpression':
        case 'UnaryExpression':
          ops.add(node.operator);
          break;
        case 'LogicalExpression':
          logicalOps.add(node.operator);
          break;
        case 'AssignmentExpression':
          assignOps.add(node.operator);
          break;
        case 'IfStatement':
          if (node.test?.type === 'BooleanLiteral') {
            if (node.test.value === true) hasIfTrue = true;
            if (node.test.value === false) hasIfFalse = true;
          }
          if (containsNot(node.test)) hasIfWithNot = true;
          if (node.test) {
            const collectIdentifiers = (n) => {
              if (!n || typeof n !== 'object' || !n.type) return;
              if (n.type === 'Identifier') ifConditionIdentifiers.add(n.name);
              Object.values(n).forEach((val) => {
                if (Array.isArray(val)) val.forEach(collectIdentifiers);
                else if (val && typeof val === 'object' && val.type)
                  collectIdentifiers(val);
              });
            };
            collectIdentifiers(node.test);
          }
          stmts.add(node.type);
          break;
        case 'ForStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
        case 'WhileStatement':
        case 'DoWhileStatement':
        case 'SwitchStatement':
        case 'TryStatement':
          stmts.add(node.type);
          break;
        case 'VariableDeclaration':
          decls.add(node.kind);
          break;
        case 'ConditionalExpression':
          hasTernary = true;
          break;
        case 'ArrowFunctionExpression':
          hasArrowFunction = true;
          break;
        case 'TemplateLiteral':
          hasTemplateLiteral = true;
          if (node.expressions?.length > 0)
            hasTemplateLiteralWithInterpolation = true;
          break;
        case 'SpreadElement':
          hasSpread = true;
          break;
        case 'RestElement':
          hasRest = true;
          break;
        case 'ObjectPattern':
        case 'ArrayPattern':
          hasDestructuring = true;
          break;
        case 'MemberExpression':
          if (node.computed) hasBracketNotation = true;
          else {
            const isConsoleLog = node.object?.type === 'Identifier' && node.object?.name === 'console' && node.property?.name === 'log';
            if (!isConsoleLog) hasDotNotation = true;
          }
          break;
      }
      for (const val of Object.values(node)) {
        if (Array.isArray(val)) {
          val.forEach(walk);
        } else if (val && typeof val === 'object' && val.type) {
          walk(val);
        }
      }
    }

    walk(ast);

    return {
      operators: [...ops],
      logicalOperators: [...logicalOps],
      assignmentOperators: [...assignOps],
      statements: [...stmts],
      declarations: [...decls],
      hasTernary,
      hasArrowFunction,
      hasTemplateLiteral,
      hasTemplateLiteralWithInterpolation,
      hasSpread,
      hasRest,
      hasDestructuring,
      hasDotNotation,
      hasBracketNotation,
      hasIfTrue,
      hasIfFalse,
      hasIfWithNot,
      ifConditionIdentifiers: [...ifConditionIdentifiers],
    };
  } catch (e) {
    return null;
  }
}

function runCode() {
  try {
    const cursor = editor.getCursor();
    const formatted = prettier.format(editor.getValue(), {
      parser: 'babel',
      plugins: prettierPlugins,
    });
    editor.setValue(formatted);
    editor.setCursor(cursor);
  } catch (e) {
    // syntax error — skip formatting, let the run proceed to show the error
  }

  const code = editor.getValue();
  const astFlags = buildAstFlags(code);
  terminalOutput.innerHTML = '';

  // Clear our prior iframe
  const existing = document.getElementById('sandbox');
  if (existing) existing.remove();

  const iframe = document.createElement('iframe');
  iframe.id = 'sandbox';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  if (messageHandler) window.removeEventListener('message', messageHandler);

  messageHandler = (e) => {
    if (e.data.type === 'log') {
      appendToTerminal(e.data.data.join(' '), 'terminal-line');
    } else if (e.data.type === 'error') {
      appendToTerminal(e.data.data, 'terminal-error');
    } else if (e.data.type === 'results') {
      applyTestResults(e.data.data, true);
    }
  };

  window.addEventListener('message', messageHandler);

  const testRunnerScript =
    activeItem?.type === 'test'
      ? `
    const _rawSection = allTests.find(g => g.id === "${activeGroupId}").items.find(i => i.key === "${activeItem?.key}");
    const _suite = {
      "${activeItem?.key}": {
        ..._rawSection,
        tests: _rawSection.tests.map(t => t.intro ? { ...t, test: () => {} } : t),
      }
    };
    Z_T.testAll(_suite);
  `
      : '';

  const iframeDoc = iframe.contentDocument;
  iframeDoc.open();
  iframeDoc.write(`
    <script>
      const __src = ${JSON.stringify(code)};
      const __astFlags = ${JSON.stringify(astFlags)};
      const __logs = [];
      window.console.log = function(...args) {
        if (typeof args[0] === "string" && args[0].startsWith("%c")) return;
        __logs.push(args);
        window.parent.postMessage({ type: "log", data: args.map(a => (typeof a === 'object' && a !== null) ? JSON.stringify(a, null, 2) : String(a)) }, "*");
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

function isQuestionComplete(hash) {
  const { sectionKey } = parseHash(hash);
  const entry = getSaves()[hash];
  return !!entry?.results?.[sectionKey]?.results?.every(
    (r) => r.result === null,
  );
}

function getNextItemHash() {
  let found = false;
  for (const group of allTests) {
    for (const item of group.items) {
      if (found) return `#${group.id}-${item.key}`;
      if (group.id === activeGroupId && item.key === activeItem?.key)
        found = true;
    }
  }
  return null;
}

function getNextHash() {
  let found = false;
  for (const group of allTests) {
    for (const item of group.items) {
      const hash = `#${group.id}-${item.key}`;
      if (found && (item.type === 'lesson' || !isQuestionComplete(hash)))
        return hash;
      if (group.id === activeGroupId && item.key === activeItem?.key)
        found = true;
    }
  }
  return null;
}

function getPrevHash() {
  let prev = null;
  for (const group of allTests) {
    for (const item of group.items) {
      if (group.id === activeGroupId && item.key === activeItem?.key)
        return prev;
      prev = `#${group.id}-${item.key}`;
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
  const progressEl = document.querySelector('.progress');
  if (!activeGroupId || !activeItem || activeItem.type !== 'test') {
    progressEl.textContent = '0 / 0';
    return;
  }
  const group = allTests.find((g) => g.id === activeGroupId);
  if (!group) return;
  const testItems = group.items.filter((i) => i.type === 'test');
  const current = testItems.findIndex((i) => i.key === activeItem.key) + 1;
  const total = testItems.length;
  progressEl.textContent = `${current} / ${total}`;
}

function updateNavState() {
  const saves = getSaves();

  document.querySelectorAll('.question-item').forEach((navItem) => {
    const hash = navItem.dataset.hash;
    if (navItem.classList.contains('question-item-lesson')) return;
    const { sectionKey } = parseHash(hash);
    const entry = saves[hash];
    const complete = entry?.results?.[sectionKey]?.results?.every(
      (r) => r.result === null,
    );
    navItem.classList.toggle('question-item-complete', !!complete);
  });

  document.querySelectorAll('.question-group').forEach((group) => {
    const testItems = [
      ...group.querySelectorAll('.question-item:not(.question-item-lesson)'),
    ];
    const completeCount = testItems.filter((item) =>
      item.classList.contains('question-item-complete'),
    ).length;
    const allComplete =
      completeCount === testItems.length && testItems.length > 0;
    const someComplete = completeCount > 0 && !allComplete;
    group.classList.toggle('question-group-complete', allComplete);
    group.classList.toggle('question-group-partial', someComplete);
    const countEl = group.querySelector('.question-group-count');
    if (countEl) countEl.textContent = `${completeCount}/${testItems.length}`;
  });
}

function applyTestResults(data, shouldAdvance = false) {
  if (!activeItem?.key || !data[activeItem.key]) return;
  const existingEntry = getSaves()[window.location.hash];
  const results = data[activeItem.key].results;
  const panes = document
    .querySelector('.tests-content')
    .querySelectorAll('.test-pane');
  panes.forEach((pane, i) => {
    if (!results[i]) return;
    if (pane.classList.contains('test-pane-intro')) return;
    const passed = results[i].result === null;
    pane.classList.remove('test-pass', 'test-fail');
    pane.classList.add(passed ? 'test-pass' : 'test-fail');
    let errEl = pane.querySelector('.test-error');
    if (!passed) {
      if (!errEl) {
        errEl = document.createElement('div');
        errEl.classList.add('test-error');
        pane.appendChild(errEl);
      }
      errEl.textContent = results[i].result;
    } else if (errEl) {
      errEl.remove();
    }
  });

  saveEntry(window.location.hash, { results: data });
  updateNavState();

  const hint = document.querySelector('.run-hint');
  const complete = isQuestionComplete(window.location.hash);
  hint.textContent = complete ? NEXT_HOTKEY : RUN_HOTKEY;
  hint.classList.toggle('run-hint-complete', complete);
}

function resetQuestion() {
  const hash = window.location.hash;
  if (!hash) return;
  const code = activeItem.sampleCode || '';
  editor.setValue(code);
  saveEntry(hash, { code, results: null });
  runCode();
}

function clearTerminal() {
  terminalOutput.innerHTML = '';
}

function appendToTerminal(text, className) {
  const line = document.createElement('div');
  line.classList.add(className);
  line.textContent = text;
  terminalOutput.appendChild(line);
}

renderQuestionCards();
updateNavState();
updateProgress();
initDivider();

if (window.location.hash) {
  window.dispatchEvent(new Event('hashchange'));
}

document.getElementById('hamburger-btn').addEventListener('click', toggleMenu);
document.getElementById('modal-backdrop').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-backdrop')) closeModal();
});
document.querySelectorAll('.side-menu-item').forEach((item) => {
  item.addEventListener('click', () => {
    if (item.dataset.modal === 'How to use Z_Test') {
      startTour();
    } else {
      openModal(item.dataset.modal);
    }
  });
});
document.getElementById('reset-btn').addEventListener('click', resetQuestion);
document.getElementById('run-btn').addEventListener('click', runCode);
document.getElementById('clear-btn').addEventListener('click', clearTerminal);
document.getElementById('collapse-btn').addEventListener('click', () => {
  document
    .querySelectorAll('.question-group.open')
    .forEach((g) => g.classList.remove('open'));
});

document.getElementById('clear-save-btn').addEventListener('click', () => {
  document.getElementById('confirm-backdrop').classList.add('open');
});
document.getElementById('confirm-cancel-btn').addEventListener('click', () => {
  document.getElementById('confirm-backdrop').classList.remove('open');
});
document.getElementById('confirm-backdrop').addEventListener('click', (e) => {
  if (e.target === document.getElementById('confirm-backdrop')) {
    document.getElementById('confirm-backdrop').classList.remove('open');
  }
});
document.getElementById('confirm-delete-btn').addEventListener('click', () => {
  localStorage.removeItem('Z_T_saves');
  document.getElementById('confirm-backdrop').classList.remove('open');
  activeGroupId = null;
  activeItem = null;
  history.replaceState(null, '', window.location.pathname);
  document
    .querySelectorAll('.question-group.open')
    .forEach((g) => g.classList.remove('open'));
  document
    .querySelectorAll('.question-item-active')
    .forEach((el) => el.classList.remove('question-item-active'));
  document.querySelector('.top-center').textContent = '';
  renderTests(null);
  updateNavState();
  updateProgress();
  editor.setValue('');
});
document.getElementById('logo').addEventListener('click', () => {
  history.replaceState(null, '', window.location.pathname);
  activeGroupId = null;
  activeItem = null;
  document
    .querySelectorAll('.question-group.open')
    .forEach((g) => g.classList.remove('open'));
  document
    .querySelectorAll('.question-item-active')
    .forEach((el) => el.classList.remove('question-item-active'));
  document.querySelector('.top-center').textContent = '';
  renderTests(null);
  updateProgress();
});
document.getElementById('back-btn').addEventListener('click', goBack);
document.getElementById('next-btn').addEventListener('click', goNext);

function initDivider() {
  const handle = document.querySelector('.divider-handle');
  const codePanel = document.querySelector('.panel-code');
  const terminalPanel = document.querySelector('.panel-terminal');

  let isDragging = false;
  let startY, startCodeHeight, startTerminalHeight;

  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startCodeHeight = codePanel.getBoundingClientRect().height;
    startTerminalHeight = terminalPanel.getBoundingClientRect().height;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.clientY - startY;
    const newCodeHeight = startCodeHeight + delta;
    const newTerminalHeight = startTerminalHeight - delta;
    if (newCodeHeight < 50 || newTerminalHeight < 50) return;
    codePanel.style.flex = 'none';
    codePanel.style.height = newCodeHeight + 'px';
    terminalPanel.style.flex = 'none';
    terminalPanel.style.height = newTerminalHeight + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}
