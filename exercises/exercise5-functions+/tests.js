zTestSuite = {};
zTestSuite.greeting = {
  title: `function greeting`,
  instructions: `Make a function that takes one argument. It should return a string like "Hello Zintis!" when passed the argument "Zintis"`,
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
  title: `function isThisValueTrue`,
  instructions: `Make a function that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise.`,
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
  title: `function isThisNumberEven`,
  instructions: `Make a function that takes one argument, a number. It should return true if the number is even, and false if odd.`,
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
  instructions: `Make a function that takes one argument, a number. It should return the same number, but negative.`,
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
  instructions: `Make a function that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
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
  title: `function wordLength`,
  instructions: `Make a function that takes one argument, a string. It should return the length of the string as a number.`,
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
  instructions: `Make a function that takes 3 arguments, string, string, and number. It should return an object that has 3 keys: "make", "model", and "year", with the first/second/third arguments as the "make", "model", and "year" values.`,
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
      description: `carBuilder returns an object with 3 keys`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `carBuilder returns an object with key "make"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`make`);
      },
    },
    {
      description: `carBuilder returns an object with key "model"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`model`);
      },
    },
    {
      description: `carBuilder returns an object with key "year"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`year`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "make" having first argument of "Hyundai"`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`make`, `Hyundai`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "model" having second argument of "Accent"`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`model`, `Accent`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "year" having third argument of "2010"`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`year`, 2010);
      },
    },
    {
      description: `carBuilder returns correct values`,
      test: () => {
        expect(carBuilder)
          .withArgs(`Volkswagen`, `Beetle`, `1963`)
          .toReturn({ make: `Volkswagen`, model: `Beetle`, year: `1963` });
        expect(carBuilder)
          .withArgs(`Lotus`, `Esprit S1`, `1976`)
          .toReturn({ make: `Lotus`, model: `Esprit S1`, year: `1976` });
        expect(carBuilder)
          .withArgs(`Ford`, `Mustang GT 390`, `1968`)
          .toReturn({ make: `Ford`, model: `Mustang GT 390`, year: `1968` });
        expect(carBuilder)
          .withArgs(`Ford`, `Falcon GT XB`, `1973`)
          .toReturn({ make: `Ford`, model: `Falcon GT XB`, year: `1973` });
        expect(carBuilder)
          .withArgs(`Cadillac`, `Miller-meteor`, `1959`)
          .toReturn({ make: `Cadillac`, model: `Miller-meteor`, year: `1959` });
        expect(carBuilder)
          .withArgs(`Delorean`, `DMC-12`, `1981`)
          .toReturn({ make: `Delorean`, model: `DMC-12`, year: `1981` });
      },
    },
  ],
};
zTestSuite.createStudent = {
  title: `function createStudent`,
  // instructions: `Make a function that takes 4 arguments, string, string, number, and string. It should return an object with the keys: "name", "yearBorn", and "schoolName". "name" should ALSO be an object, with the keys "first" and "last". The first and second arguments should be the values of "first" and "last". the third argument should be "yearBorn", and the last argument should be "schoolName".`,
  instructions: `Make a function that takes 4 arguments, 1st argument is a string, 2nd is also a string, 3rd argument is a number, and the last one, once again a string. The function should return an object with the keys: "name", "yearBorn", and "schoolName". Inside our first key called "name" the value should ALSO be an object, 1st key of this object is called "first", while the 2nd one is called "last", the function will return with values for these keys that are the 1st and 2nd arguments of our function. The function  third key is "yearBorn" with the value of the 3rd argument (number), while the last key is "schoolName" with the value of our function 4th argument. Example: createStudent("Zintis", "May", 1999, "Rutgers") returns {name: {first: 'Zintis', last: 'May'},
  yearBorn: 1999,
  schoolName: 'Rutgers',
} (copy paste this example to your code editor so that you could format it nicely)`,
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
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with 3 keys`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveKey("name");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toBeObject();
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object with 2 keys`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toHaveObjectKeyCount(2);
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object with key "first"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toHaveKey("first");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object with key/value of "first"/"Zintis"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toHaveKeyValuePair("first", "Zintis");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object with key "last"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toHaveKey("last");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "name" that is an object with key/value of "last"/"May"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student.name).toHaveKeyValuePair("last", "May");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "yearBorn"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveKey("yearBorn");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value of "yearBorn"/1999`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveKeyValuePair("yearBorn", 1999);
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key "schoolName"`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveKey("schoolName");
      },
    },
    {
      description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value of "schoolName"/Rutgers`,
      test: () => {
        var student = createStudent("Zintis", "May", 1999, "Rutgers");
        expect(student).toHaveKeyValuePair("Rutgers");
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
  title: `function teachersNeeded`,
  instructions: `Make a function that takes 2 arguments, a number and a number. The first number is how many students there are. The second number is how many students there should be per teacher. It should return the minimum number of teachers required for that many students (integer, no decimals. google "Math.ceil")`,
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
      description: `teachersNeeded returns an integer`,
      test: () => {
        // var teacherCount = teachersNeeded(3, 2);
        expect(teachersNeeded).withArgs(3, 2).toReturnInteger();
      },
    },
    {
      description: `teachersNeeded returns correct values (example: teachersNeeded(10,3) = 4. teachersNeeded(20,8) = 3.)`,
      test: () => {
        expect(teachersNeeded).withArgs(10, 5).toReturn(2);
        expect(teachersNeeded).withArgs(18, 7).toReturn(3);
        expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
