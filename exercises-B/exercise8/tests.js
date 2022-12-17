zTestSuite = {};
zTestSuite.makeYAmpersands = {
  title: `function "makeYAmpersands"`,
  instructions: `Make a function that takes one argument, a number. It should return a string with that many ampersands in it. Example: makeYAmpersand(5) returns "&&&&&"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeYAmpersands).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeYAmpersands).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(makeYAmpersands).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeYAmpersands).withArgs(3).toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(makeYAmpersands).withArgs(3).toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeYAmpersands(5);
        expect(result).toBe("&&&&&");
        var result2 = makeYAmpersands(3);
        expect(result2).toBe("&&&");
        var result3 = makeYAmpersands(12);
        expect(result3).toBe("&&&&&&&&&&&&");
      },
    },
  ],
};

zTestSuite.allNumbersFromXToOne = {
  title: `function "allNumbersFromXToOne"`,
  instructions: `Make a function that takes one argument, a number. It should return an array of every numbers, starting at that number and finishes at 1. 
  example: allNumbersFromXToOne(5) return [5,4,3,2,1]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(allNumbersFromXToOne).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(allNumbersFromXToOne).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(allNumbersFromXToOne).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(allNumbersFromXToOne).withArgs(4).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(allNumbersFromXToOne).withArgs(4).toReturnArray();
      },
    },
    {
      description: `returns array of numbers`,
      test: () => {
        expect(allNumbersFromXToOne).withArgs(4).toReturnArrayOfType("number");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = allNumbersFromXToOne(8);
        expect(result).toBeSameArrayAs([8, 7, 6, 5, 4, 3, 2, 1]);
        var result2 = allNumbersFromXToOne(1);
        expect(result2).toBeSameArrayAs([1]);
        var result2 = allNumbersFromXToOne(3);
        expect(result2).toBeSameArrayAs([3, 2, 1]);
      },
    },
  ],
};

zTestSuite.makeStringWithXLetters = {
  title: `function "makeStringWithXLetters"`,
  instructions: `Make a function that takes two arguments, a number and a character. It should return a string with X copies of Y character. Example: makeStringWithXLetters( 5, "a" ) returns "aaaaa" (last time, we passed a string as our first argument, this time it's a number)`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeStringWithXLetters).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeStringWithXLetters).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(makeStringWithXLetters).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeStringWithXLetters).withArgs(3, "b").toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(makeStringWithXLetters).withArgs(3, "b").toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeStringWithXLetters("a", 5);
        expect(result).toBe("aaaaa");
        var result2 = makeStringWithXLetters("x", 10);
        expect(result2).toBe("xxxxxxxxxx");
        var result3 = makeStringWithXLetters("q", 0);
        expect(result3).toBe("");
      },
    },
  ],
};

zTestSuite.reverseNumber = {
  title: `function "reverseNumber"`,
  instructions: `Make a function that takes one argument, a number. It should return the number in reverse order. Example: reverseNumber(123456) returns 654321 (hint: you have to turn the number into a string and afterwards into an array of each individual character/number, then reverse the array)`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(reverseNumber).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(reverseNumber).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(reverseNumber).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(reverseNumber).withArgs(123456).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(reverseNumber).withArgs(123456).toReturnNumber();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = reverseNumber(123456);
        expect(result).toBe(654321);
        var result2 = reverseNumber(13579);
        expect(result2).toBe(97531);
        var result3 = reverseNumber(456789);
        expect(result3).toBe(987654);
      },
    },
  ],
};

zTestSuite.removeSmallNumbers = {
  title: `function "removeSmallNumbers"`,
  instructions: `You're taking care of a toddler and he can't read small numbers (between 0-4). You've decided to write a function that will remove those small number characters from the entire number, Example: removeSmallNumbers(123456789) returns 56789 (p.s. don't start your number with a 0, it won't work properly, example: removeSmallNumbers(0124))`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeSmallNumbers).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeSmallNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeSmallNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeSmallNumbers).withArgs("ca").toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(removeSmallNumbers).withArgs(123456789).toReturnNumber();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = removeSmallNumbers(123456789);
        expect(result).toBe(56789);
        var result2 = removeSmallNumbers(1234);
        expect(result2).toBe(0);
        var result3 = removeSmallNumbers(45678);
        expect(result3).toBe(5678);
      },
    },
  ],
};

zTestSuite.removeLargeNumbers = {
  title: `function "removeLargeNumbers"`,
  instructions: `Now the same toddler can't read large numbers anymore (between 5-9), only small ones, so you've decided to remove those. Example: removeLargeNumbers(1234567890) returns 12340 (p.s. don't start with a 0 in here too!)`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeLargeNumbers).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeLargeNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeLargeNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeLargeNumbers).withArgs("ab").toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(removeLargeNumbers).withArgs(123456).toReturnNumber();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = removeLargeNumbers(1234567890);
        expect(result).toBe(12340);
        var result2 = removeLargeNumbers(56789);
        expect(result2).toBe(0);
        var result3 = removeLargeNumbers(123789);
        expect(result3).toBe(123);
      },
    },
  ],
};

zTestSuite.keepOnlyLongWords = {
  title: `function "keepOnlyLongWords"`,
  instructions: `Make a function that takes two arguments, an array of strings and a number. It should remove all strings that have LESS characters than the passed number as the argument, and return the remaining strings in an array. Example: keepOnlyLongWords( ["homeland", "accordion", "cat", "drop", "fresh"], 5) returns [ "homeland", "accordion", "fresh"]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(keepOnlyLongWords).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(keepOnlyLongWords).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(keepOnlyLongWords).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(keepOnlyLongWords).withArgs(["cat"], 5).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(keepOnlyLongWords).withArgs(["cat"], 5).toReturnArray();
      },
    },
    {
      description: `returns array of strings`,
      test: () => {
        expect(keepOnlyLongWords)
          .withArgs(["cat"], 5)
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = keepOnlyLongWords(
          ["president", "leader", "cat", "dog"],
          4
        );
        expect(result).toBeSameArrayAs(["president", "leader"]);
        var result2 = keepOnlyLongWords(
          ["president", "leader", "cat", "dog"],
          1
        );
        expect(result2).toBeSameArrayAs(["president", "leader", "cat", "dog"]);
        var result3 = keepOnlyLongWords(
          ["president", "leader", "cat", "dog"],
          9
        );
        expect(result3).toBeSameArrayAs(["president"]);
      },
    },
  ],
};

zTestSuite.calculateAndMultiply = {
  title: `function "calculateAndMultiply"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should return the multiplication of all the numbers inside the array divided by its length, example: calculateAndMultiply( [ 2, 4, 6, 8, 10 ] ) returns 768`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(calculateAndMultiply).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(calculateAndMultiply).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(calculateAndMultiply).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(calculateAndMultiply).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(calculateAndMultiply).withArgs([1, 2, 3]).toReturnNumber();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = calculateAndMultiply([1, 8, 5, 20, 16]);
        expect(result).toBe(2560);
        var result2 = calculateAndMultiply([2]);
        expect(result2).toBe(2);
        var result3 = calculateAndMultiply([1, 2]);
        expect(result3).toBe(1);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
