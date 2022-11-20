zTestSuite = {};
zTestSuite.sample = {
  title: "function add",
  tests: [
    {
      description: `add is declared`,
      test: () => {
        expect(add).toBeDeclared();
      },
    },
    {
      description: `add has a value`,
      test: () => {
        expect(add).toHaveValue();
      },
    },
    {
      description: `add is a function`,
      test: () => {
        expect(add).toBeFunction();
      },
    },
    {
      description: `add takes two arguments`,
      test: () => {
        expect(add).takesXArguments(2);
      },
    },
    {
      description: `add returns a number`,
      test: () => {
        expect(add).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `add returns correct values`,
      test: () => {
        expect(add).withArgs(1, 1).toReturn(2);
        expect(add).withArgs(-1, 1).toReturn(0);
        expect(add).withArgs(1000, 234).toReturn(1234);
        expect(add).withArgs(1, 1).toReturn(2);
        expect(add).withArgs(1, 1).toReturn(2);
        expect(add).withArgs(1, 1).toReturn(2);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
