zTestSuite = {};
zTestSuite.makeXAsterisks = {
  title: `function "makeXAsterisks"`,
  instructions: `Make a function that takes one argument, a number. It should return a string with that many asterisks in it. Example: makeXAsterisk(5) returns "*****"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeXAsterisks).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeXAsterisks).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(makeXAsterisks).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeXAsterisks).withArgs(3).toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(makeXAsterisks).withArgs(3).toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeXAsterisks(5);
        expect(result).toBe("*****");
        var result2 = makeXAsterisks(3);
        expect(result2).toBe("***");
        var result3 = makeXAsterisks(12);
        expect(result3).toBe("************");
      },
    },
  ],
};

zTestSuite.allNumbersUpToX = {
  title: `function "allNumbersUpToX"`,
  instructions: `Make a function that takes one argument, a number. It should return an array of every number up to that number, starting at 1. 
  example: allNumbersUpToX(5) return [1,2,3,4,5]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(allNumbersUpToX).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(allNumbersUpToX).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(allNumbersUpToX).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(allNumbersUpToX).withArgs(4).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(allNumbersUpToX).withArgs(4).toReturnArray();
      },
    },
    {
      description: `returns array of numbers`,
      test: () => {
        expect(allNumbersUpToX).withArgs(4).toReturnArrayOfType("number");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = allNumbersUpToX(8);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7, 8]);
        var result2 = allNumbersUpToX(1);
        expect(result2).toBeSameArrayAs([1]);
        var result2 = allNumbersUpToX(3);
        expect(result2).toBeSameArrayAs([1, 2, 3]);
      },
    },
  ],
};

zTestSuite.makeStringWithXLetterY = {
  title: `function "makeStringWithXLetterY"`,
  instructions: `Make a function that takes two arguments, a number and a character. It should return a string with X copies of Y character. Example: makeStringWithXLetterY( 4, "b" ) returns "bbbb"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeStringWithXLetterY).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeStringWithXLetterY).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(makeStringWithXLetterY).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeStringWithXLetterY).withArgs(3, "b").toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(makeStringWithXLetterY).withArgs(3, "b").toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeStringWithXLetterY(5, "a");
        expect(result).toBe("aaaaa");
        var result2 = makeStringWithXLetterY(10, "x");
        expect(result2).toBe("xxxxxxxxxx");
        var result3 = makeStringWithXLetterY(0, "q");
        expect(result3).toBe("");
      },
    },
  ],
};

zTestSuite.reverseWord = {
  title: `function "reverseWord"`,
  instructions: `Make a function that takes one argument, a string. It should return the string in reverse order. Example: reverseWord("cat") returns "tac"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(reverseWord).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(reverseWord).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(reverseWord).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(reverseWord).withArgs("bill").toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(reverseWord).withArgs("bill").toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = reverseWord("towel");
        expect(result).toBe("lewot");
        var result2 = reverseWord("aba");
        expect(result2).toBe("aba");
        var result3 = reverseWord("cow");
        expect(result3).toBe("woc");
      },
    },
  ],
};

zTestSuite.removeVowels = {
  title: `function "removeVowels"`,
  instructions: `Make a function that takes one argument, a string. It should return a string with the vowels removed. Example: removeVowels( 'opportunity' ) returns 'pprtnty'`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeVowels).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeVowels).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeVowels).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeVowels).withArgs("ca").toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(removeVowels).withArgs("ca").toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = removeVowels("behaviour");
        expect(result).toBe("bhvr");
        var result2 = removeVowels("aeiou");
        expect(result2).toBe("");
        var result3 = removeVowels("bcdfghjklmnpqrstvwxyz");
        expect(result3).toBe("bcdfghjklmnpqrstvwxyz");
      },
    },
  ],
};

zTestSuite.removeConsonants = {
  title: `function "removeConsonants"`,
  instructions: `Make a function that takes one argument, a string. It should return a string with the consonants removed. Example: removeConsonants( 'opportunity' ) returns 'oouiy'`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeConsonants).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeConsonants).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeConsonants).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeConsonants).withArgs("ab").toReturnSomething();
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(removeConsonants).withArgs("ab").toReturnString();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = removeConsonants("abcdefghijklmnopqrstuvwxyz");
        expect(result).toBe("aeiou");
        var result2 = removeConsonants("aeiou");
        expect(result2).toBe("aeiou");
        var result3 = removeConsonants("xyz");
        expect(result3).toBe("");
      },
    },
  ],
};

zTestSuite.removeWordsOfLengthXPlus = {
  title: `function "removeWordsOfLengthXPlus"`,
  instructions: `Make a function that takes two arguments, an array of strings and a number. It should remove any string in the array that is as long or longer than the number, and return the remaining strings in an array. Example: removeWordsOfLengthXPlus( ["homeland", "accordion", "cat", "drop", "fresh"], 5 ) returns [ "cat", "drop" ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeWordsOfLengthXPlus).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeWordsOfLengthXPlus).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(removeWordsOfLengthXPlus).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeWordsOfLengthXPlus)
          .withArgs(["cat"], 5)
          .toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(removeWordsOfLengthXPlus).withArgs(["cat"], 5).toReturnArray();
      },
    },
    {
      description: `returns array of strings`,
      test: () => {
        expect(removeWordsOfLengthXPlus)
          .withArgs(["cat"], 5)
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = removeWordsOfLengthXPlus(
          ["president", "leader", "cat", "dog"],
          4
        );
        expect(result).toBeSameArrayAs(["cat", "dog"]);
        var result2 = removeWordsOfLengthXPlus(
          ["president", "leader", "cat", "dog"],
          1
        );
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeWordsOfLengthXPlus(
          ["president", "leader", "cat", "dog"],
          12
        );
        expect(result3).toBeSameArrayAs(["president", "leader", "cat", "dog"]);
      },
    },
  ],
};

zTestSuite.calculateAverage = {
  title: `function "calculateAverage"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should return a number that is the average of all numbers in the array. Example: calculateAverage( [ 2, 4, 6, 8, 10 ] ) returns 6`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(calculateAverage).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(calculateAverage).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(calculateAverage).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(calculateAverage).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(calculateAverage).withArgs([1, 2, 3]).toReturnNumber();
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = calculateAverage([1, 8, 5, 20, 16]);
        expect(result).toBe(10);
        var result2 = calculateAverage([2]);
        expect(result2).toBe(2);
        var result3 = calculateAverage([1, 2]);
        expect(result3).toBe(1.5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
