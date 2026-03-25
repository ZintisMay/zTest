# zTest — Claude Project Notes

## What This Is
A browser-based JavaScript teaching/exercise framework. Students write code in an in-browser editor, run it against a test suite, and get pass/fail feedback. No backend — everything runs in the browser.

## File Structure
- `index.html` — main UI shell
- `index.css` — all styles
- `index.js` — all UI logic (routing, editor, test runner, localStorage)
- `allTests.js` — all exercise data as a single `const allTests` array
- `zTest/Z_T.js` — the test runner library (custom, no lodash)
- `tests/1.js` — `tests/20.js` — original raw test files (source of truth for allTests.js)

## Architecture

### Navigation
- Hash routing: `#A1-varATests` format (`#groupId-sectionKey`)
- `hashchange` event drives all panel updates
- Left panel is an accordion rendered from `allTests`

### Test Execution
- Student code runs in a hidden `<iframe>` (sandboxed)
- Three scripts injected in order: `Z_T.js`, `allTests.js`, student code, then a test runner script
- Results sent back to parent via `postMessage`
- `Z_T.reportResults` sends results to the parent window via postMessage
- `Z_T.addBigCheckMark` is overridden to a no-op

### localStorage
- Single JSON object stored under key `Z_T_saves`
- Shape: `{ [hash]: { code: string, results: object } }`
- Helpers: `getSaves()`, `saveEntry(hash, patch)`

### Auto-advance
- If a question was already passing and the user runs again and it still passes → auto-advance to next hash
- Controlled by `shouldAdvance` parameter in `applyTestResults`

## allTests.js Structure
```js
const allTests = [
  {
    id: "A1",          // shown in nav and hash
    title: "Variables",
    series: "A",
    sections: {
      varATests: {     // used as the section key in the hash
        title: `var "a"`,
        instructions: `...`,
        tests: [
          { description: `is declared`, test: () => { expect(a).toBeDeclared(); } },
          ...
        ],
      },
    },
  },
];
```
- No `Z_T.testAll()` calls in allTests.js — data only
- Currently contains A1–A10 (files 1–10). B series not yet added.

## Z_T.js Notes
- Lodash has been fully removed — replaced with a custom `isEqual` function at the top of the file
- All `_.isEqual` calls replaced with `isEqual` directly

## UI Panels
- **Left** — accordion nav (question groups + items), scroll on overflow
- **Middle** — test panes for the active section (title header + individual test rows)
- **Right top** — CodeMirror editor with JSHint linting + Prettier formatting on run
- **Right bottom** — terminal output (console.log + errors from iframe)
- Divider between editor and terminal is draggable

## Key Behaviors
- Ctrl+S and Ctrl+Enter both trigger `runCode()`
- On run: Prettier formats the code first (silently skips if syntax error), then executes
- JSHint lint markers show in editor gutter (esversion: 11)
- Reset button clears code + results for current hash only
- Nav items turn green when all tests pass, group header turns green/yellow/red based on completion

## CDN Dependencies
- CodeMirror 5.65.16 (editor, JS mode, lint addon, dracula theme)
- JSHint 2.13.6 (linting)
- Prettier 2.8.8 + babel parser (formatting)
