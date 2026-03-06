zTestSuite = {};
zTestSuite.addTests = {
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
        expect(add).withArgs(1, 1).toReturn(2);
        expect(add).withArgs(1, 1).toReturn(2);
        expect(add).withArgs(1, 1).toReturn(2);
      },
    },
  ],
};

zTestSuite.subtractTests = {
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
        expect(subtract).withArgs(1, 1).toReturn(0);
        expect(subtract).withArgs(1, 1).toReturn(0);
        expect(subtract).withArgs(1, 1).toReturn(0);
      },
    },
  ],
};

zTestSuite.multiplyTests = {
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
};

zTestSuite.divideTests = {
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
};

zTestSuite.exponentTests = {
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
};

zTestSuite.combineStringsTests = {
  title: `function "combineStrings"`,
  instructions: `Make a function named "combineStrings" that takes two arguments, both strings. It should return a string that is both arguments combined.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(combineStrings).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(combineStrings).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(combineStrings).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(combineStrings).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(combineStrings).withArgs(`a`, `b`).toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(combineStrings).withArgs(`a`, `b`).toReturnString();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(combineStrings).withArgs(`a`, `b`).toReturn(`ab`);
        expect(combineStrings).withArgs(`cat`, ``).toReturn(`cat`);
        expect(combineStrings).withArgs(``, ``).toReturn(``);
        expect(combineStrings).withArgs(`cat`, null).toReturn(`catnull`);
        expect(combineStrings).withArgs(`b`, `a`).toReturn(`ba`);
        expect(combineStrings).withArgs(`4`, `2`).toReturn(`42`);
      },
    },
  ],
};

zTestSuite.combineArraysTests = {
  title: `function "combineArrays"`,
  instructions: `Make a function named "combineArrays" that takes two arguments, both arrays. It should return an array with the contents of the first, then second array within it.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(combineArrays).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(combineArrays).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(combineArrays).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(combineArrays).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(combineArrays).withArgs([1], [2]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(combineArrays).withArgs([1], [2]).toReturnArray();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(combineArrays).withArgs([1], [2]).toReturn([1, 2]);
        expect(combineArrays)
          .withArgs([`cat`], [`dog`])
          .toReturn([`cat`, `dog`]);
      },
    },
  ],
};

zTestSuite.combineObjectsTests = {
  title: `function "combineObjects"`,
  instructions: `Make a function named "combineObjects" that takes two arguments, both objects. It should return an object with the key/value pairs of both arguments. (Look up "spread operator" or "Object.assign()")`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(combineObjects).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(combineObjects).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(combineObjects).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(combineObjects).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(combineObjects).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(combineObjects).withArgs(1, 1).toReturnObject();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(combineObjects)
          .withArgs({ 1: `1` }, { 2: `2` })
          .toReturn({ 1: `1`, 2: `2` });
        expect(combineObjects)
          .withArgs({ name: `John` }, { age: `50` })
          .toReturn({ name: `John`, age: `50` });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
