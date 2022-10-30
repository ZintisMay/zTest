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
      description: `rand uses Math.random`,
      test: () => {
        expect(rand).callsFunction(Math, "random");
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
      description: `concatArrays is declared`,
      test: () => {
        expect(concatArrays).toBeDeclared();
      },
    },
    {
      description: `concatArrays has a value`,
      test: () => {
        expect(concatArrays).toHaveValue();
      },
    },
    {
      description: `concatArrays is a function`,
      test: () => {
        expect(concatArrays).toBeFunction();
      },
    },
    {
      description: `concatArrays to use array.push`,
      test: () => {
        expect(concatArrays).callsFunction(Array.prototype, "push");
      },
    },
    {
      description: `concatArrays returns something`,
      test: () => {
        expect(concatArrays).withArgs([], []).toReturnSomething();
      },
    },
    {
      description: `concatArrays returns array`,
      test: () => {
        expect(concatArrays).withArgs([], []).toReturnArray();
      },
    },
    {
      description: `concatArrays returns correct value`,
      test: () => {
        expect(concatArrays).withArgs([1], [2]).toReturn([1, 2]);
        expect(concatArrays).withArgs([12], [22]).toReturn([12, 22]);
        expect(concatArrays).withArgs([1, 2], [2]).toReturn([1, 2, 2]);
        expect(concatArrays).withArgs([1, 2, 3], []).toReturn([1, 2, 3]);
        expect(concatArrays).withArgs([], [1, 2, 3]).toReturn([1, 2, 3]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
