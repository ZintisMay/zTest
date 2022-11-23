let zTestSuite = {};
zTestSuite.returnNumberTests = {
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
};

zTestSuite.returnStringTests = {
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
};

zTestSuite.returnTrueTests = {
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
};

zTestSuite.returnFalseTests = {
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
};

zTestSuite.returnArrayTests = {
  title: `function "returnArray"`,
  instructions: `Make a function named "returnArray" that returns an array.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnArray).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnArray).toBeFunction();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(returnArray).toReturnArray();
      },
    },
  ],
};

zTestSuite.returnObjectTests = {
  title: `function "returnObject"`,
  instructions: `Make a function named "returnObject" that returns an object.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(returnObject).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(returnObject).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(returnObject).toBeFunction();
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(returnObject).toReturnObject();
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
