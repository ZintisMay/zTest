const testSuite = {};

testSuite.plusTests = {
  title: `var "g" `,
  instructions: `Declare a variable "g" and it should be the number equal to 987654 plus 456789`,

  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(g).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(g).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(g).toBeNumber();
      },
    },
    {
      description: `is 987654 + 456789`,
      test: () => {
        expect(g).toBe(987654 + 456789);
      },
    },
  ],
};
testSuite.minusTests = {
  title: `var "h" `,
  instructions: `Declare a variable "h" and it should be the number equal to 987654 minus 456789`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(h).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(h).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(h).toBeNumber();
      },
    },
    {
      description: `is 987654 - 456789`,
      test: () => {
        expect(h).toBe(987654 - 456789);
      },
    },
  ],
};
testSuite.multiplyTests = {
  title: `var "m" `,
  instructions: `Declare a variable "m" and it should be the number equal to 987654 times 456789`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(m).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(m).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(m).toBeNumber();
      },
    },
    {
      description: `is 987654 * 456789`,
      test: () => {
        expect(m).toBe(987654 * 456789);
      },
    },
  ],
};
testSuite.divideTests = {
  title: `var "n" `,
  instructions: `Declare a variable "n" and it should be the number equal to 987654 divided by 456789`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(n).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(n).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(n).toBeNumber();
      },
    },
    {
      description: `is 987654 / 456789`,
      test: () => {
        expect(n).toBe(987654 / 456789);
      },
    },
  ],
};
testSuite.modulusTests = {
  title: `var "o" `,
  instructions: `Declare a variable "o" and it should be the number equal to 987654 modulus 456789`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(o).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(o).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(o).toBeNumber();
      },
    },
    {
      description: `is 987654 % 456789`,
      test: () => {
        expect(o).toBe(987654 % 456789);
      },
    },
  ],
};
testSuite.exponentTests = {
  title: `var "p" `,
  instructions: `Declare a variable "p" and it should be the number equal to 10 to the 5th power`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(p).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(p).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(p).toBeNumber();
      },
    },
    {
      description: `is 10 ** 5`,
      test: () => {
        expect(p).toBe(10 ** 5);
      },
    },
  ],
};

Z_T.testAll(testSuite);
