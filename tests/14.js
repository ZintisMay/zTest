zTestSuite = {};
zTestSuite.additionTests = {
  title: `function "addition"`,
  instructions: `Make a function named "addition" that takes three arguments, both numbers. It should return the sum of those numbers.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(addition).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(addition).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(addition).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(addition).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(addition).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(addition).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(addition).withArgs(1, 1).toReturn(2);
        expect(addition).withArgs(-1, 1).toReturn(0);
        expect(addition).withArgs(1000, 234).toReturn(1234);
      },
    },
  ],
};

zTestSuite.subtractionTests = {
  title: `function "subtraction"`,
  instructions: `Make a function named "subtraction" that takes two arguments, both numbers. It should return the first number minus the second.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(subtraction).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(subtraction).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(subtraction).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(subtraction).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(subtraction).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(subtraction).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(subtraction).withArgs(1000, 234).toReturn(766);
      },
    },
  ],
};

zTestSuite.multiplicationTests = {
  title: `function "multiplication"`,
  instructions: `Make a function named "multiplication" that takes two arguments, both numbers. It should return the numbers multiplied together.`,

  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(multiplication).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(multiplication).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(multiplication).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(multiplication).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(multiplication).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(multiplication).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(multiplication).withArgs(2, 3).toReturn(6);
        expect(multiplication).withArgs(-2, 3).toReturn(-6);
        expect(multiplication).withArgs(1000, 234).toReturn(234000);
        expect(multiplication).withArgs(1, 0).toReturn(0);
        expect(multiplication).withArgs(0, 0).toReturn(0);
        expect(multiplication).withArgs(-2, -3).toReturn(6);
      },
    },
  ],
};

zTestSuite.divisionTests = {
  title: `function "division"`,
  instructions: `Make a function named "division" that takes two arguments, both numbers. It should return the first number divisiond by the second.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(division).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(division).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(division).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(division).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(division).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(division).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(division).withArgs(1, 1).toReturn(1);
        expect(division).withArgs(10, 20).toReturn(0.5);
        expect(division).withArgs(100, 0).toReturn(Infinity);
        expect(division).withArgs(-4, 2).toReturn(-2);
        expect(division).withArgs(150, -1).toReturn(-150);
        expect(division).withArgs(4, 3).toReturn(1.3333333333333333);
      },
    },
  ],
};

zTestSuite.exponentialTests = {
  title: `function "exponential"`,
  instructions: `Make a function named "exponential" that takes two arguments, both numbers. It should return the first number to the power of the second.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(exponential).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(exponential).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(exponential).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(exponential).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(exponential).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(exponential).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(exponential).withArgs(4, 3).toReturn(64);
        expect(exponential).withArgs(5, 5).toReturn(3125);
        expect(exponential).withArgs(100, 0).toReturn(1);
        expect(exponential).withArgs(-4, 2).toReturn(16);
        expect(exponential).withArgs(3, -2).toReturn(0.1111111111111111);
        expect(exponential).withArgs(0, 0).toReturn(1);
      },
    },
  ],
};

zTestSuite.addStringsTogetherTests = {
  title: `function "addStringsTogether"`,
  instructions: `Make a function named "addStringsTogether" that takes two arguments, both strings. It should return a string that is both arguments combined.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(addStringsTogether).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(addStringsTogether).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(addStringsTogether).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(addStringsTogether).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(addStringsTogether).withArgs(`a`, `b`).toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(addStringsTogether).withArgs(`a`, `b`).toReturnString();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(addStringsTogether).withArgs(`a`, `b`).toReturn(`ab`);
        expect(addStringsTogether).withArgs(`cat`, ``).toReturn(`cat`);
        expect(addStringsTogether).withArgs(``, ``).toReturn(``);
        expect(addStringsTogether).withArgs(`cat`, null).toReturn(`catnull`);
        expect(addStringsTogether).withArgs(`b`, `a`).toReturn(`ba`);
        expect(addStringsTogether).withArgs(`4`, `2`).toReturn(`42`);
      },
    },
  ],
};

zTestSuite.combineTwoArraysTests = {
  title: `function "combineTwoArrays"`,
  instructions: `Make a function named "combineTwoArrays" that takes two arguments, both arrays. It should return an array with the contents of the first, then second array within it.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(combineTwoArrays).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(combineTwoArrays).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(combineTwoArrays).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(combineTwoArrays).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(combineTwoArrays).withArgs([1], [2]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(combineTwoArrays).withArgs([1], [2]).toReturnArray();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(combineTwoArrays).withArgs([1], [2]).toReturn([1, 2]);
        expect(combineTwoArrays)
          .withArgs([`cat`], [`dog`])
          .toReturn([`cat`, `dog`]);
      },
    },
  ],
};

zTestSuite.combineTwoObjectsTests = {
  title: `function "combineTwoObjects"`,
  instructions: `Make a function named "combineTwoObjects" that takes two arguments, both objects. It should return an object with the key/value pairs of both arguments. (Look up "spread operator" or "Object.assign()")`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(combineTwoObjects).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(combineTwoObjects).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(combineTwoObjects).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(combineTwoObjects).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(combineTwoObjects).withArgs(1, 1).toReturnSomething();
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(combineTwoObjects).withArgs(1, 1).toReturnObject();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(combineTwoObjects)
          .withArgs({ 1: `1` }, { 2: `2` })
          .toReturn({ 1: `1`, 2: `2` });
        expect(combineTwoObjects)
          .withArgs({ name: `John` }, { age: `50` })
          .toReturn({ name: `John`, age: `50` });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
