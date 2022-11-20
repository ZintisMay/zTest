zTestSuite = {};
zTestSuite.removeOddNumbers = {
  title: "function removeOddNumbers",
  instructions: `For each consecutive exercise you'll need to use the "filter" method to solve it, here you need to remove odd numbers on each array element, example: removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]) returns [2, 4, 6, 8]`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(removeOddNumbers).toBeDeclared();
      },
    },
    {
      description: `removeOddNumbers has a value`,
      test: () => {
        expect(removeOddNumbers).toHaveValue();
      },
    },
    {
      description: `removeOddNumbers is a function`,
      test: () => {
        expect(removeOddNumbers).toBeFunction();
      },
    },
    {
      description: `removeOddNumbers takes one argument`,
      test: () => {
        expect(removeOddNumbers).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
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
      },
    },
  ],
};

zTestSuite.removeNumbersLessThan3 = {
  title: "function removeNumbersLessThan3",
  instructions: `using the filter method, you'll need to remove all the elements inside the array that are equal or higher than 3, example: removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]) returns [4,5,6,7,8]`,
  tests: [
    {
      description: `removeOddNumbers has been declared`,
      test: () => {
        expect(removeNumbersLessThan3).toBeDeclared();
      },
    },
    {
      description: `removeNumbersLessThan3 has a value`,
      test: () => {
        expect(removeNumbersLessThan3).toHaveValue();
      },
    },
    {
      description: `removeNumbersLessThan3 is a function`,
      test: () => {
        expect(removeNumbersLessThan3).toBeFunction();
      },
    },
    {
      description: `removeNumbersLessThan3 takes one argument`,
      test: () => {
        expect(removeNumbersLessThan3).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
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
        expect(result).toBeSameArrayAs([4, 5, 6, 7]);
      },
    },
  ],
};

zTestSuite.removeWordsFromArray = {
  title: "function removeWordsFromArray",
  instructions: `create a function that will take 2 arguments, the 1st argument will contain a list of words inside an array, the 2nd argument will contain a single word, write a function using the "filter" method that will remove all words passed as the 2nd argument inside the 1st argument array, example: removeWordsFromArray(['President', 'cat', 'dog'], 'President') returns ['cat', 'dog']`,
  tests: [
    {
      description: `removeWordsFromArray has been declared`,
      test: () => {
        expect(removeWordsFromArray).toBeDeclared();
      },
    },
    {
      description: `removeWordsFromArray has a value`,
      test: () => {
        expect(removeWordsFromArray).toHaveValue();
      },
    },
    {
      description: `removeWordsFromArray is a function`,
      test: () => {
        expect(removeWordsFromArray).toBeFunction();
      },
    },
    {
      description: `removeWordsFromArray takes two arguments`,
      test: () => {
        expect(removeWordsFromArray).takesXArguments(2);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(removeWordsFromArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeWordsFromArray(
          ["Josh", "documentation"],
          "documentation"
        );
        expect(result).toBeSameArrayAs(["Josh"]);
      },
    },
  ],
};

zTestSuite.removeVowelsFromArray = {
  title: "function removeVowelsFromArray",
  instructions: `create a function that will take an array as an argument and remove any vowels inside the array, example: removeVowelsFromArray(["a", "b", "c", "d", "e"]) returns ["b", "c", "d"]`,
  tests: [
    {
      description: `removeVowelsFromArray has been declared`,
      test: () => {
        expect(removeVowelsFromArray).toBeDeclared();
      },
    },
    {
      description: `removeVowelsFromArray has a value`,
      test: () => {
        expect(removeVowelsFromArray).toHaveValue();
      },
    },
    {
      description: `removeVowelsFromArray is a function`,
      test: () => {
        expect(removeVowelsFromArray).toBeFunction();
      },
    },
    {
      description: `removeVowelsFromArray takes two arguments`,
      test: () => {
        expect(removeVowelsFromArray).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
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
      },
    },
  ],
};

zTestSuite.removeEmptyStringsFromArray = {
  title: "function removeEmptyStringsFromArray",
  instructions: `create a function that will take an array as an argument and removes any empty strings inside the array, example: removeEmptyStringsFromArray(["", "", "Phone", "Josh", "e"]) returns ["Phone", "Josh"]`,
  tests: [
    {
      description: `removeEmptyStringsFromArray has been declared`,
      test: () => {
        expect(removeEmptyStringsFromArray).toBeDeclared();
      },
    },
    {
      description: `removeEmptyStringsFromArray has a value`,
      test: () => {
        expect(removeEmptyStringsFromArray).toHaveValue();
      },
    },
    {
      description: `removeEmptyStringsFromArray is a function`,
      test: () => {
        expect(removeEmptyStringsFromArray).toBeFunction();
      },
    },
    {
      description: `removeEmptyStringsFromArray takes two arguments`,
      test: () => {
        expect(removeEmptyStringsFromArray).takesXArguments(1);
      },
    },
    {
      description: `checking if the "filter" method has been called`,
      test: () => {
        expect(removeEmptyStringsFromArray)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "filter");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = removeEmptyStringsFromArray([
          "",
          "",
          "dog",
          "documentation",
          "cat",
        ]);
        expect(result).toBeSameArrayAs(["dog", "documentation", "cat"]);
      },
    },
  ],
};

// for parseInt .callsFunction(Window, "parseInt");

// for math.random .callsFunction(Math, "random");

Z_T.testAll(zTestSuite);
