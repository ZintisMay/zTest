let zTestSuite = {};

zTestSuite.returnANumberTests = {
  title: `function "returnANumber"`,
  instructions: `Make a function named "returnANumber" that returns a number (any number).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnANumber).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnANumber).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnANumber).toBeFunction();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(returnANumber).toReturnNumber();
      },
    },
  ],
};

zTestSuite.returnAStringTests = {
  title: `function "returnAString"`,
  instructions: `Make a function named "returnAString" that returns a string (any string).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnAString).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnAString).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnAString).toBeFunction();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(returnAString).toReturnString();
      },
    },
  ],
};

zTestSuite.returnsTrueTests = {
  title: `function "returnsTrue"`,
  instructions: `Make a function named "returnsTrue" that returns the boolean true.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnsTrue).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnsTrue).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnsTrue).toBeFunction();
      },
    },
    {
      description: `returns a boolean`,
      test: () => {
        expect(returnsTrue).toReturnBoolean();
      },
    },
    {
      description: `returns correct value true`,
      test: () => {
        expect(returnsTrue).toReturn(true);
      },
    },
  ],
};

zTestSuite.returnsFalseTests = {
  title: `function "returnsFalse"`,
  instructions: `Make a function named "returnsFalse" that returns the boolean false.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnsFalse).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnsFalse).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnsFalse).toBeFunction();
      },
    },
    {
      description: `returns a boolean`,
      test: () => {
        expect(returnsFalse).toReturnBoolean();
      },
    },
    {
      description: `returns correct value false`,
      test: () => {
        expect(returnsFalse).toReturn(false);
      },
    },
  ],
};

zTestSuite.returnAnArrayTests = {
  title: `function "returnAnArray"`,
  instructions: `Make a function named "returnAnArray" that returns an array.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnAnArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnAnArray).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnAnArray).toBeFunction();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(returnAnArray).toReturnArray();
      },
    },
  ],
};

zTestSuite.returnAnObjectTests = {
  title: `function "returnAnObject"`,
  instructions: `Make a function named "returnAnObject" that returns an object.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnAnObject).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnAnObject).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnAnObject).toBeFunction();
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(returnAnObject).toReturnObject();
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
