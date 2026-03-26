const fs = require('fs');
const serialize = require('serialize-javascript');
const allTests = require('./allTestsBackup');
const EXPORT_NAME = 'test';
const testBuilderLine = `if (typeof module !== 'undefined') module.exports = ${EXPORT_NAME};`;

const commands = {
  split: splitTests,
  build: buildTests,
};

const command = process.argv[2];
if (commands[command]) {
  commands[command]();
} else {
  console.log('Unknown command:', command);
  console.log('Available commands:', Object.keys(commands).join(', '));
}

// Utilities

function splitTests() {
  allTests.forEach((group) => {
    const fileName = createFileName(group);
    const content = `const ${EXPORT_NAME} = ${serializeGroup(group)};\n\n${testBuilderLine}\n`;
    fs.writeFileSync('./testSource/' + fileName, content, 'utf8');
  });
  console.log(`Split into ${allTests.length} files in ./testSource/`);
}

function buildTests() {
  const files = fs
    .readdirSync('./testSource')
    .filter((f) => f.endsWith('.js'))
    .sort();
  const groups = files.map((f) => require('./testSource/' + f));
  const content = groups.map(serializeGroup).join(',\n');
  const output = `const allTests = [\n${content}\n];\n\nif (typeof module !== 'undefined') module.exports = allTests;\n`;
  fs.writeFileSync('./allTests.js', output, 'utf8');
  console.log(`Built allTests.js from ${files.length} files.`);
}

function serializeGroup(g) {
  const q = (s) => `'${s}'`;
  const bt = (s) => `\`${s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;

  const items = g.items
    .map((item) => {
      if (item.type === 'lesson') {
        return [
          `      { type: 'lesson', key: ${q(item.key)},`,
          `        title: ${q(item.title)},`,
          `        text: ${bt(item.text)},`,
          `        sampleCode: ${bt(item.sampleCode)},`,
          `      }`,
        ].join('\n');
      } else {
        const tests = item.tests
          .map((t) => {
            const fn = t.test.toString();
            return `          { description: ${bt(t.description)}, test: ${fn} }`;
          })
          .join(',\n');
        return [
          `      { type: 'test', key: ${q(item.key)},`,
          `        title: ${bt(item.title)},`,
          `        instructions: ${bt(item.instructions)},`,
          `        tests: [\n${tests}\n        ],`,
          `      }`,
        ].join('\n');
      }
    })
    .join(',\n');

  const lines = [`  {`, `    id: ${q(g.id)},`, `    title: ${q(g.title)},`];
  if (g.help) lines.push(`    help: ${q(g.help)},`);
  lines.push(`    items: [\n${items}\n    ],`);
  lines.push(`  }`);
  return lines.join('\n');
}

function createFileName(test) {
  return `${test.id}-${test.title}.js`;
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function saveAsJs(filePath, variableName, data) {
  const content = `const ${variableName} = ${serialize(data, { space: 2 })};\n${testBuilderLine}\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}
