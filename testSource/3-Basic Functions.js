const test = {
  id: '3',
  title: 'Functions',
  help: 'https://www.w3schools.com/js/js_function_intro.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'Functions',
      text: `A function is a reusable block of code that you can run whenever you need it.<br><br>

You define a function with the <b>function</b> keyword, give it a name, some parentheses <b>( )</b>, and put the code inside curly braces <b>{ }</b>.<br><br>

To run the function, you <b>call</b> it by writing its name followed by <b>parenthesis ( )</b>. Example: doSomething()<br><br>

Try running the code, notice how the function only runs when called!<br><br>

<i>(There are other ways to make functions, we'll talk about those later, i.e. arrow functions and function expressions)</i>`,
      sampleCode: `function sayHello() {
  console.log("Hello!");
}

// The function is defined but hasn't run yet.
// Call it like this:
sayHello();
sayHello();
sayHello();`,
    },
    {
      type: 'lesson',
      key: 'lesson-1',
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
    {
      type: 'test',
      key: 'returnNumberTests',
      title: `function "returnNumber"`,
      instructions: `Make a function named "returnNumber" that returns a number (any number).`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(returnNumber).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(returnNumber).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(returnNumber).toBeFunction();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(returnNumber).toReturnNumber();
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'returnStringTests',
      title: `function "returnString"`,
      instructions: `Make a function named "returnString" that returns a string (any string).`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(returnString).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(returnString).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(returnString).toBeFunction();
          },
        },
        {
          description: `returns a string`,
          test: () => {
            expect(returnString).toReturnString();
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'returnTrueTests',
      title: `function "returnTrue"`,
      instructions: `Make a function named "returnTrue" that returns the boolean true.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(returnTrue).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(returnTrue).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(returnTrue).toBeFunction();
          },
        },
        {
          description: `returns a boolean`,
          test: () => {
            expect(returnTrue).toReturnBoolean();
          },
        },
        {
          description: `returns correct value true`,
          test: () => {
            expect(returnTrue).toReturn(true);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'returnFalseTests',
      title: `function "returnFalse"`,
      instructions: `Make a function named "returnFalse" that returns the boolean false.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(returnFalse).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(returnFalse).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(returnFalse).toBeFunction();
          },
        },
        {
          description: `returns a boolean`,
          test: () => {
            expect(returnFalse).toReturnBoolean();
          },
        },
        {
          description: `returns correct value false`,
          test: () => {
            expect(returnFalse).toReturn(false);
          },
        },
      ],
    },
    // {
    //   type: 'test',
    //   key: 'returnArrayTests',
    //   title: `function "returnArray"`,
    //   instructions: `Make a function named "returnArray" that returns an array.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(returnArray).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(returnArray).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(returnArray).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `returns an array`,
    //       test: () => {
    //         expect(returnArray).toReturnArray();
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'test',
    //   key: 'returnObjectTests',
    //   title: `function "returnObject"`,
    //   instructions: `Make a function named "returnObject" that returns an object.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(returnObject).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(returnObject).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(returnObject).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `returns an object`,
    //       test: () => {
    //         expect(returnObject).toReturnObject();
    //       },
    //     },
    //   ],
    // },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
