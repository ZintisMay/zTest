zTestSuite = {};
zTestSuite.arrayValuesPlusOne = {
  title: "function arrayValuesPlusOne",
  instructions: `For each consecutive exercise you'll need to use the "map" method to solve it, here you need to add +1 on each array element`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
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
      description: `checking if the "map" method has been called`,
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
      },
    },
  ],
};

zTestSuite.doubleArrayValues = {
  title: "function doubleArrayValues",
  instructions: `you'll need to double all the elements inside the array, example: doubleArrayValues([2,3]) returns [4,6]`,
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
      description: `checking if the "map" method has been called`,
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
      },
    },
  ],
};

zTestSuite.halveArrayValues = {
  title: "function halveArrayValues",
  instructions: `same as above, but this time you need to divide the result by 2, example: halveArrayValues([10,8]) returns [5,3]`,
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
      },
    },
  ],
};

zTestSuite.squareArrayValues = {
  title: "function squareArrayValues",
  instructions: `same as above, but this time you need to square the results, example: squareArrayValues([10,8]) returns [100, 64]`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
      test: () => {
        expect(squareArrayValues).toBeDeclared();
      },
    },
    {
      description: `squareArrayValues has a value`,
      test: () => {
        expect(squareArrayValues).toHaveValue();
      },
    },
    {
      description: `squareArrayValues is a function`,
      test: () => {
        expect(squareArrayValues).toBeFunction();
      },
    },
    {
      description: `squareArrayValues takes one argument`,
      test: () => {
        expect(squareArrayValues).takesXArguments(1);
      },
    },
    {
      description: `checking if the "map" method has been called`,
      test: () => {
        expect(squareArrayValues)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = squareArrayValues([2, 4, 6, 8, 10, 12]);
        expect(result).toBeSameArrayAs([4, 16, 36, 64, 100, 144]);
      },
    },
  ],
};

zTestSuite.onlyFirstLetterOfWords = {
  title: "function onlyFirstLetterOfWords",
  instructions: `make a function called "onlyFirstLetterOfWords" that will pass an array of words as an argument and return only the 1st letter of each word, example: onlyFirstLetterOfWords(['cat', 'sibling', 'President', 'Massasuchets']) returns ['c', 's', 'P', 'M']`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `onlyFirstLetterOfWords has a value`,
      test: () => {
        expect(onlyFirstLetterOfWords).toHaveValue();
      },
    },
    {
      description: `onlyFirstLetterOfWords is a function`,
      test: () => {
        expect(onlyFirstLetterOfWords).toBeFunction();
      },
    },
    {
      description: `onlyFirstLetterOfWords takes one argument`,
      test: () => {
        expect(onlyFirstLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `checking if the "map" method has been called`,
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
          "President",
          "Neo",
        ]);
        expect(result).toBeSameArrayAs(["c", "s", "P", "N"]);
      },
    },
  ],
};

zTestSuite.onlyLastLetterOfWords = {
  title: "function onlyLastLetterOfWords",
  instructions: `same as above, only this time it returns the last letter of each word, example: onlyLastLetterOfWords(['cat', 'sibling', 'President', 'Massasuchets']) returns ['t', 'g', 't', 's']`,
  tests: [
    {
      description: `write a function that uses the "map" method`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeDeclared();
      },
    },
    {
      description: `onlyLastLetterOfWords has a value`,
      test: () => {
        expect(onlyLastLetterOfWords).toHaveValue();
      },
    },
    {
      description: `onlyLastLetterOfWords is a function`,
      test: () => {
        expect(onlyLastLetterOfWords).toBeFunction();
      },
    },
    {
      description: `onlyLastLetterOfWords takes one argument`,
      test: () => {
        expect(onlyLastLetterOfWords).takesXArguments(1);
      },
    },
    {
      description: `checking if the "map" method has been called`,
      test: () => {
        expect(onlyLastLetterOfWords)
          .withArgs([1, 2, 3])
          .callsFunction(Array.prototype, "map");
      },
    },
    {
      description: `returns the correct value`,
      test: () => {
        var result = onlyLastLetterOfWords([
          "cat",
          "sibling",
          "President",
          "Neo",
        ]);
        expect(result).toBeSameArrayAs(["t", "g", "t", "o"]);
      },
    },
  ],
};

// for parseInt .callsFunction(Window, "parseInt");

// for math.random .callsFunction(Math, "random");

Z_T.testAll(zTestSuite);
