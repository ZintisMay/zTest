const test = {
  id: '1',
  title: 'Variables',
  help: 'https://www.w3schools.com/js/js_variables.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'console.log()',
      text: `You're going to see a lot of console.log(), and when writing code, you'll use this to peek at values.<br><br>
console.log("Hi there") outputs it into the "terminal".<br><br>
Give it a try!
`,
      sampleCode: `console.log("Hi there");
console.log(3);
console.log(true);

// Try running the code with CTRL+ENTER
// You'll see the output below in the Terminal`,
    },
    {
      type: 'lesson',
      key: 'lesson-1',
      title: 'Variables',
      text: `A variable is a way to name a piece of information.<br><br>

      There are three ways to declare a variable:<br><br>

<b>var</b> → The original way.<br>
<b>let</b> → Slightly different from "var".<br>
<b>const</b> → Cannot be reassigned (it is a "constant").<br><br>

You assign a value using the "=" sign. The value on the right is stored under the name on the left.<br><br>

ALSO variables must start with a character. So "7Up" is no good, but "drink7Up" is OK.<br><br>

Lastly, there is some slight nuance between "var" and "let", but we'll save that for later.`,
      sampleCode: `// var - the original way, can be reassigned
var name = "Alice";

// We can reassign it
name = "Bob";

// let - block scoped, can be reassigned
let age = 25;

// We can reassign it
age = 100;

// const - cannot be reassigned
const PI = 3.14;
PI = "pie"; // This throws an error!`,
    },
    {
      type: 'lesson',
      key: 'lesson-2',
      title: 'Data',
      text: `The basic forms of data (aka primitive data) are strings, numbers, and booleans:<br><br>

<b>string</b> → This is a word or sentence. Basically any series of characters from your keyboard (and more). They always are inside a ' or " or \` pair (single quote, double quote, or backtick).<br><br>
<b>number</b> → Any numbers. So like 1, or 200, or -50.<br><br>
<b>boolean</b> → This can be true or false.<br><br>
Also, <b>typeof</b> is a JS keyword that will tell you the type of something.<br><br> 
Try running the code!`,
      sampleCode: `// string
var word = 'banana';

console.log(word);
console.log(typeof word);

// number
var bigNumber = 1000;

console.log(bigNumber);
console.log(typeof bigNumber);

// boolean
var yes = true;
var no = false;

console.log(yes);
console.log(typeof yes);

console.log(no);
console.log(typeof no);

// Try running the code with CTRL+ENTER
// You'll see the output below in the Terminal`,
    },
    {
      type: 'lesson',
      key: 'lesson-3',
      title: 'Bringing It Together',
      text: `Lets take a look at this code, using variables, data, and console.log.<br><br>
Try clicking "Run" or CTRL+ENTER.<br><br>
Take a look at the terminal.<br><br>
Can you see how the code is writing to the terminal?<br><br>`,
      sampleCode: `// var - the original way, can be reassigned
var name = "Alice";
console.log(name); // "Alice"

// We can reassign it
name = "Bob";
console.log(name); // "Bob"

// let - block scoped, can be reassigned
let age = 25;
console.log(age);  // 25

// We can reassign it
age = 100;
console.log(age);  // 100

// const - cannot be reassigned
const PI = 3.14;
PI = "pie"; // This throws an error!
console.log(PI);   // This code does not run because of the error!

// Try running the code with CTRL+ENTER
// You'll see the output below in the Terminal`,
    },
    {
      type: 'test',
      key: 'varATests',
      title: `var "a"`,
      instructions: `Declare a variable "a" and set it to the number 1`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(a).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(a).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(a).toBeNumber();
          },
        },
        {
          description: `is 1`,
          test: () => {
            expect(a).toBe(1);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varBTests',
      title: `var "b"`,
      instructions: `Declare a variable "b" and set it to the number 2.2`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(b).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(b).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(b).toBeNumber();
          },
        },
        {
          description: `is 2.2`,
          test: () => {
            expect(b).toBe(2.2);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varCTests',
      title: `var "c"`,
      instructions: `Declare a variable "c" and set it to the number 5000`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(c).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(c).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(c).toBeNumber();
          },
        },
        {
          description: `is 5000`,
          test: () => {
            expect(c).toBe(5000);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varDTests',
      title: `var "d"`,
      instructions: `Declare a variable "d" and set it to the number 900000`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(d).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(d).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(d).toBeNumber();
          },
        },
        {
          description: `is 900000`,
          test: () => {
            expect(d).toBe(900000);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varETests',
      title: `var "e"`,
      instructions: `Declare a variable "e" and set it to the number 111222333444`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(e).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(e).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(e).toBeNumber();
          },
        },
        {
          description: `is 111222333444`,
          test: () => {
            expect(e).toBe(111222333444);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varIsHavingFunTests',
      title: `var "isHavingFun"`,
      instructions: `Declare a variable "isHavingFun" and set it to the boolean true`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(isHavingFun).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(isHavingFun).toHaveValue();
          },
        },
        {
          description: `is a boolean`,
          test: () => {
            expect(isHavingFun).toBeBoolean();
          },
        },
        {
          description: `is true`,
          test: () => {
            expect(isHavingFun).toBe(true);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varIsDifficultTests',
      title: `var "isDifficult"`,
      instructions: `Declare a variable "isDifficult" and set it to the boolean false`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(isDifficult).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(isDifficult).toHaveValue();
          },
        },
        {
          description: `is a boolean`,
          test: () => {
            expect(isDifficult).toBeBoolean();
          },
        },
        {
          description: `is false`,
          test: () => {
            expect(isDifficult).toBe(false);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varLetterATests',
      title: `var "letterA"`,
      instructions: `Declare a variable "letterA" and set it to the string "a"`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(letterA).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(letterA).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(letterA).toBeString();
          },
        },
        {
          description: `is "a"`,
          test: () => {
            expect(letterA).toBe('a');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varWordTests',
      title: `var "word"`,
      instructions: `Declare a variable "word" and set it to the string "banana"`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(word).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(word).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(word).toBeString();
          },
        },
        {
          description: `is "banana"`,
          test: () => {
            expect(word).toBe('banana');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varSentenceTests',
      title: `var "sentence"`,
      instructions: `Declare a variable "sentence" and set it to the string "I ate breakfast."`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(sentence).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(sentence).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(sentence).toBeString();
          },
        },
        {
          description: `is "I ate breakfast."`,
          test: () => {
            expect(sentence).toBe('I ate breakfast.');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'varParagraphTests',
      title: `var "paragraph"`,
      instructions: `Declare a variable "sentence" and set it to the string "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(paragraph).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(paragraph).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(paragraph).toBeString();
          },
        },
        {
          description: `is "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."`,
          test: () => {
            expect(paragraph).toBe(
              `The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.`,
            );
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
