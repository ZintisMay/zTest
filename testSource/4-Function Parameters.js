const test = {
  id: '4',
  title: 'Function Parameters',
  help: 'https://www.w3schools.com/js/js_function_parameters.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-2',
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
    {
      type: 'lesson',
      key: 'lesson-2b',
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
    {
      type: 'lesson',
      key: 'lesson-3',
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
    {
      type: 'test',
      key: 'doubleTests',
      title: `function "double"`,
      instructions: `Make a function named "double" that takes one argument, a number. It should return double the number.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(double).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(double).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(double).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(double).takesXArguments(1);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(double).withArgs(1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(double).withArgs(1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(double).withArgs(2).toReturn(4);
            expect(double).withArgs(-2).toReturn(-4);
            expect(double).withArgs(444).toReturn(888);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'addTests',
      title: `function "add"`,
      instructions: `Make a function named "add" that takes two arguments, both numbers. It should return the sum of those numbers.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(add).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(add).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(add).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(add).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(add).withArgs(1, 1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(add).withArgs(1, 1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(add).withArgs(1, 1).toReturn(2);
            expect(add).withArgs(-1, 1).toReturn(0);
            expect(add).withArgs(1000, 234).toReturn(1234);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'subtractTests',
      title: `function "subtract"`,
      instructions: `Make a function named "subtract" that takes two arguments, both numbers. It should return the first number minus the second.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(subtract).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(subtract).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(subtract).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(subtract).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(subtract).withArgs(1, 1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(subtract).withArgs(1, 1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(subtract).withArgs(1, 1).toReturn(0);
            expect(subtract).withArgs(-1, 1).toReturn(-2);
            expect(subtract).withArgs(1000, 234).toReturn(766);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'multiplyTests',
      title: `function "multiply"`,
      instructions: `Make a function named "multiply" that takes two arguments, both numbers. It should return the numbers multiplied together.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(multiply).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(multiply).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(multiply).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(multiply).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(multiply).withArgs(1, 1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(multiply).withArgs(1, 1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(multiply).withArgs(2, 3).toReturn(6);
            expect(multiply).withArgs(-2, 3).toReturn(-6);
            expect(multiply).withArgs(1000, 234).toReturn(234000);
            expect(multiply).withArgs(1, 0).toReturn(0);
            expect(multiply).withArgs(0, 0).toReturn(0);
            expect(multiply).withArgs(-2, -3).toReturn(6);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'divideTests',
      title: `function "divide"`,
      instructions: `Make a function named "divide" that takes two arguments, both numbers. It should return the first number divided by the second.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(divide).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(divide).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(divide).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(divide).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(divide).withArgs(1, 1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(divide).withArgs(1, 1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(divide).withArgs(1, 1).toReturn(1);
            expect(divide).withArgs(10, 20).toReturn(0.5);
            expect(divide).withArgs(100, 0).toReturn(Infinity);
            expect(divide).withArgs(-4, 2).toReturn(-2);
            expect(divide).withArgs(150, -1).toReturn(-150);
            expect(divide).withArgs(4, 3).toReturn(1.3333333333333333);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'exponentTests',
      title: `function "exponent"`,
      instructions: `Make a function named "exponent" that takes two arguments, both numbers. It should return the first number to the power of the second.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(exponent).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(exponent).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(exponent).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(exponent).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(exponent).withArgs(1, 1).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(exponent).withArgs(1, 1).toReturnNumber();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(exponent).withArgs(4, 3).toReturn(64);
            expect(exponent).withArgs(5, 5).toReturn(3125);
            expect(exponent).withArgs(100, 0).toReturn(1);
            expect(exponent).withArgs(-4, 2).toReturn(16);
            expect(exponent).withArgs(3, -2).toReturn(0.1111111111111111);
            expect(exponent).withArgs(0, 0).toReturn(1);
          },
        },
      ],
    },
    // {
    //   type: 'test',
    //   key: 'combineStringsTests',
    //   title: `function "combineStrings"`,
    //   instructions: `Make a function named "combineStrings" that takes two arguments, both strings. It should return a string that is both arguments combined.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(combineStrings).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(combineStrings).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(combineStrings).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes two arguments`,
    //       test: () => {
    //         expect(combineStrings).takesXArguments(2);
    //       },
    //     },
    //     {
    //       description: `returns something`,
    //       test: () => {
    //         expect(combineStrings).withArgs(`a`, `b`).toReturnSomething();
    //       },
    //     },
    //     {
    //       description: `returns a string`,
    //       test: () => {
    //         expect(combineStrings).withArgs(`a`, `b`).toReturnString();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(combineStrings).withArgs(`a`, `b`).toReturn(`ab`);
    //         expect(combineStrings).withArgs(`cat`, ``).toReturn(`cat`);
    //         expect(combineStrings).withArgs(``, ``).toReturn(``);
    //         expect(combineStrings).withArgs(`cat`, null).toReturn(`catnull`);
    //         expect(combineStrings).withArgs(`b`, `a`).toReturn(`ba`);
    //         expect(combineStrings).withArgs(`4`, `2`).toReturn(`42`);
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'test',
    //   key: 'combineArraysTests',
    //   title: `function "combineArrays"`,
    //   instructions: `Make a function named "combineArrays" that takes two arguments, both arrays. It should return an array with the contents of the first, then second array within it.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(combineArrays).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(combineArrays).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(combineArrays).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes two arguments`,
    //       test: () => {
    //         expect(combineArrays).takesXArguments(2);
    //       },
    //     },
    //     {
    //       description: `returns something`,
    //       test: () => {
    //         expect(combineArrays).withArgs([1], [2]).toReturnSomething();
    //       },
    //     },
    //     {
    //       description: `returns an array`,
    //       test: () => {
    //         expect(combineArrays).withArgs([1], [2]).toReturnArray();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(combineArrays).withArgs([1], [2]).toReturn([1, 2]);
    //         expect(combineArrays)
    //           .withArgs([`cat`], [`dog`])
    //           .toReturn([`cat`, `dog`]);
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'test',
    //   key: 'combineObjectsTests',
    //   title: `function "combineObjects"`,
    //   instructions: `Make a function named "combineObjects" that takes two arguments, both objects. It should return an object with the key/value pairs of both arguments. (Look up "spread operator" or "Object.assign()")`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(combineObjects).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(combineObjects).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(combineObjects).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes two arguments`,
    //       test: () => {
    //         expect(combineObjects).takesXArguments(2);
    //       },
    //     },
    //     {
    //       description: `returns something`,
    //       test: () => {
    //         expect(combineObjects).withArgs(1, 1).toReturnSomething();
    //       },
    //     },
    //     {
    //       description: `returns an object`,
    //       test: () => {
    //         expect(combineObjects).withArgs(1, 1).toReturnObject();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(combineObjects)
    //           .withArgs({ 1: `1` }, { 2: `2` })
    //           .toReturn({ 1: `1`, 2: `2` });
    //         expect(combineObjects)
    //           .withArgs({ name: `John` }, { age: `50` })
    //           .toReturn({ name: `John`, age: `50` });
    //       },
    //     },
    //   ],
    // },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
