/* Six tests total 

Concerns:
  * The boilerplate code included some features that I overwrote. I want to make sure you're not insistent on those features.
    * Eg, see ".withArgs()" in
      {
        description: `REPLACEME returns a number`,
        test: () => {
          expect(REPLACEME).withArgs(1, 1).toReturnNumber();
        },
      },

===Standard tests (Exercise 1)===

testSuite.varATests = {
  title: "var 'a' tests",
  tests: [
    {
      description: `a is declared`,
      test: () => {
        expect(a).toBeDeclared();
      },
    },
    {
      description: `a has a value`,
      test: () => {
        expect(a).toHaveValue();
      },
    },
    {
      description: `a is a number`,
      test: () => {
        expect(a).toBeNumber();
      },
    },
    {
      description: `a is 1`,
      test: () => {
        expect(a).toBe(1);
      },
    },
  ],
};

===ORIGINAL===

zTestSuite = {};
zTestSuite.REPLACEME = {
  title: "function REPLACEME",
  tests: [
    {
      description: `REPLACEME is declared`,
      test: () => {
        expect(REPLACEME).toBeDeclared();
      },
    },
    {
      description: `REPLACEME has a value`,
      test: () => {
        expect(REPLACEME).toHaveValue();
      },
    },
    {
      description: `REPLACEME is a function`,
      test: () => {
        expect(REPLACEME).toBeFunction();
      },
    },
    {
      description: `REPLACEME takes two arguments`,
      test: () => {
        expect(REPLACEME).takesXArguments(2);
      },
    },
    {
      description: `REPLACEME returns a number`,
      test: () => {
        expect(REPLACEME).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `REPLACEME returns correct values`,
      test: () => {
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(-1, 1).toReturn(0);
        expect(REPLACEME).withArgs(1000, 234).toReturn(1234);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);

*/

let zTestSuite = {};
zTestSuite.returnNumber = {
  title: "function returnNumber",
  tests: [
    {
      description: `returnNumber is declared`,
      test: () => {
        expect(returnNumber).toBeDeclared();
      },
    },
    {
      description: `returnNumber has a value`,
      test: () => {
        expect(returnNumber).toHaveValue();
      },
    },
    {
      description: `returnNumber is a function`,
      test: () => {
        expect(returnNumber).toBeFunction();
      },
    },
    {
      description: `returnNumber returns a number`,
      test: () => {
        expect(returnNumber).toReturnNumber();
      },
    },
  ],
};

zTestSuite.returnString = {
  title: "function returnString",
  tests: [
    {
      description: `returnString is declared`,
      test: () => {
        expect(returnString).toBeDeclared();
      },
    },
    {
      description: `returnString has a value`,
      test: () => {
        expect(returnString).toHaveValue();
      },
    },
    {
      description: `returnString is a function`,
      test: () => {
        expect(returnString).toBeFunction();
      },
    },
    {
      description: `returnString returns a string`,
      test: () => {
        expect(returnString).toReturnString();
      },
    },
  ],
};

zTestSuite.returnTrue = {
  title: "function returnTrue",
  tests: [
    {
      description: `returnTrue is declared`,
      test: () => {
        expect(returnTrue).toBeDeclared();
      },
    },
    {
      description: `returnTrue has a value`,
      test: () => {
        expect(returnTrue).toHaveValue();
      },
    },
    {
      description: `returnTrue is a function`,
      test: () => {
        expect(returnTrue).toBeFunction();
      },
    },
    {
      description: `returnTrue returns a boolean`,
      test: () => {
        expect(returnTrue).toReturnBoolean();
      },
    },
    {
      description: `returnTrue returns correct value ("true")`,
      test: () => {
        expect(returnTrue).toReturn(true);
      },
    },
  ],
};

zTestSuite.returnFalse = {
  title: "function returnFalse",
  tests: [
    {
      description: `returnFalse is declared`,
      test: () => {
        expect(returnFalse).toBeDeclared();
      },
    },
    {
      description: `returnFalse has a value`,
      test: () => {
        expect(returnFalse).toHaveValue();
      },
    },
    {
      description: `returnFalse is a function`,
      test: () => {
        expect(returnFalse).toBeFunction();
      },
    },
    {
      description: `returnFalse returns a boolean`,
      test: () => {
        expect(returnFalse).toReturnBoolean();
      },
    },
    {
      description: `returnFalse returns correct value ("false")`,
      test: () => {
        expect(returnFalse).toReturn(false);
      },
    },
  ],
};

zTestSuite.returnArray = {
  title: "function returnArray",
  tests: [
    {
      description: `returnArray is declared`,
      test: () => {
        expect(returnArray).toBeDeclared();
      },
    },
    {
      description: `returnArray has a value`,
      test: () => {
        expect(returnArray).toHaveValue();
      },
    },
    {
      description: `returnArray is a function`,
      test: () => {
        expect(returnArray).toBeFunction();
      },
    },
    {
      description: `returnArray returns an array`,
      test: () => {
        expect(returnArray).toReturnArray();
      },
    },
  ],
};

zTestSuite.returnObject = {
  title: "function returnObject",
  tests: [
    {
      description: `returnObject is declared`,
      test: () => {
        expect(returnObject).toBeDeclared();
      },
    },
    {
      description: `returnObject has a value`,
      test: () => {
        expect(returnObject).toHaveValue();
      },
    },
    {
      description: `returnObject is a function`,
      test: () => {
        expect(returnObject).toBeFunction();
      },
    },
    {
      description: `returnObject returns an object`,
      test: () => {
        expect(returnObject).toReturnObject();
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
