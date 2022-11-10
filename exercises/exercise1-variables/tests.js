const testSuite = {};

testSuite.varATests = {
  title: "var 'a' tests",
  tests: [
    {
      description: `a is declared`,
      test: () => {
        expect(a).toBeDeclared();
      },
    },
    {
      description: `a has a value`,
      test: () => {
        expect(a).toHaveValue();
      },
    },
    {
      description: `a is a number`,
      test: () => {
        expect(a).toBeNumber();
      },
    },
    {
      description: `a is 1`,
      test: () => {
        expect(a).toBe(1);
      },
    },
  ],
};
testSuite.varBTests = {
  title: "var 'b' tests",
  tests: [
    {
      description: `b is declared`,
      test: () => {
        expect(b).toBeDeclared();
      },
    },
    {
      description: `b has a value`,
      test: () => {
        expect(b).toHaveValue();
      },
    },
    {
      description: `b is a number`,
      test: () => {
        expect(b).toBeNumber();
      },
    },
    {
      description: `b is 2.2`,
      test: () => {
        expect(b).toBe(2.2);
      },
    },
  ],
};
testSuite.varCTests = {
  title: "var 'c' tests",
  tests: [
    {
      description: `c is declared`,
      test: () => {
        expect(c).toBeDeclared();
      },
    },
    {
      description: `c has a value`,
      test: () => {
        expect(c).toHaveValue();
      },
    },
    {
      description: `c is a number`,
      test: () => {
        expect(c).toBeNumber();
      },
    },
    {
      description: `c is 5000`,
      test: () => {
        expect(c).toBe(5000);
      },
    },
  ],
};
testSuite.varDTests = {
  title: "var 'd' tests",
  tests: [
    {
      description: `d is declared`,
      test: () => {
        expect(d).toBeDeclared();
      },
    },
    {
      description: `d has a value`,
      test: () => {
        expect(d).toHaveValue();
      },
    },
    {
      description: `d is a number`,
      test: () => {
        expect(d).toBeNumber();
      },
    },
    {
      description: `d is 900000`,
      test: () => {
        expect(d).toBe(900000);
      },
    },
  ],
};
testSuite.varETests = {
  title: "var 'e' tests",
  tests: [
    {
      description: `e is declared`,
      test: () => {
        expect(e).toBeDeclared();
      },
    },
    {
      description: `e has a value`,
      test: () => {
        expect(e).toHaveValue();
      },
    },
    {
      description: `e is a number`,
      test: () => {
        expect(e).toBeNumber();
      },
    },
    {
      description: `e is 111222333444`,
      test: () => {
        expect(e).toBe(111222333444);
      },
    },
  ],
};
testSuite.varIsHavingFunTests = {
  title: "var 'isHavingFun' tests",
  tests: [
    {
      description: `isHavingFun is declared`,
      test: () => {
        expect(isHavingFun).toBeDeclared();
      },
    },
    {
      description: `isHavingFun has a value`,
      test: () => {
        expect(isHavingFun).toHaveValue();
      },
    },
    {
      description: `isHavingFun is a boolean`,
      test: () => {
        expect(isHavingFun).toBeBoolean();
      },
    },
    {
      description: `isHavingFun is true`,
      test: () => {
        expect(isHavingFun).toBe(true);
      },
    },
  ],
};
testSuite.varIsDifficultTests = {
  title: "var 'isDifficult' tests",
  tests: [
    {
      description: `isDifficult is declared`,
      test: () => {
        expect(isDifficult).toBeDeclared();
      },
    },
    {
      description: `isDifficult has a value`,
      test: () => {
        expect(isDifficult).toHaveValue();
      },
    },
    {
      description: `isDifficult is a boolean`,
      test: () => {
        expect(isDifficult).toBeBoolean();
      },
    },
    {
      description: `isDifficult is false`,
      test: () => {
        expect(isDifficult).toBe(false);
      },
    },
  ],
};
testSuite.varLetterATests = {
  title: "var 'letterA' tests",
  tests: [
    {
      description: `letterA is declared`,
      test: () => {
        expect(letterA).toBeDeclared();
      },
    },
    {
      description: `letterA has a value`,
      test: () => {
        expect(letterA).toHaveValue();
      },
    },
    {
      description: `letterA is a string`,
      test: () => {
        expect(letterA).toBeString();
      },
    },
    {
      description: `letterA is "a"`,
      test: () => {
        expect(letterA).toBe("a");
      },
    },
  ],
};
testSuite.varWordTests = {
  title: "var 'word' tests",
  tests: [
    {
      description: `word is declared`,
      test: () => {
        expect(word).toBeDeclared();
      },
    },
    {
      description: `word has a value`,
      test: () => {
        expect(word).toHaveValue();
      },
    },
    {
      description: `word is a string`,
      test: () => {
        expect(word).toBeString();
      },
    },
    {
      description: `word is "banana"`,
      test: () => {
        expect(word).toBe("banana");
      },
    },
  ],
};
testSuite.varSentenceTests = {
  title: "var 'sentence' tests",
  tests: [
    {
      description: `sentence is declared`,
      test: () => {
        expect(sentence).toBeDeclared();
      },
    },
    {
      description: `sentence has a value`,
      test: () => {
        expect(sentence).toHaveValue();
      },
    },
    {
      description: `sentence is a string`,
      test: () => {
        expect(sentence).toBeString();
      },
    },
    {
      description: `sentence is "I ate breakfast."`,
      test: () => {
        expect(sentence).toBe("I ate breakfast.");
      },
    },
  ],
};
testSuite.varParagraphTests = {
  title: "var 'paragraph' tests",
  tests: [
    {
      description: `paragraph is declared`,
      test: () => {
        expect(paragraph).toBeDeclared();
      },
    },
    {
      description: `paragraph has a value`,
      test: () => {
        expect(paragraph).toHaveValue();
      },
    },
    {
      description: `paragraph is a string`,
      test: () => {
        expect(paragraph).toBeString();
      },
    },
    {
      description: `paragraph is "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."`,
      test: () => {
        expect(paragraph).toBe(
          "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."
        );
      },
    },
  ],
};

Z_T.testAll(testSuite);
