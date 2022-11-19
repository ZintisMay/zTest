zTestSuite = {};
zTestSuite.addTests = {
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

zTestSuite.subtractTests = {
  title: "function subtract",
  tests: [
    {
      description: `subtract is declared`,
      test: () => {
        expect(subtract).toBeDeclared();
      },
    },
    {
      description: `subtract has a value`,
      test: () => {
        expect(subtract).toHaveValue();
      },
    },
    {
      description: `subtract is a function`,
      test: () => {
        expect(subtract).toBeFunction();
      },
    },
    {
      description: `subtract takes two arguments`,
      test: () => {
        expect(subtract).takesXArguments(2);
      },
    },
    {
      description: `subtract returns a number`,
      test: () => {
        expect(subtract).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `subtract returns correct values`,
      test: () => {
        expect(subtract).withArgs(1, 1).toReturn(0);
        expect(subtract).withArgs(-1, 1).toReturn(-2);
        expect(subtract).withArgs(1000, 234).toReturn(766);
        expect(subtract).withArgs(1, 1).toReturn(0);
        expect(subtract).withArgs(1, 1).toReturn(0);
        expect(subtract).withArgs(1, 1).toReturn(0);
      },
    },
  ],
};

zTestSuite.multiplyTests = {
  title: "function multiply",
  tests: [
    {
      description: `multiply is declared`,
      test: () => {
        expect(multiply).toBeDeclared();
      },
    },
    {
      description: `multiply has a value`,
      test: () => {
        expect(multiply).toHaveValue();
      },
    },
    {
      description: `multiply is a function`,
      test: () => {
        expect(multiply).toBeFunction();
      },
    },
    {
      description: `multiply takes two arguments`,
      test: () => {
        expect(multiply).takesXArguments(2);
      },
    },
    {
      description: `multiply returns a number`,
      test: () => {
        expect(multiply).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `multiply returns correct values`,
      test: () => {
        expect(multiply).withArgs(2, 3).toReturn(6);
        expect(multiply).withArgs(-2, 3).toReturn(-6);
        expect(multiply).withArgs(1000, 234).toReturn(234000);
        expect(multiply).withArgs(1, 0).toReturn(0);
        expect(multiply).withArgs(0, 0).toReturn(0);
        expect(multiply).withArgs(-2, -3).toReturn(6);
      },
    },
  ],
};

zTestSuite.divideTests = {
  title: "function divide",
  tests: [
    {
      description: `divide is declared`,
      test: () => {
        expect(divide).toBeDeclared();
      },
    },
    {
      description: `divide has a value`,
      test: () => {
        expect(divide).toHaveValue();
      },
    },
    {
      description: `divide is a function`,
      test: () => {
        expect(divide).toBeFunction();
      },
    },
    {
      description: `divide takes two arguments`,
      test: () => {
        expect(divide).takesXArguments(2);
      },
    },
    {
      description: `divide returns a number`,
      test: () => {
        expect(divide).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `divide returns correct values`,
      test: () => {
        expect(divide).withArgs(1, 1).toReturn(1);
        expect(divide).withArgs(10, 20).toReturn(0.5);
        expect(divide).withArgs(100, 0).toReturn(Infinity);
        expect(divide).withArgs(-4, 2).toReturn(-2);
        expect(divide).withArgs(150, -1).toReturn(-150);
        expect(divide).withArgs(4, 3).toReturn(1.3333333333333333);
      },
    },
  ],
};

zTestSuite.exponentTests = {
  title: "function exponent",
  tests: [
    {
      description: `exponent is declared`,
      test: () => {
        expect(exponent).toBeDeclared();
      },
    },
    {
      description: `exponent has a value`,
      test: () => {
        expect(exponent).toHaveValue();
      },
    },
    {
      description: `exponent is a function`,
      test: () => {
        expect(exponent).toBeFunction();
      },
    },
    {
      description: `exponent takes two arguments`,
      test: () => {
        expect(exponent).takesXArguments(2);
      },
    },
    {
      description: `exponent returns a number`,
      test: () => {
        expect(exponent).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `exponent returns correct values`,
      test: () => {
        expect(exponent).withArgs(4, 3).toReturn(64);
        expect(exponent).withArgs(5, 5).toReturn(3125);
        expect(exponent).withArgs(100, 0).toReturn(1);
        expect(exponent).withArgs(-4, 2).toReturn(16);
        expect(exponent).withArgs(3, -2).toReturn(0.1111111111111111);
        expect(exponent).withArgs(0, 0).toReturn(1);
      },
    },
  ],
};

zTestSuite.combineStringsTests = {
  title: "combine strings",
  tests: [
    {
      description: `combineStrings is declared`,
      test: () => {
        expect(combineStrings).toBeDeclared();
      },
    },
    {
      description: `combineStrings has a value`,
      test: () => {
        expect(combineStrings).toHaveValue();
      },
    },
    {
      description: `combineStrings is a function`,
      test: () => {
        expect(combineStrings).toBeFunction();
      },
    },
    {
      description: `combineStrings takes two arguments`,
      test: () => {
        expect(combineStrings).takesXArguments(2);
      },
    },
    {
      description: `combineStrings returns a string`,
      test: () => {
        expect(combineStrings).withArgs("a", "b").toReturnString();
      },
    },
    {
      description: `combineStrings returns correct values`,
      test: () => {
        expect(combineStrings).withArgs("a", "b").toReturn("ab");
        expect(combineStrings).withArgs("cat", "").toReturn("cat");
        expect(combineStrings).withArgs("", "").toReturn("");
        expect(combineStrings).withArgs("cat", null).toReturn("catnull");
        expect(combineStrings).withArgs("b", "a").toReturn("ba");
        expect(combineStrings).withArgs("4", "2").toReturn("42");
      },
    },
  ],
};

zTestSuite.combineArraysTests = {
  title: "combine arrays",
  tests: [
    {
      description: `combineArrays is declared`,
      test: () => {
        expect(combineArrays).toBeDeclared();
      },
    },
    {
      description: `combineArrays has a value`,
      test: () => {
        expect(combineArrays).toHaveValue();
      },
    },
    {
      description: `combineArrays is a function`,
      test: () => {
        expect(combineArrays).toBeFunction();
      },
    },
    {
      description: `combineArrays takes two arguments`,
      test: () => {
        expect(combineArrays).takesXArguments(2);
      },
    },
    {
      description: `combineArrays returns an array`,
      test: () => {
        expect(combineArrays).withArgs([1], [2]).toReturnArray();
      },
    },
    {
      description: `combineArrays returns correct values`,
      test: () => {
        expect(combineArrays).withArgs([1], [2]).toReturn([1, 2]);
        expect(combineArrays)
          .withArgs(["cat"], ["dog"])
          .toReturn(["cat", "dog"]);
      },
    },
  ],
};

zTestSuite.combineObjectsTests = {
  title: "combine objects",
  tests: [
    {
      description: `combineObjects is declared`,
      test: () => {
        expect(combineObjects).toBeDeclared();
      },
    },
    {
      description: `combineObjects has a value`,
      test: () => {
        expect(combineObjects).toHaveValue();
      },
    },
    {
      description: `combineObjects is a function`,
      test: () => {
        expect(combineObjects).toBeFunction();
      },
    },
    {
      description: `combineObjects takes two arguments`,
      test: () => {
        expect(combineObjects).takesXArguments(2);
      },
    },
    {
      description: `combineObjects returns an`,
      test: () => {
        expect(combineObjects).withArgs(1, 1).toReturnObject();
      },
    },
    {
      description: `combineObjects returns correct values`,
      test: () => {
        expect(combineObjects)
          .withArgs({ 1: "1" }, { 2: "2" })
          .toReturn({ 1: "1", 2: "2" });
        expect(combineObjects)
          .withArgs({ name: "John" }, { age: "50" })
          .toReturn({ name: "John", age: "50" });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
