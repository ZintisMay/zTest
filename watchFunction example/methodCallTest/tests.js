const zTestSuite = {};

zTestSuite.callParseInt = {
  title: "function callParseInt",
  tests: [
    {
      description: `callParseInt is declared`,
      test: () => {
        expect(callParseInt).toBeDeclared();
      },
    },
    {
      description: `callParseInt is a function`,
      test: () => {
        expect(callParseInt).toBeFunction();
      },
    },
    {
      description: `callParseInt returns undefined (so no return)`,
      test: () => {
        expect(callParseInt).toReturnUndefined();
      },
    },
    {
      description: `callParseInt uses parseInt function`,
      test: () => {
        expect(callParseInt).callsFunction(window, "parseInt");
      },
    },
  ],
};
zTestSuite.callMathRound = {
  title: "function callMathRound",
  tests: [
    {
      description: `callMathRound is declared`,
      test: () => {
        expect(callMathRound).toBeDeclared();
      },
    },
    {
      description: `callMathRound is a function`,
      test: () => {
        expect(callMathRound).toBeFunction();
      },
    },
    {
      description: `callMathRound returns undefined (so no return)`,
      test: () => {
        expect(callMathRound).toReturnUndefined();
      },
    },
    {
      description: `callMathRound uses Math.round function`,
      test: () => {
        expect(callMathRound).callsFunction(Math, "round");
      },
    },
  ],
};
zTestSuite.callArrayPush = {
  title: "function callArrayPush",
  tests: [
    {
      description: `callArrayPush is declared`,
      test: () => {
        expect(callArrayPush).toBeDeclared();
      },
    },
    {
      description: `callArrayPush is a function`,
      test: () => {
        expect(callArrayPush).toBeFunction();
      },
    },
    {
      description: `callArrayPush returns undefined (so no return)`,
      test: () => {
        expect(callArrayPush).toReturnUndefined();
      },
    },
    {
      description: `callArrayPush uses Array.prototype.push function`,
      test: () => {
        expect(callArrayPush).callsFunction(Array.prototype, "push");
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
