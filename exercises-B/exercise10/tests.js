zTestSuite = {};

zTestSuite.removeWordsThatAreShort = {
  title: `function "removeWordsThatAreShort"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method to remove strings that have only 3 characters or less, returning the rest as an array. Example: removeWordsThatAreShort(["dog", "president", "document", "cat"]) returns ["president", "document"]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeWordsThatAreShort).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeWordsThatAreShort).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeWordsThatAreShort).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeWordsThatAreShort).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeWordsThatAreShort).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeWordsThatAreShort).withArgs([1, 2, 3]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeWordsThatAreShort)
          .withArgs(["dog", "god", "document"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "filter" method`,
      test: () => {
        expect(removeWordsThatAreShort)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeWordsThatAreShort(["president", "document", "cat"]);
        expect(result).toBeSameArrayAs(["president", "document"]);
        var result2 = removeWordsThatAreShort(["cat", "spirit", "positive"]);
        expect(result2).toBeSameArrayAs(["spirit", "positive"]);
        var result = removeWordsThatAreShort(["dog", "god", "cat"]);
        expect(result).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.removeWordsThatAreLong = {
  title: `function "removeWordsThatAreLong"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method to remove strings that have 8 characters or more, returning the rest as an array. Example: removeWordsThatAreLong(["dog", "president", "document", "cat"]) returns ["dog", "cat"]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeWordsThatAreLong).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeWordsThatAreLong).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeWordsThatAreLong).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeWordsThatAreLong).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeWordsThatAreLong).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeWordsThatAreLong).withArgs([1, 2, 3]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeWordsThatAreLong)
          .withArgs(["dog", "god", "document"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "filter" method`,
      test: () => {
        expect(removeWordsThatAreLong)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeWordsThatAreLong(["president", "document", "cat"]);
        expect(result).toBeSameArrayAs(["cat"]);
        var result2 = removeWordsThatAreLong(["dog", "spirit", "positive"]);
        expect(result2).toBeSameArrayAs(["dog", "spirit"]);
        var result = removeWordsThatAreLong(["dog", "god", "cat"]);
        expect(result).toBeSameArrayAs(["dog", "god", "cat"]);
      },
    },
  ],
};

zTestSuite.removeNegativeNumbers = {
  title: `function "removeNegativeNumbers"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should call the "array.filter" method and remove any numbers that are negative (below 0). Example: removeNegativeNumbers([5, -1, 8, 0, -2, -5) returns [5, 8, 0]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeNegativeNumbers).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeNegativeNumbers).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeNegativeNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeNegativeNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeNegativeNumbers).withArgs([0, 5]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeNegativeNumbers).withArgs([0, 5]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeNegativeNumbers)
          .withArgs([1, 2, 3, 4, 5, 6])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls "array.filter" method`,
      test: () => {
        expect(removeNegativeNumbers)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeNegativeNumbers([-1, -2, -3, -4]);
        expect(result).toBeSameArrayAs([]);
        var result2 = removeNegativeNumbers([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeNegativeNumbers([-1, 5, 8, -2, -3, 10, 12]);
        expect(result3).toBeSameArrayAs([5, 8, 10, 12]);
      },
    },
  ],
};

zTestSuite.removeWordsShorterThanX = {
  title: `function "removeWordsShorterThanX"`,
  instructions: `Make a function that takes two arguments, an array of strings and a number. It should call the "array.filter" method to remove the strings that are shorter or equal to the number that we passed as our 2nd argument, returning the rest as an array. Example: removeWordsShorterThanX(["president", "document", "cat"], 7) returns ["president", "document"]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeWordsShorterThanX).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeWordsShorterThanX).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeWordsShorterThanX).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(removeWordsShorterThanX).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeWordsShorterThanX)
          .withArgs(["cat", "football", "elementary"])
          .toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeWordsShorterThanX)
          .withArgs(["cat", "football", "elementary"])
          .toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeWordsShorterThanX)
          .withArgs(["cat", "football", "elementary"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "filter" method`,
      test: () => {
        expect(removeWordsShorterThanX)
          .withArgs(["cat", "football", "elementary"])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeWordsShorterThanX(
          ["cat", "football", "elementary"],
          4
        );
        expect(result).toBeSameArrayAs(["football", "elementary"]);
        var result2 = removeWordsShorterThanX(["cat", "dog", "pet"], 3);
        expect(result2).toBeSameArrayAs(["cat", "dog", "pet"]);
        var result3 = removeWordsShorterThanX(["cat", "dog", "pet"], 4);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.findTheIndexOfWord = {
  title: `function "findTheIndexOfWord"`,
  instructions: `Make a function that takes two arguments, an array of strings and a single string. It should call the "array.filter" method. The first argument is a list of strings inside an array, the 2nd argument is the index of the string inside the array. Example: findTheIndexOfWord(["football", "elementary", "cat", "elena", "aleksis"], "cat") returns 2 (remember, arrays start counting at 0, also this works the same way as indexOf())`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(findTheIndexOfWord).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(findTheIndexOfWord).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(findTheIndexOfWord).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(findTheIndexOfWord).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(findTheIndexOfWord).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `returns a number`,
      test: () => {
        expect(findTheIndexOfWord)
          .withArgs(["cat", "dog"], "dog")
          .toReturnNumber();
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(findTheIndexOfWord)
          .withArgs(["football", "document", "crew"])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = findTheIndexOfWord(
          ["football", "elementary", "cat", "document", "crew"],
          "football"
        );
        expect(result).toBe(0);
        var result = findTheIndexOfWord(
          ["football", "elementary", "cat", "document", "crew"],
          "elementary"
        );
        expect(result).toBe(1);
      },
    },
  ],
};

zTestSuite.getSmallNumberIndices = {
  title: `function "getSmallNumberIndices"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should call the "array.filter" method, and return an array at which indices (location in an array) the number higher than 10. Example: getSmallNumberIndices([5,6,10,5,15,8,15]) returns [0, 1, 3, 5] (have a good luck at the array we pass as the argument, number 5 is at which index of the array? the answer is... 0, therefore we store the number 0 inside our result array and return it, but our result array didn't return numbers 2 or 4, why? well... if you have a good luck, you'll notice that there is number 10 and number 15 at those location, which are higher than our condition, therefore it skips them)`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(getSmallNumberIndices).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(getSmallNumberIndices).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(getSmallNumberIndices).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(getSmallNumberIndices).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(getSmallNumberIndices).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(getSmallNumberIndices).withArgs([1, 2]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(getSmallNumberIndices)
          .withArgs([1, 2])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(getSmallNumberIndices)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = getSmallNumberIndices([5, 8, 4, 5, 6, 10, 5, 15, 13, 15]);
        expect(result).toBeSameArrayAs([0, 1, 2, 3, 4, 6]);
        var result2 = getSmallNumberIndices([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = getSmallNumberIndices([11, 31, 51]);
        expect(result3).toBeSameArrayAs([]);
        var result3 = getSmallNumberIndices([22, 44]);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

// ended here, really got stuck of possible exercises

zTestSuite.removeVowelsFromWords = {
  title: `function "removeVowelsFromWords"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method and remove all characters in the strings of the array that are vowels. Example: removeVowelsFromWords(["football", "elementary", "cat"]) returns ['ftbll', 'lmntry', 'ct']`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeVowelsFromWords).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeVowelsFromWords).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeVowelsFromWords).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(removeVowelsFromWords).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeVowelsFromWords).withArgs(["a", "z"]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeVowelsFromWords).withArgs(["a", "z"]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeVowelsFromWords)
          .withArgs(["a", "z"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeVowelsFromWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeVowelsFromWords(["cat", "dog", "president"]);
        expect(result).toBeSameArrayAs(["ct", "dg", "prsdnt"]);
        var result3 = removeVowelsFromWords(["document", "test", "element"]);
        expect(result3).toBeSameArrayAs(["dcmnt", "tst", "lmnt"]);
      },
    },
  ],
};

zTestSuite.removeConsonantsFromWords = {
  title: `function "removeConsonantsFromWords"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method and remove all strings in the array that are consonants (basically the opposite as the last function). Example: removeConsonantsFromWords(["football", "elementary", "cat"]) returns ["ooa", "eeea", "a"]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeConsonantsFromWords).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeConsonantsFromWords).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeConsonantsFromWords).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(removeConsonantsFromWords).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeConsonantsFromWords)
          .withArgs(["a", "z"])
          .toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeConsonantsFromWords).withArgs(["a", "z"]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeConsonantsFromWords)
          .withArgs(["a", "z"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeConsonantsFromWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeConsonantsFromWords(["cat", "dog", "president"]);
        expect(result).toBeSameArrayAs(["a", "o", "eie"]);
        var result2 = removeConsonantsFromWords([
          "document",
          "test",
          "element",
        ]);
        expect(result2).toBeSameArrayAs(["oue", "e", "eee"]);
        var result3 = removeConsonantsFromWords([]);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.amountOfCharactersInString = {
  title: `function "amountOfCharactersInString"`,
  instructions: `This exercise is completely optional and very advanced. The purpose behind it is for you to test and gain very valuable JavaScript skills. You need to create a function in which you pass a string as an argument and it has to return the amount of characters the strings contains. The solution is to store it inside an object, the keys of that said object are the strings characters, while the values are the amount of characters that the string has. This may sound confusing, so let me show you an example: amountOfCharactersInString('sunny') returns {s: 1, u: 1, n: 2, y: 1}`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(amountOfCharactersInString).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(amountOfCharactersInString).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(amountOfCharactersInString).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(amountOfCharactersInString).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(amountOfCharactersInString).withArgs("abc").toReturnSomething();
      },
    },
    {
      description: `returns an object`,
      test: () => {
        expect(amountOfCharactersInString).withArgs("abc").toReturnObject();
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(amountOfCharactersInString)
          .withArgs("abc")
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = amountOfCharactersInString("joke");
        expect(result).toBeSameObjectAs({ j: 1, o: 1, k: 1, e: 1 });
        var result2 = amountOfCharactersInString("documentation");
        expect(result2).toBeSameObjectAs({
          d: 1,
          o: 2,
          c: 1,
          u: 1,
          m: 1,
          e: 1,
          n: 2,
          t: 2,
          a: 1,
          i: 1,
        });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
