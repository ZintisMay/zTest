const test = {
  id: '16',
  title: 'String Concatenation',
  help: 'https://www.w3schools.com/js/js_string_methods.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-concatenation',
      title: 'String Concatenation',
      text: `<b>String concatenation</b> is joining strings together to make a new string.<br><br>

The simplest way is with the <b>+</b> operator — the same one used for adding numbers. When used with strings, it joins them instead.<br><br>

You can also join a string and a number — JavaScript will convert the number to a string automatically.<br><br>

The second way is with <b>template literals</b> — strings wrapped in backticks (<b>\`\`</b>) instead of quotes. Inside them you can embed any expression using <b>\${}</b>. This is often cleaner than using +.<br><br>

Try running the code!`,
      sampleCode: `var first = "camp";
var second = "fire";

// Using +
var word = first + second;
console.log(word); // "campfire"

// Joining a string and a number
var message = "I am " + 25;
console.log(message); // "I am 25"

// Template literal with interpolation
var name = "Beth";
var greeting = \`Hello \${name}!\`;
console.log(greeting); // "Hello Beth!"`,
    },
    {
      type: 'test',
      key: 'stringPlusStringTests',
      title: `string + string`,
      instructions: `Declare variables a, b, and c. a is "camp", b is "fire", and c is a and b together using the "+" operator.`,
      tests: [
        {
          description: `a is declared`,
          test: () => {
            expect(a).toBeDeclared();
          },
        },
        {
          description: `a is a string`,
          test: () => {
            expect(a).toBeString();
          },
        },
        {
          description: `a is "camp"`,
          test: () => {
            expect(a).toBe('camp');
          },
        },
        {
          description: `b is declared`,
          test: () => {
            expect(b).toBeDeclared();
          },
        },
        {
          description: `b is a string`,
          test: () => {
            expect(b).toBeString();
          },
        },
        {
          description: `b is "fire"`,
          test: () => {
            expect(b).toBe('fire');
          },
        },
        {
          description: `c is declared`,
          test: () => {
            expect(c).toBeDeclared();
          },
        },
        {
          description: `c is a string`,
          test: () => {
            expect(c).toBeString();
          },
        },
        {
          description: `uses the + operator`,
          test: () => {
            expectCode().toUseOperator('+');
          },
        },
        {
          description: `c is "campfire"`,
          test: () => {
            expect(c).toBe('campfire');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'stringPlusNumberTests',
      title: `string + number`,
      instructions: `Declare a variable "message" by joining the string "I am " and the number 25 using the + operator.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(message).toBeDeclared();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(message).toBeString();
          },
        },
        {
          description: `uses the + operator`,
          test: () => {
            expectCode().toUseOperator('+');
          },
        },
        {
          description: `is "I am 25"`,
          test: () => {
            expect(message).toBe('I am 25');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'templateLiteralBasicTests',
      title: `template literal`,
      instructions: `Declare a variable "phrase" using a template literal (backtick string) containing the text "hello world".`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(phrase).toBeDeclared();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(phrase).toBeString();
          },
        },
        {
          description: `uses a template literal`,
          test: () => {
            expectCode().toUseTemplateLiteral();
          },
        },
        {
          description: `is "hello world"`,
          test: () => {
            expect(phrase).toBe('hello world');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'templateLiteralInterpolationTests',
      title: `template literal with interpolation`,
      instructions: `Declare a variable "greeting" set to "Hello". Then declare a variable "myFriend" set to "Beth". Declare a variable "greeting", using a template literal that interpolates "greeting" and "myFriend" to produce "Hello Beth!". (i.e. \`\${greeting} \${myFriend}\`))`,
      tests: [
        {
          description: `"greeting" is declared`,
          test: () => {
            expect(greeting).toBeDeclared();
          },
        },
        {
          description: `"greeting" is a string`,
          test: () => {
            expect(greeting).toBeString();
          },
        },
        {
          description: `"greeting" is "Hello"`,
          test: () => {
            expect(greeting).toBe('Hello');
          },
        },
        {
          description: `"myFriend" is declared`,
          test: () => {
            expect(myFriend).toBeDeclared();
          },
        },
        {
          description: `"myFriend" is a string`,
          test: () => {
            expect(myFriend).toBeString();
          },
        },
        {
          description: `"myFriend" is "Beth"`,
          test: () => {
            expect(myFriend).toBe('Beth');
          },
        },
        {
          description: `"phrase" is declared`,
          test: () => {
            expect(phrase).toBeDeclared();
          },
        },
        {
          description: `"phrase" is a string`,
          test: () => {
            expect(phrase).toBeString();
          },
        },
        {
          description: `uses a template literal with interpolation`,
          test: () => {
            expectCode().toUseTemplateLiteralWithInterpolation();
          },
        },
        {
          description: `"phrase" is "Hello Beth!"`,
          test: () => {
            expect(phrase).toBe('Hello Beth!');
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
