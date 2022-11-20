zTestSuite = {};
zTestSuite.arrayValuesPlusOne = {
  title: "function arrayValuesPlusOne",
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to add one to each number and return the resulting array. Example: arrayValuesPlusOne( [ 1, 3, 5 ] ) returns [ 2, 4, 6 ]`,
  tests: [
    {
      description: `arrayValuesPlusOne is declared`,
      test: () => {
        expect(arrayValuesPlusOne).toBeDeclared();
      },
    },
    {
      description: `arrayValuesPlusOne has a value`,
      test: () => {
        expect(arrayValuesPlusOne).toHaveValue();
      },
    },
    {
      description: `arrayValuesPlusOne is a function`,
      test: () => {
        expect(arrayValuesPlusOne).toBeFunction();
      },
    },
    {
      description: `arrayValuesPlusOne takes one argument`,
      test: () => {
        expect(arrayValuesPlusOne).takesXArguments(1);
      },
    },
    {
      description: `arrayValuesPlusOne returns something`,
      test: () => {
        expect(arrayValuesPlusOne).withArgs([1, 2]).toReturnSomething();
      },
    },
    {
      description: `arrayValuesPlusOne returns something`,
      test: () => {
        expect(arrayValuesPlusOne)
          .withArgs([1, 2])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `arrayValuesPlusOne calls the "array.map" method`,
      test: () => {
        expect(arrayValuesPlusOne)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = arrayValuesPlusOne([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([2, 3, 4, 5, 6, 7, 8]);
        var result2 = arrayValuesPlusOne([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = arrayValuesPlusOne([1]);
        expect(result3).toBeSameArrayAs([2]);
      },
    },
  ],
};

zTestSuite.doubleArrayValues = {
  title: "function doubleArrayValues",
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to double all the values in the array and return an array. Example: doubleArrayValues( [ 2, 5, 11 ] returns [ 4, 10, 22 ] )`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
      test: () => {
        expect(doubleArrayValues).toBeDeclared();
      },
    },
    {
      description: `doubleArrayValues has a value`,
      test: () => {
        expect(doubleArrayValues).toHaveValue();
      },
    },
    {
      description: `doubleArrayValues is a function`,
      test: () => {
        expect(doubleArrayValues).toBeFunction();
      },
    },
    {
      description: `doubleArrayValues takes one argument`,
      test: () => {
        expect(doubleArrayValues).takesXArguments(1);
      },
    },
    {
      description: `doubleArrayValues returns something`,
      test: () => {
        expect(doubleArrayValues).withArgs([1]).toReturnSomething();
      },
    },
    {
      description: `doubleArrayValues returns an array`,
      test: () => {
        expect(doubleArrayValues).withArgs([1]).toReturnArray();
      },
    },
    {
      description: `doubleArrayValues returns an array of numbers`,
      test: () => {
        expect(doubleArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `doubleArrayValues calls the "array.map" method`,
      test: () => {
        expect(doubleArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = doubleArrayValues([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toBeSameArrayAs([2, 4, 6, 8, 10, 12, 14]);
        var result2 = doubleArrayValues([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = doubleArrayValues([-1, 0, 1]);
        expect(result3).toBeSameArrayAs([-2, 0, 2]);
      },
    },
  ],
};

zTestSuite.halveArrayValues = {
  title: "function halveArrayValues",
  instructions: `Make a function that takes one argument, an array of numbers. It should use the "array.map" method to divide each item in the array by 2, and return the resulting array. Example: [ 1, 2, 3, 4, 5 ] returns [ .5, 1, 1.5, 2, 2.5 ]`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
      test: () => {
        expect(halveArrayValues).toBeDeclared();
      },
    },
    {
      description: `halveArrayValues has a value`,
      test: () => {
        expect(halveArrayValues).toHaveValue();
      },
    },
    {
      description: `halveArrayValues is a function`,
      test: () => {
        expect(halveArrayValues).toBeFunction();
      },
    },
    {
      description: `halveArrayValues takes one argument`,
      test: () => {
        expect(halveArrayValues).takesXArguments(1);
      },
    },
    {
      description: `halveArrayValues returns something`,
      test: () => {
        expect(halveArrayValues).withArgs([]).toReturnSomething();
      },
    },
    {
      description: `halveArrayValues returns an array`,
      test: () => {
        expect(halveArrayValues).withArgs([]).toReturnArray();
      },
    },
    {
      description: `halveArrayValues returns an array of numbers`,
      test: () => {
        expect(halveArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `checking if the "map" method has been called`,
      test: () => {
        expect(halveArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = halveArrayValues([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6]);
        var result2 = halveArrayValues([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = halveArrayValues([-1, -2, 0]);
        expect(result3).toBeSameArrayAs([-0.5, -1, 0]);
      },
    },
  ],
};

zTestSuite.squareArrayValues = {
  title: "function squareArrayValues",
  instructions: `Make a function that takes one argument, an arry of numbers. It should use the "array.map" method to square each number in the array and return it. Example: squareArrayValues([10,8]) returns [100, 64]`,
  tests: [
    {
      description: `"squareArrayValues" is declared`,
      test: () => {
        expect(squareArrayValues).toBeDeclared();
      },
    },
    {
      description: `"squareArrayValues" has a value`,
      test: () => {
        expect(squareArrayValues).toHaveValue();
      },
    },
    {
      description: `"squareArrayValues" is a function`,
      test: () => {
        expect(squareArrayValues).toBeFunction();
      },
    },
    {
      description: `"squareArrayValues" takes one argument`,
      test: () => {
        expect(squareArrayValues).takesXArguments(1);
      },
    },
    {
      description: `"squareArrayValues" returns something`,
      test: () => {
        expect(squareArrayValues).withArgs([1]).toReturnSomething();
      },
    },
    {
      description: `"squareArrayValues" returns an array`,
      test: () => {
        expect(squareArrayValues).withArgs([1]).toReturnArray();
      },
    },
    {
      description: `"squareArrayValues" returns an array of numbers`,
      test: () => {
        expect(squareArrayValues).withArgs([1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `"squareArrayValues" calls the "array.map" method`,
      test: () => {
        expect(squareArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `"squareArrayValues" returns the correct value`,
      test: () => {
        var result = squareArrayValues([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([4, 16, 36, 64, 100, 144]);
        var result2 = squareArrayValues([0]);
        expect(result2).toBeSameArrayAs([0]);
        var result3 = squareArrayValues([]);
        expect(result3).toBeSameArrayAs([]);
      },
    },
  ],
};

zTestSuite.onlyFirstLetterOfWords = {
  title: "function onlyFirstLetterOfWords",
  instructions: `Make a function that takes one argument, an array of strings. It should use the "array.map" method to return an array of the first letters of each string. Example: onlyFirstLetterOfWords( ['cat', 'dog', 'pepper', 'zebra'] ) returns [ 'c', 'd', 'p', 'z' ]`,
  tests: [
    {
      description: `"onlyFirstLetterOfWords" is declared`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `"onlyFirstLetterOfWords" has a value`,
      test: () => {
        expect(onlyFirstLetterOfWords).toHaveValue();
      },
    },
    {
      description: `"onlyFirstLetterOfWords" is a function`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeFunction();
      },
    },
    {
      description: `"onlyFirstLetterOfWords" takes one argument`,
      test: () => {
        expect(onlyFirstLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `"onlyFirstLetterOfWords" returns something`,
      test: () => {
        expect(onlyFirstLetterOfWords).withArgs(["a"]).toReturnSomething(1);
      },
    },
    {
      description: `"onlyFirstLetterOfWords" returns an array`,
      test: () => {
        expect(onlyFirstLetterOfWords).withArgs(["a"]).toReturnArray();
      },
    },
    {
      description: `"onlyFirstLetterOfWords" returns an array of strings`,
      test: () => {
        expect(onlyFirstLetterOfWords)
          .withArgs(["a"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `"onlyFirstLetterOfWords" calls the "array.map" method`,
      test: () => {
        expect(onlyFirstLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlyFirstLetterOfWords([
          "cat",
          "sibling",
          "pepper",
          "zebra",
        ]);
        expect(result).toBeSameArrayAs(["c", "s", "p", "z"]);
        var result2 = onlyFirstLetterOfWords([]);
        expect(result2).toBeSameArrayAs([]);
        var result3 = onlyFirstLetterOfWords(["a", "b", "c"]);
        expect(result3).toBeSameArrayAs(["a", "b", "c"]);
        var result4 = onlyFirstLetterOfWords(["az", "bz", "cz"]);
        expect(result4).toBeSameArrayAs(["a", "b", "c"]);
      },
    },
  ],
};

zTestSuite.onlyLastLetterOfWords = {
  title: "function onlyLastLetterOfWords",
  instructions: `Make a function that takes one argument, an array of strings. It should use the "array.map" method to return an array that is the last letter of each string. Example: onlyLastLetterOfWords( [ "cat", "dog", "mind", "child" ] ) should return [ "t", "g", "d", "d" ]`,
  tests: [
    {
      description: `"onlyLastLetterOfWords" is declared`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `"onlyLastLetterOfWords" has a value`,
      test: () => {
        expect(onlyLastLetterOfWords).toHaveValue();
      },
    },
    {
      description: `"onlyLastLetterOfWords" is a function`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeFunction();
      },
    },
    {
      description: `"onlyLastLetterOfWords" takes one argument`,
      test: () => {
        expect(onlyLastLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `"onlyLastLetterOfWords" returns something`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs(["a", "ab", "abc"])
          .toReturnSomething();
      },
    },
    {
      description: `"onlyLastLetterOfWords" returns an array`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs(["a", "ab", "abc"])
          .toReturnArray();
      },
    },
    {
      description: `"onlyLastLetterOfWords" returns an array of strings`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs(["a", "ab", "abc"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `"onlyLastLetterOfWords" calls the "array.map" method`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `"onlyLastLetterOfWords" returns the correct value`,
      test: () => {
        var result = onlyLastLetterOfWords(["cat", "wing", "trot", "coo"]);
        expect(result).toBeSameArrayAs(["t", "g", "t", "o"]);
        var result2 = onlyLastLetterOfWords([]);
        expect(result2).toBeSameArrayAs([]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
