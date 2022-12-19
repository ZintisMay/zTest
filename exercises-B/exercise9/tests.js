zTestSuite = {};
zTestSuite.arrayValuesPlusTwo = {
  title: `function "arrayValuesPlusTwo"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to add two to each number and return the resulting array. Example: arrayValuesPlusTwo( [ 1, 3, 5 ] ) returns [ 3, 5, 7 ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(arrayValuesPlusTwo).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(arrayValuesPlusTwo).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(arrayValuesPlusTwo).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(arrayValuesPlusTwo).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(arrayValuesPlusTwo).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(arrayValuesPlusTwo)
          .withArgs([1, 2])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(arrayValuesPlusTwo)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = arrayValuesPlusTwo([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([3,4,5,6,7,8,9]);
        var result2 = arrayValuesPlusTwo([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = arrayValuesPlusTwo([1]);
        expect(result3).toBeSameArrayAs([3]);
      },
    },
  ],
};

zTestSuite.tripleArrayValues = {
  title: `function "tripleArrayValues"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to triple all the values in the array and return an array. Example: tripleArrayValues( [ 2, 5, 11 ] returns [ 6, 15, 33 ] )`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(tripleArrayValues).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(tripleArrayValues).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(tripleArrayValues).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(tripleArrayValues).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(tripleArrayValues).withArgs([1]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(tripleArrayValues).withArgs([1]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(tripleArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(tripleArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = tripleArrayValues([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([3,6,9,12,15,18,21]);
        var result2 = tripleArrayValues([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = tripleArrayValues([-1, 0, 1]);
        expect(result3).toBeSameArrayAs([-3, 0, 3]);
      },
    },
  ],
};

zTestSuite.quarterArrayValues = {
  title: `function "quarterArrayValues"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to divide each item in the array by 4, and return the resulting array. Example: [ 2, 4, 6, 8, 10 ] returns [ .5, 1, 1.5, 2, 2.5 ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(quarterArrayValues).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(quarterArrayValues).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(quarterArrayValues).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(quarterArrayValues).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(quarterArrayValues).withArgs([]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(quarterArrayValues).withArgs([]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(quarterArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(quarterArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = quarterArrayValues([4, 8, 12, 16, 20, 24]);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6]);
        var result2 = quarterArrayValues([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = quarterArrayValues([-2, -4, 0]);
        expect(result3).toBeSameArrayAs([-0.5, -1, 0]);
      },
    },
  ],
};

zTestSuite.cubeArrayValues = {
  title: `function "cubeArrayValues"`,
  instructions: `Make a function that takes one argument, an arry of numbers. It should use the "array.map" method to cube each number in the array and return it. Example: cubeArrayValues([10, 8]) returns [1000, 512]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(cubeArrayValues).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(cubeArrayValues).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(cubeArrayValues).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(cubeArrayValues).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(cubeArrayValues).withArgs([1]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(cubeArrayValues).withArgs([1]).toReturnArray();
      },
    },
    {
      description: `returns an array of numbers`,
      test: () => {
        expect(cubeArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(cubeArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = cubeArrayValues([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([8, 64, 216, 512, 1000, 1728]);
        var result2 = cubeArrayValues([0]);
        expect(result2).toBeSameArrayAs([0]);
        var result3 = cubeArrayValues([]);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.onlySecondLetterOfWords = {
  title: `function "onlySecondLetterOfWords"`,
  instructions: `Make a function that takes one argument, an array of strings. It should use the "array.map" method to return an array of the second letters of each string. Example: onlySecondLetterOfWords( ['cat', 'dog', 'pepper', 'zebra'] ) returns [ 'a', 'o', 'e', 'e' ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(onlySecondLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(onlySecondLetterOfWords).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(onlySecondLetterOfWords).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(onlySecondLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(onlySecondLetterOfWords).withArgs(["a"]).toReturnSomething(1);
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(onlySecondLetterOfWords).withArgs(["a"]).toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(onlySecondLetterOfWords)
          .withArgs(["ab"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(onlySecondLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlySecondLetterOfWords([
          "cat",
          "sibling",
          "pepper",
          "zebra",
        ]);
        expect(result).toBeSameArrayAs(["a", "i", "e", "e"]);
        // var result2 = onlySecondLetterOfWords([]);
        // expect(result2).toBeSameArrayAs([]);
        // var result3 = onlySecondLetterOfWords(["a", "b", "c"]);
        // expect(result3).toBeSameArrayAs([]);
        var result4 = onlySecondLetterOfWords(["ad", "bz", "cr"]);
        expect(result4).toBeSameArrayAs(["d", "z", "r"]);
      },
    },
  ],
};

zTestSuite.onlyFirstAndLastLettersOfWords = {
  title: `function "onlyFirstAndLastLettersOfWords"`,
  instructions: `Make a function that takes one argument, an array of strings. It should use the "array.map" method to return an array that is the first and last letter of each string. Example: onlyFirstAndLastLettersOfWords( [ "cat", "dog", "mind", "child" ] ) should return [ "ct", "dg", "md", "cd" ]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords).toHaveValue();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords)
          .withArgs(["aer", "ab", "abc"])
          .toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords)
          .withArgs(["aer", "ab", "abc"])
          .toReturnArray();
      },
    },
    {
      description: `returns an array of strings`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords)
          .withArgs(["abcd", "ab", "abc"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `calls the "array.map" method`,
      test: () => {
        expect(onlyFirstAndLastLettersOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlyFirstAndLastLettersOfWords(["cat", "wing", "trot", "coo"]);
        expect(result).toBeSameArrayAs(["ct", "wg", "tt", "co"]);
        var result2 = onlyFirstAndLastLettersOfWords([]);
        expect(result2).toBeSameArrayAs([]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
