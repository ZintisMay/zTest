const testSuite = {};

testSuite.plusTests = {
  title: `var "a" `,
  instructions: `Declare a variable "a" and it should be the number equal to 654321 plus 123456`,

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
  instructions: `Declare a variable "b" and it should be the number equal to 654321 minus 123456`,
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
  instructions: `Declare a variable "c" and it should be the number equal to 654321 times 123456`,
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
  instructions: `Declare a variable "d" and it should be the number equal to 654321 divided by 123456`,
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
  instructions: `Declare a variable "e" and it should be the number equal to 654321 modulus 123456`,
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
  instructions: `Declare a variable "f" and it should be the number equal to 2 to the 20th power`,
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
