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
        expect(isThisNumberOdd).withArgs(1).toReturnBoolean();
      },
    },
    {
      description: `returns correct values`,
      test: () => {
        expect(isThisNumberOdd).withArgs(1).toReturn(true);
        expect(isThisNumberOdd).withArgs(2).toReturn(false);
        expect(isThisNumberOdd).withArgs(5).toReturn(true);
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
  instructions: `Make a function named "doYouLikeCats" that takes one argument, a boolean. If the boolean is true, return "I love cats!". Otherwise return "I don't really like cats.".`,
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
          .toReturn("I don't really like cats.");
        expect(doYouLikeCats).withArgs().toReturn("I don't really like cats.");
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
        var movieDetails = movieTitle(1, 2, 3);
        expect(movieDetails).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `returns an object with key "title"`,
      test: () => {
        var movieDetails = movieTitle(1, 2, 3);
        expect(movieDetails).toHaveKey(`title`);
      },
    },
    {
      description: `returns an object with key "yearOfRelease"`,
      test: () => {
        var movieDetails = movieTitle(1, 2, 3);
        expect(movieDetails).toHaveKey(`yearOfRelease`);
      },
    },
    {
      description: `returns an object with key "mainCharacter"`,
      test: () => {
        var movieDetails = movieTitle(1, 2, 3);
        expect(movieDetails).toHaveKey(`mainCharacter`);
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", 1994, 'Andy Dufresne') returns an object with key "title" having the value "The Shawshank Redemption"`,
      test: () => {
        var movieDetails = movieTitle(
          "The Shawshank Redemption",
          1994,
          "Andy Dufresne"
        );
        expect(movieDetails).toHaveKeyValuePair(
          `title`,
          `The Shawshank Redemption`
        );
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", 1994, 'Andy Dufresne') returns an object with key "yearOfRelease" having the value 1994`,
      test: () => {
        var movieDetails = movieTitle(
          "The Shawshank Redemption",
          1994,
          "Andy Dufresne"
        );
        expect(movieDetails).toHaveKeyValuePair(`yearOfRelease`, 1994);
      },
    },
    {
      description: `movieTitle("The Shawshank Redemption", 1994, 'Andy Dufresne') returns an object with key "mainCharacter" having the value 'Andy Dufresne'`,
      test: () => {
        var movieDetails = movieTitle(
          "The Shawshank Redemption",
          1994,
          "Andy Dufresne"
        );
        expect(movieDetails).toHaveKeyValuePair(
          "mainCharacter",
          "Andy Dufresne"
        );
      },
    },
  ],
};

zTestSuite.bitcoinPrice = {
  title: `function bitcoinPrice`,
  instructions: `Since cryptocurrency changes in price all the time, you decide to write a function that tells you how many thousands it is worth. Write a function that takes one argument, a number. Example: bitcoinPrice(16922) returns "The bitcoin price is currently set at 16 thousand." (google "Math.floor" and "template literals")`,
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
      description: `returns a string`,
      test: () => {
        expect(bitcoinPrice).toReturnString();
      },
    },
    {
      description: `bitcoinPrice(18999) returns "The bitcoin price is currently set at 18 thousand."`,
      test: () => {
        expect(bitcoinPrice)
          .withArgs(18999)
          .toReturn(`The bitcoin price is currently set at ${18} thousand.`);
      },
    },
    {
      description: `bitcoinPrice(333333) returns "The bitcoin price is currently set at 333 thousand."`,
      test: () => {
        expect(bitcoinPrice)
          .withArgs(333333)
          .toReturn(`The bitcoin price is currently set at ${333} thousand.`);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
