zTestSuite = {};
zTestSuite.makeArrayOfThings = {
  title: "function makeArrayOfThings",
  instructions: `create a function called "makeArrayOfThings" that takes 2 arguments, inside the function create a variable that is an empty array, make a "for" loop that will start at 0, go up to the length (1st argument) and then push all the items (2nd argument) inside our new array, and then return that said array, example: makeArrayOfThings(4, 'a') returns ['a', 'a', 'a', 'a']`,
  tests: [
    {
      description: `"makeArrayOfThings" is declared`,
      test: () => {
        expect(makeArrayOfThings).toBeDeclared();
      },
    },
    {
      description: `"makeArrayOfThings" is a function`,
      test: () => {
        expect(makeArrayOfThings).toBeFunction();
      },
    },
    {
      description: `"makeArrayOfThings" takes two arguments`,
      test: () => {
        expect(makeArrayOfThings).takesXArguments(2);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeArrayOfThings(5, 8);
        expect(result).toBeSameArrayAs([8, 8, 8, 8, 8]);
      },
    },
  ],
};

zTestSuite.reverseArray = {
  title: "function reverseArray",
  instructions:
    "reverse the order of the array, Example: reverseArray(['d', 'e', 'f']) returns ['f','e','d']",
  tests: [
    {
      description: `"reverseArray" is declared`,
      test: () => {
        expect(reverseArray).toBeDeclared();
      },
    },
    {
      description: `"reverseArray" is a function`,
      test: () => {
        expect(reverseArray).toBeFunction();
      },
    },
    {
      description: `"reverseArray" takes one argument`,
      test: () => {
        expect(reverseArray).takesXArguments(1);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = reverseArray(["a", "b", "c"]);
        expect(result).toBeSameArrayAs(["c", "b", "a"]);
      },
    },
  ],
};

zTestSuite.sortLetters = {
  title: "function sortLetters",
  instructions:
    "sort letters of an array in an alphabetical order example: reverseArray(['d', 'a', 'c']) returns ['a','c', 'd']",
  tests: [
    {
      description: `"sortLetters" is declared`,
      test: () => {
        expect(sortLetters).toBeDeclared();
      },
    },
    {
      description: `"sortLetters" is a function`,
      test: () => {
        expect(sortLetters).toBeFunction();
      },
    },
    {
      description: `"sortLetters" takes one argument`,
      test: () => {
        expect(sortLetters).takesXArguments(1);
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
  title: "function sortNumbers",
  instructions: `sort numbers of an array from smallest to largest, example: sortNumbers([1, 3, 30, 2, 5]) returns [1, 2, 3, 5, 30]`,
  tests: [
    {
      description: `"sortNumbers" is declared`,
      test: () => {
        expect(sortNumbers).toBeDeclared();
      },
    },
    {
      description: `"sortNumbers" is a function`,
      test: () => {
        expect(sortNumbers).toBeFunction();
      },
    },
    {
      description: `"sortNumbers" takes one argument`,
      test: () => {
        expect(sortNumbers).takesXArguments(1);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = sortNumbers([1, 1000, 2, 2000, 5, 30, 400]);
        expect(result).toBeSameArrayAs([1, 2, 5, 30, 400, 1000, 2000]);
      },
    },
  ],
};

zTestSuite.sortByWordLength = {
  title: "function sortByWordLength",
  instructions:
    "sort the list of words inside an array from shortest to longest, example: sortByWordLength(['President', 'cat','Massasuchets', 'sibling'] returns ['cat', 'sibling', 'President', 'Massasuchets']",
  tests: [
    {
      description: `"sortByWordLength" is declared`,
      test: () => {
        expect(sortByWordLength).toBeDeclared();
      },
    },
    {
      description: `"sortByWordLength" is a function`,
      test: () => {
        expect(sortByWordLength).toBeFunction();
      },
    },
    {
      description: `"sortByWordLength" takes one argument`,
      test: () => {
        expect(sortByWordLength).takesXArguments(1);
      },
    },
    {
      description: `"sortByWordLength" returns the correct result`,
      test: () => {
        var result = sortByWordLength([
          "elena",
          "aleksis",
          "verylongWord",
          "cat",
        ]);
        expect(result).toBeSameArrayAs([
          "cat",
          "elena",
          "aleksis",
          "verylongWord",
        ]);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
