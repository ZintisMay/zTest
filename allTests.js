const allTests = [
  {
    id: "A1",
    title: "Variables",
    series: "A",
    sections: {
      varATests: {
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
      },
      varBTests: {
        title: `var "b"`,
        instructions: `Declare a variable "b" and set it to the number 2.2`,
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
      },
      varCTests: {
        title: `var "c"`,
        instructions: `Declare a variable "c" and set it to the number 5000`,
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
      },
      varDTests: {
        title: `var "d"`,
        instructions: `Declare a variable "d" and set it to the number 900000`,
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
      },
      varETests: {
        title: `var "e"`,
        instructions: `Declare a variable "e" and set it to the number 111222333444`,
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
      },
      varIsHavingFunTests: {
        title: `var "isHavingFun"`,
        instructions: `Declare a variable "isHavingFun" and set it to the boolean true`,
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
      },
      varIsDifficultTests: {
        title: `var "isDifficult"`,
        instructions: `Declare a variable "isDifficult" and set it to the boolean false`,
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
      },
      varLetterATests: {
        title: `var "letterA"`,
        instructions: `Declare a variable "letterA" and set it to the string "a"`,
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
      },
      varWordTests: {
        title: `var "word"`,
        instructions: `Declare a variable "word" and set it to the string "banana"`,
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
      },
      varSentenceTests: {
        title: `var "sentence"`,
        instructions: `Declare a variable "sentence" and set it to the string "I ate breakfast."`,
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
      },
      varParagraphTests: {
        title: `var "paragraph"`,
        instructions: `Declare a variable "sentence" and set it to the string "The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know."`,
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
      },
    },
  },
  {
    id: "A2",
    title: "Operators",
    series: "A",
    sections: {
      plusTests: {
        title: `var "a"`,
        instructions: `Declare a variable "a" and it should be the number equal to 654321 plus 123456`,
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
            description: `is 654321 + 123456`,
            test: () => {
              expect(a).toBe(654321 + 123456);
            },
          },
        ],
      },
      minusTests: {
        title: `var "b"`,
        instructions: `Declare a variable "b" and it should be the number equal to 654321 minus 123456`,
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
            description: `is 654321 - 123456`,
            test: () => {
              expect(b).toBe(654321 - 123456);
            },
          },
        ],
      },
      multiplyTests: {
        title: `var "c"`,
        instructions: `Declare a variable "c" and it should be the number equal to 654321 times 123456`,
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
            description: `is 654321 * 123456`,
            test: () => {
              expect(c).toBe(654321 * 123456);
            },
          },
        ],
      },
      divideTests: {
        title: `var "d"`,
        instructions: `Declare a variable "d" and it should be the number equal to 654321 divided by 123456`,
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
            description: `is 654321 / 123456`,
            test: () => {
              expect(d).toBe(654321 / 123456);
            },
          },
        ],
      },
      modulusTests: {
        title: `var "e"`,
        instructions: `Declare a variable "e" and it should be the number equal to 654321 modulus 123456`,
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
            description: `is 654321 % 123456`,
            test: () => {
              expect(e).toBe(654321 % 123456);
            },
          },
        ],
      },
      exponentTests: {
        title: `var "f"`,
        instructions: `Declare a variable "f" and it should be the number equal to 2 to the 20th power`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(f).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(f).toHaveValue();
            },
          },
          {
            description: `is a number`,
            test: () => {
              expect(f).toBeNumber();
            },
          },
          {
            description: `is 2 ** 20`,
            test: () => {
              expect(f).toBe(2 ** 20);
            },
          },
        ],
      },
    },
  },
  {
    id: "A3",
    title: "Return Values",
    series: "A",
    sections: {
      returnNumberTests: {
        title: `function "returnNumber"`,
        instructions: `Make a function named "returnNumber" that returns a number (any number).`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnNumber).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnNumber).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnNumber).toBeFunction();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(returnNumber).toReturnNumber();
            },
          },
        ],
      },
      returnStringTests: {
        title: `function "returnString"`,
        instructions: `Make a function named "returnString" that returns a string (any string).`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnString).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnString).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnString).toBeFunction();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(returnString).toReturnString();
            },
          },
        ],
      },
      returnTrueTests: {
        title: `function "returnTrue"`,
        instructions: `Make a function named "returnTrue" that returns the boolean true.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnTrue).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnTrue).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnTrue).toBeFunction();
            },
          },
          {
            description: `returns a boolean`,
            test: () => {
              expect(returnTrue).toReturnBoolean();
            },
          },
          {
            description: `returns correct value true`,
            test: () => {
              expect(returnTrue).toReturn(true);
            },
          },
        ],
      },
      returnFalseTests: {
        title: `function "returnFalse"`,
        instructions: `Make a function named "returnFalse" that returns the boolean false.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnFalse).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnFalse).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnFalse).toBeFunction();
            },
          },
          {
            description: `returns a boolean`,
            test: () => {
              expect(returnFalse).toReturnBoolean();
            },
          },
          {
            description: `returns correct value false`,
            test: () => {
              expect(returnFalse).toReturn(false);
            },
          },
        ],
      },
      returnArrayTests: {
        title: `function "returnArray"`,
        instructions: `Make a function named "returnArray" that returns an array.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnArray).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnArray).toBeFunction();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(returnArray).toReturnArray();
            },
          },
        ],
      },
      returnObjectTests: {
        title: `function "returnObject"`,
        instructions: `Make a function named "returnObject" that returns an object.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(returnObject).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(returnObject).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(returnObject).toBeFunction();
            },
          },
          {
            description: `returns an object`,
            test: () => {
              expect(returnObject).toReturnObject();
            },
          },
        ],
      },
    },
  },
  {
    id: "A4",
    title: "Basic Functions",
    series: "A",
    sections: {
      addTests: {
        title: `function "add"`,
        instructions: `Make a function named "add" that takes two arguments, both numbers. It should return the sum of those numbers.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(add).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(add).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(add).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(add).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(add).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(add).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(add).withArgs(1, 1).toReturn(2);
              expect(add).withArgs(-1, 1).toReturn(0);
              expect(add).withArgs(1000, 234).toReturn(1234);
            },
          },
        ],
      },
      subtractTests: {
        title: `function "subtract"`,
        instructions: `Make a function named "subtract" that takes two arguments, both numbers. It should return the first number minus the second.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(subtract).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(subtract).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(subtract).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(subtract).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(subtract).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(subtract).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(subtract).withArgs(1, 1).toReturn(0);
              expect(subtract).withArgs(-1, 1).toReturn(-2);
              expect(subtract).withArgs(1000, 234).toReturn(766);
            },
          },
        ],
      },
      multiplyTests: {
        title: `function "multiply"`,
        instructions: `Make a function named "multiply" that takes two arguments, both numbers. It should return the numbers multiplied together.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(multiply).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(multiply).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(multiply).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(multiply).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(multiply).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(multiply).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(multiply).withArgs(2, 3).toReturn(6);
              expect(multiply).withArgs(-2, 3).toReturn(-6);
              expect(multiply).withArgs(1000, 234).toReturn(234000);
              expect(multiply).withArgs(1, 0).toReturn(0);
              expect(multiply).withArgs(0, 0).toReturn(0);
              expect(multiply).withArgs(-2, -3).toReturn(6);
            },
          },
        ],
      },
      divideTests: {
        title: `function "divide"`,
        instructions: `Make a function named "divide" that takes two arguments, both numbers. It should return the first number divided by the second.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(divide).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(divide).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(divide).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(divide).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(divide).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(divide).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(divide).withArgs(1, 1).toReturn(1);
              expect(divide).withArgs(10, 20).toReturn(0.5);
              expect(divide).withArgs(100, 0).toReturn(Infinity);
              expect(divide).withArgs(-4, 2).toReturn(-2);
              expect(divide).withArgs(150, -1).toReturn(-150);
              expect(divide).withArgs(4, 3).toReturn(1.3333333333333333);
            },
          },
        ],
      },
      exponentTests: {
        title: `function "exponent"`,
        instructions: `Make a function named "exponent" that takes two arguments, both numbers. It should return the first number to the power of the second.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(exponent).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(exponent).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(exponent).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(exponent).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(exponent).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(exponent).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(exponent).withArgs(4, 3).toReturn(64);
              expect(exponent).withArgs(5, 5).toReturn(3125);
              expect(exponent).withArgs(100, 0).toReturn(1);
              expect(exponent).withArgs(-4, 2).toReturn(16);
              expect(exponent).withArgs(3, -2).toReturn(0.1111111111111111);
              expect(exponent).withArgs(0, 0).toReturn(1);
            },
          },
        ],
      },
      combineStringsTests: {
        title: `function "combineStrings"`,
        instructions: `Make a function named "combineStrings" that takes two arguments, both strings. It should return a string that is both arguments combined.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(combineStrings).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(combineStrings).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(combineStrings).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(combineStrings).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(combineStrings).withArgs(`a`, `b`).toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(combineStrings).withArgs(`a`, `b`).toReturnString();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(combineStrings).withArgs(`a`, `b`).toReturn(`ab`);
              expect(combineStrings).withArgs(`cat`, ``).toReturn(`cat`);
              expect(combineStrings).withArgs(``, ``).toReturn(``);
              expect(combineStrings).withArgs(`cat`, null).toReturn(`catnull`);
              expect(combineStrings).withArgs(`b`, `a`).toReturn(`ba`);
              expect(combineStrings).withArgs(`4`, `2`).toReturn(`42`);
            },
          },
        ],
      },
      combineArraysTests: {
        title: `function "combineArrays"`,
        instructions: `Make a function named "combineArrays" that takes two arguments, both arrays. It should return an array with the contents of the first, then second array within it.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(combineArrays).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(combineArrays).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(combineArrays).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(combineArrays).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(combineArrays).withArgs([1], [2]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(combineArrays).withArgs([1], [2]).toReturnArray();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(combineArrays).withArgs([1], [2]).toReturn([1, 2]);
              expect(combineArrays).withArgs([`cat`], [`dog`]).toReturn([`cat`, `dog`]);
            },
          },
        ],
      },
      combineObjectsTests: {
        title: `function "combineObjects"`,
        instructions: `Make a function named "combineObjects" that takes two arguments, both objects. It should return an object with the key/value pairs of both arguments. (Look up "spread operator" or "Object.assign()")`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(combineObjects).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(combineObjects).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(combineObjects).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(combineObjects).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(combineObjects).withArgs(1, 1).toReturnSomething();
            },
          },
          {
            description: `returns an object`,
            test: () => {
              expect(combineObjects).withArgs(1, 1).toReturnObject();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(combineObjects).withArgs({ 1: `1` }, { 2: `2` }).toReturn({ 1: `1`, 2: `2` });
              expect(combineObjects).withArgs({ name: `John` }, { age: `50` }).toReturn({ name: `John`, age: `50` });
            },
          },
        ],
      },
    },
  },
];
