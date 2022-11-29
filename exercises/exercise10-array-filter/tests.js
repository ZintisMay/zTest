zTestSuite = {};

zTestSuite.removeOddNumbers = {
  title: `function "removeOddNumbers"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should call the "array.filter" method, and return an array with no odd numbers. Example: removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]) returns [2, 4, 6, 8]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeOddNumbers).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeOddNumbers).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeOddNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeOddNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeOddNumbers).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeOddNumbers).withArgs([1, 2]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeOddNumbers).withArgs([1, 2]).toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeOddNumbers)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeOddNumbers([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([2, 4, 6]);
        var result2 = removeOddNumbers([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeOddNumbers([11, 31, 51]);
        expect(result3).toBeSameArrayAs([]);
        var result3 = removeOddNumbers([22, 44]);
        expect(result3).toBeSameArrayAs([22, 44]);
      },
    },
  ],
};

zTestSuite.removeEvenNumbers = {
  title: `function "removeEvenNumbers"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should call the "array.filter" method, and return an array with no even numbers. Example: removeEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8 ] ) returns [ 1, 3, 5, 7 ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeEvenNumbers).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeEvenNumbers).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeEvenNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeEvenNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeEvenNumbers).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeEvenNumbers).withArgs([1, 2]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeEvenNumbers)
          .withArgs([1, 2])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeEvenNumbers)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeEvenNumbers([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([1, 3, 5, 7]);
        var result2 = removeEvenNumbers([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeEvenNumbers([11, 31, 51]);
        expect(result3).toBeSameArrayAs([11, 31, 51]);
        var result3 = removeEvenNumbers([22, 44]);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.removeNumbersLessThan3 = {
  title: `function "removeNumbersLessThan3"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should call the "array.filter" method to remove numbers that are less than 3, returning the rest as an array. Example: removeNumbersLessThan3( [ 1, 2, 3, 4, 5, 6, 7, 8 ] ) returns [ 3, 4, 5, 6, 7, 8 ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeNumbersLessThan3).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeNumbersLessThan3).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeNumbersLessThan3).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeNumbersLessThan3).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeNumbersLessThan3).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeNumbersLessThan3).withArgs([1, 2, 3]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeNumbersLessThan3)
          .withArgs([1, 2, 3])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "filter" method`,
      test: () => {
        expect(removeNumbersLessThan3)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeNumbersLessThan3([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([3, 4, 5, 6, 7]);
        var result2 = removeNumbersLessThan3([1, 1, 2, 2, 1, 2, 1]);
        expect(result2).toBeSameArrayAs([]);
        var result = removeNumbersLessThan3([3, 4, 5, 6, 100]);
        expect(result).toBeSameArrayAs([3, 4, 5, 6, 100]);
      },
    },
  ],
};

zTestSuite.removeNumbersLessThanX = {
  title: `function "removeNumbersLessThanX"`,
  instructions: `Make a function that takes two arguments, an array of numbers and a number. It should call the "array.filter" method to remove numbers that are less than the 2nd argument, returning the rest as an array. Example: removeNumbersLessThanX( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 7 ) returns [ 7, 8 ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeNumbersLessThanX).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeNumbersLessThanX).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeNumbersLessThanX).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(removeNumbersLessThanX).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeNumbersLessThanX).withArgs([1, 2, 3]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeNumbersLessThanX).withArgs([1, 2, 3]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(removeNumbersLessThanX)
          .withArgs([1, 2, 3])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "filter" method`,
      test: () => {
        expect(removeNumbersLessThanX)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeNumbersLessThanX([1, 2, 3, 4, 5, 6, 7], 4);
        expect(result).toBeSameArrayAs([4, 5, 6, 7]);
        var result2 = removeNumbersLessThanX([1, 1, 2, 2, 1, 2, 1], 2);
        expect(result2).toBeSameArrayAs([2, 2, 2]);
        var result3 = removeNumbersLessThanX([3, 4, 5, 6, 100], 50);
        expect(result3).toBeSameArrayAs([100]);
        var result4 = removeNumbersLessThanX([], 50);
        expect(result4).toBeSameArrayAs([]);
        var result5 = removeNumbersLessThanX([1000, 999999], 100000);
        expect(result5).toBeSameArrayAs([999999]);
      },
    },
  ],
};

zTestSuite.removeEmptyStrings = {
  title: `function "removeEmptyStrings"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method and remove any empty strings (""). Example: removeEmptyStrings([ "", "", "Phone", "Josh", "e" ]) returns [ "Phone", "Josh", "e" ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeEmptyStrings).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeEmptyStrings).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeEmptyStrings).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(removeEmptyStrings).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeEmptyStrings).withArgs(["a", ""]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeEmptyStrings).withArgs(["a", ""]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeEmptyStrings)
          .withArgs(["a", ""])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls "array.filter" method`,
      test: () => {
        expect(removeEmptyStrings)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeEmptyStrings(["", "", "dog", "document", "cat"]);
        expect(result).toBeSameArrayAs(["dog", "document", "cat"]);
        var result2 = removeEmptyStrings([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeEmptyStrings(["", "", ""]);
        expect(result3).toBeSameArrayAs([]);
        var result4 = removeEmptyStrings(["a", "a", "a"]);
        expect(result4).toBeSameArrayAs(["a", "a", "a"]);
      },
    },
  ],
};

zTestSuite.removeVowelsFromArray = {
  title: `function "removeVowelsFromArray"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method and remove all strings in the array that are a vowel. Example: removeVowelsFromArray( [ "a", "b", "c", "d", "e" ] ) returns [ "b", "c", "d" ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeVowelsFromArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeVowelsFromArray).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeVowelsFromArray).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(removeVowelsFromArray).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeVowelsFromArray).withArgs(["a", "z"]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeVowelsFromArray).withArgs(["a", "z"]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeVowelsFromArray)
          .withArgs(["a", "z"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeVowelsFromArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeVowelsFromArray(["a", "b", "c"]);
        expect(result).toBeSameArrayAs(["b", "c"]);
        var result2 = removeVowelsFromArray(["a", "e", "i", "o", "u"]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = removeVowelsFromArray([]);
        expect(result3).toBeSameArrayAs([]);
        var result4 = removeVowelsFromArray(["b", "x", "z"]);
        expect(result4).toBeSameArrayAs(["b", "x", "z"]);
      },
    },
  ],
};

zTestSuite.removeConsonantsInArray = {
  title: `function "removeConsonantsInArray"`,
  instructions: `Make a function that takes one argument, an array of strings. It should call the "array.filter" method and remove all strings in the array that are a vowel. Example: removeConsonantsInArray( [ "a", "b", "c", "d", "e" ] ) returns [ "b", "c", "d" ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeConsonantsInArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeConsonantsInArray).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeConsonantsInArray).toBeFunction();
      },
    },
    {
      description: `takes one arguments`,
      test: () => {
        expect(removeConsonantsInArray).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeConsonantsInArray)
          .withArgs(["a", "z"])
          .toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeConsonantsInArray).withArgs(["a", "z"]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeConsonantsInArray)
          .withArgs(["a", "z"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeConsonantsInArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeConsonantsInArray(["a", "b", "c"]);
        expect(result).toBeSameArrayAs(["a"]);
        var result2 = removeConsonantsInArray(["a", "e", "i", "o", "u"]);
        expect(result2).toBeSameArrayAs(["a", "e", "i", "o", "u"]);
        var result3 = removeConsonantsInArray([]);
        expect(result3).toBeSameArrayAs([]);
        var result4 = removeConsonantsInArray(["b", "x", "z"]);
        expect(result4).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.removeWordFromArray = {
  title: `function "removeWordFromArray"`,
  instructions: `Make a function that takes two arguments, an array of strings and a word(string). It should call the "array.filter" method to remove all strings in the array that match the word. Example: removeWordFromArray([ "cat", "dog", "fish" ], "fish" ) returns [ "cat", "dog" ])`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(removeWordFromArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(removeWordFromArray).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(removeWordFromArray).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(removeWordFromArray).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(removeWordFromArray)
          .withArgs(["a", "b"], "a")
          .toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(removeWordFromArray).withArgs(["a", "b"], "a").toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(removeWordFromArray)
          .withArgs(["a", "b"], "a")
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.filter" method`,
      test: () => {
        expect(removeWordFromArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeWordFromArray(
          ["joke", "documentation"],
          "documentation"
        );
        expect(result).toBeSameArrayAs(["joke"]);
        var result2 = removeWordFromArray(["joke", "documentation"], "cat");
        expect(result2).toBeSameArrayAs(["joke", "documentation"]);
        var result3 = removeWordFromArray([], "cat");
        expect(result3).toBeSameArrayAs([]);
        var result4 = removeWordFromArray(
          ["cat", "cat", "cat", "cat", "cat"],
          "cat"
        );
        expect(result4).toBeSameArrayAs([]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
