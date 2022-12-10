zTestSuite = {};
zTestSuite.welcome = {
  title: `function welcome`,
  instructions: `Make a function named "welcome" that takes one argument. It should return a string like "Hey there Zintis!" when passed the argument "Zintis"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(welcome).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(welcome).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(welcome).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(welcome).takesXArguments(1);
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(welcome).withArgs().toReturnString();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(welcome).withArgs("Barry").toReturn(`Hey there Barry!`);
        expect(welcome).withArgs(`Rosie`).toReturn(`Hey there Rosie!`);
      },
    },
  ],
};

zTestSuite.isThisTruthy = {
  title: `function isThisTruthy`,
  instructions: `Make a function named "isThisTruthy" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isThisTruthy).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isThisTruthy).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(isThisTruthy).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(isThisTruthy).takesXArguments(1);
      },
    },
    {
      description: `returns a boolean`,
      test: () => {
        expect(isThisTruthy).withArgs().toReturnBoolean();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(isThisTruthy).withArgs(true).toReturn(true);
        expect(isThisTruthy).withArgs(false).toReturn(false);
        expect(isThisTruthy).withArgs().toReturn(false);
      },
    },
  ],
};

zTestSuite.isThisNumberOdd = {
  title: `function isThisNumberOdd`,
  instructions: `Make a function named "isThisNumberOdd" that takes one argument, a number. It should return true if the number is odd (1, 3, 5...), and false if even (2, 4, 6...).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isThisNumberOdd).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isThisNumberOdd).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(isThisNumberOdd).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(isThisNumberOdd).takesXArguments(1);
      },
    },
    {
      description: `returns a boolean`,
      test: () => {
        expect(isThisTruthy).withArgs().toReturnBoolean();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(isThisNumberOdd).withArgs(1).toReturn(true);
        expect(isThisNumberOdd).withArgs(2).toReturn(false);
        expect(isThisNumberOdd).withArgs(-1).toReturn(true);
        expect(isThisNumberOdd).withArgs(0).toReturn(false);
      },
    },
  ],
};
zTestSuite.makeNumberPositive = {
  title: "function makeNumberPositive",
  instructions: `Make a function named "makeNumberPositive" that takes one argument, a number. It should return the same number, but positive (if it's negative).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeNumberPositive).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(makeNumberPositive).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeNumberPositive).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(makeNumberPositive).takesXArguments(1);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(makeNumberPositive).withArgs(1).toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(makeNumberPositive).withArgs(-1).toReturn(1);
        expect(makeNumberPositive).withArgs(0).toReturn(0);
        expect(makeNumberPositive).withArgs(8).toReturn(8);
      },
    },
  ],
};
zTestSuite.doYouLikeCats = {
  title: "function doYouLikeCats",
  instructions: `Make a function named "doYouLikeCats" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(doYouLikeCats).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(doYouLikeCats).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(doYouLikeCats).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(doYouLikeCats).takesXArguments(1);
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(doYouLikeCats).withArgs().toReturnString();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(doYouLikeCats).withArgs(true).toReturn("I love cats!");
        expect(doYouLikeCats)
          .withArgs(false)
          .toReturn("I don't really like cats :(");
        expect(doYouLikeCats)
          .withArgs()
          .toReturn("I don't really like cats :(");
      },
    },
  ],
};
zTestSuite.stringLength = {
  title: `function stringLength`,
  instructions: `Make a function named "stringLength" that takes one argument, a string. It should return the length of the string as a number.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(stringLength).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(stringLength).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(stringLength).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(stringLength).takesXArguments(1);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(stringLength).withArgs("string").toReturnNumber();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(stringLength).withArgs("cat").toReturn(3);
        expect(stringLength).withArgs("steep").toReturn(5);
        expect(stringLength).withArgs("").toReturn(0);
      },
    },
  ],
};
zTestSuite.movieTitle = {
  title: "function movieTitle",
  instructions: `Make a function named "movieTitle" that takes 3 arguments, string, number, and finally, a string. It should return an object that has 3 keys: "title", "yearOfRelease" and "mainCharacter",  with the first/second/third arguments as the "title", "yearOfRelease" and "mainCharacter" values.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(movieTitle).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(movieTitle).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(movieTitle).toBeFunction();
      },
    },
    {
      description: `takes three arguments`,
      test: () => {
        expect(movieTitle).takesXArguments(3);
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(movieTitle).withArgs().toReturnObject();
      },
    },
    {
      description: `returns an object with 3 keys`,
      test: () => {
        var car = movieTitle(1, 2, 3);
        expect(car).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `returns an object with key "title"`,
      test: () => {
        var car = movieTitle(1, 2, 3);
        expect(car).toHaveKey(`title`);
      },
    },
    {
      description: `returns an object with key "mainCharacter"`,
      test: () => {
        var car = movieTitle(1, 2, 3);
        expect(car).toHaveKey(`mainCharacter`);
      },
    },
    {
      description: `returns an object with key "yearOfRelease"`,
      test: () => {
        var car = movieTitle(1, 2, 3);
        expect(car).toHaveKey(`yearOfRelease`);
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", 1994, 'Andy Dufresne') returns an object with key "title" having the value "The Shawshank Redemption"`,
      test: () => {
        var car = movieTitle("The Shawshank Redemption", 1994, "Andy Dufresne");
        expect(car).toHaveKeyValuePair(`title`, `The Shawshank Redemption`);
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", 1994, 'Andy Dufresne') returns an object with key "yearOfRelease" having the value 1994`,
      test: () => {
        var car = movieTitle("The Shawshank Redemption", 1994, "Andy Dufresne");
        expect(car).toHaveKeyValuePair(`yearOfRelease`, 1994);
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", "Accent", 'mainCharacter') returns an object with key "yearOfRelease" having the value 'mainCharacter'`,
      test: () => {
        var car = movieTitle("The Shawshank Redemption", 1994, "Andy Dufresne");
        expect(car).toHaveKeyValuePair("mainCharacter", "Andy Dufresne");
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
zTestSuite.bitcoinPrice = {
  title: `function bitcoinPrice`,
  instructions: `You're having a discussion with your friend about bitcoin price and suddenly he asks you "how much is Bitcoin currently worth in the thousands?" You've decided to write him function that will take the entire bitcoin price and return it's current worth in the thousands, example: bitcoinPrice(16922) returns 16 (google "Math.floor")`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(bitcoinPrice).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(bitcoinPrice).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(bitcoinPrice).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(bitcoinPrice).takesXArguments(1);
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(bitcoinPrice).toReturnNumber();
      },
    },
    {
      description: `returns correct values (example: bitcoinPrice(16987) = 16`,
      test: () => {
        expect(bitcoinPrice).withArgs(18999).toReturn(18);
        expect(bitcoinPrice).withArgs(12000).toReturn(12);
        expect(bitcoinPrice).withArgs(1111).toReturn(1);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
