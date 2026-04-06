const allTests = [
  {
    id: '0',
    title: 'Getting Started',
    help: 'https://www.w3schools.com/js',
    items: [
      { type: 'lesson', key: 'lesson-0',
        title: 'Z_Test',
        text: `Z_Test is a free and open source teaching tool for Javascript students.<br><br>
      
      The goal is to <b>LEARN</b>.<br><br>
      
      So if you get confused, or stuck, <b>go look it up!</b> Google! Forums! AI!<br><br>
      
      An important part of programming is being able to <b>figure things out</b>. So do whatever you need to do in order to figure it out, and make sure you learn something along the way.<br><br>
      
      <b>If you use AI to help, DO NOT COPY/PASTE</b>. Have it explain to you the topic, and then you write out the suggestion by hand to help you remember. <b>LEARNING</b> is the goal, not finishing.<br><br>

      Z_Test lessons are <b>SHORT</b>. For some they will be enough to understand a topic. But for others, you may need more! Go look up a tutorial, an article, etc...<br><br>

      Z_Test lessons are <b>aimed at beginners</b>. So a LOT of nuance and detail are skipped in favor of building out your understanding. This material is NOT comprehensive.<br><br>

      If you can complete Z_Test quickly and easily, you are no longer a beginner!
      `,
        sampleCode: ``,
      },
      { type: 'lesson', key: 'lesson-1',
        title: 'Z_Test Flow',
        text: `Z_Test is a series of sections, like this one.<br><br>

      There will be lesson blocks that explain something, and give you some code to tinker with.<br><br>

      There will be test blocks that give you a little challenge. There will be instructions, some tests to pass, and you need to write in the code section to pass the tests.<br><br>

      The instructions will help guide you towards the answer. But there will often be more than one working answer!<br><br>
      `,
        sampleCode: `// I'm a comment!
var sampleCode;`,
      },
      { type: 'test', key: 'firstTest',
        title: `Passing A Test`,
        instructions: `Write this exactly in the code area:<br><br>
      
      var x = "@";<br><br>
      
      Then press CTRL+ENTER.<br><br>
      
      If you passed the tests, you can press CTRL+SHIFT+ENTER to go to the next panel.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(x).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(x).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(x).toBeString();
          } },
          { description: `is @`, test: () => {
            expect(x).toBe('@');
          } }
        ],
      },
      { type: 'test', key: 'secondTest',
        title: `Failing A Test`,
        instructions: `Write this exactly in the code area:<br><br>
      
      var x;<br><br>
      
      Then press CTRL+ENTER<br><br>
      
      You'll see that only one test passed. You declared the variable but didn't give it a value.<br><br>
      
      Try completing it:<br><br>
      
      var x = "@";<br><br>
      
      Then press CTRL+SHIFT+ENTER`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(x).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(x).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(x).toBeString();
          } },
          { description: `is @`, test: () => {
            expect(x).toBe('@');
          } }
        ],
      },
      { type: 'test', key: 'thirdTest',
        title: `Errors`,
        instructions: `Try it without quotes:<br><br>
      
      var x = @;<br><br>
      
      Then press CTRL+ENTER<br><br>
      
      You'll see there's an error in the terminal. Red errors like this cause the code to stop running, and need to be fixed. 

      The @ symbol doesn't get processed by Javascript. Try adding quotes around it like this "@"<br><br>
      
      These errors are normal and part of Javascript. Z_Test gives you little tests that check whether your code is written in a certain way. But it requires you to have working code. If there is a red error, fix that first, then worry about the tests!<br><br>

      Errors can be cryptic, so do whatever you need to figure it out (google, ai, etc...). Many errors will get caught by the editor! So watch for squiggly lines and tooltips.<br><br>
      
      If you hover over them, often it'll explain how to fix it!<br><br>

      (Fix this one by putting quotes (") around the "@" character)
      `,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(x).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(x).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(x).toBeString();
          } },
          { description: `is @`, test: () => {
            expect(x).toBe('@');
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-consolelog',
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
      { type: 'test', key: 'consoleLogTest',
        title: `console.log`,
        instructions: `Use console.log three times to log the numbers 1, 2, and 3.<br><br>
      The editor already has some sample code for you, try pressing CTRL+ENTER<br><br>

      Now repeat this for the numbers 2 and 3.
      `,
        sampleCode: `console.log(1);`,
        tests: [
          { description: `console.log is called`, test: () => {
            expectConsole().toHaveLoggedAnything();
          } },
          { description: `1 is logged`, test: () => {
            expectConsole().toHaveLogged(1);
          } },
          { description: `2 is logged`, test: () => {
            expectConsole().toHaveLogged(2);
          } },
          { description: `3 is logged`, test: () => {
            expectConsole().toHaveLogged(3);
          } },
          { description: `console.log is called 3 times`, test: () => {
            expectConsole().toHaveLoggedXTimes(3);
          } }
        ],
      }
    ],
  },
  {
    id: '1',
    title: 'Variables',
    help: 'https://www.w3schools.com/js/js_variables.asp',
    items: [
      { type: 'lesson', key: 'lesson-1',
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
      { type: 'lesson', key: 'lesson-2',
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
      { type: 'lesson', key: 'lesson-3',
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
      { type: 'test', key: 'varATests',
        title: `var "a"`,
        instructions: `Declare a variable "a" and set it to the number 1`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(a).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(a).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(a).toBeNumber();
          } },
          { description: `is 1`, test: () => {
            expect(a).toBe(1);
          } }
        ],
      },
      { type: 'test', key: 'varBTests',
        title: `var "b"`,
        instructions: `Declare a variable "b" and set it to the number 2.2`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(b).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(b).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(b).toBeNumber();
          } },
          { description: `is 2.2`, test: () => {
            expect(b).toBe(2.2);
          } }
        ],
      },
      { type: 'test', key: 'varCTests',
        title: `var "c"`,
        instructions: `Declare a variable "c" and set it to the number 5000`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(c).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(c).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(c).toBeNumber();
          } },
          { description: `is 5000`, test: () => {
            expect(c).toBe(5000);
          } }
        ],
      },
      { type: 'test', key: 'varDTests',
        title: `var "d"`,
        instructions: `Declare a variable "d" and set it to the number 900000`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(d).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(d).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(d).toBeNumber();
          } },
          { description: `is 900000`, test: () => {
            expect(d).toBe(900000);
          } }
        ],
      },
      { type: 'test', key: 'varETests',
        title: `var "e"`,
        instructions: `Declare a variable "e" and set it to the number 111222333444`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(e).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(e).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(e).toBeNumber();
          } },
          { description: `is 111222333444`, test: () => {
            expect(e).toBe(111222333444);
          } }
        ],
      },
      { type: 'test', key: 'varIsHavingFunTests',
        title: `var "isHavingFun"`,
        instructions: `Declare a variable "isHavingFun" and set it to the boolean true`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(isHavingFun).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(isHavingFun).toHaveValue();
          } },
          { description: `is a boolean`, test: () => {
            expect(isHavingFun).toBeBoolean();
          } },
          { description: `is true`, test: () => {
            expect(isHavingFun).toBe(true);
          } }
        ],
      },
      { type: 'test', key: 'varIsDifficultTests',
        title: `var "isDifficult"`,
        instructions: `Declare a variable "isDifficult" and set it to the boolean false`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(isDifficult).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(isDifficult).toHaveValue();
          } },
          { description: `is a boolean`, test: () => {
            expect(isDifficult).toBeBoolean();
          } },
          { description: `is false`, test: () => {
            expect(isDifficult).toBe(false);
          } }
        ],
      },
      { type: 'test', key: 'varLetterATests',
        title: `var "letterA"`,
        instructions: `Declare a variable "letterA" and set it to the string "a"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(letterA).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(letterA).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(letterA).toBeString();
          } },
          { description: `is "a"`, test: () => {
            expect(letterA).toBe('a');
          } }
        ],
      },
      { type: 'test', key: 'varWordTests',
        title: `var "word"`,
        instructions: `Declare a variable "word" and set it to the string "banana"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(word).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(word).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(word).toBeString();
          } },
          { description: `is "banana"`, test: () => {
            expect(word).toBe('banana');
          } }
        ],
      },
      { type: 'test', key: 'varSentenceTests',
        title: `var "sentence"`,
        instructions: `Declare a variable "sentence" and set it to the string "I ate breakfast."`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(sentence).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(sentence).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(sentence).toBeString();
          } },
          { description: `is "I ate breakfast."`, test: () => {
            expect(sentence).toBe('I ate breakfast.');
          } }
        ],
      },
      { type: 'test', key: 'varParagraphTests',
        title: `var "paragraph"`,
        instructions: `Declare a variable "paragraph" and set it to the string "The code is like magic. I will learn how to use it!"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(paragraph).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(paragraph).toHaveValue();
          } },
          { description: `is a string`, test: () => {
            expect(paragraph).toBeString();
          } },
          { description: `is "The code is like magic. I will learn how to use it!"`, test: () => {
            expect(paragraph).toBe(
              `The code is like magic. I will learn how to use it!`,
            );
          } }
        ],
      }
    ],
  },
  {
    id: '2',
    title: 'Operators',
    help: 'https://www.w3schools.com/js/js_operators.asp',
    items: [
      { type: 'lesson', key: 'lesson-0',
        title: 'Operators',
        text: `An operator is a symbol that performs an operation on values.<br><br>

You already know one: the <b>=</b> sign, which assigns a value to a variable.<br><br>

The math operators are:<br><br>

<b>+</b> → addition<br>
<b>-</b> → subtraction<br>
<b>*</b> → multiplication<br>
<b>/</b> → division<br>
<b>%</b> → modulus (the remainder after division)<br>
<b>**</b> → exponent (to the power of)<br><br>

Try running the code!`,
        sampleCode: `console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1 (remainder of 10 / 3)
console.log(2 ** 8);  // 256 (2 to the power of 8)`,
      },
      { type: 'lesson', key: 'lesson-1',
        title: 'Operators with Variables',
        text: `Operators work just as well with variables as they do with plain numbers.<br><br>

The result of an operation can also be stored in a new variable.<br><br>

Try running the code and see if the output matches what you'd expect!`,
        sampleCode: `var a = 100;
var b = 25;

var sum = a + b;
var difference = a - b;
var product = a * b;
var quotient = a / b;

console.log(sum);        // 125
console.log(difference); // 75
console.log(product);    // 2500
console.log(quotient);   // 4`,
      },
      { type: 'test', key: 'plusTests',
        title: `var "g" +`,
        instructions: `Declare a variable "g" and it should be the number equal to 654321 plus 123456`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(g).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(g).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(g).toBeNumber();
          } },
          { description: `uses the + operator`, test: () => {
            expectCode().toUseOperator('+');
          } },
          { description: `is 654321 + 123456`, test: () => {
            expect(g).toBe(654321 + 123456);
          } }
        ],
      },
      { type: 'test', key: 'minusTests',
        title: `var "h" -`,
        instructions: `Declare a variable "h" and it should be the number equal to 654321 minus 123456`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(h).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(h).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(h).toBeNumber();
          } },
          { description: `uses the - operator`, test: () => {
            expectCode().toUseOperator('-');
          } },
          { description: `is 654321 - 123456`, test: () => {
            expect(h).toBe(654321 - 123456);
          } }
        ],
      },
      { type: 'test', key: 'multiplyTests',
        title: `var "i" *`,
        instructions: `Declare a variable "i" and it should be the number equal to 654321 times 123456`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(i).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(i).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(i).toBeNumber();
          } },
          { description: `uses the * operator`, test: () => {
            expectCode().toUseOperator('*');
          } },
          { description: `is 654321 * 123456`, test: () => {
            expect(i).toBe(654321 * 123456);
          } }
        ],
      },
      { type: 'test', key: 'divideTests',
        title: `var "j" /`,
        instructions: `Declare a variable "j" and it should be the number equal to 654321 divided by 123456`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(j).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(j).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(j).toBeNumber();
          } },
          { description: `uses the / operator`, test: () => {
            expectCode().toUseOperator('/');
          } },
          { description: `is 654321 / 123456`, test: () => {
            expect(j).toBe(654321 / 123456);
          } }
        ],
      },
      { type: 'test', key: 'modulusTests',
        title: `var "k" %`,
        instructions: `Declare a variable "k" and it should be the number equal to 654321 modulus 123456`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(k).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(k).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(k).toBeNumber();
          } },
          { description: `uses the % operator`, test: () => {
            expectCode().toUseOperator('%');
          } },
          { description: `is 654321 % 123456`, test: () => {
            expect(k).toBe(654321 % 123456);
          } }
        ],
      },
      { type: 'test', key: 'exponentTests',
        title: `var "l" **`,
        instructions: `Declare a variable "l" and it should be the number equal to 2 to the 20th power`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(l).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(l).toHaveValue();
          } },
          { description: `is a number`, test: () => {
            expect(l).toBeNumber();
          } },
          { description: `uses the ** operator`, test: () => {
            expectCode().toUseOperator('**');
          } },
          { description: `is 2 ** 20`, test: () => {
            expect(l).toBe(2 ** 20);
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-3',
        title: 'String Concatenation',
        text: `So there operators are all for math, BUT they also have some other uses.<br><br>
      
      The most common one would be the "+" operator, which ALSO lets you put strings together.<br><br>
      
      Try running the code on the right, take a look at the output.<br><br>
      
      Also notice there is a space being added.<br><br>
      
      (This works with strings but ONLY STRINGS... if you try using "+" with other data types it'll have an unexpected result...)`,
        sampleCode: `var name1 = "Hudson";
var name2 = "Carter";
console.log(name1 + " " + name2);
console.log(name2 + " " + name1);`,
      },
      { type: 'test', key: 'concatenationTest',
        title: `String Concatenation`,
        instructions: `There are two variables already declared. Please use "+" to put them together into variable c as "campfire".`,
        sampleCode: `var a = "camp";
var b = "fire";`,
        tests: [
          { description: `a is "camp"`, test: () => {
            expect(a).toBe('camp');
          } },
          { description: `b is "fire"`, test: () => {
            expect(b).toBe('fire');
          } },
          { description: `c is declared`, test: () => {
            expect(c).toBeDeclared();
          } },
          { description: `code uses +`, test: () => {
            expectCode().toContain('+');
          } },
          { description: `c is campfire`, test: () => {
            expect(c).toBe('campfire');
          } }
        ],
      }
    ],
  },
  {
    id: '3',
    title: 'Functions',
    help: 'https://www.w3schools.com/js/js_function_intro.asp',
    items: [
      { type: 'lesson', key: 'lesson-0',
        title: 'Functions',
        text: `A function is a reusable block of code that you can run whenever you need it.<br><br>

You define a function with the <b>function</b> keyword, give it a name, some parentheses, and put the code inside curly braces <b>{ }</b>.<br><br>

To run the function, you <b>call</b> it by writing its name followed by <b>parenthesis ( )</b>. i.e. doSomething()<br><br>

Try running the code, notice how the function only runs when called!<br><br>

(There are other ways to make functions, we'll talk about those later, i.e. arrow functions and function expressions)`,
        sampleCode: `function sayHello() {
  console.log("Hello!");
}

// The function is defined but hasn't run yet.
// Call it like this:
sayHello();
sayHello();
sayHello();`,
      },
      { type: 'lesson', key: 'lesson-1',
        title: 'The Return Keyword',
        text: `Functions can also <b>return</b> a value back to wherever they were called.<br><br>

The <b>return</b> keyword sends a value out of the function. When you return something, the function stops.<br><br>

If your function has a return, you can use it as a value, like 5 or "apple" (depending on what it returns!).<br><br>

Try running the code and see how the returned value is captured!`,
        sampleCode: `function numberFive() {
  return 5;
}

// The returned value can be stored in a variable
var result1 = numberFive();
console.log(result1); // 10

// The returned value can be stored in a variable
var result2 = numberFive() + numberFive();
console.log(result2); // 10

// Or used directly
console.log(numberFive() * numberFive()); // 25`,
      },
      { type: 'test', key: 'returnNumberTests',
        title: `function "returnNumber"`,
        instructions: `Make a function named "returnNumber" that returns a number (any number).`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(returnNumber).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(returnNumber).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(returnNumber).toBeFunction();
          } },
          { description: `returns a number`, test: () => {
            expect(returnNumber).toReturnNumber();
          } }
        ],
      },
      { type: 'test', key: 'returnStringTests',
        title: `function "returnString"`,
        instructions: `Make a function named "returnString" that returns a string (any string).`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(returnString).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(returnString).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(returnString).toBeFunction();
          } },
          { description: `returns a string`, test: () => {
            expect(returnString).toReturnString();
          } }
        ],
      },
      { type: 'test', key: 'returnTrueTests',
        title: `function "returnTrue"`,
        instructions: `Make a function named "returnTrue" that returns the boolean true.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(returnTrue).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(returnTrue).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(returnTrue).toBeFunction();
          } },
          { description: `returns a boolean`, test: () => {
            expect(returnTrue).toReturnBoolean();
          } },
          { description: `returns correct value true`, test: () => {
            expect(returnTrue).toReturn(true);
          } }
        ],
      },
      { type: 'test', key: 'returnFalseTests',
        title: `function "returnFalse"`,
        instructions: `Make a function named "returnFalse" that returns the boolean false.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(returnFalse).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(returnFalse).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(returnFalse).toBeFunction();
          } },
          { description: `returns a boolean`, test: () => {
            expect(returnFalse).toReturnBoolean();
          } },
          { description: `returns correct value false`, test: () => {
            expect(returnFalse).toReturn(false);
          } }
        ],
      }
    ],
  },
  {
    id: '4',
    title: 'Function Parameters',
    help: 'https://www.w3schools.com/js/js_function_parameters.asp',
    items: [
      { type: 'lesson', key: 'lesson-2',
        title: 'Parameters',
        text: `Functions more useful when you can have them do extra work for you.<br><br>

<b>Parameters</b> are variables inside the <b>( )</b> when you declare it.<br>→ <b>function hello( parameter ){ }</b><br><br>

When you <b>call</b> a function you can pass in <b>arguments</b>.<br>→ <b>hello( "bob" )</b> <br><br>

So in the code, when you have "bob" as an argument, it will show up as <b>parameter</b> in the function declaration. The code will run as if <b>parameter</b> was "bob".<br><br>



<b>console.log()</b> is a function! You've been using a function this whole time!<br><br>

Try running the code and change the arguments and see how the output changes!`,
        sampleCode: `function hello(name) {
  console.log("Hello, " + name + "!");
}

hello("Alice"); // Hello, Alice!
hello("Bob");   // Hello, Bob!

// Functions can have multiple parameters
function logBoth(word1, word2) {
  console.log(word1);
  console.log(word2);
}

// Try changing these arguments (look, up, oh, my)
logBoth("look", "up");
logBoth("oh", "my");`,
      },
      { type: 'lesson', key: 'lesson-2b',
        title: 'Naming Parameters',
        text: `Parameter names only exist inside the function. You name them like normal variables.<br><br>

For now, use parameters like "a" or "b" or "x". This is OK when you are first learning programming. There are better practices, we'll learn about those later.<br><br>
      
Try running the code!`,
        sampleCode: `// "x" works but tells you nothing
function double(x) {
  return x * 2;
}

// "number" is much clearer
function doubleNumber(number) {
  return number * 2;
}

// The argument name doesn't need to match the parameter name
var myScore = 50;
var result = doubleNumber(myScore);
console.log(result); // 100`,
      },
      { type: 'lesson', key: 'lesson-3',
        title: 'Parameters + Return',
        text: `Now lets use both. This is a very common pattern in programming!<br><br>

A function takes in data via <b>parameters</b>, does something with it, and sends a result back with <b>return</b>.<br><br>

Think of it like a machine: you put something in, it does work, and something comes out the other side.<br><br>

Try running the code, then try changing the arguments!`,
        sampleCode: `function double(number) {
  return number * 2;
}

console.log(double(5)); // 10
console.log(double(100)); // 200`,
      },
      { type: 'test', key: 'doubleTests',
        title: `function "double"`,
        instructions: `Make a function named "double" that takes one argument, a number. It should return double the number.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(double).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(double).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(double).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(double).takesXArguments(1);
          } },
          { description: `returns something`, test: () => {
            expect(double).withArgs(1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(double).withArgs(1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(double).withArgs(2).toReturn(4);
            expect(double).withArgs(-2).toReturn(-4);
            expect(double).withArgs(444).toReturn(888);
          } }
        ],
      },
      { type: 'test', key: 'addTests',
        title: `function "add"`,
        instructions: `Make a function named "add" that takes two arguments, both numbers. It should return the sum of those numbers.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(add).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(add).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(add).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(add).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(add).withArgs(1, 1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(add).withArgs(1, 1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(add).withArgs(1, 1).toReturn(2);
            expect(add).withArgs(-1, 1).toReturn(0);
            expect(add).withArgs(1000, 234).toReturn(1234);
          } }
        ],
      },
      { type: 'test', key: 'subtractTests',
        title: `function "subtract"`,
        instructions: `Make a function named "subtract" that takes two arguments, both numbers. It should return the first number minus the second.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(subtract).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(subtract).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(subtract).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(subtract).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(subtract).withArgs(1, 1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(subtract).withArgs(1, 1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(subtract).withArgs(1, 1).toReturn(0);
            expect(subtract).withArgs(-1, 1).toReturn(-2);
            expect(subtract).withArgs(1000, 234).toReturn(766);
          } }
        ],
      },
      { type: 'test', key: 'multiplyTests',
        title: `function "multiply"`,
        instructions: `Make a function named "multiply" that takes two arguments, both numbers. It should return the numbers multiplied together.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(multiply).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(multiply).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(multiply).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(multiply).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(multiply).withArgs(1, 1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(multiply).withArgs(1, 1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(multiply).withArgs(2, 3).toReturn(6);
            expect(multiply).withArgs(-2, 3).toReturn(-6);
            expect(multiply).withArgs(1000, 234).toReturn(234000);
            expect(multiply).withArgs(1, 0).toReturn(0);
            expect(multiply).withArgs(0, 0).toReturn(0);
            expect(multiply).withArgs(-2, -3).toReturn(6);
          } }
        ],
      },
      { type: 'test', key: 'divideTests',
        title: `function "divide"`,
        instructions: `Make a function named "divide" that takes two arguments, both numbers. It should return the first number divided by the second.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(divide).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(divide).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(divide).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(divide).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(divide).withArgs(1, 1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(divide).withArgs(1, 1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(divide).withArgs(1, 1).toReturn(1);
            expect(divide).withArgs(10, 20).toReturn(0.5);
            expect(divide).withArgs(100, 0).toReturn(Infinity);
            expect(divide).withArgs(-4, 2).toReturn(-2);
            expect(divide).withArgs(150, -1).toReturn(-150);
            expect(divide).withArgs(4, 3).toReturn(1.3333333333333333);
          } }
        ],
      },
      { type: 'test', key: 'exponentTests',
        title: `function "exponent"`,
        instructions: `Make a function named "exponent" that takes two arguments, both numbers. It should return the first number to the power of the second.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(exponent).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(exponent).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(exponent).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(exponent).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(exponent).withArgs(1, 1).toReturnSomething();
          } },
          { description: `returns a number`, test: () => {
            expect(exponent).withArgs(1, 1).toReturnNumber();
          } },
          { description: `returns correct values`, test: () => {
            expect(exponent).withArgs(4, 3).toReturn(64);
            expect(exponent).withArgs(5, 5).toReturn(3125);
            expect(exponent).withArgs(100, 0).toReturn(1);
            expect(exponent).withArgs(-4, 2).toReturn(16);
            expect(exponent).withArgs(3, -2).toReturn(0.1111111111111111);
            expect(exponent).withArgs(0, 0).toReturn(1);
          } }
        ],
      }
    ],
  },
  {
    id: '5',
    title: 'Logic',
    help: 'https://www.w3schools.com/js/js_conditionals.asp',
    items: [
      { type: 'lesson', key: 'lesson-0',
        title: 'If Statements',
        text: `An <b>if statement</b> runs a block of code only when a condition is true.<br><br>

The condition goes inside the <b>( )</b>. If it's true, the code inside <b>{ }</b> runs. If not, it's skipped.<br><br>

Try running the code and changing true to false!`,
        sampleCode: `if (true) {
  console.log("You passed!");
}`,
      },
      { type: 'test', key: 'writeAnIfStatement',
        title: `Write an if statement`,
        instructions: `Write an if statement with <b>true</b> as the condition. Inside, use console.log() to print "banana".`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `uses if (true)`, test: () => {
            expectCode().toUseIfTrue();
          } },
          { description: `console.log something`, test: () => {
            expectConsole().toHaveLoggedAnything();
          } }
        ],
      },
      { type: 'test', key: 'writeAnIfStatementFalse',
        title: `Write an if statement (false)`,
        instructions: `Write an if statement with <b>false</b> as the condition. Inside, use console.log() to print anything you like. Notice that it doesn't run!`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `uses if (false)`, test: () => {
            expectCode().toUseIfFalse();
          } },
          { description: `console.log nothing`, test: () => {
            expectConsole().notToHaveLogged();
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-0a',
        title: 'Else Statements',
        text: `You can add an <b>else</b> block after an <b>if</b> block to run code when the prior conditions are NOT met.<br><br>

Try running the code and changing true to false!`,
        sampleCode: `if (true) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}`,
      },
      { type: 'test', key: 'ifTrueWithElse',
        title: `if (true) with else`,
        instructions: `Write an if statement with <b>true</b> as the condition, and an <b>else</b> block. Put a console.log() inside the if block.`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `uses if (true)`, test: () => {
            expectCode().toUseIfTrue();
          } },
          { description: `uses an else block`, test: () => {
            expectCode().toContain('else');
          } },
          { description: `logs something`, test: () => {
            expectConsole().toHaveLoggedAnything();
          } }
        ],
      },
      { type: 'test', key: 'ifFalseWithElse',
        title: `if (false) with else`,
        instructions: `Write an if statement with <b>false</b> as the condition, and an <b>else</b> block. Put a console.log() inside the false block only.`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `uses if (false)`, test: () => {
            expectCode().toUseIfFalse();
          } },
          { description: `uses an else block`, test: () => {
            expectCode().toContain('else');
          } },
          { description: `logs something`, test: () => {
            expectConsole().toHaveLoggedAnything();
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-0b',
        title: 'Else If Statements',
        text: `You can combine the two to create an <b>"Else If( ){ }"</b> statement.<br><br>

Just keep in mind:<br><br>

<ul>
<li>The first one is always just "if".</li>
<li>The later ones are "Else If".</li>
<li>If you want to catch all other possibilities, then put an "else" statement at the end.</li>
</ul><br>

When you write these, you'll have to think about what kinds of values you'll see, and what you want the outcome to be.<br><br>

Try running the code!`,
        sampleCode: `
var a = 101;

// This one is check first
if (a > 1000) {
  // This won't fire, b/c a is NOT greater than 1000
  console.log("Huge Number");
} else if (a > 100){
  // This one WILL fire
  console.log("Big Number");
} else {
  // b/c the prior one fired, this one won't.
  console.log("Small Number");
}`,
      },
      { type: 'lesson', key: 'lesson-0c',
        title: 'The ! Operator',
        text: `The <b>!</b> operator means <b>not</b>. It flips a truthy value to false, and a falsy value to true.<br><br>

It goes right before the value or condition you want to flip.<br><br>

You'll use <b>!</b> a lot when writing if statements as it lets you check for the opposite of something.<br><br>

Try running the code!`,
        sampleCode: `console.log("true and not true");
console.log(true);  // true
console.log(!true);  // false
console.log("false and not false");
console.log(false); // false
console.log(!false); // true

var isRaining = false;

if (!isRaining) {
  console.log("Go outside!");
} else {
  console.log("Stay inside.");
}`,
      },
      { type: 'test', key: 'isThisValueTrue',
        title: `function isThisValueTrue`,
        instructions: `Make a function named "isThisValueTrue" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise. Use an if statement.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(isThisValueTrue).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(isThisValueTrue).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(isThisValueTrue).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(isThisValueTrue).takesXArguments(1);
          } },
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `returns a boolean`, test: () => {
            expect(isThisValueTrue).withArgs().toReturnBoolean();
          } },
          { description: `returns correct values`, test: () => {
            expect(isThisValueTrue).withArgs(true).toReturn(true);
            expect(isThisValueTrue).withArgs(false).toReturn(false);
            expect(isThisValueTrue).withArgs().toReturn(false);
          } }
        ],
      },
      { type: 'test', key: 'makeNumberNegative',
        title: `function makeNumberNegative`,
        instructions: `Make a function named "makeNumberNegative" that takes one argument, a number. If it's negative, just return it. If it's positive, return it as a negative number.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(makeNumberNegative).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(makeNumberNegative).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(makeNumberNegative).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(makeNumberNegative).takesXArguments(1);
          } },
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `returns a number`, test: () => {
            expect(makeNumberNegative).withArgs(1).toReturnNumber();
          } },
          { description: `returns negative number when given positive number`, test: () => {
            expect(makeNumberNegative).withArgs(1).toReturn(-1);
          } },
          { description: `returns negative number when given negative number`, test: () => {
            expect(makeNumberNegative).withArgs(-1).toReturn(-1);
          } }
        ],
      },
      { type: 'test', key: 'doYouWantCake',
        title: `function doYouWantCake`,
        instructions: `Make a function named "doYouWantCake" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(doYouWantCake).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(doYouWantCake).toHaveValue();
          } },
          { description: `is a function`, test: () => {
            expect(doYouWantCake).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(doYouWantCake).takesXArguments(1);
          } },
          { description: `returns a string`, test: () => {
            expect(doYouWantCake).withArgs().toReturnString();
          } },
          { description: `uses an if statement`, test: () => {
            expectCode().toUseIfStatement();
          } },
          { description: `returns correct values`, test: () => {
            expect(doYouWantCake).withArgs(true).toReturn('yes');
            expect(doYouWantCake).withArgs(false).toReturn('no');
            expect(doYouWantCake).withArgs().toReturn('no');
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-1',
        title: 'What is True?',
        text: `In JavaScript lots of values are considered <b>true</b>. Almost all, in fact.<br><br>

This is called being <b>truthy</b>. If a value is truthy, an <b>if</b> statement will run its block.<br><br>

It's actually easiest to learn which values are <b>falsy</b> rather than all the true values (see next lesson).<br><br>

Try running the code!`,
        sampleCode: `// All of these are truthy
if (1) {
  console.log("1 is truthy");
}
if (true) {
  console.log("true is truthy");
}
if ("a") {
  console.log("characters are truthy");
}
if ("hello") {
  console.log("words are truthy");
}
if ("hi there") {
  console.log("sentences are truthy");
}`,
      },
      { type: 'lesson', key: 'lesson-2',
        title: 'What is False?',
        text: `There are only a handful of <b>falsy</b> values.<br><br>

Just try to keep these in mind when you code your own projects! There's only 6 to remember!<br><br>

<ul>
<li><b>false</b> is "false", a boolean</li>
<li><b>0</b> the number zero</li>
<li><b>null</b> keyword "null"</li>
<li><b>""</b> an empty string (not even a space!)</li>
<li><b>undefined</b> is a keyword</li>
<li><b>NaN</b> is a keyword (stands for <b>Not a Number</b>)</li>
</ul><br><br>

(There's actually 9, but the last 3 are rare, go look them up if you want!)

Everything else is truthy. When in doubt, assume it's true!`,
        sampleCode: `// All of these are falsy
if (!false) {
  console.log("false is falsy");
}
if (!0) {
  console.log("0 is falsy");
}
if (!"") {
  console.log("an empty string is falsy");
}
if (!null) {
  console.log("null is falsy");
}
if (!undefined) {
  console.log("undefined is falsy");
}
if (!NaN) {
  console.log("NaN is falsy");
}`,
      },
      { type: 'lesson', key: 'lesson-9',
        title: 'null, undefined, and NaN',
        text: `These are different kinds of falsy values:<br><br>

<b>null</b> means "intentionally empty". If something is null, it's empty on purpose (usually).<br><br>

<b>undefined</b> means "this hasn't been given a value yet". So like null, but unintentional (usually). You'll get it if you try to access a variable that hasn't been assigned or doesn't exist!<br><br>

<b>NaN</b> stands for "Not a Number". When you accidentally  do math to something that isn't a number. This one is almost always an unintentional error.<br><br>

Try running the code!`,
        sampleCode: `// null - intentionally empty
var winner = null;
console.log(winner); // null

// undefined - notice that there's no value assigned, no "="
var score;
console.log(score); // undefined

// A function with no return gives undefined
function doNothing() {}
console.log(doNothing()); // undefined

// NaN - a bad math operation
var result = "hello" * 5;
console.log(result);         // NaN`,
      },
      { type: 'test', key: 'nullUndefinedNaNTest',
        title: `null, undefined, and NaN`,
        instructions: `Declare three variables:<br><br>
      <b>a</b> set to <b>null</b><br>
      <b>b</b> with no value assigned (undefined)<br>
      <b>c</b> set to <b>"hello" * 5</b> (NaN)<br><br>
      Then console.log all three.`,
        sampleCode: `var a;
var b;
var c;

console.log(a);
console.log(b);
console.log(c);`,
        tests: [
          { description: `a is null`, test: () => {
            expect(a).toBe(null);
          } },
          { description: `b is undefined`, test: () => {
            expect(b).toBe(undefined);
          } },
          { description: `c is NaN`, test: () => {
            expect(c).toBe(NaN);
          } },
          { description: `logs null`, test: () => {
            expectConsole().toHaveLogged(null);
          } },
          { description: `logs undefined`, test: () => {
            expectConsole().toHaveLogged(undefined);
          } },
          { description: `logs NaN`, test: () => {
            expectConsole().toHaveLogged(NaN);
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-6',
        title: 'Comparison Operators',
        text: `You may remember (some of) these from math class:<br><br>

      <ul>
     <li><b>></b> greater than</li>
     <li><b><</b> less than</li>
     <li><b>>=</b> greater than or equal</li>
     <li><b><=</b> less than or equal</li>
     <br>
     <li><b>!=</b> not equal</li>
     <li><b>==</b> is equal (be careful with this one! it looks like assignment but is actually comparison!)</li>

      </ul><br>

These can be used in logical operations like so:<br><br>

<ul><b>if( 5 > 3 ){ console.log("five is greater than three") }</b></ul><br>

But to most, this would seem pretty obvious. No reason to use fancy code here right?<br><br>

These statements really shine through when you use variables. Especially when those values change. <br><br>

Check out the code on the right, try running it!`,
        sampleCode: `function whichIsGreater(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else if (a < b) {
    console.log("a is less than b");
  } else if (a == b) {
    console.log("a is equal to b");
  }
}
  
whichIsGreater(2, 1);
whichIsGreater(1, 2);
whichIsGreater(2, 2);
`,
      },
      { type: 'lesson', key: 'lesson-7',
        title: 'Focusing on == and !=',
        text: `<b>== and !=</b> can be used with other values, like strings and booleans.<br><br>

      It can be used with arrays and objects, but the behavior is NOT what you would expect. The details go a little beyond the scope of Z_Test (they are nuanced and unintuitive, and not always useful).<br><br>
      
      <i>(Basically you should treat arrays and objects like they are always unique and different. There ARE ways to compare them, but it's more complicated than just "obj == otherObj".</i><br><br>

Check out the code on the right, try running it!`,
        sampleCode: `function areTheyTheSame(a,b){
  console.log(a, " is ", typeof a);
  console.log(b, " is ", typeof b);
  if(a == b){
      console.log("a and b are the same!");
  }else {
      console.log("a and b are NOT the same!");
  }      
}

areTheyTheSame(55, 55);
areTheyTheSame(1, 100);
`,
      },
      { type: 'lesson', key: 'lesson-8a',
        title: '== Equality (loose)',
        text: `Ok now, here's a confusing part:<br><br>

      =, ==, and === are all operators in JS. BUT they do different things. Here's my way of remembering it:<br><br>

      = "is"<br>
      == "is equal"<br>
      === "is exactly equal"<br><br>

      So when you see <b>var x = 5</b>... that reads as <b>"variable x IS 5"</b>.<br><br>

      When you see <b>if (x == 5) {}</b>... that reads as <b>"if x IS EQUAL to 5"</b>.<br><br>

      <b>==</b> only checks the value, not the type. So it thinks the number 5 and the string "5" are the same.<br><br>

Check out the code on the right, try running it!`,
        sampleCode: `function areTheyExactlyTheSame(a,b){
  console.log(a, " is ", typeof a);
  console.log(b, " is ", typeof b);
  if(a == b){
      console.log("a and b are the same!");
  }else {
      console.log("a and b are NOT the same!");
  }      
}

areTheyExactlyTheSame(55, 55);
areTheyExactlyTheSame(55, "55");`,
      },
      { type: 'lesson', key: 'lesson-8b',
        title: '=== Equality (strict)',
        text: `<b>===</b> is the strict version of <b>==</b>. It checks both the <b>value AND the type</b>.<br><br>

      So <b>if (x === 5) {}</b> reads as <b>"if x IS EXACTLY EQUAL to 5"</b>. This would fail if x is the <b>string "5"</b>, because even though the value looks the same, the types are different.<br><br>

      <b>My general recommendation is to use ===</b> as it's more predictable and avoids subtle bugs.<br><br>

Check out the code on the right, try running it!`,
        sampleCode: `function areTheyExactlyTheSame(a, b) {
  if (a === b) {
    console.log("a and b are exactly the same!");
  } else {
    console.log("a and b are NOT exactly the same!");
  }
}

areTheyExactlyTheSame(55, 55);    // exactly the same
areTheyExactlyTheSame(55, "55");  // NOT exactly the same, they are different types!`,
      },
      { type: 'test', key: 'equalityOperatorsTest',
        title: `== and ===`,
        instructions: `Declare a variable <b>a</b> set to the number <b>5</b> and a variable <b>b</b> set to the string <b>"5"</b>.<br><br>
      Using an if statement with <b>==</b>, console.log <b>"loosely equal"</b> if they are loosely equal.<br><br>
      Using an if statement with <b>===</b>, console.log <b>"strictly equal"</b> if they are strictly equal.<br><br>
      Only the first should a number and a string are never strictly equal.`,
        sampleCode: `var a = 5;
var b = "5";

// fix the #### using the equality operator
if (a #### b) {
  console.log("loosely equal");
} 

// fix the #### using the equality operator
if (a #### b) {
  console.log("strictly equal");
}`,
        tests: [
          { description: `a is 5 (number)`, test: () => {
            expect(a).toBe(5);
          } },
          { description: `b is "5" (string)`, test: () => {
            expect(b).toBe('5');
          } },
          { description: `uses ==`, test: () => {
            expectCode().toUseOperator('==');
          } },
          { description: `uses ===`, test: () => {
            expectCode().toUseOperator('===');
          } },
          { description: `logs "loosely equal"`, test: () => {
            expectConsole().toHaveLogged('loosely equal');
          } },
          { description: `does not log "strictly equal"`, test: () => {
            expectConsole().toHaveLoggedXTimes(1);
          } }
        ],
      }
    ],
  },
  {
    id: '6',
    title: 'Objects',
    help: 'https://www.w3schools.com/js/js_objects.asp',
    items: [
      { type: 'lesson', key: 'lesson-what-is-object',
        title: 'What is an Object?',
        text: `An object is a collection of related data, grouped together under one variable.<br><br>

Instead of making separate variables for a person's first name, last name, and age, you can put them all in one object.<br><br>

Objects are declared with curly braces <b>{ }</b>. Inside, you write <b>key: value</b> pairs separated by commas. The key is the name, the value is the data. Example:<br><br>

var obj = { key: value };<br><br>

Keys are always strings (quotes optional, but usually no quotes).<br><br>

Values can be any type: strings, numbers, booleans, arrays, even other objects.<br><br>

Try running the code and look at the output!`,
        sampleCode: `var emptyObject = {};

console.log(emptyObject);      

var person = {
  firstName: "Amy",
  lastName: "Miller",
  age: 30,
  isTeacher: true
};

console.log(person);`,
      },
      { type: 'lesson', key: 'lesson-properties',
        title: 'Properties',
        text: `Each key-value pair in an object is called a <b>property</b>.<br><br>

The <b>key</b> is the property name. The <b>value</b> is what it holds.<br><br>

In this example:<br><br>

<b>make</b> is a key, <b>"Toyota"</b> is its value.<br>
<b>model</b> is a key, <b>"Corolla"</b> is its value.<br>
<b>year</b> is a key, <b>2020</b> is its value.<br>
<b>electric</b> is a key, <b>false</b> is its value.<br><br>

Properties can hold any type of value including arrays and other objects!<br><br>

Try adding a new property (key AND value).`,
        sampleCode: `var car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  electric: false
};

console.log(car);`,
      },
      { type: 'test', key: 'personObject',
        title: `var "person"`,
        instructions: `Declare a variable named "person", an object. Read tests closely for keys and values.`,
        sampleCode: `var person = {

};`,
        tests: [
          { description: `is declared`, test: () => {
            expect(person).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(person).toHaveValue();
          } },
          { description: `is an object`, test: () => {
            expect(person).toBeObject();
          } },
          { description: `has 4 keys`, test: () => {
            expect(person).toHaveObjectKeyCount(4);
          } },
          { description: `has key "firstName"`, test: () => {
            expect(person).toHaveKey('firstName');
          } },
          { description: `has key/value pair of "firstName" and "Bethany"`, test: () => {
            expect(person).toHaveKeyValuePair('firstName', 'Bethany');
          } },
          { description: `has key "lastName"`, test: () => {
            expect(person).toHaveKey('lastName');
          } },
          { description: `has key/value pair of "lastName" and "Wagner"`, test: () => {
            expect(person).toHaveKeyValuePair('lastName', 'Wagner');
          } },
          { description: `has key "isTeacher"`, test: () => {
            expect(person).toHaveKey('isTeacher');
          } },
          { description: `has key/value pair of "isTeacher" and true`, test: () => {
            expect(person).toHaveKeyValuePair('isTeacher', true);
          } },
          { description: `has key "students"`, test: () => {
            expect(person).toHaveKey('students');
          } },
          { description: `has key/value pair of "students" and 100`, test: () => {
            expect(person).toHaveKeyValuePair('students', 100);
          } },
          { description: `is correct value`, test: () => {
            expect(person).toBe({
              firstName: 'Bethany',
              lastName: 'Wagner',
              isTeacher: true,
              students: 100,
            });
          } }
        ],
      },
      { type: 'test', key: 'jsClassroomObject',
        title: `var "jsClassroom"`,
        instructions: `Declare a variable named "jsClassroom" an object. Read tests closely for keys and values`,
        sampleCode: `var jsClassroom = {

};`,
        tests: [
          { description: `is declared`, test: () => {
            expect(jsClassroom).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(jsClassroom).toHaveValue();
          } },
          { description: `is an object`, test: () => {
            expect(jsClassroom).toBeObject();
          } },
          { description: `has 2 keys`, test: () => {
            expect(jsClassroom).toHaveObjectKeyCount(2);
          } },
          { description: `has key "class"`, test: () => {
            expect(jsClassroom).toHaveKey('class');
          } },
          { description: `has key/value pair of "class" and "javascript"`, test: () => {
            expect(jsClassroom).toHaveKeyValuePair('class', 'javascript');
          } },
          { description: `has key "grades"`, test: () => {
            expect(jsClassroom).toHaveKey('grades');
          } },
          { description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`, test: () => {
            expect(jsClassroom.grades).toBe([
              85, 94, 82, 79, 77, 88, 96, 95, 57, 100,
            ]);
          } },
          { description: `is correct value`, test: () => {
            expect(jsClassroom).toBe({
              class: 'javascript',
              grades: [85, 94, 82, 79, 77, 88, 96, 95, 57, 100],
            });
          } }
        ],
      },
      { type: 'test', key: 'shoppingCartObject',
        title: `var "shoppingCart"`,
        instructions: `Declare a variable named "shoppingCart", an object. Read tests closely for keys and values`,
        sampleCode: `var shoppingCart = {

};`,
        tests: [
          { description: `is declared`, test: () => {
            expect(shoppingCart).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(shoppingCart).toHaveValue();
          } },
          { description: `is an object`, test: () => {
            expect(shoppingCart).toBeObject();
          } },
          { description: `has 3 keys`, test: () => {
            expect(shoppingCart).toHaveObjectKeyCount(3);
          } },
          { description: `has key "total"`, test: () => {
            expect(shoppingCart).toHaveKey('total');
          } },
          { description: `key "total" is a number`, test: () => {
            expect(shoppingCart.total).toBeNumber();
          } },
          { description: `has key/value pair of "total" and 5`, test: () => {
            expect(shoppingCart).toHaveKeyValuePair('total', 5);
          } },
          { description: `has key "onlinePurchase"`, test: () => {
            expect(shoppingCart).toHaveKey('onlinePurchase');
          } },
          { description: `key "onlinePurchase" is a boolean`, test: () => {
            expect(shoppingCart.onlinePurchase).toBeBoolean();
          } },
          { description: `has key/value pair of "onlinePurchase" and true`, test: () => {
            expect(shoppingCart).toHaveKeyValuePair('onlinePurchase', true);
          } },
          { description: `has key "items"`, test: () => {
            expect(shoppingCart).toHaveKey('items');
          } },
          { description: `key "items" is an array`, test: () => {
            expect(shoppingCart.items).toBeArray();
          } },
          { description: `key "items" is an array of length 3`, test: () => {
            expect(shoppingCart.items).toHaveLength(3);
          } },
          { description: `key "items" is ["toothbrush", "toothpaste", "floss"]`, test: () => {
            expect(shoppingCart.items).toBe([
              'toothbrush',
              'toothpaste',
              'floss',
            ]);
          } },
          { description: `is correct value`, test: () => {
            expect(shoppingCart).toBe({
              items: ['toothbrush', 'toothpaste', 'floss'],
              total: 5,
              onlinePurchase: true,
            });
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-accessing',
        title: 'Accessing Properties',
        text: `To read a value from an object, use <b>dot notation</b>: <b>object.key</b><br><br>

You can also use <b>bracket notation</b>: <b>object["key"]</b> (useful when the key is stored in a variable or has special characters).<br><br>

Both do the same thing. Dot notation is more common and easier to read.<br><br>

Try running the code and see how each property is accessed.`,
        sampleCode: `var person = {
  firstName: "Billy",
  lastName: "Baxter",
  age: 30
};

// Dot notation
console.log(person.firstName);  // "Billy"
console.log(person.age);        // 30

// Bracket notation (ignore the warning)
console.log(person["lastName"]); // "Baxter"

// Bracket notation with a variable
var theKey = "lastName";
console.log(person[theKey]); 
`,
      },
      { type: 'test', key: 'accessPropertyTest',
        title: `Accessing a Property`,
        instructions: `Declare a variable named <b>city</b> that is an object with a property <b>name</b> set to <b>"London"</b> and a property <b>population</b> set to <b>9000000</b> (9 million).<br><br>

Use two console.log to log both values separately.<br><br>`,
        sampleCode: ``,
        tests: [
          { description: `"city" is declared`, test: () => {
            expect(city).toBeDeclared();
          } },
          { description: `"city" is an object`, test: () => {
            expect(city).toBeObject();
          } },
          { description: `"city" has key "name" with value "London"`, test: () => {
            expect(city).toHaveKeyValuePair('name', 'London');
          } },
          { description: `"city" has key "population" with value 9000000`, test: () => {
            expect(city).toHaveKeyValuePair('population', 9000000);
          } },
          { description: `console.log the city.name`, test: () => {
            expectConsole().toHaveLogged('London');
          } },
          { description: `console.log the city.population`, test: () => {
            expectConsole().toHaveLogged(9000000);
          } }
        ],
      },
      { type: 'test', key: 'accessPropertyBracketTest',
        title: `Bracket Notation`,
        instructions: `Use console.log to log the properties of the object.<br><br>
      
      Use bracket notation to access maker. i.e. obj["maker"]<br><br>
      Use bracket notation to access year. i.e. obj[keyName]<br>`,
        sampleCode: `var toy = {
      maker: "Hasbro",
      year: 1999,
      }
      var keyName = "year"
      `,
        tests: [
          { description: `variables are declared by default (toy, keyName... reset if this is red)`, test: () => {
            expect(toy).toBeDeclared();
            expect(keyName).toBeDeclared();
            expect(toy).toBe({
              maker: 'Hasbro',
              year: 1999,
            });
            expect(keyName).toBe('year');
          } },
          { description: `uses bracket notation`, test: () => {
            expectCode().toUseBracketNotation();
          } },
          { description: `console.log the "maker" using bracket notation (you may see a warning in the editor, that's OK)`, test: () => {
            expectConsole().toHaveLogged('Hasbro');
          } },
          { description: `should NOT use dot notation`, test: () => {
            expectCode().toNotUseDotNotation();
          } },
          { description: `console.log "Hasbro"`, test: () => {
            expectConsole().toHaveLogged('Hasbro');
          } },
          { description: `console.log 1999`, test: () => {
            expectConsole().toHaveLogged(1999);
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-setting',
        title: 'Setting Properties',
        text: `You can also change the value of a property. It's about the same way you would change a variable:<br><br>

          var obj = {
              name: "Zoe"
          };<br><br>

          obj.name = "Zachary";
    `,
        sampleCode: `var obj = {
      name: "Zoe"
    };

    console.log(obj);

    obj.name = "Zachary";

    console.log(obj);`,
      },
      { type: 'test', key: 'setPropertyTest',
        title: `Setting a Property`,
        instructions: `Leave <b>book</b> alone, we're going to change it's properties.<br><br>
      Change its title to "Dune".<br><br>
      Change its pages to 412.<br><br>
      Change its year to 1965.<br><br>

Then add a new property <b>author</b> to the <b>book</b> object and set it to <b>"Frank Herbert"</b> using dot notation.`,
        sampleCode: `// Don't touch this!
var book = {
  title: "Moby Dick",
  pages: 720,
  year: 1851
};
// Just add new code below!
`,
        tests: [
          { description: `"book" is declared`, test: () => {
            expect(book).toBeDeclared();
          } },
          { description: `"book" is an object`, test: () => {
            expect(book).toBeObject();
          } },
          { description: `change "book" key "title" to value "Dune"`, test: () => {
            expect(book).toHaveKeyValuePair('title', 'Dune');
          } },
          { description: `change "book" key "pages" to value 412`, test: () => {
            expect(book).toHaveKeyValuePair('pages', 412);
          } },
          { description: `change "book" key "year" to value 1965`, test: () => {
            expect(book).toHaveKeyValuePair('year', 1965);
          } },
          { description: `add "book" key "author" to value "Frank Herbert"`, test: () => {
            expect(book).toHaveKeyValuePair('author', 'Frank Herbert');
          } },
          { description: `should use dot notation`, test: () => {
            expectCode().toUseDotNotation();
          } }
        ],
      }
    ],
  },
  {
    id: '7',
    title: 'Arrays',
    help: 'https://www.w3schools.com/js/js_arrays.asp',
    items: [
      { type: 'lesson', key: 'lesson-what-is-array',
        title: 'What is an Array?',
        text: `An array is an ordered list of values stored under one variable.<br><br>

Instead of making separate variables for each item, you can put them all in one array.<br><br>

Arrays are declared with square brackets <b>[ ]</b>. Values inside are separated by commas.<br><br>

Array values can be any type. Such as numbers, strings, booleans, objects, even other arrays.<br><br>

Try running the code!`,
        sampleCode: `var fruits = ["apple", "banana", "cherry"];

console.log(fruits);`,
      },
      { type: 'test', key: 'emptyArray',
        title: `var "emptyArray"`,
        instructions: `Declare a variable named "emptyArray", an array with no values`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(emptyArray).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(emptyArray).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(emptyArray).toBeArray();
          } },
          { description: `has 0 items`, test: () => {
            expect(emptyArray).toHaveLength(0);
          } }
        ],
      },
      { type: 'test', key: 'varSimpleArrayTests',
        title: `var "simpleArray"`,
        instructions: `Declare a variable named "simpleArray", an array whose values are the numbers 1, 2 and 3`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(simpleArray).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(simpleArray).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(simpleArray).toBeArray();
          } },
          { description: `contains only numbers`, test: () => {
            expect(simpleArray).toOnlyContainType(`number`);
          } },
          { description: `has 3 items`, test: () => {
            expect(simpleArray).toHaveLength(3);
          } },
          { description: `contains numbers 1,2,3`, test: () => {
            expect(simpleArray).toBeSameArrayAs([1, 2, 3]);
          } }
        ],
      },
      { type: 'test', key: 'varFavoriteFoodsTest',
        title: `var "favoriteFoods"`,
        instructions: `Declare a variable named "favoriteFoods", an array whose values are three words (your favorite foods!).`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(favoriteFoods).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(favoriteFoods).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(favoriteFoods).toBeArray();
          } },
          { description: `contains only strings`, test: () => {
            expect(favoriteFoods).toOnlyContainType(`string`);
          } },
          { description: `contains only words of 3+ letters`, test: () => {
            expect(favoriteFoods).customTest(function () {
              this.value.forEach((item) => {
                if (item.length < 3)
                  throw new Error(`words must be 3 or more letters`);
              });
              return this;
            });
          } }
        ],
      },
      { type: 'test', key: 'bigNumbers',
        title: `var "bigNumbers"`,
        instructions: `Declare a variable named "bigNumbers", an array with 3 numbers all greater than 9000.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(bigNumbers).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(bigNumbers).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(bigNumbers).toBeArray();
          } },
          { description: `contains only numbers`, test: () => {
            expect(bigNumbers).toOnlyContainType(`number`);
          } },
          { description: `only contains numbers over 9000`, test: () => {
            expect(bigNumbers).customTest(function () {
              this.value.forEach((item) => {
                if (!(item > 9000))
                  throw new Error(`not all numbers are over 9000`);
                return this;
              });
            });
          } }
        ],
      },
      { type: 'test', key: 'arrayOf10',
        title: `var "arrayOf10"`,
        instructions: `Declare a variable named "arrayOf10", an array of 10 numbers.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(arrayOf10).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(arrayOf10).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(arrayOf10).toBeArray();
          } },
          { description: `contains only numbers`, test: () => {
            expect(arrayOf10).toOnlyContainType(`number`);
          } },
          { description: `has 10 items`, test: () => {
            expect(arrayOf10).toHaveLength(10);
          } }
        ],
      },
      { type: 'test', key: 'arrayOfBooleans',
        title: `var "arrayOfBooleans"`,
        instructions: `Declare a variable named "arrayOfBooleans", an array of 5 booleans.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(arrayOfBooleans).toBeDeclared();
          } },
          { description: `has a value`, test: () => {
            expect(arrayOfBooleans).toHaveValue();
          } },
          { description: `is an array`, test: () => {
            expect(arrayOfBooleans).toBeArray();
          } },
          { description: `contains only booleans`, test: () => {
            expect(arrayOfBooleans).toOnlyContainType(`boolean`);
          } },
          { description: `has 5 items`, test: () => {
            expect(arrayOfBooleans).toHaveLength(5);
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-indexes',
        title: 'Indexes',
        text: `Each item in an array has a position called an <b>index</b>.<br><br>

Arrays are <b>zero-indexed</b> — the first item is at index <b>0</b>, the second at index <b>1</b>, and so on.<br><br>

You access items using square brackets: <b>array[index]</b><br><br>

The <b>length</b> property tells you how many items are in the array: <b>array.length</b><br><br>

Try running the code and check the output!`,
        sampleCode: `var fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "cherry"

console.log(fruits.length);  // 3`,
      },
      { type: 'test', key: 'accessArrayItems',
        title: `Access Array Items`,
        instructions: `Here's an array.<br><br>
      I want you to store the 2nd item in the array inside variable "a", and the 4th item inside variable "b".<br><br>
      Then console.log the 3rd and 5th items.<br><br>
      (remember arrays start counting from zero!)`,
        sampleCode: `var arr = ['New York', 'Paris', 'London', 'Beijing', 'Mumbai'];`,
        tests: [
          { description: `arr is already declared for you (reset if red)`, test: () => {
            expect(arr).toHaveValue([
              'New York',
              'Paris',
              'London',
              'Beijing',
              'Mumbai',
            ]);
          } },
          { description: `var a is the 2nd item of the array`, test: () => {
            expect(a).toBe('Paris');
          } },
          { description: `var b is the 4th item of the array`, test: () => {
            expect(b).toBe('Beijing');
          } },
          { description: `console.log the 3rd item of the array`, test: () => {
            expectConsole().toHaveLogged('London');
          } },
          { description: `console.log the 5rd item of the array`, test: () => {
            expectConsole().toHaveLogged('Mumbai');
          } }
        ],
      },
      { type: 'lesson', key: 'lesson-array-changes',
        title: 'Changing Index',
        text: `Just like with objects, you can change the values in an array using <b>"="</b>.

Try running the code and check the output!`,
        sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits[0] = "watermelon";
fruits[1] = "kiwi";
fruits[2] = "tomato";

console.log(fruits[0]);  // "watermelon"
console.log(fruits[1]);  // "kiwi"
console.log(fruits[2]);  // "tomato"

console.log(fruits.length);  // 3`,
      },
      { type: 'test', key: 'changeArrayItems',
        title: `Change Array Items`,
        instructions: `Here's an array.<br><br>
      I want you to, by hand, change the values so that the numbers are in order.<br><br>
      (remember arrays start counting from zero!)`,
        sampleCode: `var arr = [1, 4, 2, 3, 5];`,
        tests: [
          { description: `arr is an array`, test: () => {
            expect(arr).toBeArray();
          } },
          { description: `arr[0] is 1`, test: () => {
            expect(arr[0]).toBe(1);
          } },
          { description: `arr[1] is 2`, test: () => {
            expect(arr[1]).toBe(2);
          } },
          { description: `arr[2] is 3`, test: () => {
            expect(arr[2]).toBe(3);
          } },
          { description: `arr[3] is 4`, test: () => {
            expect(arr[3]).toBe(4);
          } },
          { description: `arr[4] is 5`, test: () => {
            expect(arr[4]).toBe(5);
          } }
        ],
      }
    ],
  },
  {
    id: '8',
    title: 'Array Methods',
    help: 'https://www.w3schools.com/js/js_array_methods.asp',
    items: [
      { type: 'lesson', key: 'lesson-what-are-methods',
        title: 'Array Methods',
        text: `Arrays come with built-in functions called <b>methods</b> that let you manipulate them.<br><br>

You call a method using dot notation: <b>array.methodName()</b><br><br>

Some methods <b>modify</b> the original array. Others <b>return a new array</b> and leave the original untouched. It's important to know which is which!<br><br>

Here are a few common ones:<br><br>

<b>push()</b> — adds an item to the end<br>
<b>pop()</b> — removes the last item<br>
<b>reverse()</b> — reverses the order<br>
<b>sort()</b> — sorts the items<br><br>

Try running the code!`,
        sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits.push("mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]`,
      },
      { type: 'lesson', key: 'lesson-sort',
        title: 'Sorting Arrays',
        text: `<b>sort()</b> sorts an array alphabetically by default — which works great for strings, but not for numbers.<br><br>

<b>Why doesn't sort() work for numbers by default?</b><br>
It converts numbers to strings first, so 10 comes before 2 (because "1" comes before "2" alphabetically).<br><br>

To sort numbers correctly, pass a <b>compare function</b> to sort():<br><br>

<b>array.sort((a, b) => a - b)</b> — sorts smallest to biggest<br>
<b>array.sort((a, b) => b - a)</b> — sorts biggest to smallest<br><br>

The compare function returns a negative, zero, or positive number to tell sort() which item comes first.<br><br>

Try running the code and see the difference!`,
        sampleCode: `var letters = ["banana", "apple", "cherry"];
console.log(letters.sort()); // ["apple", "banana", "cherry"]

var numbers = [10, 2, 30, 5];
console.log(numbers.sort());           // wrong: [10, 2, 30, 5]
console.log(numbers.sort((a, b) => a - b)); // correct: [2, 5, 10, 30]`,
      },
      { type: 'test', key: 'makeArrayOfX',
        title: `function "makeArrayOfX"`,
        instructions: `Make a function that takes 2 arguments. First argument is how many. 2nd argument is what will be in the array. Example: makeArrayOfX(4, 'a') returns ['a', 'a', 'a', 'a']`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(makeArrayOfX).toBeDeclared();
          } },
          { description: `is a function`, test: () => {
            expect(makeArrayOfX).toBeFunction();
          } },
          { description: `takes two arguments`, test: () => {
            expect(makeArrayOfX).takesXArguments(2);
          } },
          { description: `returns something`, test: () => {
            expect(makeArrayOfX).withArgs(3, 3).toReturnSomething();
          } },
          { description: `returns an array`, test: () => {
            expect(makeArrayOfX).withArgs(3, 3).toReturnArray();
          } },
          { description: `return array contains correct type`, test: () => {
            expect(makeArrayOfX).withArgs(3, 3).toReturnArrayOfType('number');
            expect(makeArrayOfX).withArgs(3, 'a').toReturnArrayOfType('string');
          } },
          { description: `returns the correct result`, test: () => {
            expect(makeArrayOfX(5, 8)).toBeSameArrayAs([8, 8, 8, 8, 8]);
            expect(makeArrayOfX(3, 'a')).toBeSameArrayAs(['a', 'a', 'a']);
          } }
        ],
      },
      { type: 'test', key: 'reverseArray',
        title: `function "reverseArray"`,
        instructions: `Make a function that takes an array as an argument. It should return the array in reverse order. Example: reverseArray(['d', 'e', 'f']) returns ['f','e','d']`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(reverseArray).toBeDeclared();
          } },
          { description: `is a function`, test: () => {
            expect(reverseArray).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(reverseArray).takesXArguments(1);
          } },
          { description: `returns something`, test: () => {
            expect(reverseArray).withArgs([]).toReturnSomething();
          } },
          { description: `returns array`, test: () => {
            expect(reverseArray).withArgs([]).toReturnArray();
          } },
          { description: `returns array of correct type`, test: () => {
            expect(reverseArray)
              .withArgs([1, 2, 3])
              .toReturnArrayOfType('number');
            expect(reverseArray)
              .withArgs(['a', 'b', 'c'])
              .toReturnArrayOfType('string');
          } },
          { description: `returns the correct result`, test: () => {
            expect(reverseArray(['a', 'b', 'c'])).toBeSameArrayAs([
              'c',
              'b',
              'a',
            ]);
            expect(reverseArray([1, 2, 3])).toBeSameArrayAs([3, 2, 1]);
          } }
        ],
      },
      { type: 'test', key: 'sortLetters',
        title: `function "sortLetters"`,
        instructions: `Make a function that takes one argument, an array of letters. It should return the array of letters in alphabetical order.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(sortLetters).toBeDeclared();
          } },
          { description: `is a function`, test: () => {
            expect(sortLetters).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(sortLetters).takesXArguments(1);
          } },
          { description: `returns something`, test: () => {
            expect(sortLetters).withArgs(['a', 'z', 'b']).toReturnSomething();
          } },
          { description: `returns array`, test: () => {
            expect(sortLetters).withArgs(['a', 'z', 'b']).toReturnArray();
          } },
          { description: `returns array with string items`, test: () => {
            expect(sortLetters)
              .withArgs(['a', 'z', 'b'])
              .toReturnArrayOfType('string');
          } },
          { description: `returns the correct result`, test: () => {
            expect(sortLetters(['a', 'z', 'b', 'd'])).toBeSameArrayAs([
              'a',
              'b',
              'd',
              'z',
            ]);
          } }
        ],
      },
      { type: 'test', key: 'sortNumbers',
        title: `function "sortNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. It should return the numbers from smallest to biggest.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(sortNumbers).toBeDeclared();
          } },
          { description: `is a function`, test: () => {
            expect(sortNumbers).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(sortNumbers).takesXArguments(1);
          } },
          { description: `returns something`, test: () => {
            expect(sortNumbers).withArgs([3, 2, 1]).toReturnSomething();
          } },
          { description: `returns an array`, test: () => {
            expect(sortNumbers).withArgs([3, 2, 1]).toReturnArray();
          } },
          { description: `returns an array of number items`, test: () => {
            expect(sortNumbers)
              .withArgs([3, 2, 1])
              .toReturnArrayOfType('number');
          } },
          { description: `returns the correct result`, test: () => {
            expect(sortNumbers([1, 1000, 2, 2000, 5, 30, 400])).toBeSameArrayAs(
              [1, 2, 5, 30, 400, 1000, 2000],
            );
            expect(sortNumbers([5, 3, 1])).toBeSameArrayAs([1, 3, 5]);
          } }
        ],
      },
      { type: 'test', key: 'sortByWordLength',
        title: `function "sortByWordLength"`,
        instructions: `Make a function that takes one argument, an array of words. Return the words in an array from shortest to longest.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(sortByWordLength).toBeDeclared();
          } },
          { description: `is a function`, test: () => {
            expect(sortByWordLength).toBeFunction();
          } },
          { description: `takes one argument`, test: () => {
            expect(sortByWordLength).takesXArguments(1);
          } },
          { description: `returns something`, test: () => {
            expect(sortByWordLength)
              .withArgs(['bob', 'bill'])
              .toReturnSomething();
          } },
          { description: `returns an array`, test: () => {
            expect(sortByWordLength).withArgs(['bob', 'bill']).toReturnArray();
          } },
          { description: `returns an array with string items`, test: () => {
            expect(sortByWordLength)
              .withArgs(['bob', 'bill'])
              .toReturnArrayOfType('string');
          } },
          { description: `returns the correct result`, test: () => {
            expect(
              sortByWordLength(['throw', 'jungle', 'longest', 'cat']),
            ).toBeSameArrayAs(['cat', 'throw', 'jungle', 'longest']);
          } }
        ],
      }
    ],
  },
  {
    id: '9',
    title: 'Loops & Strings',
    help: 'https://www.w3schools.com/js/js_loops.asp',
    items: [
      { type: 'lesson', key: 'lesson-for-loop',
        title: 'For Loops',
        text: `A <b>for loop</b> repeats a block of code a set number of times.<br><br>

It has three parts:<br>
<b>var i = 0</b> — start value<br>
<b>i &lt; 5</b> — keep going while this is true<br>
<b>i++</b> — what to do after each loop (i++ means add 1)<br><br>

<b>i</b> is just a variable name — it's short for "index" and is the convention, but you can name it anything.<br><br>

Try running the code!`,
        sampleCode: `for (var i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}`,
      },
      { type: 'lesson', key: 'lesson-loops-strings',
        title: 'Loops & Strings',
        text: `Loops are great for building strings character by character, or for iterating over each character in a string.<br><br>

You can loop over a string's characters using its index, just like an array. <b>str[0]</b> is the first character, <b>str[1]</b> is the second, and so on.<br><br>

<b>str.length</b> gives you the number of characters, so you can use it as the loop's stop condition.<br><br>

You can also build up a string by starting with an empty string and adding to it with <b>+=</b> inside the loop.<br><br>

Try running the code!`,
        sampleCode: `// Loop over a string's characters
var word = "hello";
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// Build a string with a loop
var result = "";
for (var i = 0; i < 5; i++) {
  result += "*";
}
console.log(result); // "*****"`,
      },
      { type: 'test', key: 'makeXAsterisks',
        title: `function "makeXAsterisks"`,
        instructions: `Make a function that takes one argument, a number. It should return a string with that many asterisks. Example: makeXAsterisks(5) returns "*****"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeXAsterisks).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeXAsterisks).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(makeXAsterisks).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(makeXAsterisks(5)).toBe('*****');
              expect(makeXAsterisks(3)).toBe('***');
              expect(makeXAsterisks(12)).toBe('************');
            } }
        ],
      },
      { type: 'test', key: 'allNumbersUpToX',
        title: `function "allNumbersUpToX"`,
        instructions: `Make a function that takes one argument, a number. It should return an array of every number up to that number, starting at 1. Example: allNumbersUpToX(5) returns [1,2,3,4,5]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(allNumbersUpToX).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(allNumbersUpToX).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(allNumbersUpToX).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnSomething();
            } },
          { description: `returns array`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArray();
            } },
          { description: `returns array of numbers`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArrayOfType('number');
            } },
          { description: `returns the correct result`, test: () => {
              expect(allNumbersUpToX(8)).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6, 7, 8,
              ]);
              expect(allNumbersUpToX(1)).toBeSameArrayAs([1]);
              expect(allNumbersUpToX(3)).toBeSameArrayAs([1, 2, 3]);
            } }
        ],
      },
      { type: 'test', key: 'makeStringWithXLetterY',
        title: `function "makeStringWithXLetterY"`,
        instructions: `Make a function that takes two arguments, a number and a character. It should return a string with X copies of Y. Example: makeStringWithXLetterY(4, "b") returns "bbbb"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeStringWithXLetterY).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeStringWithXLetterY).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(makeStringWithXLetterY).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(makeStringWithXLetterY)
                .withArgs(3, 'b')
                .toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(makeStringWithXLetterY).withArgs(3, 'b').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(makeStringWithXLetterY(5, 'a')).toBe('aaaaa');
              expect(makeStringWithXLetterY(10, 'x')).toBe('xxxxxxxxxx');
              expect(makeStringWithXLetterY(0, 'q')).toBe('');
            } }
        ],
      },
      { type: 'test', key: 'reverseWord',
        title: `function "reverseWord"`,
        instructions: `Make a function that takes one argument, a string. It should return the string in reverse order. Example: reverseWord("cat") returns "tac"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(reverseWord).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(reverseWord).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(reverseWord).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(reverseWord).withArgs('bill').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(reverseWord).withArgs('bill').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(reverseWord('towel')).toBe('lewot');
              expect(reverseWord('aba')).toBe('aba');
              expect(reverseWord('cow')).toBe('woc');
            } }
        ],
      },
      { type: 'test', key: 'removeVowels',
        title: `function "removeVowels"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the vowels removed. Example: removeVowels('opportunity') returns 'pprtnty'`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeVowels).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeVowels).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeVowels).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeVowels).withArgs('ca').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(removeVowels).withArgs('ca').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(removeVowels('behaviour')).toBe('bhvr');
              expect(removeVowels('aeiou')).toBe('');
              expect(removeVowels('bcdfghjklmnpqrstvwxyz')).toBe(
                'bcdfghjklmnpqrstvwxyz',
              );
            } }
        ],
      },
      { type: 'test', key: 'removeConsonants',
        title: `function "removeConsonants"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the consonants removed. Example: removeConsonants('opportunity') returns 'oouiy'`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeConsonants).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeConsonants).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeConsonants).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeConsonants).withArgs('ab').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(removeConsonants).withArgs('ab').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(removeConsonants('abcdefghijklmnopqrstuvwxyz')).toBe(
                'aeiou',
              );
              expect(removeConsonants('aeiou')).toBe('aeiou');
              expect(removeConsonants('xyz')).toBe('');
            } }
        ],
      },
      { type: 'test', key: 'removeWordsOfLengthXPlus',
        title: `function "removeWordsOfLengthXPlus"`,
        instructions: `Make a function that takes two arguments, an array of strings and a number. Remove any string as long or longer than the number. Example: removeWordsOfLengthXPlus(["homeland","cat","drop"], 5) returns ["cat","drop"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeWordsOfLengthXPlus).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeWordsOfLengthXPlus).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeWordsOfLengthXPlus).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnSomething();
            } },
          { description: `returns array`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArray();
            } },
          { description: `returns array of strings`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArrayOfType('string');
            } },
          { description: `returns the correct result`, test: () => {
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  4,
                ),
              ).toBeSameArrayAs(['cat', 'dog']);
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  1,
                ),
              ).toBeSameArrayAs([]);
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  12,
                ),
              ).toBeSameArrayAs(['president', 'leader', 'cat', 'dog']);
            } }
        ],
      },
      { type: 'test', key: 'calculateAverage',
        title: `function "calculateAverage"`,
        instructions: `Make a function that takes one argument, an array of numbers. It should return the average of all numbers. Example: calculateAverage([2, 4, 6, 8, 10]) returns 6`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(calculateAverage).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(calculateAverage).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(calculateAverage).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnSomething();
            } },
          { description: `returns a number`, test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnNumber();
            } },
          { description: `returns the correct result`, test: () => {
              expect(calculateAverage([1, 8, 5, 20, 16])).toBe(10);
              expect(calculateAverage([2])).toBe(2);
              expect(calculateAverage([1, 2])).toBe(1.5);
            } }
        ],
      }
    ],
  },
  {
    id: '10',
    title: 'Array.map',
    help: 'https://www.w3schools.com/jsref/jsref_map.asp',
    items: [
      { type: 'lesson', key: 'lesson-map',
        title: 'Array.map()',
        text: `<b>array.map()</b> transforms every item in an array and returns a <b>new array</b> of the same length.<br><br>

You pass it a function, and that function runs once for each item. Whatever the function returns becomes the new value at that position.<br><br>

The original array is <b>not modified</b>.<br><br>

The function receives each item as its argument — you can name it anything.<br><br>

Try running the code!`,
        sampleCode: `var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] — unchanged`,
      },
      { type: 'lesson', key: 'lesson-map-arrow',
        title: 'map() with Arrow Functions',
        text: `You'll often see <b>map()</b> written with an <b>arrow function</b> — it's shorter and very common.<br><br>

An arrow function looks like: <b>(item) => item * 2</b><br><br>

If the function only returns one expression, you can skip the curly braces and the <b>return</b> keyword — the value is returned automatically.<br><br>

Both styles do the same thing. The tests in this section require you to use <b>array.map()</b> specifically.<br><br>

Try running the code!`,
        sampleCode: `var numbers = [1, 2, 3, 4, 5];

// Arrow function with map
var doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Also works on strings
var words = ["cat", "dog", "bird"];
var firstLetters = words.map((word) => word[0]);
console.log(firstLetters); // ["c", "d", "b"]`,
      },
      { type: 'test', key: 'arrayValuesPlusOne',
        title: `function "arrayValuesPlusOne"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to add one to each number and return the resulting array. Example: arrayValuesPlusOne([1, 3, 5]) returns [2, 4, 6]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(arrayValuesPlusOne).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(arrayValuesPlusOne).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(arrayValuesPlusOne).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(arrayValuesPlusOne).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(arrayValuesPlusOne).withArgs([1, 2]).toReturnSomething();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(arrayValuesPlusOne([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs(
                [2, 3, 4, 5, 6, 7, 8],
              );
              expect(arrayValuesPlusOne([])).toBeSameArrayAs([]);
              expect(arrayValuesPlusOne([1])).toBeSameArrayAs([2]);
            } }
        ],
      },
      { type: 'test', key: 'doubleArrayValues',
        title: `function "doubleArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to double all the values and return an array. Example: doubleArrayValues([2, 5, 11]) returns [4, 10, 22]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(doubleArrayValues).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(doubleArrayValues).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(doubleArrayValues).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(doubleArrayValues).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(doubleArrayValues).withArgs([1]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(doubleArrayValues).withArgs([1]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(doubleArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(doubleArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(doubleArrayValues([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6, 8, 10, 12, 14,
              ]);
              expect(doubleArrayValues([])).toBeSameArrayAs([]);
              expect(doubleArrayValues([-1, 0, 1])).toBeSameArrayAs([-2, 0, 2]);
            } }
        ],
      },
      { type: 'test', key: 'halveArrayValues',
        title: `function "halveArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to divide each item by 2 and return the resulting array. Example: [1, 2, 3, 4, 5] returns [.5, 1, 1.5, 2, 2.5]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(halveArrayValues).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(halveArrayValues).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(halveArrayValues).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(halveArrayValues).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(halveArrayValues).withArgs([]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(halveArrayValues).withArgs([]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(halveArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(halveArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(halveArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6,
              ]);
              expect(halveArrayValues([])).toBeSameArrayAs([]);
              expect(halveArrayValues([-1, -2, 0])).toBeSameArrayAs([
                -0.5, -1, 0,
              ]);
            } }
        ],
      },
      { type: 'test', key: 'squareArrayValues',
        title: `function "squareArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to square each number and return it. Example: squareArrayValues([10,8]) returns [100, 64]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(squareArrayValues).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(squareArrayValues).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(squareArrayValues).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(squareArrayValues).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(squareArrayValues).withArgs([1]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(squareArrayValues).withArgs([1]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(squareArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(squareArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(squareArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                4, 16, 36, 64, 100, 144,
              ]);
              expect(squareArrayValues([0])).toBeSameArrayAs([0]);
              expect(squareArrayValues([])).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'onlyFirstLetterOfWords',
        title: `function "onlyFirstLetterOfWords"`,
        instructions: `Make a function that takes one argument, an array of strings. Use "array.map" to return an array of the first letters of each string. Example: onlyFirstLetterOfWords(['cat','dog']) returns ['c','d']`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(onlyFirstLetterOfWords).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(onlyFirstLetterOfWords).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(onlyFirstLetterOfWords).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(onlyFirstLetterOfWords).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(onlyFirstLetterOfWords).withArgs(['a']).toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                onlyFirstLetterOfWords(['cat', 'sibling', 'pepper', 'zebra']),
              ).toBeSameArrayAs(['c', 's', 'p', 'z']);
              expect(onlyFirstLetterOfWords([])).toBeSameArrayAs([]);
              expect(
                onlyFirstLetterOfWords(['az', 'bz', 'cz']),
              ).toBeSameArrayAs(['a', 'b', 'c']);
            } }
        ],
      },
      { type: 'test', key: 'onlyLastLetterOfWords',
        title: `function "onlyLastLetterOfWords"`,
        instructions: `Make a function that takes one argument, an array of strings. Use "array.map" to return an array of the last letter of each string. Example: onlyLastLetterOfWords(["cat","dog"]) returns ["t","g"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(onlyLastLetterOfWords).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(onlyLastLetterOfWords).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(onlyLastLetterOfWords).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(onlyLastLetterOfWords).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.map" method`, test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                onlyLastLetterOfWords(['cat', 'wing', 'trot', 'coo']),
              ).toBeSameArrayAs(['t', 'g', 't', 'o']);
              expect(onlyLastLetterOfWords([])).toBeSameArrayAs([]);
            } }
        ],
      }
    ],
  },
  {
    id: '11',
    title: 'Array.filter',
    help: 'https://www.w3schools.com/jsref/jsref_filter.asp',
    items: [
      { type: 'lesson', key: 'lesson-filter',
        title: 'Array.filter()',
        text: `<b>array.filter()</b> returns a <b>new array</b> containing only the items that pass a test.<br><br>

You pass it a function that takes each item and returns <b>true</b> (keep it) or <b>false</b> (remove it).<br><br>

The original array is <b>not modified</b>. The new array may be shorter — or even empty if nothing passes.<br><br>

Think of it like a sieve — only what fits through stays.<br><br>

Try running the code!`,
        sampleCode: `var numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
var evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);   // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] — unchanged

// Keep only words longer than 3 letters
var words = ["cat", "elephant", "dog", "rhinoceros"];
var longWords = words.filter((word) => word.length > 3);
console.log(longWords); // ["elephant", "rhinoceros"]`,
      },
      { type: 'test', key: 'removeOddNumbers',
        title: `function "removeOddNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no odd numbers. Example: removeOddNumbers([1,2,3,4]) returns [2,4]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeOddNumbers).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeOddNumbers).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeOddNumbers).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeOddNumbers).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeOddNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6,
              ]);
              expect(removeOddNumbers([])).toBeSameArrayAs([]);
              expect(removeOddNumbers([11, 31, 51])).toBeSameArrayAs([]);
              expect(removeOddNumbers([22, 44])).toBeSameArrayAs([22, 44]);
            } }
        ],
      },
      { type: 'test', key: 'removeEvenNumbers',
        title: `function "removeEvenNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no even numbers. Example: removeEvenNumbers([1,2,3,4]) returns [1,3]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeEvenNumbers).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeEvenNumbers).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeEvenNumbers).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeEvenNumbers).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeEvenNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                1, 3, 5, 7,
              ]);
              expect(removeEvenNumbers([])).toBeSameArrayAs([]);
              expect(removeEvenNumbers([11, 31, 51])).toBeSameArrayAs([
                11, 31, 51,
              ]);
              expect(removeEvenNumbers([22, 44])).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'removeNumbersLessThan3',
        title: `function "removeNumbersLessThan3"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" to remove numbers less than 3. Example: removeNumbersLessThan3([1,2,3,4]) returns [3,4]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeNumbersLessThan3).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeNumbersLessThan3).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeNumbersLessThan3).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeNumbersLessThan3).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "filter" method`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                removeNumbersLessThan3([1, 2, 3, 4, 5, 6, 7]),
              ).toBeSameArrayAs([3, 4, 5, 6, 7]);
              expect(
                removeNumbersLessThan3([1, 1, 2, 2, 1, 2, 1]),
              ).toBeSameArrayAs([]);
              expect(removeNumbersLessThan3([3, 4, 5, 6, 100])).toBeSameArrayAs(
                [3, 4, 5, 6, 100],
              );
            } }
        ],
      },
      { type: 'test', key: 'removeNumbersLessThanX',
        title: `function "removeNumbersLessThanX"`,
        instructions: `Make a function that takes two arguments, an array of numbers and a number. Call "array.filter" to remove numbers less than the 2nd argument. Example: removeNumbersLessThanX([1,2,3,4,5],3) returns [3,4,5]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeNumbersLessThanX).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeNumbersLessThanX).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeNumbersLessThanX).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeNumbersLessThanX).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "filter" method`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                removeNumbersLessThanX([1, 2, 3, 4, 5, 6, 7], 4),
              ).toBeSameArrayAs([4, 5, 6, 7]);
              expect(
                removeNumbersLessThanX([1, 1, 2, 2, 1, 2, 1], 2),
              ).toBeSameArrayAs([2, 2, 2]);
              expect(
                removeNumbersLessThanX([3, 4, 5, 6, 100], 50),
              ).toBeSameArrayAs([100]);
              expect(removeNumbersLessThanX([], 50)).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'removeEmptyStrings',
        title: `function "removeEmptyStrings"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove any empty strings. Example: removeEmptyStrings(["","Phone","Josh"]) returns ["Phone","Josh"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeEmptyStrings).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeEmptyStrings).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeEmptyStrings).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeEmptyStrings).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeEmptyStrings).withArgs(['a', '']).toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnArrayOfType('string');
            } },
          { description: `calls "array.filter" method`, test: () => {
              expect(removeEmptyStrings)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                removeEmptyStrings(['', '', 'dog', 'document', 'cat']),
              ).toBeSameArrayAs(['dog', 'document', 'cat']);
              expect(removeEmptyStrings([])).toBeSameArrayAs([]);
              expect(removeEmptyStrings(['', '', ''])).toBeSameArrayAs([]);
              expect(removeEmptyStrings(['a', 'a', 'a'])).toBeSameArrayAs([
                'a',
                'a',
                'a',
              ]);
            } }
        ],
      },
      { type: 'test', key: 'removeVowelsFromArray',
        title: `function "removeVowelsFromArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a vowel. Example: removeVowelsFromArray(["a","b","c","d","e"]) returns ["b","c","d"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeVowelsFromArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeVowelsFromArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeVowelsFromArray).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeVowelsFromArray).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeVowelsFromArray(['a', 'b', 'c'])).toBeSameArrayAs([
                'b',
                'c',
              ]);
              expect(
                removeVowelsFromArray(['a', 'e', 'i', 'o', 'u']),
              ).toBeSameArrayAs([]);
              expect(removeVowelsFromArray([])).toBeSameArrayAs([]);
              expect(removeVowelsFromArray(['b', 'x', 'z'])).toBeSameArrayAs([
                'b',
                'x',
                'z',
              ]);
            } }
        ],
      },
      { type: 'test', key: 'removeConsonantsInArray',
        title: `function "removeConsonantsInArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a consonant. Example: removeConsonantsInArray(["a","b","c","d","e"]) returns ["a","e"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeConsonantsInArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeConsonantsInArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeConsonantsInArray).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeConsonantsInArray).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeConsonantsInArray(['a', 'b', 'c'])).toBeSameArrayAs([
                'a',
              ]);
              expect(
                removeConsonantsInArray(['a', 'e', 'i', 'o', 'u']),
              ).toBeSameArrayAs(['a', 'e', 'i', 'o', 'u']);
              expect(removeConsonantsInArray([])).toBeSameArrayAs([]);
              expect(removeConsonantsInArray(['b', 'x', 'z'])).toBeSameArrayAs(
                [],
              );
            } }
        ],
      },
      { type: 'test', key: 'removeWordFromArray',
        title: `function "removeWordFromArray"`,
        instructions: `Make a function that takes two arguments, an array of strings and a word. Call "array.filter" to remove all strings that match the word. Example: removeWordFromArray(["cat","dog","fish"],"fish") returns ["cat","dog"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeWordFromArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeWordFromArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeWordFromArray).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeWordFromArray).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeWordFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                removeWordFromArray(['joke', 'documentation'], 'documentation'),
              ).toBeSameArrayAs(['joke']);
              expect(
                removeWordFromArray(['joke', 'documentation'], 'cat'),
              ).toBeSameArrayAs(['joke', 'documentation']);
              expect(removeWordFromArray([], 'cat')).toBeSameArrayAs([]);
              expect(
                removeWordFromArray(['cat', 'cat', 'cat'], 'cat'),
              ).toBeSameArrayAs([]);
            } }
        ],
      }
    ],
  },
  {
    id: '12',
    title: 'While Loops',
    help: 'https://www.w3schools.com/js/js_loop_while.asp',
    items: [
      { type: 'lesson', key: 'lesson-while',
        title: 'While Loops',
        text: `A <b>while loop</b> keeps running as long as a condition is true.<br><br>

Unlike a for loop where you know how many times it will run, a while loop is useful when you don't know in advance — you just keep going until something changes.<br><br>

<b>Important:</b> you must change something inside the loop that will eventually make the condition false, otherwise you'll have an <b>infinite loop</b> that freezes the page!<br><br>

Try running the code!`,
        sampleCode: `var i = 1;

while (i <= 5) {
  console.log(i);
  i++; // without this, the loop runs forever!
}

// While loops are great when you don't know how many steps you need
var num = 100;
while (num > 1) {
  num = Math.floor(num / 2);
  console.log(num);
}`,
      },
      { type: 'test', key: 'countUpTests',
        title: `function "countUp"`,
        instructions: `Make a function named "countUp" that takes one argument, a number. Using a while loop, return an array of numbers counting up from 1 to that number. Example: countUp(5) returns [1, 2, 3, 4, 5]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(countUp).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(countUp).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(countUp).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(countUp).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(countUp).withArgs(3).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(countUp).withArgs(3).toReturnArray();
            } },
          { description: `uses a while loop`, test: () => {
              expectCode().toUseWhileLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(countUp(1)).toBeSameArrayAs([1]);
              expect(countUp(3)).toBeSameArrayAs([1, 2, 3]);
              expect(countUp(5)).toBeSameArrayAs([1, 2, 3, 4, 5]);
              expect(countUp(8)).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7, 8]);
            } }
        ],
      },
      { type: 'test', key: 'countDownTests',
        title: `function "countDown"`,
        instructions: `Make a function named "countDown" that takes one argument, a number. Using a while loop, return an array of numbers counting down from that number to 1. Example: countDown(5) returns [5, 4, 3, 2, 1]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(countDown).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(countDown).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(countDown).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(countDown).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(countDown).withArgs(3).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(countDown).withArgs(3).toReturnArray();
            } },
          { description: `uses a while loop`, test: () => {
              expectCode().toUseWhileLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(countDown(1)).toBeSameArrayAs([1]);
              expect(countDown(3)).toBeSameArrayAs([3, 2, 1]);
              expect(countDown(5)).toBeSameArrayAs([5, 4, 3, 2, 1]);
              expect(countDown(8)).toBeSameArrayAs([8, 7, 6, 5, 4, 3, 2, 1]);
            } }
        ],
      },
      { type: 'test', key: 'sumWhileTests',
        title: `function "sumWhile"`,
        instructions: `Make a function named "sumWhile" that takes one argument, a number. Using a while loop, return the sum of all numbers from 1 up to and including that number. Example: sumWhile(5) returns 15 (because 1+2+3+4+5 = 15)`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(sumWhile).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(sumWhile).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(sumWhile).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(sumWhile).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(sumWhile).withArgs(3).toReturnSomething();
            } },
          { description: `returns a number`, test: () => {
              expect(sumWhile).withArgs(3).toReturnNumber();
            } },
          { description: `uses a while loop`, test: () => {
              expectCode().toUseWhileLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(sumWhile(1)).toBe(1);
              expect(sumWhile(3)).toBe(6);
              expect(sumWhile(5)).toBe(15);
              expect(sumWhile(10)).toBe(55);
              expect(sumWhile(100)).toBe(5050);
            } }
        ],
      },
      { type: 'test', key: 'repeatStringTests',
        title: `function "repeatString"`,
        instructions: `Make a function named "repeatString" that takes two arguments: a string and a number. Using a while loop, return the string repeated that many times. Example: repeatString("ha", 3) returns "hahaha"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(repeatString).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(repeatString).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(repeatString).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(repeatString).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(repeatString).withArgs('ha', 3).toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(repeatString).withArgs('ha', 3).toReturnString();
            } },
          { description: `uses a while loop`, test: () => {
              expectCode().toUseWhileLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(repeatString('ha', 3)).toBe('hahaha');
              expect(repeatString('ab', 1)).toBe('ab');
              expect(repeatString('x', 4)).toBe('xxxx');
              expect(repeatString('na', 8)).toBe('nananananananana');
              expect(repeatString('yo', 0)).toBe('');
            } }
        ],
      },
      { type: 'test', key: 'firstOverTests',
        title: `function "firstOver"`,
        instructions: `Make a function named "firstOver" that takes two arguments: an array of numbers and a threshold number. Using a while loop, return the first number in the array that is greater than the threshold. If no number exceeds the threshold, return null. Example: firstOver([1, 5, 3, 8], 4) returns 5`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(firstOver).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(firstOver).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(firstOver).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(firstOver).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(firstOver).withArgs([1, 5, 3], 4).toReturnSomething();
            } },
          { description: `uses a while loop`, test: () => {
              expectCode().toUseWhileLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(firstOver([1, 5, 3, 8], 4)).toBe(5);
              expect(firstOver([10, 1, 2], 5)).toBe(10);
              expect(firstOver([1, 2, 3], 10)).toBe(null);
              expect(firstOver([], 0)).toBe(null);
              expect(firstOver([3, 3, 3, 7], 5)).toBe(7);
            } }
        ],
      }
    ],
  },
  {
    id: '13',
    title: 'For Loops',
    help: 'https://www.w3schools.com/js/js_loop_for.asp',
    items: [
      { type: 'lesson', key: 'lesson-for-loops',
        title: 'For Loops & Arrays',
        text: `You've seen for loops before, but they're especially powerful when combined with arrays.<br><br>

Using the array's <b>length</b> as the stop condition, you can loop over every item:<br><br>

<b>for (var i = 0; i &lt; array.length; i++)</b><br><br>

Inside the loop, <b>array[i]</b> gives you the current item. You can read it, transform it, or use it to build up a result.<br><br>

Common patterns:<br>
— <b>accumulate</b>: start with 0 or "", add to it each loop<br>
— <b>collect</b>: start with [], push items each loop<br>
— <b>track</b>: start with a value, update it each loop (e.g. finding the max)<br><br>

Try running the code!`,
        sampleCode: `var numbers = [10, 3, 7, 2, 8];

// Accumulate — sum all numbers
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 30

// Collect — build a new array
var doubled = [];
for (var i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled); // [20, 6, 14, 4, 16]`,
      },
      { type: 'test', key: 'countToNTests',
        title: `function "countToN"`,
        instructions: `Make a function named "countToN" that takes one argument, a number. Using a for loop, return an array of numbers from 1 up to and including that number. Example: countToN(4) returns [1, 2, 3, 4]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(countToN).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(countToN).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(countToN).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(countToN).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(countToN).withArgs(3).toReturnArray();
            } },
          { description: `uses a for loop`, test: () => {
              expectCode().toUseForLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(countToN(1)).toBeSameArrayAs([1]);
              expect(countToN(3)).toBeSameArrayAs([1, 2, 3]);
              expect(countToN(5)).toBeSameArrayAs([1, 2, 3, 4, 5]);
              expect(countToN(7)).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7]);
            } }
        ],
      },
      { type: 'test', key: 'sumArrayTests',
        title: `function "sumArray"`,
        instructions: `Make a function named "sumArray" that takes one argument, an array of numbers. Using a for loop, return the sum of all numbers in the array. Example: sumArray([1, 2, 3]) returns 6`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(sumArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(sumArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(sumArray).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(sumArray).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(sumArray).withArgs([1, 2]).toReturnNumber();
            } },
          { description: `uses a for loop`, test: () => {
              expectCode().toUseForLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(sumArray([1, 2, 3])).toBe(6);
              expect(sumArray([10, 20, 30])).toBe(60);
              expect(sumArray([0, 0, 0])).toBe(0);
              expect(sumArray([])).toBe(0);
              expect(sumArray([100])).toBe(100);
            } }
        ],
      },
      { type: 'test', key: 'doubleAllTests',
        title: `function "doubleAll"`,
        instructions: `Make a function named "doubleAll" that takes one argument, an array of numbers. Using a for loop, return a new array where every number has been doubled. Example: doubleAll([1, 2, 3]) returns [2, 4, 6]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(doubleAll).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(doubleAll).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(doubleAll).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(doubleAll).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(doubleAll).withArgs([1, 2]).toReturnArray();
            } },
          { description: `uses a for loop`, test: () => {
              expectCode().toUseForLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(doubleAll([1, 2, 3])).toBeSameArrayAs([2, 4, 6]);
              expect(doubleAll([0, 5, 10])).toBeSameArrayAs([0, 10, 20]);
              expect(doubleAll([])).toBeSameArrayAs([]);
              expect(doubleAll([7])).toBeSameArrayAs([14]);
              expect(doubleAll([-3, -1, 0])).toBeSameArrayAs([-6, -2, 0]);
            } }
        ],
      },
      { type: 'test', key: 'findMaxTests',
        title: `function "findMax"`,
        instructions: `Make a function named "findMax" that takes one argument, an array of numbers. Using a for loop, return the largest number in the array. Example: findMax([3, 1, 7, 2]) returns 7`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(findMax).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(findMax).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(findMax).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(findMax).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(findMax).withArgs([1, 2]).toReturnNumber();
            } },
          { description: `uses a for loop`, test: () => {
              expectCode().toUseForLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(findMax([3, 1, 7, 2])).toBe(7);
              expect(findMax([1])).toBe(1);
              expect(findMax([-5, -1, -3])).toBe(-1);
              expect(findMax([0, 0, 0])).toBe(0);
              expect(findMax([100, 200, 150])).toBe(200);
            } }
        ],
      },
      { type: 'test', key: 'joinWordsTests',
        title: `function "joinWords"`,
        instructions: `Make a function named "joinWords" that takes one argument, an array of strings. Using a for loop, return a single string with all words joined by a space. Example: joinWords(["hello", "world"]) returns "hello world"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(joinWords).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(joinWords).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(joinWords).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(joinWords).takesXArguments(1);
            } },
          { description: `returns a string`, test: () => {
              expect(joinWords).withArgs(['a', 'b']).toReturnString();
            } },
          { description: `uses a for loop`, test: () => {
              expectCode().toUseForLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(joinWords(['hello', 'world'])).toBe('hello world');
              expect(joinWords(['one'])).toBe('one');
              expect(joinWords(['a', 'b', 'c', 'd'])).toBe('a b c d');
              expect(joinWords(['the', 'quick', 'brown', 'fox'])).toBe(
                'the quick brown fox',
              );
            } }
        ],
      }
    ],
  },
  {
    id: '14',
    title: 'For...Of Loops',
    help: 'https://www.w3schools.com/js/js_loop_forof.asp',
    items: [
      { type: 'lesson', key: 'lesson-for-of',
        title: 'For...Of Loops',
        text: `A <b>for...of</b> loop is a cleaner way to loop over arrays and strings.<br><br>

Instead of tracking an index with <b>i</b>, you get each item directly:<br><br>

<b>for (var item of array)</b><br><br>

This is simpler than a regular for loop when you don't need the index — you just care about the values.<br><br>

It works on strings too — each iteration gives you one character.<br><br>

Try running the code!`,
        sampleCode: `var fruits = ["apple", "banana", "cherry"];

for (var fruit of fruits) {
  console.log(fruit);
}
// "apple"
// "banana"
// "cherry"

// Also works on strings
for (var char of "hello") {
  console.log(char);
}`,
      },
      { type: 'test', key: 'getCharsTests',
        title: `function "getChars"`,
        instructions: `Make a function named "getChars" that takes one argument, a string. Using a for...of loop, return an array containing each character of the string. Example: getChars("hi") returns ["h", "i"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(getChars).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(getChars).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(getChars).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(getChars).withArgs('hi').toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(getChars('hi')).toBeSameArrayAs(['h', 'i']);
              expect(getChars('abc')).toBeSameArrayAs(['a', 'b', 'c']);
              expect(getChars('z')).toBeSameArrayAs(['z']);
              expect(getChars('')).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'shoutTests',
        title: `function "shout"`,
        instructions: `Make a function named "shout" that takes one argument, a string. Using a for...of loop, return an array of each character uppercased. Example: shout("hi") returns ["H", "I"]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(shout).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(shout).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(shout).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(shout).withArgs('hi').toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(shout('hi')).toBeSameArrayAs(['H', 'I']);
              expect(shout('abc')).toBeSameArrayAs(['A', 'B', 'C']);
              expect(shout('z')).toBeSameArrayAs(['Z']);
              expect(shout('')).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'totalTests',
        title: `function "total"`,
        instructions: `Make a function named "total" that takes one argument, an array of numbers. Using a for...of loop, return the sum of all the numbers. Example: total([1, 2, 3]) returns 6`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(total).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(total).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(total).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(total).withArgs([1, 2]).toReturnNumber();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(total([1, 2, 3])).toBe(6);
              expect(total([10, 20, 30])).toBe(60);
              expect(total([0])).toBe(0);
              expect(total([])).toBe(0);
              expect(total([100, 1])).toBe(101);
            } }
        ],
      },
      { type: 'test', key: 'addOneTests',
        title: `function "addOne"`,
        instructions: `Make a function named "addOne" that takes one argument, an array of numbers. Using a for...of loop, return a new array with 1 added to each number. Example: addOne([1, 2, 3]) returns [2, 3, 4]`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(addOne).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(addOne).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(addOne).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(addOne).withArgs([1, 2]).toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(addOne([1, 2, 3])).toBeSameArrayAs([2, 3, 4]);
              expect(addOne([0, 0, 0])).toBeSameArrayAs([1, 1, 1]);
              expect(addOne([9])).toBeSameArrayAs([10]);
              expect(addOne([])).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'makeStringTests',
        title: `function "makeString"`,
        instructions: `Make a function named "makeString" that takes one argument, an array of strings. Using a for...of loop, return a single string with all items concatenated together. Example: makeString(["hello", " ", "world"]) returns "hello world"`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeString).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeString).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(makeString).takesXArguments(1);
            } },
          { description: `returns a string`, test: () => {
              expect(makeString).withArgs(['a', 'b']).toReturnString();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(makeString(['hello', ' ', 'world'])).toBe('hello world');
              expect(makeString(['a', 'b', 'c'])).toBe('abc');
              expect(makeString(['one'])).toBe('one');
              expect(makeString([])).toBe('');
            } }
        ],
      }
    ],
  },
  {
    id: '15',
    title: 'If Statements',
    help: 'https://www.w3schools.com/js/js_if_else.asp',
    items: [
      { type: 'lesson', key: 'lesson-if-statements',
        title: 'If Statements',
        text: `An <b>if statement</b> runs a block of code only if a condition is true.<br><br>

The condition goes inside the parentheses. If it evaluates to <b>true</b>, the code inside the curly braces runs. If it's <b>false</b>, it's skipped.<br><br>

You can compare values using operators:<br>
<b>==</b> equal to<br>
<b>!=</b> not equal to<br>
<b>&gt;</b> greater than<br>
<b>&lt;</b> less than<br>
<b>&gt;=</b> greater than or equal to<br>
<b>&lt;=</b> less than or equal to<br><br>

You can also use <b>!</b> (NOT) to flip a condition — <b>!true</b> is false, <b>!false</b> is true.<br><br>

Try running the code!`,
        sampleCode: `var age = 20;

if (age >= 18) {
  console.log("you are an adult");
}

if (age < 18) {
  console.log("you are not an adult");
}

if (!false) {
  console.log("not false is true!");
}`,
      },
      { type: 'test', key: 'ifTrueTests',
        title: `if (true)`,
        instructions: `Write an if statement with the condition "true". Inside it, console.log the string "it's true".`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `if statement has "true" argument`, test: () => {
              expectCode().toUseIfTrue();
            } }
        ],
      },
      { type: 'test', key: 'ifFalseTests',
        title: `if (false)`,
        instructions: `Write an if statement with the condition "false". Inside it, console.log the string "you shouldn't see this". Nothing should appear in the terminal.`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `has a console.log inside it`, test: () => {
              expectCode().toContain(`console.log(`);
            } },
          { description: `has "you shouldn't see this" as argument for console.log()`, test: () => {
              expectCode().toContain(`console.log("you shouldn't see this")`);
            } },
          { description: `does not log anything`, test: () => {
              expectConsole().notToHaveLogged();
            } }
        ],
      },
      { type: 'test', key: 'ifNotFalseTests',
        title: `if NOT (false)`,
        instructions: `Write an if statement with the condition "!false". Inside it, console.log the string "you should see this!".`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `if statement has "!" (NOT) before the "false" argument`, test: () => {
              expectCode().toUseIfWithNot();
            } },
          { description: `has a console.log`, test: () => {
              expectCode().toContain(`console.log(`);
            } },
          { description: `has "you should see this" as argument for console.log()`, test: () => {
              expectCode().toContain(`console.log("you should see this")`);
            } },
          { description: `logs "you should see this"`, test: () => {
              expectConsole().toHaveLogged('you should see this');
            } }
        ],
      },
      { type: 'test', key: 'numberComparisonTests',
        title: `number comparison`,
        instructions: `Write if (5 > 3) and inside it console.log the string "five is greater than three".`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the > operator`, test: () => {
              expectCode().toUseOperator('>');
            } },
          { description: `logs "five is greater than three"`, test: () => {
              expectConsole().toHaveLogged('five is greater than three');
            } }
        ],
      },
      { type: 'test', key: 'variableComparisonTests',
        title: `variable comparison`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 3. Write if (a > b) and inside it console.log the string "five is greater than three".`,
        sampleCode: ``,
        tests: [
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 3`, test: () => {
              expect(b).toBe(3);
            } },
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the > operator`, test: () => {
              expectCode().toUseOperator('>');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `logs "five is greater than three"`, test: () => {
              expectConsole().toHaveLogged('five is greater than three');
            } }
        ],
      },
      { type: 'test', key: 'equalsComparisonTests',
        title: `equals ==`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 5. Write if (a == b) and inside it console.log the string "a and b are equal".`,
        sampleCode: ``,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the == operator`, test: () => {
              expectCode().toUseOperator('==');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 5`, test: () => {
              expect(b).toBe(5);
            } },
          { description: `logs "a and b are equal"`, test: () => {
              expectConsole().toHaveLogged('a and b are equal');
            } }
        ],
      },
      { type: 'test', key: 'notEqualsComparisonTests',
        title: `not equals !=`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 3. Write if (a != b) and inside it console.log the string "a and b are not equal".`,
        sampleCode: ``,
        tests: [
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 3`, test: () => {
              expect(b).toBe(3);
            } },
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the != operator`, test: () => {
              expectCode().toUseOperator('!=');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `logs "a and b are not equal"`, test: () => {
              expectConsole().toHaveLogged('a and b are not equal');
            } }
        ],
      }
    ],
  },
  {
    id: '16',
    title: 'String Concatenation',
    help: 'https://www.w3schools.com/js/js_string_methods.asp',
    items: [
      { type: 'lesson', key: 'lesson-concatenation',
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
      { type: 'test', key: 'stringPlusStringTests',
        title: `string + string`,
        instructions: `Declare variables a, b, and c. a is "camp", b is "fire", and c is a and b together using the "+" operator.`,
        sampleCode: ``,
        tests: [
          { description: `a is declared`, test: () => {
            expect(a).toBeDeclared();
          } },
          { description: `a is a string`, test: () => {
            expect(a).toBeString();
          } },
          { description: `a is "camp"`, test: () => {
            expect(a).toBe('camp');
          } },
          { description: `b is declared`, test: () => {
            expect(b).toBeDeclared();
          } },
          { description: `b is a string`, test: () => {
            expect(b).toBeString();
          } },
          { description: `b is "fire"`, test: () => {
            expect(b).toBe('fire');
          } },
          { description: `c is declared`, test: () => {
            expect(c).toBeDeclared();
          } },
          { description: `c is a string`, test: () => {
            expect(c).toBeString();
          } },
          { description: `uses the + operator`, test: () => {
            expectCode().toUseOperator('+');
          } },
          { description: `c is "campfire"`, test: () => {
            expect(c).toBe('campfire');
          } }
        ],
      },
      { type: 'test', key: 'stringPlusNumberTests',
        title: `string + number`,
        instructions: `Declare a variable "message" by joining the string "I am " and the number 25 using the + operator.`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(message).toBeDeclared();
          } },
          { description: `is a string`, test: () => {
            expect(message).toBeString();
          } },
          { description: `uses the + operator`, test: () => {
            expectCode().toUseOperator('+');
          } },
          { description: `is "I am 25"`, test: () => {
            expect(message).toBe('I am 25');
          } }
        ],
      },
      { type: 'test', key: 'templateLiteralBasicTests',
        title: `template literal`,
        instructions: `Declare a variable "phrase" using a template literal (backtick string) containing the text "hello world".`,
        sampleCode: ``,
        tests: [
          { description: `is declared`, test: () => {
            expect(phrase).toBeDeclared();
          } },
          { description: `is a string`, test: () => {
            expect(phrase).toBeString();
          } },
          { description: `uses a template literal`, test: () => {
            expectCode().toUseTemplateLiteral();
          } },
          { description: `is "hello world"`, test: () => {
            expect(phrase).toBe('hello world');
          } }
        ],
      },
      { type: 'test', key: 'templateLiteralInterpolationTests',
        title: `template literal with interpolation`,
        instructions: `Declare a variable "greeting" set to "Hello". Then declare a variable "myFriend" set to "Beth". Declare a variable "greeting", using a template literal that interpolates "greeting" and "myFriend" to produce "Hello Beth!". (i.e. \`\${greeting} \${myFriend}\`))`,
        sampleCode: ``,
        tests: [
          { description: `"greeting" is declared`, test: () => {
            expect(greeting).toBeDeclared();
          } },
          { description: `"greeting" is a string`, test: () => {
            expect(greeting).toBeString();
          } },
          { description: `"greeting" is "Hello"`, test: () => {
            expect(greeting).toBe('Hello');
          } },
          { description: `"myFriend" is declared`, test: () => {
            expect(myFriend).toBeDeclared();
          } },
          { description: `"myFriend" is a string`, test: () => {
            expect(myFriend).toBeString();
          } },
          { description: `"myFriend" is "Beth"`, test: () => {
            expect(myFriend).toBe('Beth');
          } },
          { description: `"phrase" is declared`, test: () => {
            expect(phrase).toBeDeclared();
          } },
          { description: `"phrase" is a string`, test: () => {
            expect(phrase).toBeString();
          } },
          { description: `uses a template literal with interpolation`, test: () => {
            expectCode().toUseTemplateLiteralWithInterpolation();
          } },
          { description: `"phrase" is "Hello Beth!"`, test: () => {
            expect(phrase).toBe('Hello Beth!');
          } }
        ],
      }
    ],
  }
];

if (typeof module !== 'undefined') module.exports = allTests;
