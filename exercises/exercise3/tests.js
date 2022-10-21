const zTestSuite = {};
zTestSuite.randTests = {
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
        expect(rand).toUseFunction("parseInt");
      },
    },
    {
      description: `rand uses Math.random`,
      test: () => {
        expect(rand).toUseFunction("Math", "random");
      },
    },
    {
      description: `rand returns within range`,
      test: () => {
        expect(rand).withArgs(5).toReturnBetween(1, 5);
        expect(rand).withArgs(5).toReturnBetween(1, 5);
        expect(rand).withArgs(5).toReturnBetween(1, 5);
        expect(rand).withArgs(5).toReturnBetween(1, 5);
        expect(rand).withArgs(5).toReturnBetween(1, 5);
      },
    },
  ],
};
zTestSuite.changeToIntTests = {
  title: "function changeToInt",
  tests: [
    {
      description: `changeToInt is declared`,
      test: () => {
        expect(changeToInt).toBeDeclared();
      },
    },
    {
      description: `changeToInt returns something`,
      test: () => {
        expect(changeToInt).toReturnSomething();
      },
    },
    {
      description: `changeToInt returns a number`,
      test: () => {
        expect(changeToInt).toReturnNumber();
      },
    },
    {
      description: `changeToInt returns correct value`,
      test: () => {
        expect(changeToInt).withArgs("3").toReturn(3);
        expect(changeToInt).withArgs("100").toReturn(100);
        expect(changeToInt).withArgs("1122").toReturn(1122);
        expect(changeToInt).withArgs("789123").toReturn(789123);
        expect(changeToInt).withArgs("0").toReturn(0);
      },
    },
  ],
};
zTestSuite.concatArraysTests = {
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

Z_T.testAll(zTestSuite);
