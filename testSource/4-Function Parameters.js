const test = {
  id: '4',
  title: 'Function Parameters',
  help: 'https://www.w3schools.com/js/js_function_parameters.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-2',
      title: 'Parameters',
      text: `Functions are more useful when you can pass information into them.<br><br>

<b>Parameters</b> are variables listed inside the <b>( )</b> when you declare a function.<br>→ <b>function hello( name ){ }</b><br><br>

When you <b>call</b> the function, you pass in an <b>argument</b> — the actual value.<br>→ <b>hello( "Alice" )</b><br><br>

Inside the function, <b>name</b> will be <b>"Alice"</b>. Call it again with a different argument and it becomes that instead.<br><br>

<b>console.log()</b> is a function! You've been using functions AND parameters this whole time!<br><br>

Try running the code and change the arguments!`,
      sampleCode: `function hello(name) {
  console.log("Hello, " + name + "!");
}

hello("Alice"); // Hello, Alice!
hello("Bob");   // Hello, Bob!`,
    },
    {
      type: 'lesson',
      key: 'lesson-2b',
      title: 'Naming Parameters',
      text: `Parameter names only exist inside the function. You name them like normal variables.<br><br>

For now, you can use parameters like "a" or "b" or "x". This is OK when you are first learning programming. There are better practices that we'll learn about those later.<br><br>
      
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

    {
      type: 'lesson',
      key: 'lesson-2c',
      title: 'Multiple Parameters',
      text: `Functions can have more than one parameter — just separate them with a <b>comma</b>.<br><br>

→ <b>function logBoth( word1, word2 ){ }</b><br><br>

When you call it, pass in the same number of arguments in the same order.<br><br>

Try running the code and swap the arguments around to see what changes!`,
      sampleCode: `function logBoth(word1, word2) {
  console.log(word1);
  console.log(word2);
}

logBoth("look", "up");
logBoth("oh", "my");`,
    },


    {
      type: 'test',
      key: 'fullNameTests',
      title: `function "fullName"`,
      instructions: `Make a function named "fullName" that takes two arguments: "first" and "last". It should return them combined with a space in between.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(fullName).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(fullName).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(fullName).takesXArguments(2);
          },
        },
        {
          description: `returns a string`,
          test: () => {
            expect(fullName).withArgs('John', 'Smith').toReturnString();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(fullName).withArgs('John', 'Smith').toReturn('John Smith');
            expect(fullName).withArgs('Alice', 'Jones').toReturn('Alice Jones');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'buildWordTests',
      title: `function "buildWord"`,
      instructions: `Make a function named "buildWord" that takes two arguments: "part1" and "part2". It should return them joined together as one word.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(buildWord).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(buildWord).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(buildWord).takesXArguments(2);
          },
        },
        {
          description: `returns a string`,
          test: () => {
            expect(buildWord).withArgs('sun', 'flower').toReturnString();
          },
        },
        {
          description: `returns correct values when called as buildWord("rain", "bow")`,
          test: () => {
            expect(buildWord).withArgs('rain', 'bow').toReturn('rainbow');
          },
        },
      ],
    },

    {
      type: 'lesson',
      key: 'lesson-2d',
      title: 'Missing Parameters',
      text: `If you call a function with fewer arguments than it has parameters, the missing ones become <b>undefined</b>.<br><br>

<b>undefined</b> is a special value in JavaScript that means "no value was given".<br><br>

<b>Generally</b> this won't happen. You'll try to write code and use functions so that parameters are not accidentally blank.<br><br>

Try running the code — notice what happens when the second argument is left out!`,
      sampleCode: `function greet(firstName, lastName) {
  console.log("my name is: " + firstName + " " + lastName);
}

greet("Alice", "Smith"); // both provided
greet("Bob"); // lastName is undefined
greet(); // both are undefined`,
    }, {
      type: 'test',
      key: 'logUndefinedTests',
      title: `log undefined`,
      instructions: `Write a function named "logBoth" that takes two parameters and console.logs each one.<br><br>Then call it with no arguments. i.e. logBoth();`,
      tests: [
        {
          description: `logBoth is declared`,
          test: () => {
            expect(logBoth).toBeDeclared();
          },
        },
        {
          description: `logBoth is a function`,
          test: () => {
            expect(logBoth).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(logBoth).takesXArguments(2);
          },
        },
        {
          description: `logged twice`,
          test: () => {
            expectConsole().toHaveLoggedXTimes(2);
          },
        },
        {
          description: `logged undefined twice`,
          test: () => {
            expectConsole().toHaveLoggedInOrder(undefined, undefined);
          },
        },
      ],
    },

  ],
};

if (typeof module !== 'undefined') module.exports = test;
