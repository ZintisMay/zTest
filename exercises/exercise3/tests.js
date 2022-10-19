const randTests = {
  title: "function rand",
  tests: [
    {
      description: `rand is declared`,
      test: () => {
        expect(rand).toBeDeclared();
      },
    },
    {
      description: `rand has a value`,
      test: () => {
        expect(rand).toHaveValue();
      },
    },
    {
      description: `rand uses parseInt`,
      test: () => {
        expect(rand).withArgs(5).toUseMethod("parseInt");
      },
    },
    {
      description: `rand uses Math.random`,
      test: () => {
        expect(rand).withArgs(5).toUseMethod("Math", "random");
      },
    },
  ],
};
const changeToIntTests = {
  title: "function changeToIntTests",
  tests: [
    {
      description: `changeToIntTests is declared`,
      test: () => {
        expect(changeToIntTests).toBeDeclared();
      },
    },
  ],
};
const concatArraysTests = {
  title: "function concatArraysTests",
  tests: [
    {
      description: `concatArraysTests is declared`,
      test: () => {
        expect(concatArraysTests).toBeDeclared();
      },
    },
    {
      description: `concatArraysTests has a value`,
      test: () => {
        expect(concatArraysTests).toHaveValue();
      },
    },
    {
      description: `concatArraysTests is a function`,
      test: () => {
        expect(concatArraysTests).toBeFunction();
      },
    },
    {
      description: `concatArraysTests is declared`,
      test: () => {
        expect(concatArrays)
          .withArgs([1], [2])
          .toUseMethod("Array", "prototype", "push");
      },
    },
  ],
};

// rand;
// changeToInt;
// concatArrays;

const zTestSuite = {
  randTests,
  changeToIntTests,
  concatArraysTests,
};

Z_T.testAll(zTestSuite);
