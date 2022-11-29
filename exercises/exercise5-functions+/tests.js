zTestSuite = {};
zTestSuite.greeting = {
  title: `function greeting`,
  instructions: `Make a function named "greeting" that takes one argument. It should return a string like "Hello Zintis!" when passed the argument "Zintis"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(greeting).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(greeting).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(greeting).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(greeting).takesXArguments(1);
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(greeting).withArgs().toReturnString();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(greeting).withArgs("Barry").toReturn(`Hello Barry!`);
        expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
      },
    },
  ],
};
zTestSuite.isThisValueTrue = {
  title: `function isThisValueTrue`,
  instructions: `Make a function named "isThisValueTrue" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isThisValueTrue).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isThisValueTrue).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(isThisValueTrue).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(isThisValueTrue).takesXArguments(1);
      },
    },
    {
      description: `returns a boolean`,
      test: () => {
        expect(isThisValueTrue).withArgs().toReturnBoolean();
      },
    },
    {
      description: `returns correct values`,
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
  instructions: `Make a function named "isThisNumberEven" that takes one argument, a number. It should return true if the number is even, and false if odd.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isThisNumberEven).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isThisNumberEven).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(isThisNumberEven).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(isThisNumberEven).takesXArguments(1);
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(isThisNumberEven).withArgs(1).toReturnString();
      },
    },
    {
      description: `returns correct values`,
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
  instructions: `Make a function named "makeNumberNegative" that takes one argument, a number. It should return the same number, but negative.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeNumberNegative).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(makeNumberNegative).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeNumberNegative).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(makeNumberNegative).takesXArguments(1);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(makeNumberNegative).withArgs(1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
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
  instructions: `Make a function named "doYouWantCake" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(doYouWantCake).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(doYouWantCake).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(doYouWantCake).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(doYouWantCake).takesXArguments(1);
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(doYouWantCake).withArgs().toReturnString();
      },
    },
    {
      description: `returns correct values`,
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
  instructions: `Make a function named "wordLength" that takes one argument, a string. It should return the length of the string as a number.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(wordLength).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(wordLength).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(wordLength).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(wordLength).takesXArguments(1);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(wordLength).withArgs("string").toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
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
  instructions: `Make a function named "carBuilder" that takes 3 arguments, string, string, and number. It should return an object that has 3 keys: "make", "model", and "year", with the first/second/third arguments as the "make", "model", and "year" values.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(carBuilder).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(carBuilder).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(carBuilder).toBeFunction();
      },
    },
    {
      description: `takes three arguments`,
      test: () => {
        expect(carBuilder).takesXArguments(3);
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(carBuilder).withArgs().toReturnObject();
      },
    },
    {
      description: `returns an object with 3 keys`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `returns an object with key "make"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`make`);
      },
    },
    {
      description: `returns an object with key "model"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`model`);
      },
    },
    {
      description: `returns an object with key "year"`,
      test: () => {
        var car = carBuilder(1, 2, 3);
        expect(car).toHaveKey(`year`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "make" having the value "Hyundai"`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`make`, `Hyundai`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "model" having the value "Accent"`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`model`, `Accent`);
      },
    },
    {
      description: `carBuilder("Hyundai", "Accent", 2010) returns an object with key "year" having the value 2010`,
      test: () => {
        var car = carBuilder(`Hyundai`, `Accent`, 2010);
        expect(car).toHaveKeyValuePair(`year`, 2010);
      },
    },
    {
      description: `returns correct values`,
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
// zTestSuite.createStudent = {
//   title: `function createStudent`,
//   instructions: `Make a function that takes 4 arguments: string, string, number, and string. It should return an object with the keys: "firstName", "lastName", "yearBorn", and "schoolName". The first argument should become the value of "firstName". 2nd is "lastName", 3rd is "yearBorn", and last is "schoolName". Example: createStudent("Zintis", "May", 1999, "Rutgers") returns {firstName: 'Zintis', lastName: 'May',yearBorn: 1999, schoolName: 'Rutgers'}`,
//   tests: [
//     {
//       description: `createStudent is declared`,
//       test: () => {
//         expect(createStudent).toBeDeclared();
//       },
//     },
//     {
//       description: `createStudent has a value`,
//       test: () => {
//         expect(createStudent).toHaveValue();
//       },
//     },
//     {
//       description: `createStudent is a function`,
//       test: () => {
//         expect(createStudent).toBeFunction();
//       },
//     },
//     {
//       description: `createStudent takes four arguments`,
//       test: () => {
//         expect(createStudent).takesXArguments(4);
//       },
//     },
//     {
//       description: `createStudent returns an object`,
//       test: () => {
//         expect(createStudent).withArgs().toReturnObject();
//       },
//     },
//     {
//       description: `returns an object with 4 keys`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveObjectKeyCount(4);
//       },
//     },
//     {
//       description: `returns an object with key "firstname"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKey("firstName");
//       },
//     },
//     {
//       description: `returns an object with key "firstName" that is a string`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student.firstName).toBeString();
//       },
//     },
//     {
//       description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value pair of "firstName"/"Zintis"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKeyValuePair("firstName", "Zintis");
//       },
//     },
//     {
//       description: `returns an object with key "lastName"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKey("lastName");
//       },
//     },
//     {
//       description: `returns an object with key "lastName" that is a string`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student.lastName).toBeString();
//       },
//     },
//     {
//       description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value pair of "lastName"/"May"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKeyValuePair("lastName", "May");
//       },
//     },
//     {
//       description: `returns an object with key "yearBorn"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKey("yearBorn");
//       },
//     },
//     {
//       description: `returns an object with key of "yearBorn" that is a number`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student.yearBorn).toBeNumber();
//       },
//     },
//     {
//       description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value of "yearBorn"/1999`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKeyValuePair("yearBorn", 1999);
//       },
//     },
//     {
//       description: `returns an object with key "schoolName"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKey("schoolName");
//       },
//     },
//     {
//       description: `returns an object with key "schoolName" that is a string`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student.schoolName).toBeString();
//       },
//     },
//     {
//       description: `createStudent("Zintis", "May", 1999, "Rutgers") returns an object with key/value of "schoolName"/"Rutgers"`,
//       test: () => {
//         var student = createStudent("Zintis", "May", 1999, "Rutgers");
//         expect(student).toHaveKeyValuePair("schoolName", "Rutgers");
//       },
//     },
//     {
//       description: `createStudent returns correct values`,
//       test: () => {
//         expect(createStudent).withArgs("1", "2", "3", "4").toReturn({
//           firstName: "1",
//           lastName: "2",
//           yearBorn: "3",
//           schoolName: "4",
//         });
//         expect(createStudent)
//           .withArgs("Walter", "White", "1993", "J.P. Wynne High School")
//           .toReturn({
//             firstName: "Walter",
//             lastName: "White",
//             yearBorn: "1993",
//             schoolName: "J.P. Wynne High School",
//           });
//       },
//     },
//   ],
// };
zTestSuite.teachersNeeded = {
  title: `function teachersNeeded`,
  instructions: `Make a function named "teachersNeeded" that takes 2 arguments, a number and a number. The first number is how many students there are. The second number is how many students there should be per teacher. It should return the minimum number of teachers required for that many students (integer, no decimals. google "Math.ceil")`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(teachersNeeded).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(teachersNeeded).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(teachersNeeded).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(teachersNeeded).takesXArguments(2);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(teachersNeeded).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `returns an integer`,
      test: () => {
        // var teacherCount = teachersNeeded(3, 2);
        expect(teachersNeeded).withArgs(3, 2).toReturnInteger();
      },
    },
    {
      description: `returns correct values (example: teachersNeeded(10,3) = 4. teachersNeeded(20,8) = 3.)`,
      test: () => {
        expect(teachersNeeded).withArgs(10, 5).toReturn(2);
        expect(teachersNeeded).withArgs(18, 7).toReturn(3);
        expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
