const testSuite = {};

testSuite.varATests = {
  title: `var "a"`,
  instructions: `Declare a variable "a" and set it to the number 1`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(a).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(a).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(a).toBeNumber();
      },
    },
    {
      description: `is 1`,
      test: () => {
        expect(a).toBe(1);
      },
    },
  ],
};
testSuite.varBTests = {
  title: `var "b"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(b).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(b).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(b).toBeNumber();
      },
    },
    {
      description: `is 2.2`,
      test: () => {
        expect(b).toBe(2.2);
      },
    },
  ],
};
testSuite.varCTests = {
  title: `var "c"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(c).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(c).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(c).toBeNumber();
      },
    },
    {
      description: `is 5000`,
      test: () => {
        expect(c).toBe(5000);
      },
    },
  ],
};
testSuite.varDTests = {
  title: `var "d"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(d).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(d).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(d).toBeNumber();
      },
    },
    {
      description: `is 900000`,
      test: () => {
        expect(d).toBe(900000);
      },
    },
  ],
};
testSuite.varETests = {
  title: `var "e"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(e).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(e).toHaveValue();
      },
    },
    {
      description: `is a number`,
      test: () => {
        expect(e).toBeNumber();
      },
    },
    {
      description: `is 111222333444`,
      test: () => {
        expect(e).toBe(111222333444);
      },
    },
  ],
};
testSuite.varIsHavingFunTests = {
  title: `var "isHavingFun"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isHavingFun).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isHavingFun).toHaveValue();
      },
    },
    {
      description: `is a boolean`,
      test: () => {
        expect(isHavingFun).toBeBoolean();
      },
    },
    {
      description: `is true`,
      test: () => {
        expect(isHavingFun).toBe(true);
      },
    },
  ],
};
testSuite.varIsDifficultTests = {
  title: `var "isDifficult"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(isDifficult).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(isDifficult).toHaveValue();
      },
    },
    {
      description: `is a boolean`,
      test: () => {
        expect(isDifficult).toBeBoolean();
      },
    },
    {
      description: `is false`,
      test: () => {
        expect(isDifficult).toBe(false);
      },
    },
  ],
};
testSuite.varLetterATests = {
  title: `var "letterA"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(letterA).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(letterA).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(letterA).toBeString();
      },
    },
    {
      description: `is "a"`,
      test: () => {
        expect(letterA).toBe("a");
      },
    },
  ],
};
testSuite.varWordTests = {
  title: `var "word"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(word).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(word).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(word).toBeString();
      },
    },
    {
      description: `is "banana"`,
      test: () => {
        expect(word).toBe("banana");
      },
    },
  ],
};
testSuite.varSentenceTests = {
  title: `var "sentence"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(sentence).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(sentence).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(sentence).toBeString();
      },
    },
    {
      description: `is "I ate breakfast."`,
      test: () => {
        expect(sentence).toBe("I ate breakfast.");
      },
    },
  ],
};
testSuite.varParagraphTests = {
  title: `var "paragraph"`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(paragraph).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(paragraph).toHaveValue();
      },
    },
    {
      description: `is a string`,
      test: () => {
        expect(paragraph).toBeString();
      },
    },
    {
      description: `is "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."`,
      test: () => {
        expect(paragraph).toBe(
          `The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.`
        );
      },
    },
  ],
};

Z_T.testAll(testSuite);
