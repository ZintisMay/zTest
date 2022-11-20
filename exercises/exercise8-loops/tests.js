zTestSuite = {};
zTestSuite.makeXAsterisks = {
  title: "function makeXAsterisks",
  instructions: `create a function that will take one argument, inside of it declare a variable that's an empty string, make a for loop so that you will add to the variable the amount of asterisks to the number that was passed as an argument and return that said variable
  example: makeXAsterisk(5) returns "*****"`,
  tests: [
    {
      description: `"makeXAsterisks" is declared`,
      test: () => {
        expect(makeXAsterisks).toBeDeclared();
      },
    },
    {
      description: `"makeXAsterisks" is a function`,
      test: () => {
        expect(makeXAsterisks).toBeFunction();
      },
    },
    {
      description: `"makeXAsterisks" takes one argument`,
      test: () => {
        expect(makeXAsterisks).takesXArguments(1);
      },
    },
    {
      description: `"makeXAsterisks" returns the correct result`,
      test: () => {
        var result = makeXAsterisks(5);
        expect(result).toBe("*****");
      },
    },
  ],
};

zTestSuite.makeArrayOfNumbersUpToX = {
  title: "function makeArrayOfNumbersUpToX",
  instructions: `create a function called makeArrayOfNumbersUpToX that takes one argument, inside the function create a variable with an empty array, afterwards create a for loop that will begin at number 1 and end at the number you pass as an argument, inside your for loop you want to push the numbers inside the empty array and then return the array, 
  example: makeArrayOfNumbersUpToX(5) return [1,2,3,4,5]`,
  tests: [
    {
      description: `"makeArrayOfNumbersUpToX" is declared`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).toBeDeclared();
      },
    },
    {
      description: `"makeArrayOfNumbersUpToX" is a function`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).toBeFunction();
      },
    },
    {
      description: `"makeArrayOfNumbersUpToX" takes one argument`,
      test: () => {
        expect(makeArrayOfNumbersUpToX).takesXArguments(1);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeArrayOfNumbersUpToX(8);
        expect(result).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7, 8]);
      },
    },
  ],
};

zTestSuite.makeWordWithXLetterY = {
  title: "function makeWordWithXLetterY",
  instructions: `make a function that will take 2 arguments, 1st argument will define the length of the string, and the 2nd argument will fill the string with said character, example: makeWordWithXLetterY(4, "b") returns "bbbb"`,
  tests: [
    {
      description: `"makeWordWithXLetterY" is declared`,
      test: () => {
        expect(makeWordWithXLetterY).toBeDeclared();
      },
    },
    {
      description: `"makeWordWithXLetterY" is a function`,
      test: () => {
        expect(makeWordWithXLetterY).toBeFunction();
      },
    },
    {
      description: `"makeWordWithXLetterY" takes two arguments`,
      test: () => {
        expect(makeWordWithXLetterY).takesXArguments(2);
      },
    },
    {
      description: `returns the correct result`,
      test: () => {
        var result = makeWordWithXLetterY(5, "a");
        expect(result).toBe("aaaaa");
      },
    },
  ],
};

zTestSuite.reverseWord = {
  title: "function reverseWord",
  instructions: `create a function that will pass in 1 argument and will reverse the word, example: reverseWord("cat") returns "tac"`,
  tests: [
    {
      description: `"reverseWord" is declared`,
      test: () => {
        expect(reverseWord).toBeDeclared();
      },
    },
    {
      description: `"reverseWord" is a function`,
      test: () => {
        expect(reverseWord).toBeFunction();
      },
    },
    {
      description: `"reverseWord" takes one argument`,
      test: () => {
        expect(reverseWord).takesXArguments(1);
      },
    },
    {
      description: `"reverseWord" returns the correct result`,
      test: () => {
        var result = reverseWord("towel");
        expect(result).toBe("lewot");
      },
    },
  ],
};

zTestSuite.removeVowels = {
  title: "function removeVowels",
  instructions: `create a function that will remove vowels from a word, example: removeVowels('thank you') returns 'thnk y'`,
  tests: [
    {
      description: `"removeVowels" is declared`,
      test: () => {
        expect(removeVowels).toBeDeclared();
      },
    },
    {
      description: `"removeVowels" is a function`,
      test: () => {
        expect(removeVowels).toBeFunction();
      },
    },
    {
      description: `"removeVowels" takes one argument`,
      test: () => {
        expect(removeVowels).takesXArguments(1);
      },
    },
    {
      description: `"removeVowels" returns the correct result`,
      test: () => {
        var result = removeVowels("Presidentofusa");
        expect(result).toBe("Prsdntfs");
      },
    },
  ],
};

zTestSuite.removeConsonants = {
  title: "function removeConsonants",
  instructions: `same as above but this time it's consonants, example: removeConsonants('thank you') returns ('a ou')`,
  tests: [
    {
      description: `"removeConsonants" is declared`,
      test: () => {
        expect(removeConsonants).toBeDeclared();
      },
    },
    {
      description: `"removeConsonants" is a function`,
      test: () => {
        expect(removeConsonants).toBeFunction();
      },
    },
    {
      description: `"removeConsonants" takes one argument`,
      test: () => {
        expect(removeConsonants).takesXArguments(1);
      },
    },
    {
      description: `"removeConsonants" returns the correct result`,
      test: () => {
        var result = removeConsonants("Presidentofusa");
        expect(result).toBe("eieoua");
      },
    },
  ],
};

// I don't get the function below ↓ ↓

zTestSuite.removeWordsOfLengthXPlus = {
  title: "function removeWordsOfLengthXPlus",
  instructions: `create a function that will take 2 arguments, the 1st one will be an array with a list of words, the 2nd one will have a number, the function must remove any words that are longer than the number passed as a 2nd argument, example: removeWordsOfLengthXPlus(["homelander", "billyButcher", "ant", "cat", "dog"], 5) returns ["cat", "dog"]`,
  tests: [
    {
      description: `"removeWordsOfLengthXPlus" is declared`,
      test: () => {
        expect(removeWordsOfLengthXPlus).toBeDeclared();
      },
    },
    {
      description: `"removeWordsOfLengthXPlus" is a function`,
      test: () => {
        expect(removeWordsOfLengthXPlus).toBeFunction();
      },
    },
    {
      description: `"removeWordsOfLengthXPlus" takes two arguments`,
      test: () => {
        expect(removeWordsOfLengthXPlus).takesXArguments(2);
      },
    },
    {
      description: `"removeWordsOfLengthXPlus" returns the correct result`,
      test: () => {
        var result = removeWordsOfLengthXPlus(
          ["President", "Leader", "cat", "dog"],
          4
        );
        expect(result).toBeSameArrayAs(["cat", "dog"]);
      },
    },
  ],
};

zTestSuite.calculateAverage = {
  title: "function calculateAverage",
  instructions: `create a function that will pass one array as its argument and returns the total sum of the array divided by its length, example: calculateAverage([1,5,9,8,17]) returns 8`,
  tests: [
    {
      description: `"calculateAverage" is declared`,
      test: () => {
        expect(calculateAverage).toBeDeclared();
      },
    },
    {
      description: `"calculateAverage" is a function`,
      test: () => {
        expect(calculateAverage).toBeFunction();
      },
    },
    {
      description: `"calculateAverage" takes one argument`,
      test: () => {
        expect(calculateAverage).takesXArguments(1);
      },
    },
    {
      description: `"calculateAverage" returns the correct result`,
      test: () => {
        var result = calculateAverage([1, 8, 5, 20, 16]);
        expect(result).toBe(10);
      },
    },
  ],
};

// I don't get the function above ^^

Z_T.testAll(zTestSuite);
