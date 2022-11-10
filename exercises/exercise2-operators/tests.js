const testSuite = {};

testSuite.plusTests = {
  title: "var 'a' tests",
  tests: [
    {
      description: `'a' is declared`,
      test: () => {
        expect(a).toBeDeclared();
      },
    },
    {
      description: `'a' has a value`,
      test: () => {
        expect(a).toHaveValue();
      },
    },
    {
      description: `'a' is a number`,
      test: () => {
        expect(a).toBeNumber();
      },
    },
    {
      description: `'a' is 654321 + 123456`,
      test: () => {
        expect(a).toBe(654321 + 123456);
      },
    },
  ],
};
testSuite.minusTests = {
  title: "var 'b' tests",
  tests: [
    {
      description: `'b' is declared`,
      test: () => {
        expect(b).toBeDeclared();
      },
    },
    {
      description: `'b' has a value`,
      test: () => {
        expect(b).toHaveValue();
      },
    },
    {
      description: `'b' is a number`,
      test: () => {
        expect(b).toBeNumber();
      },
    },
    {
      description: `'b' is 654321 - 123456`,
      test: () => {
        expect(b).toBe(654321 - 123456);
      },
    },
  ],
};
testSuite.multiplyTests = {
  title: "var 'c' tests",
  tests: [
    {
      description: `'c' is declared`,
      test: () => {
        expect(c).toBeDeclared();
      },
    },
    {
      description: `'c' has a value`,
      test: () => {
        expect(c).toHaveValue();
      },
    },
    {
      description: `'c' is a number`,
      test: () => {
        expect(c).toBeNumber();
      },
    },
    {
      description: `'c' is 654321 * 123456`,
      test: () => {
        expect(c).toBe(654321 * 123456);
      },
    },
  ],
};
testSuite.divideTests = {
  title: "var 'd' tests",
  tests: [
    {
      description: `'d' is declared`,
      test: () => {
        expect(d).toBeDeclared();
      },
    },
    {
      description: `'d' has a value`,
      test: () => {
        expect(d).toHaveValue();
      },
    },
    {
      description: `'d' is a number`,
      test: () => {
        expect(d).toBeNumber();
      },
    },
    {
      description: `'d' is 654321 / 123456`,
      test: () => {
        expect(d).toBe(654321 / 123456);
      },
    },
  ],
};
testSuite.modulusTests = {
  title: "var 'e' tests",
  tests: [
    {
      description: `'e' is declared`,
      test: () => {
        expect(e).toBeDeclared();
      },
    },
    {
      description: `'e' has a value`,
      test: () => {
        expect(e).toHaveValue();
      },
    },
    {
      description: `'e' is a number`,
      test: () => {
        expect(e).toBeNumber();
      },
    },
    {
      description: `'e' is 654321 % 123456`,
      test: () => {
        expect(e).toBe(654321 % 123456);
      },
    },
  ],
};
testSuite.exponentTests = {
  title: "var 'f' tests",
  tests: [
    {
      description: `'f' is declared`,
      test: () => {
        expect(f).toBeDeclared();
      },
    },
    {
      description: `'f' has a value`,
      test: () => {
        expect(f).toHaveValue();
      },
    },
    {
      description: `'f' is a number`,
      test: () => {
        expect(f).toBeNumber();
      },
    },
    {
      description: `'f' is 2 ** 20`,
      test: () => {
        expect(f).toBe(2 ** 20);
      },
    },
  ],
};

Z_T.testAll(testSuite);
