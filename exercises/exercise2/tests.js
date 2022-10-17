const varATests = {
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
        expect(a).toBeType("number");
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
const varArrayTests = {
  title: "var array tests",
  tests: [
    {
      description: `array is declared`,
      test: () => {
        expect(array).toBeDeclared();
      },
    },
    {
      description: `array has a value`,
      test: () => {
        expect(array).toHaveValue();
      },
    },
    {
      description: `array is an array`,
      test: () => {
        expect(array).toBeArray();
      },
    },
    {
      description: `array contains numbers 1,2,3`,
      test: () => {
        expect(array).toBeSameArrayAs([1, 2, 3]);
      },
    },
  ],
};

const varFunTests = {
  title: "var fun tests",
  tests: [
    {
      description: `fun is declared`,
      test: () => {
        expect(fun).toBeDeclared();
      },
    },
    {
      description: `fun has a value`,
      test: () => {
        expect(fun).toHaveValue();
      },
    },
    {
      description: `fun is an function`,
      test: () => {
        expect(fun).toBeFunction();
      },
    },
    {
      description: `fun returns an object`,
      test: () => {
        expect(fun).toReturnString();
      },
    },
    {
      description: `fun returns "Zintis"`,
      test: () => {
        expect(fun).toReturn("Zintis");
      },
    },
  ],
};

const zTestSuite = {
  varATests,
  varArrayTests,
  varFunTests,
};

Z_T.testAll(zTestSuite);
