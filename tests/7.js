zTestSuite = {};
zTestSuite.makeArrayOfX = {
  title: `function "makeArrayOfX"`,
  instructions: `Make a function that takes 2 arguments. First argument is how many. 2nd argument is what will be in the array. Example: makeArrayOfX( 4, 'a' ) returns ['a', 'a', 'a', 'a']`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeArrayOfX).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeArrayOfX).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(makeArrayOfX).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeArrayOfX).withArgs(3, 3).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(makeArrayOfX).withArgs(3, 3).toReturnArray();
      },
    },
    {
      description: `return array contains correct type`,
      test: () => {
        expect(makeArrayOfX).withArgs(3, 3).toReturnArrayOfType("number");
        expect(makeArrayOfX).withArgs(3, "a").toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeArrayOfX(5, 8);
        expect(result).toBeSameArrayAs([8, 8, 8, 8, 8]);
        var result2 = makeArrayOfX(3, "a");
        expect(result2).toBeSameArrayAs(["a", "a", "a"]);
      },
    },
  ],
};

zTestSuite.reverseArray = {
  title: `function "reverseArray"`,
  instructions:
    "Make a function that takes an array as an argument. It should return the array in reverse order. Example: reverseArray(['d', 'e', 'f']) returns ['f','e','d']",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(reverseArray).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(reverseArray).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(reverseArray).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(reverseArray).withArgs([]).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(reverseArray).withArgs([]).toReturnArray();
      },
    },
    {
      description: `returns array of correct type`,
      test: () => {
        expect(reverseArray).withArgs([1, 2, 3]).toReturnArrayOfType("number");
        expect(reverseArray)
          .withArgs(["a", "b", "c"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = reverseArray(["a", "b", "c"]);
        expect(result).toBeSameArrayAs(["c", "b", "a"]);
        var result2 = reverseArray([1, 2, 3]);
        expect(result2).toBeSameArrayAs([3, 2, 1]);
      },
    },
  ],
};

zTestSuite.sortLetters = {
  title: `function "sortLetters"`,
  instructions:
    "Make a function that takes one argument, an array of letters. It should return the array of letters in alphabetical order. Example: reverseArray( ['d', 'a', 'c'] ) returns ['a', 'c', 'd']",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(sortLetters).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(sortLetters).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(sortLetters).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(sortLetters).withArgs(["a", "z", "b"]).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(sortLetters).withArgs(["a", "z", "b"]).toReturnArray();
      },
    },
    {
      description: `returns array with string items`,
      test: () => {
        expect(sortLetters)
          .withArgs(["a", "z", "b"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = sortLetters(["a", "z", "b", "d"]);
        expect(result).toBeSameArrayAs(["a", "b", "d", "z"]);
      },
    },
  ],
};

zTestSuite.sortNumbers = {
  title: `function "sortNumbers"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should return the numbers from smallest to biggest. Example: sortNumbers([1, 3, 30, 2, 5]) returns [1, 2, 3, 5, 30]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(sortNumbers).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(sortNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(sortNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(sortNumbers).withArgs([3, 2, 1]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(sortNumbers).withArgs([3, 2, 1]).toReturnArray();
      },
    },
    {
      description: `returns an array of number items`,
      test: () => {
        expect(sortNumbers).withArgs([3, 2, 1]).toReturnArrayOfType("number");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = sortNumbers([1, 1000, 2, 2000, 5, 30, 400]);
        expect(result).toBeSameArrayAs([1, 2, 5, 30, 400, 1000, 2000]);
        var result2 = sortNumbers([5, 3, 1]);
        expect(result2).toBeSameArrayAs([1, 3, 5]);
      },
    },
  ],
};

zTestSuite.sortByWordLength = {
  title: `function "sortByWordLength"`,
  instructions:
    "Make a function that takes one argument, an array of words. Return the words in an array from shortest to longest. Example: sortByWordLength(['wash', 'cat', 'brother', 'throw'] returns ['cat', 'wash', 'throw','brother' ]",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(sortByWordLength).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(sortByWordLength).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(sortByWordLength).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(sortByWordLength).withArgs(["bob", "bill"]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(sortByWordLength).withArgs(["bob", "bill"]).toReturnArray();
      },
    },
    {
      description: `returns an array with string items`,
      test: () => {
        expect(sortByWordLength)
          .withArgs(["bob", "bill"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = sortByWordLength(["throw", "jungle", "longest", "cat"]);
        expect(result).toBeSameArrayAs(["cat", "throw", "jungle", "longest"]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
