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
