const testSuite = {};

testSuite.plusTests = {
  title: `var "a" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(a).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(a).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(a).toBeNumber();
      },
    },
    {
      description: `is 654321 + 123456`,
      test: () => {
        expect(a).toBe(654321 + 123456);
      },
    },
  ],
};
testSuite.minusTests = {
  title: `var "b" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(b).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(b).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(b).toBeNumber();
      },
    },
    {
      description: `is 654321 - 123456`,
      test: () => {
        expect(b).toBe(654321 - 123456);
      },
    },
  ],
};
testSuite.multiplyTests = {
  title: `var "c" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(c).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(c).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(c).toBeNumber();
      },
    },
    {
      description: `is 654321 * 123456`,
      test: () => {
        expect(c).toBe(654321 * 123456);
      },
    },
  ],
};
testSuite.divideTests = {
  title: `var "d" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(d).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(d).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(d).toBeNumber();
      },
    },
    {
      description: `is 654321 / 123456`,
      test: () => {
        expect(d).toBe(654321 / 123456);
      },
    },
  ],
};
testSuite.modulusTests = {
  title: `var "e" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(e).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(e).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(e).toBeNumber();
      },
    },
    {
      description: `is 654321 % 123456`,
      test: () => {
        expect(e).toBe(654321 % 123456);
      },
    },
  ],
};
testSuite.exponentTests = {
  title: `var "f" `,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(f).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(f).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(f).toBeNumber();
      },
    },
    {
      description: `is 2 ** 20`,
      test: () => {
        expect(f).toBe(2 ** 20);
      },
    },
  ],
};

Z_T.testAll(testSuite);
