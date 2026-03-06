const testSuite = {};

testSuite.varGTests = {
  title: `var "g"`,
  instructions: `Declare a variable "g" and set it to the number 5`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(g).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(g).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(g).toBeNumber();
      },
    },
    {
      description: `is 5`,
      test: () => {
        expect(g).toBe(5);
      },
    },
  ],
};
testSuite.varHTests = {
  title: `var "h"`,
  instructions: `Declare a variable "h" and set it to the number 10.8`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(h).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(h).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(h).toBeNumber();
      },
    },
    {
      description: `is 10.8`,
      test: () => {
        expect(h).toBe(10.8);
      },
    },
  ],
};
testSuite.varMTests = {
  title: `var "m"`,
  instructions: `Declare a variable "m" and set it to the number 7500`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(m).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(m).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(m).toBeNumber();
      },
    },
    {
      description: `is 7500`,
      test: () => {
        expect(m).toBe(7500);
      },
    },
  ],
};
testSuite.varNTests = {
  title: `var "n"`,
  instructions: `Declare a variable "n" and set it to the number 123456`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(n).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(n).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(n).toBeNumber();
      },
    },
    {
      description: `is 123456`,
      test: () => {
        expect(n).toBe(123456);
      },
    },
  ],
};
testSuite.varOTests = {
  title: `var "o"`,
  instructions: `Declare a variable "o" and set it to the number 555666777888`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(o).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(o).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(o).toBeNumber();
      },
    },
    {
      description: `is 555666777888`,
      test: () => {
        expect(o).toBe(555666777888);
      },
    },
  ],
};
testSuite.varIsItChallengingTests = {
  title: `var "isItChallenging"`,
  instructions: `Declare a variable "isItChallenging" and set it to the boolean false`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isItChallenging).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isItChallenging).toHaveValue();
      },
    },
    {
      description: `is a boolean`,
      test: () => {
        expect(isItChallenging).toBeBoolean();
      },
    },
    {
      description: `is false`,
      test: () => {
        expect(isItChallenging).toBe(false);
      },
    },
  ],
};
testSuite.varIsPossibleTests = {
  title: `var "isPossible"`,
  instructions: `Declare a variable "isPossible" and set it to the boolean true`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isPossible).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isPossible).toHaveValue();
      },
    },
    {
      description: `is a boolean`,
      test: () => {
        expect(isPossible).toBeBoolean();
      },
    },
    {
      description: `is true`,
      test: () => {
        expect(isPossible).toBe(true);
      },
    },
  ],
};
testSuite.varLetterZTests = {
  title: `var "letterZ"`,
  instructions: `Declare a variable "letterZ" and set it to the string "z"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(letterZ).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(letterZ).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(letterZ).toBeString();
      },
    },
    {
      description: `is "z"`,
      test: () => {
        expect(letterZ).toBe("z");
      },
    },
  ],
};
testSuite.varFruitTests = {
  title: `var "fruit"`,
  instructions: `Declare a variable "fruit" and set it to the string "apple"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(fruit).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(fruit).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(fruit).toBeString();
      },
    },
    {
      description: `is "apple"`,
      test: () => {
        expect(fruit).toBe("apple");
      },
    },
  ],
};
testSuite.varStatementTests = {
  title: `var "statement"`,
  instructions: `Declare a variable "statement" and set it to the string "I love programming"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(statement).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(statement).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(statement).toBeString();
      },
    },
    {
      description: `is "I love programming"`,
      test: () => {
        expect(statement).toBe("I love programming");
      },
    },
  ],
};

testSuite.varPredictionTests = {
  title: `var "prediction"`,
  instructions: `Declare a variable "prediction" and set it to the string "Someday I'll become a full-fledged programmer that is able to develop softwares and websites"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(prediction).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(prediction).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(prediction).toBeString();
      },
    },
    {
      description: `is "Someday I'll become a full-fledged programmer that is able to develop softwares and websites."`,
      test: () => {
        expect(prediction).toBe(
          `Someday I'll become a full-fledged programmer that is able to develop softwares and websites.`
        );
      },
    },
  ],
};

Z_T.testAll(testSuite);
