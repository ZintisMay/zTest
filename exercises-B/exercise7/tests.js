zTestSuite = {};
zTestSuite.makeArrayOfY = {
  title: `function "makeArrayOfY"`,
  instructions: `Make a function that takes 2 arguments. First argument is how many. 2nd argument is what will be in the array. Example: makeArrayOfY( 4, 'a' ) returns ['a', 'a', 'a', 'a']`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(makeArrayOfY).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(makeArrayOfY).toBeFunction();
      },
    },
    {
      description: `takes two arguments`,
      test: () => {
        expect(makeArrayOfY).takesXArguments(2);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(makeArrayOfY).withArgs(3, 3).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(makeArrayOfY).withArgs(3, 3).toReturnArray();
      },
    },
    {
      description: `return array contains correct type`,
      test: () => {
        expect(makeArrayOfY).withArgs(3, 3).toReturnArrayOfType("number");
        expect(makeArrayOfY).withArgs(3, "a").toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeArrayOfY(5, 8);
        expect(result).toBeSameArrayAs([8, 8, 8, 8, 8]);
        var result2 = makeArrayOfY(3, "a");
        expect(result2).toBeSameArrayAs(["a", "a", "a"]);
      },
    },
  ],
};

zTestSuite.reverseTheArray = {
  title: `function "reverseTheArray"`,
  instructions:
    "Make a function that takes an array as an argument. It should return the array in reverse order. Example: reverseTheArray(['d', 'e', 'f']) returns ['f','e','d']",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(reverseTheArray).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(reverseTheArray).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(reverseTheArray).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(reverseTheArray).withArgs([]).toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(reverseTheArray).withArgs([]).toReturnArray();
      },
    },
    {
      description: `returns array of correct type`,
      test: () => {
        expect(reverseTheArray)
          .withArgs([1, 2, 3])
          .toReturnArrayOfType("number");
        expect(reverseTheArray)
          .withArgs(["a", "b", "c"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = reverseTheArray(["a", "b", "c"]);
        expect(result).toBeSameArrayAs(["c", "b", "a"]);
        var result2 = reverseTheArray([1, 2, 3]);
        expect(result2).toBeSameArrayAs([3, 2, 1]);
      },
    },
  ],
};

zTestSuite.sortAlphabetically = {
  title: `function "sortAlphabetically"`,
  instructions:
    "Make a function that takes one argument, an array of letters. It should return the array of letters in alphabetical order. Example: reverseArray( ['d', 'a', 'c'] ) returns ['a', 'c', 'd']",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(sortAlphabetically).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(sortAlphabetically).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(sortAlphabetically).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(sortAlphabetically)
          .withArgs(["a", "z", "b"])
          .toReturnSomething();
      },
    },
    {
      description: `returns array`,
      test: () => {
        expect(sortAlphabetically).withArgs(["a", "z", "b"]).toReturnArray();
      },
    },
    {
      description: `returns array with string items`,
      test: () => {
        expect(sortAlphabetically)
          .withArgs(["a", "z", "b"])
          .toReturnArrayOfType("string");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = sortAlphabetically(["a", "z", "b", "d"]);
        expect(result).toBeSameArrayAs(["a", "b", "d", "z"]);
      },
    },
  ],
};

zTestSuite.incrementNumbers = {
  title: `function "incrementNumbers"`,
  instructions: `Make a function that takes one argument, an array of numbers. It should return the numbers from smallest to biggest. Example: incrementNumbers([1, 3, 30, 2, 5]) returns [1, 2, 3, 5, 30]`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(incrementNumbers).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(incrementNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(incrementNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(incrementNumbers).withArgs([3, 2, 1]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(incrementNumbers).withArgs([3, 2, 1]).toReturnArray();
      },
    },
    {
      description: `returns an array of number items`,
      test: () => {
        expect(incrementNumbers)
          .withArgs([3, 2, 1])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = incrementNumbers([1, 1000, 2, 2000, 5, 30, 400]);
        expect(result).toBeSameArrayAs([1, 2, 5, 30, 400, 1000, 2000]);
        var result2 = incrementNumbers([5, 3, 1]);
        expect(result2).toBeSameArrayAs([1, 3, 5]);
      },
    },
  ],
};

zTestSuite.decrementNumbers = {
  title: `function "decrementNumbers"`,
  instructions:
    "Make a function that takes one argument, an array of numbers. This time, it should return the numbers from biggest to smallest. Example: decrementNumbers([1, 3, 30, 2, 5]) returns [30, 5, 3, 2, 1]",
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(decrementNumbers).toBeDeclared();
      },
    },
    {
      description: `is a function`,
      test: () => {
        expect(decrementNumbers).toBeFunction();
      },
    },
    {
      description: `takes one argument`,
      test: () => {
        expect(decrementNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns something`,
      test: () => {
        expect(decrementNumbers).withArgs([3, 2, 1]).toReturnSomething();
      },
    },
    {
      description: `returns an array`,
      test: () => {
        expect(decrementNumbers).withArgs([3, 2, 1]).toReturnArray();
      },
    },
    {
      description: `returns an array of number items`,
      test: () => {
        expect(decrementNumbers)
          .withArgs([3, 2, 1])
          .toReturnArrayOfType("number");
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = decrementNumbers([1, 1000, 2, 2000, 5, 30, 400]);
        expect(result).toBeSameArrayAs([2000, 1000, 400, 30, 5, 2, 1]);
        var result2 = decrementNumbers([1, 3, 5]);
        expect(result2).toBeSameArrayAs([5, 3, 1]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
