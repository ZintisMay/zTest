zTestSuite = {};
zTestSuite.greeting = {
  title: "function greeting",
  tests: [
    {
      description: `greeting is declared`,
      test: () => {
        expect(greeting).toBeDeclared();
      },
    },
    {
      description: `greeting has a value`,
      test: () => {
        expect(greeting).toHaveValue();
      },
    },
    {
      description: `greeting is a function`,
      test: () => {
        expect(greeting).toBeFunction();
      },
    },
    {
      description: `greeting takes one argument`,
      test: () => {
        expect(greeting).takesXArguments(1);
      },
    },
    {
      description: `greeting returns a string`,
      test: () => {
        expect(greeting).withArgs().toReturnString();
      },
    },
    {
      description: `greeting returns correct values`,
      test: () => {
        expect(greeting).withArgs("Barry").toReturn(`Hello Barry!`);
        expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
      },
    },
  ],
};
zTestSuite.isThisValueTrue = {
  title: "function isThisValueTrue",
  tests: [
    {
      description: `isThisValueTrue is declared`,
      test: () => {
        expect(isThisValueTrue).toBeDeclared();
      },
    },
    {
      description: `isThisValueTrue has a value`,
      test: () => {
        expect(isThisValueTrue).toHaveValue();
      },
    },
    {
      description: `isThisValueTrue is a function`,
      test: () => {
        expect(isThisValueTrue).toBeFunction();
      },
    },
    {
      description: `isThisValueTrue takes one argument`,
      test: () => {
        expect(isThisValueTrue).takesXArguments(1);
      },
    },
    {
      description: `isThisValueTrue returns a boolean`,
      test: () => {
        expect(isThisValueTrue).withArgs().toReturnBoolean();
      },
    },
    {
      description: `isThisValueTrue returns correct values`,
      test: () => {
        expect(isThisValueTrue).withArgs(true).toReturn(true);
        expect(isThisValueTrue).withArgs(false).toReturn(false);
        expect(isThisValueTrue).withArgs().toReturn(false);
      },
    },
  ],
};
zTestSuite.isThisNumberEven = {
  title: "function isThisNumberEven",
  tests: [
    {
      description: `isThisNumberEven is declared`,
      test: () => {
        expect(isThisNumberEven).toBeDeclared();
      },
    },
    {
      description: `isThisNumberEven has a value`,
      test: () => {
        expect(isThisNumberEven).toHaveValue();
      },
    },
    {
      description: `isThisNumberEven is a function`,
      test: () => {
        expect(isThisNumberEven).toBeFunction();
      },
    },
    {
      description: `isThisNumberEven takes one argument`,
      test: () => {
        expect(isThisNumberEven).takesXArguments(1);
      },
    },
    {
      description: `isThisNumberEven returns a string`,
      test: () => {
        expect(isThisNumberEven).withArgs(1).toReturnString();
      },
    },
    {
      description: `isThisNumberEven returns correct values`,
      test: () => {
        expect(isThisNumberEven).withArgs(1).toReturn("odd");
        expect(isThisNumberEven).withArgs(2).toReturn("even");
        expect(isThisNumberEven).withArgs(-1).toReturn("odd");
        expect(isThisNumberEven).withArgs(0).toReturn("even");
      },
    },
  ],
};
zTestSuite.makeNumberNegative = {
  title: "function makeNumberNegative",
  tests: [
    {
      description: `makeNumberNegative is declared`,
      test: () => {
        expect(makeNumberNegative).toBeDeclared();
      },
    },
    {
      description: `makeNumberNegative has a value`,
      test: () => {
        expect(makeNumberNegative).toHaveValue();
      },
    },
    {
      description: `makeNumberNegative is a function`,
      test: () => {
        expect(makeNumberNegative).toBeFunction();
      },
    },
    {
      description: `makeNumberNegative takes one argument`,
      test: () => {
        expect(makeNumberNegative).takesXArguments(1);
      },
    },
    {
      description: `makeNumberNegative returns a number`,
      test: () => {
        expect(makeNumberNegative).withArgs(1).toReturnNumber();
      },
    },
    {
      description: `makeNumberNegative returns correct values`,
      test: () => {
        expect(makeNumberNegative).withArgs(1).toReturn(-1);
        expect(makeNumberNegative).withArgs(0).toReturn(0);
        expect(makeNumberNegative).withArgs(-1).toReturn(-1);
      },
    },
  ],
};
zTestSuite.doYouWantCake = {
  title: "function doYouWantCake",
  tests: [
    {
      description: `doYouWantCake is declared`,
      test: () => {
        expect(doYouWantCake).toBeDeclared();
      },
    },
    {
      description: `doYouWantCake has a value`,
      test: () => {
        expect(doYouWantCake).toHaveValue();
      },
    },
    {
      description: `doYouWantCake is a function`,
      test: () => {
        expect(doYouWantCake).toBeFunction();
      },
    },
    {
      description: `doYouWantCake takes one arguments`,
      test: () => {
        expect(doYouWantCake).takesXArguments(1);
      },
    },
    {
      description: `doYouWantCake returns a string`,
      test: () => {
        expect(doYouWantCake).withArgs().toReturnString();
      },
    },
    {
      description: `doYouWantCake returns correct values`,
      test: () => {
        expect(doYouWantCake).withArgs(true).toReturn("yes");
        expect(doYouWantCake).withArgs(false).toReturn("no");
        expect(doYouWantCake).withArgs().toReturn("no");
      },
    },
  ],
};
zTestSuite.wordLength = {
  title: "function wordLength",
  tests: [
    {
      description: `wordLength is declared`,
      test: () => {
        expect(wordLength).toBeDeclared();
      },
    },
    {
      description: `wordLength has a value`,
      test: () => {
        expect(wordLength).toHaveValue();
      },
    },
    {
      description: `wordLength is a function`,
      test: () => {
        expect(wordLength).toBeFunction();
      },
    },
    {
      description: `wordLength takes one argument`,
      test: () => {
        expect(wordLength).takesXArguments(1);
      },
    },
    {
      description: `wordLength returns a number`,
      test: () => {
        expect(wordLength).withArgs("string").toReturnNumber();
      },
    },
    {
      description: `wordLength returns correct values`,
      test: () => {
        expect(wordLength).withArgs("cat").toReturn(3);
        expect(wordLength).withArgs("steep").toReturn(5);
        expect(wordLength).withArgs("").toReturn(0);
      },
    },
  ],
};
zTestSuite.carBuilder = {
  title: "function carBuilder",
  tests: [
    {
      description: `carBuilder is declared`,
      test: () => {
        expect(carBuilder).toBeDeclared();
      },
    },
    {
      description: `carBuilder has a value`,
      test: () => {
        expect(carBuilder).toHaveValue();
      },
    },
    {
      description: `carBuilder is a function`,
      test: () => {
        expect(carBuilder).toBeFunction();
      },
    },
    {
      description: `carBuilder takes three arguments`,
      test: () => {
        expect(carBuilder).takesXArguments(3);
      },
    },
    {
      description: `carBuilder returns an object`,
      test: () => {
        expect(carBuilder).withArgs().toReturnObject();
      },
    },
    {
      description: `carBuilder returns correct values`,
      test: () => {
        expect(carBuilder)
          .withArgs("Volkswagen", "Beetle", "1963")
          .toReturn({ make: "Volkswagen", model: "Beetle", year: "1963" });
        expect(carBuilder)
          .withArgs("Lotus", "Esprit S1", "1976")
          .toReturn({ make: "Lotus", model: "Esprit S1", year: "1976" });
        expect(carBuilder)
          .withArgs("Ford", "Mustang GT 390", "1968")
          .toReturn({ make: "Ford", model: "Mustang GT 390", year: "1968" });
        expect(carBuilder)
          .withArgs("Ford", "Falcon GT XB", "1973")
          .toReturn({ make: "Ford", model: "Falcon GT XB", year: "1973" });
        expect(carBuilder)
          .withArgs("Cadillac", "Miller-meteor", "1959")
          .toReturn({ make: "Cadillac", model: "Miller-meteor", year: "1959" });
        expect(carBuilder)
          .withArgs("Delorean", "DMC-12", "1981")
          .toReturn({ make: "Delorean", model: "DMC-12", year: "1981" });
      },
    },
  ],
};
zTestSuite.createStudent = {
  title: "function createStudent",
  tests: [
    {
      description: `createStudent is declared`,
      test: () => {
        expect(createStudent).toBeDeclared();
      },
    },
    {
      description: `createStudent has a value`,
      test: () => {
        expect(createStudent).toHaveValue();
      },
    },
    {
      description: `createStudent is a function`,
      test: () => {
        expect(createStudent).toBeFunction();
      },
    },
    {
      description: `createStudent takes four arguments`,
      test: () => {
        expect(createStudent).takesXArguments(4);
      },
    },
    {
      description: `createStudent returns an object`,
      test: () => {
        expect(createStudent).withArgs().toReturnObject();
      },
    },
    {
      description: `createStudent returns correct values`,
      test: () => {
        expect(createStudent)
          .withArgs("1", "2", "3", "4")
          .toReturn({
            name: {
              first: "1",
              last: "2",
            },
            yearBorn: "3",
            schoolName: "4",
          });
        expect(createStudent)
          .withArgs("Walter Jr.", "White", "1993", "J.P. Wynne High School")
          .toReturn({
            name: {
              first: "Walter Jr.",
              last: "White",
            },
            yearBorn: "1993",
            schoolName: "J.P. Wynne High School",
          });
      },
    },
  ],
};
zTestSuite.teachersNeeded = {
  title: "function teachersNeeded",
  tests: [
    {
      description: `teachersNeeded is declared`,
      test: () => {
        expect(teachersNeeded).toBeDeclared();
      },
    },
    {
      description: `teachersNeeded has a value`,
      test: () => {
        expect(teachersNeeded).toHaveValue();
      },
    },
    {
      description: `teachersNeeded is a function`,
      test: () => {
        expect(teachersNeeded).toBeFunction();
      },
    },
    {
      description: `teachersNeeded takes two arguments`,
      test: () => {
        expect(teachersNeeded).takesXArguments(2);
      },
    },
    {
      description: `teachersNeeded returns a number`,
      test: () => {
        expect(teachersNeeded).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `teachersNeeded returns correct values`,
      test: () => {
        expect(teachersNeeded).withArgs(10, 5).toReturn(2);
        expect(teachersNeeded).withArgs(18, 7).toReturn(3);
        expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
