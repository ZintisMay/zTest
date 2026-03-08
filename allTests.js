const allTests = [
  {
    id: 'A1',
    title: 'Variables',
    series: 'A',
    help: 'https://www.w3schools.com/js/js_variables.asp',
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
              expect(letterA).toBe('a');
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
              expect(word).toBe('banana');
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
              expect(sentence).toBe('I ate breakfast.');
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
                `The code in the computer is so hard to understand. It is like magic. If I keep studying maybe one day I'll know.`,
              );
            },
          },
        ],
      },
    },
  },
  {
    id: 'A2',
    title: 'Operators',
    series: 'A',
    help: 'https://www.w3schools.com/js/js_operators.asp',
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
    id: 'A3',
    title: 'Return Values',
    series: 'A',
    help: 'https://www.w3schools.com/jsref/jsref_return.asp',
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
    id: 'A4',
    title: 'Basic Functions',
    series: 'A',

    help: 'https://www.w3schools.com/js/js_function_intro.asp',
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
              expect(combineArrays)
                .withArgs([`cat`], [`dog`])
                .toReturn([`cat`, `dog`]);
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
              expect(combineObjects)
                .withArgs({ 1: `1` }, { 2: `2` })
                .toReturn({ 1: `1`, 2: `2` });
              expect(combineObjects)
                .withArgs({ name: `John` }, { age: `50` })
                .toReturn({ name: `John`, age: `50` });
            },
          },
        ],
      },
    },
  },
  {
    id: 'A5',
    title: 'Functions with Logic',
    series: 'A',

    help: 'https://www.w3schools.com/js/js_conditionals.asp',
    sections: {
      greeting: {
        title: `function greeting`,
        instructions: `Make a function named "greeting" that takes one argument. It should return a string like "Hello Zintis!" when passed the argument "Zintis"`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(greeting).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(greeting).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(greeting).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(greeting).takesXArguments(1);
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(greeting).withArgs().toReturnString();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(greeting).withArgs('Barry').toReturn(`Hello Barry!`);
              expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
            },
          },
        ],
      },
      isThisValueTrue: {
        title: `function isThisValueTrue`,
        instructions: `Make a function named "isThisValueTrue" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(isThisValueTrue).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(isThisValueTrue).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(isThisValueTrue).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(isThisValueTrue).takesXArguments(1);
            },
          },
          {
            description: `returns a boolean`,
            test: () => {
              expect(isThisValueTrue).withArgs().toReturnBoolean();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(isThisValueTrue).withArgs(true).toReturn(true);
              expect(isThisValueTrue).withArgs(false).toReturn(false);
              expect(isThisValueTrue).withArgs().toReturn(false);
            },
          },
        ],
      },
      isThisNumberEven: {
        title: `function isThisNumberEven`,
        instructions: `Make a function named "isThisNumberEven" that takes one argument, a number. It should return true if the number is even, and false if odd.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(isThisNumberEven).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(isThisNumberEven).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(isThisNumberEven).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(isThisNumberEven).takesXArguments(1);
            },
          },
          {
            description: `returns a boolean`,
            test: () => {
              expect(isThisNumberEven).toReturnBoolean();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(isThisNumberEven).withArgs(1).toReturn(false);
              expect(isThisNumberEven).withArgs(2).toReturn(true);
              expect(isThisNumberEven).withArgs(-1).toReturn(false);
              expect(isThisNumberEven).withArgs(0).toReturn(true);
            },
          },
        ],
      },
      makeNumberNegative: {
        title: `function makeNumberNegative`,
        instructions: `Make a function named "makeNumberNegative" that takes one argument, a number. It should return the same number, but negative.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(makeNumberNegative).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(makeNumberNegative).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(makeNumberNegative).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(makeNumberNegative).takesXArguments(1);
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(makeNumberNegative).withArgs(1).toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(makeNumberNegative).withArgs(1).toReturn(-1);
              expect(makeNumberNegative).withArgs(0).toReturn(0);
              expect(makeNumberNegative).withArgs(-1).toReturn(-1);
            },
          },
        ],
      },
      doYouWantCake: {
        title: `function doYouWantCake`,
        instructions: `Make a function named "doYouWantCake" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(doYouWantCake).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(doYouWantCake).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(doYouWantCake).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(doYouWantCake).takesXArguments(1);
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(doYouWantCake).withArgs().toReturnString();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(doYouWantCake).withArgs(true).toReturn('yes');
              expect(doYouWantCake).withArgs(false).toReturn('no');
              expect(doYouWantCake).withArgs().toReturn('no');
            },
          },
        ],
      },
      wordLength: {
        title: `function wordLength`,
        instructions: `Make a function named "wordLength" that takes one argument, a string. It should return the length of the string as a number.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(wordLength).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(wordLength).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(wordLength).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(wordLength).takesXArguments(1);
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(wordLength).withArgs('string').toReturnNumber();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(wordLength).withArgs('cat').toReturn(3);
              expect(wordLength).withArgs('steep').toReturn(5);
              expect(wordLength).withArgs('').toReturn(0);
            },
          },
        ],
      },
      carBuilder: {
        title: `function carBuilder`,
        instructions: `Make a function named "carBuilder" that takes 3 arguments, string, string, and number. It should return an object that has 3 keys: "make", "model", and "year", with the first/second/third arguments as the "make", "model", and "year" values.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(carBuilder).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(carBuilder).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(carBuilder).toBeFunction();
            },
          },
          {
            description: `takes three arguments`,
            test: () => {
              expect(carBuilder).takesXArguments(3);
            },
          },
          {
            description: `returns an object`,
            test: () => {
              expect(carBuilder).withArgs().toReturnObject();
            },
          },
          {
            description: `returns an object with 3 keys`,
            test: () => {
              expect(carBuilder(1, 2, 3)).toHaveObjectKeyCount(3);
            },
          },
          {
            description: `returns an object with key "make"`,
            test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`make`);
            },
          },
          {
            description: `returns an object with key "model"`,
            test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`model`);
            },
          },
          {
            description: `returns an object with key "year"`,
            test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`year`);
            },
          },
          {
            description: `carBuilder("Hyundai", "Accent", 2010) returns correct "make"`,
            test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `make`,
                `Hyundai`,
              );
            },
          },
          {
            description: `carBuilder("Hyundai", "Accent", 2010) returns correct "model"`,
            test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `model`,
                `Accent`,
              );
            },
          },
          {
            description: `carBuilder("Hyundai", "Accent", 2010) returns correct "year"`,
            test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `year`,
                2010,
              );
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(carBuilder)
                .withArgs(`Volkswagen`, `Beetle`, `1963`)
                .toReturn({
                  make: `Volkswagen`,
                  model: `Beetle`,
                  year: `1963`,
                });
              expect(carBuilder)
                .withArgs(`Lotus`, `Esprit S1`, `1976`)
                .toReturn({ make: `Lotus`, model: `Esprit S1`, year: `1976` });
            },
          },
        ],
      },
      teachersNeeded: {
        title: `function teachersNeeded`,
        instructions: `Make a function named "teachersNeeded" that takes 2 arguments, a number and a number. The first number is how many students there are. The second number is how many students there should be per teacher. It should return the minimum number of teachers required (google "Math.ceil")`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(teachersNeeded).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(teachersNeeded).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(teachersNeeded).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(teachersNeeded).takesXArguments(2);
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(teachersNeeded).withArgs(1, 1).toReturnNumber();
            },
          },
          {
            description: `returns an integer`,
            test: () => {
              expect(teachersNeeded).withArgs(3, 2).toReturnInteger();
            },
          },
          {
            description: `returns correct values`,
            test: () => {
              expect(teachersNeeded).withArgs(10, 5).toReturn(2);
              expect(teachersNeeded).withArgs(18, 7).toReturn(3);
              expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
            },
          },
        ],
      },
    },
  },
  {
    id: 'A6',
    title: 'Objects',
    series: 'A',
    help: 'https://www.w3schools.com/js/js_objects.asp',
    sections: {
      personObject: {
        title: `var "person"`,
        instructions: `Declare a variable named "person", an object. Read tests closely for keys and values.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(person).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(person).toHaveValue();
            },
          },
          {
            description: `is an object`,
            test: () => {
              expect(person).toBeObject();
            },
          },
          {
            description: `has 4 keys`,
            test: () => {
              expect(person).toHaveObjectKeyCount(4);
            },
          },
          {
            description: `has key "firstName"`,
            test: () => {
              expect(person).toHaveKey('firstName');
            },
          },
          {
            description: `has key/value pair of "firstName"/"Zintis"`,
            test: () => {
              expect(person).toHaveKeyValuePair('firstName', 'Zintis');
            },
          },
          {
            description: `has key "lastName"`,
            test: () => {
              expect(person).toHaveKey('lastName');
            },
          },
          {
            description: `has key/value pair of "lastName"/"May"`,
            test: () => {
              expect(person).toHaveKeyValuePair('lastName', 'May');
            },
          },
          {
            description: `has key "isTeacher"`,
            test: () => {
              expect(person).toHaveKey('isTeacher');
            },
          },
          {
            description: `has key/value pair of "isTeacher"/true`,
            test: () => {
              expect(person).toHaveKeyValuePair('isTeacher', true);
            },
          },
          {
            description: `has key "students"`,
            test: () => {
              expect(person).toHaveKey('students');
            },
          },
          {
            description: `has key/value pair of "students"/100`,
            test: () => {
              expect(person).toHaveKeyValuePair('students', 100);
            },
          },
          {
            description: `is correct value`,
            test: () => {
              expect(person).toBe({
                firstName: 'Zintis',
                lastName: 'May',
                isTeacher: true,
                students: 100,
              });
            },
          },
        ],
      },
      jsClassObject: {
        title: `var "jsClass"`,
        instructions: `Declare a variable named "jsClass" an object. Read tests closely for keys and values`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(jsClass).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(jsClass).toHaveValue();
            },
          },
          {
            description: `is an object`,
            test: () => {
              expect(jsClass).toBeObject();
            },
          },
          {
            description: `has 2 keys`,
            test: () => {
              expect(jsClass).toHaveObjectKeyCount(2);
            },
          },
          {
            description: `has key "class"`,
            test: () => {
              expect(jsClass).toHaveKey('class');
            },
          },
          {
            description: `has key/value pair of "class"/"javascript"`,
            test: () => {
              expect(jsClass).toHaveKeyValuePair('class', 'javascript');
            },
          },
          {
            description: `has key "grades"`,
            test: () => {
              expect(jsClass).toHaveKey('grades');
            },
          },
          {
            description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`,
            test: () => {
              expect(jsClass.grades).toBe([
                85, 94, 82, 79, 77, 88, 96, 95, 57, 100,
              ]);
            },
          },
          {
            description: `is correct value`,
            test: () => {
              expect(jsClass).toBe({
                class: 'javascript',
                grades: [85, 94, 82, 79, 77, 88, 96, 95, 57, 100],
              });
            },
          },
        ],
      },
      shoppingCartObject: {
        title: `var "shoppingCart"`,
        instructions: `Declare a variable named "shoppingCart", an object. Read tests closely for keys and values`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(shoppingCart).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(shoppingCart).toHaveValue();
            },
          },
          {
            description: `is an object`,
            test: () => {
              expect(shoppingCart).toBeObject();
            },
          },
          {
            description: `has 3 keys`,
            test: () => {
              expect(shoppingCart).toHaveObjectKeyCount(3);
            },
          },
          {
            description: `has key "total"`,
            test: () => {
              expect(shoppingCart).toHaveKey('total');
            },
          },
          {
            description: `key "total" is a number`,
            test: () => {
              expect(shoppingCart.total).toBeNumber();
            },
          },
          {
            description: `has key/value pair of "total"/5`,
            test: () => {
              expect(shoppingCart).toHaveKeyValuePair('total', 5);
            },
          },
          {
            description: `has key "onlinePurchase"`,
            test: () => {
              expect(shoppingCart).toHaveKey('onlinePurchase');
            },
          },
          {
            description: `key "onlinePurchase" is a boolean`,
            test: () => {
              expect(shoppingCart.onlinePurchase).toBeBoolean();
            },
          },
          {
            description: `has key/value pair of "onlinePurchase"/true`,
            test: () => {
              expect(shoppingCart).toHaveKeyValuePair('onlinePurchase', true);
            },
          },
          {
            description: `has key "items"`,
            test: () => {
              expect(shoppingCart).toHaveKey('items');
            },
          },
          {
            description: `key "items" is an array`,
            test: () => {
              expect(shoppingCart.items).toBeArray();
            },
          },
          {
            description: `key "items" is an array of length 3`,
            test: () => {
              expect(shoppingCart.items).toHaveLength(3);
            },
          },
          {
            description: `key "items" is ["toothbrush", "toothpaste", "floss"]`,
            test: () => {
              expect(shoppingCart.items).toBe([
                'toothbrush',
                'toothpaste',
                'floss',
              ]);
            },
          },
          {
            description: `is correct value`,
            test: () => {
              expect(shoppingCart).toBe({
                items: ['toothbrush', 'toothpaste', 'floss'],
                total: 5,
                onlinePurchase: true,
              });
            },
          },
        ],
      },
    },
  },
  {
    id: 'A7',
    title: 'Arrays',
    series: 'A',
    help: 'https://www.w3schools.com/js/js_arrays.asp',
    sections: {
      emptyArray: {
        title: `var "emptyArray"`,
        instructions: `Declare a variable named "emptyArray", an array with no values`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(emptyArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(emptyArray).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(emptyArray).toBeArray();
            },
          },
          {
            description: `has 0 items`,
            test: () => {
              expect(emptyArray).toHaveLength(0);
            },
          },
        ],
      },
      varSimpleArrayTests: {
        title: `var "simpleArray"`,
        instructions: `Declare a variable named "simpleArray", an array whose values are the numbers 1, 2 and 3`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(simpleArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(simpleArray).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(simpleArray).toBeArray();
            },
          },
          {
            description: `contains only numbers`,
            test: () => {
              expect(simpleArray).toOnlyContainType(`number`);
            },
          },
          {
            description: `has 3 items`,
            test: () => {
              expect(simpleArray).toHaveLength(3);
            },
          },
          {
            description: `contains numbers 1,2,3`,
            test: () => {
              expect(simpleArray).toBeSameArrayAs([1, 2, 3]);
            },
          },
        ],
      },
      varFavoriteFoodsTest: {
        title: `var "favoriteFoods"`,
        instructions: `Declare a variable named "favoriteFoods", an array whose values are three words (your favorite foods!).`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(favoriteFoods).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(favoriteFoods).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(favoriteFoods).toBeArray();
            },
          },
          {
            description: `contains only strings`,
            test: () => {
              expect(favoriteFoods).toOnlyContainType(`string`);
            },
          },
          {
            description: `contains only words of 3+ letters`,
            test: () => {
              expect(favoriteFoods).customTest(function () {
                this.value.forEach((item) => {
                  if (item.length < 3)
                    throw new Error(`words must be 3 or more letters`);
                });
                return this;
              });
            },
          },
        ],
      },
      bigNumbers: {
        title: `var "bigNumbers"`,
        instructions: `Declare a variable named "bigNumbers", an array with 3 numbers all greater than 9000.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(bigNumbers).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(bigNumbers).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(bigNumbers).toBeArray();
            },
          },
          {
            description: `contains only numbers`,
            test: () => {
              expect(bigNumbers).toOnlyContainType(`number`);
            },
          },
          {
            description: `only contains numbers over 9000`,
            test: () => {
              expect(bigNumbers).customTest(function () {
                this.value.forEach((item) => {
                  if (!(item > 9000))
                    throw new Error(`not all numbers are over 9000`);
                  return this;
                });
              });
            },
          },
        ],
      },
      arrayOf10: {
        title: `var "arrayOf10"`,
        instructions: `Declare a variable named "arrayOf10", an array of 10 numbers.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(arrayOf10).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(arrayOf10).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(arrayOf10).toBeArray();
            },
          },
          {
            description: `contains only numbers`,
            test: () => {
              expect(arrayOf10).toOnlyContainType(`number`);
            },
          },
          {
            description: `has 10 items`,
            test: () => {
              expect(arrayOf10).toHaveLength(10);
            },
          },
        ],
      },
      arrayOfBooleans: {
        title: `var "arrayOfBooleans"`,
        instructions: `Declare a variable named "arrayOfBooleans", an array of 5 booleans.`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(arrayOfBooleans).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(arrayOfBooleans).toHaveValue();
            },
          },
          {
            description: `is an array`,
            test: () => {
              expect(arrayOfBooleans).toBeArray();
            },
          },
          {
            description: `contains only booleans`,
            test: () => {
              expect(arrayOfBooleans).toOnlyContainType(`boolean`);
            },
          },
          {
            description: `has 5 items`,
            test: () => {
              expect(arrayOfBooleans).toHaveLength(5);
            },
          },
        ],
      },
    },
  },
  {
    id: 'A8',
    title: 'Array Methods',
    series: 'A',

    help: 'https://www.w3schools.com/js/js_array_methods.asp',
    sections: {
      makeArrayOfX: {
        title: `function "makeArrayOfX"`,
        instructions: `Make a function that takes 2 arguments. First argument is how many. 2nd argument is what will be in the array. Example: makeArrayOfX(4, 'a') returns ['a', 'a', 'a', 'a']`,
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
              expect(makeArrayOfX).withArgs(3, 3).toReturnArrayOfType('number');
              expect(makeArrayOfX)
                .withArgs(3, 'a')
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(makeArrayOfX(5, 8)).toBeSameArrayAs([8, 8, 8, 8, 8]);
              expect(makeArrayOfX(3, 'a')).toBeSameArrayAs(['a', 'a', 'a']);
            },
          },
        ],
      },
      reverseArray: {
        title: `function "reverseArray"`,
        instructions: `Make a function that takes an array as an argument. It should return the array in reverse order. Example: reverseArray(['d', 'e', 'f']) returns ['f','e','d']`,
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
              expect(reverseArray)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
              expect(reverseArray)
                .withArgs(['a', 'b', 'c'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(reverseArray(['a', 'b', 'c'])).toBeSameArrayAs([
                'c',
                'b',
                'a',
              ]);
              expect(reverseArray([1, 2, 3])).toBeSameArrayAs([3, 2, 1]);
            },
          },
        ],
      },
      sortLetters: {
        title: `function "sortLetters"`,
        instructions: `Make a function that takes one argument, an array of letters. It should return the array of letters in alphabetical order.`,
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
              expect(sortLetters).withArgs(['a', 'z', 'b']).toReturnSomething();
            },
          },
          {
            description: `returns array`,
            test: () => {
              expect(sortLetters).withArgs(['a', 'z', 'b']).toReturnArray();
            },
          },
          {
            description: `returns array with string items`,
            test: () => {
              expect(sortLetters)
                .withArgs(['a', 'z', 'b'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(sortLetters(['a', 'z', 'b', 'd'])).toBeSameArrayAs([
                'a',
                'b',
                'd',
                'z',
              ]);
            },
          },
        ],
      },
      sortNumbers: {
        title: `function "sortNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. It should return the numbers from smallest to biggest.`,
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
              expect(sortNumbers)
                .withArgs([3, 2, 1])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(
                sortNumbers([1, 1000, 2, 2000, 5, 30, 400]),
              ).toBeSameArrayAs([1, 2, 5, 30, 400, 1000, 2000]);
              expect(sortNumbers([5, 3, 1])).toBeSameArrayAs([1, 3, 5]);
            },
          },
        ],
      },
      sortByWordLength: {
        title: `function "sortByWordLength"`,
        instructions: `Make a function that takes one argument, an array of words. Return the words in an array from shortest to longest.`,
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
              expect(sortByWordLength)
                .withArgs(['bob', 'bill'])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(sortByWordLength)
                .withArgs(['bob', 'bill'])
                .toReturnArray();
            },
          },
          {
            description: `returns an array with string items`,
            test: () => {
              expect(sortByWordLength)
                .withArgs(['bob', 'bill'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(
                sortByWordLength(['throw', 'jungle', 'longest', 'cat']),
              ).toBeSameArrayAs(['cat', 'throw', 'jungle', 'longest']);
            },
          },
        ],
      },
    },
  },
  {
    id: 'A9',
    title: 'Loops & Strings',
    series: 'A',

    help: 'https://www.w3schools.com/js/js_loops.asp',
    sections: {
      makeXAsterisks: {
        title: `function "makeXAsterisks"`,
        instructions: `Make a function that takes one argument, a number. It should return a string with that many asterisks. Example: makeXAsterisks(5) returns "*****"`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(makeXAsterisks).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(makeXAsterisks).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(makeXAsterisks).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnString();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(makeXAsterisks(5)).toBe('*****');
              expect(makeXAsterisks(3)).toBe('***');
              expect(makeXAsterisks(12)).toBe('************');
            },
          },
        ],
      },
      allNumbersUpToX: {
        title: `function "allNumbersUpToX"`,
        instructions: `Make a function that takes one argument, a number. It should return an array of every number up to that number, starting at 1. Example: allNumbersUpToX(5) returns [1,2,3,4,5]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(allNumbersUpToX).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(allNumbersUpToX).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(allNumbersUpToX).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnSomething();
            },
          },
          {
            description: `returns array`,
            test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArray();
            },
          },
          {
            description: `returns array of numbers`,
            test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArrayOfType('number');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(allNumbersUpToX(8)).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6, 7, 8,
              ]);
              expect(allNumbersUpToX(1)).toBeSameArrayAs([1]);
              expect(allNumbersUpToX(3)).toBeSameArrayAs([1, 2, 3]);
            },
          },
        ],
      },
      makeStringWithXLetterY: {
        title: `function "makeStringWithXLetterY"`,
        instructions: `Make a function that takes two arguments, a number and a character. It should return a string with X copies of Y. Example: makeStringWithXLetterY(4, "b") returns "bbbb"`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(makeStringWithXLetterY).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(makeStringWithXLetterY).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(makeStringWithXLetterY).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(makeStringWithXLetterY)
                .withArgs(3, 'b')
                .toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(makeStringWithXLetterY).withArgs(3, 'b').toReturnString();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(makeStringWithXLetterY(5, 'a')).toBe('aaaaa');
              expect(makeStringWithXLetterY(10, 'x')).toBe('xxxxxxxxxx');
              expect(makeStringWithXLetterY(0, 'q')).toBe('');
            },
          },
        ],
      },
      reverseWord: {
        title: `function "reverseWord"`,
        instructions: `Make a function that takes one argument, a string. It should return the string in reverse order. Example: reverseWord("cat") returns "tac"`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(reverseWord).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(reverseWord).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(reverseWord).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(reverseWord).withArgs('bill').toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(reverseWord).withArgs('bill').toReturnString();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(reverseWord('towel')).toBe('lewot');
              expect(reverseWord('aba')).toBe('aba');
              expect(reverseWord('cow')).toBe('woc');
            },
          },
        ],
      },
      removeVowels: {
        title: `function "removeVowels"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the vowels removed. Example: removeVowels('opportunity') returns 'pprtnty'`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeVowels).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeVowels).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeVowels).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeVowels).withArgs('ca').toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(removeVowels).withArgs('ca').toReturnString();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(removeVowels('behaviour')).toBe('bhvr');
              expect(removeVowels('aeiou')).toBe('');
              expect(removeVowels('bcdfghjklmnpqrstvwxyz')).toBe(
                'bcdfghjklmnpqrstvwxyz',
              );
            },
          },
        ],
      },
      removeConsonants: {
        title: `function "removeConsonants"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the consonants removed. Example: removeConsonants('opportunity') returns 'oouiy'`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeConsonants).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeConsonants).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeConsonants).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeConsonants).withArgs('ab').toReturnSomething();
            },
          },
          {
            description: `returns a string`,
            test: () => {
              expect(removeConsonants).withArgs('ab').toReturnString();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(removeConsonants('abcdefghijklmnopqrstuvwxyz')).toBe(
                'aeiou',
              );
              expect(removeConsonants('aeiou')).toBe('aeiou');
              expect(removeConsonants('xyz')).toBe('');
            },
          },
        ],
      },
      removeWordsOfLengthXPlus: {
        title: `function "removeWordsOfLengthXPlus"`,
        instructions: `Make a function that takes two arguments, an array of strings and a number. Remove any string as long or longer than the number. Example: removeWordsOfLengthXPlus(["homeland","cat","drop"], 5) returns ["cat","drop"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeWordsOfLengthXPlus).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeWordsOfLengthXPlus).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(removeWordsOfLengthXPlus).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnSomething();
            },
          },
          {
            description: `returns array`,
            test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArray();
            },
          },
          {
            description: `returns array of strings`,
            test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  4,
                ),
              ).toBeSameArrayAs(['cat', 'dog']);
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  1,
                ),
              ).toBeSameArrayAs([]);
              expect(
                removeWordsOfLengthXPlus(
                  ['president', 'leader', 'cat', 'dog'],
                  12,
                ),
              ).toBeSameArrayAs(['president', 'leader', 'cat', 'dog']);
            },
          },
        ],
      },
      calculateAverage: {
        title: `function "calculateAverage"`,
        instructions: `Make a function that takes one argument, an array of numbers. It should return the average of all numbers. Example: calculateAverage([2, 4, 6, 8, 10]) returns 6`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(calculateAverage).toBeDeclared();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(calculateAverage).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(calculateAverage).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnSomething();
            },
          },
          {
            description: `returns a number`,
            test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnNumber();
            },
          },
          {
            description: `returns the correct result`,
            test: () => {
              expect(calculateAverage([1, 8, 5, 20, 16])).toBe(10);
              expect(calculateAverage([2])).toBe(2);
              expect(calculateAverage([1, 2])).toBe(1.5);
            },
          },
        ],
      },
    },
  },
  {
    id: 'A10',
    title: 'Array.map',
    series: 'A',

    help: 'https://www.w3schools.com/jsref/jsref_map.asp',
    sections: {
      arrayValuesPlusOne: {
        title: `function "arrayValuesPlusOne"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to add one to each number and return the resulting array. Example: arrayValuesPlusOne([1, 3, 5]) returns [2, 4, 6]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(arrayValuesPlusOne).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(arrayValuesPlusOne).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(arrayValuesPlusOne).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(arrayValuesPlusOne).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(arrayValuesPlusOne).withArgs([1, 2]).toReturnSomething();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(arrayValuesPlusOne([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs(
                [2, 3, 4, 5, 6, 7, 8],
              );
              expect(arrayValuesPlusOne([])).toBeSameArrayAs([]);
              expect(arrayValuesPlusOne([1])).toBeSameArrayAs([2]);
            },
          },
        ],
      },
      doubleArrayValues: {
        title: `function "doubleArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to double all the values and return an array. Example: doubleArrayValues([2, 5, 11]) returns [4, 10, 22]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(doubleArrayValues).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(doubleArrayValues).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(doubleArrayValues).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(doubleArrayValues).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(doubleArrayValues).withArgs([1]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(doubleArrayValues).withArgs([1]).toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(doubleArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(doubleArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(doubleArrayValues([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6, 8, 10, 12, 14,
              ]);
              expect(doubleArrayValues([])).toBeSameArrayAs([]);
              expect(doubleArrayValues([-1, 0, 1])).toBeSameArrayAs([-2, 0, 2]);
            },
          },
        ],
      },
      halveArrayValues: {
        title: `function "halveArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to divide each item by 2 and return the resulting array. Example: [1, 2, 3, 4, 5] returns [.5, 1, 1.5, 2, 2.5]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(halveArrayValues).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(halveArrayValues).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(halveArrayValues).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(halveArrayValues).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(halveArrayValues).withArgs([]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(halveArrayValues).withArgs([]).toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(halveArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(halveArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(halveArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6,
              ]);
              expect(halveArrayValues([])).toBeSameArrayAs([]);
              expect(halveArrayValues([-1, -2, 0])).toBeSameArrayAs([
                -0.5, -1, 0,
              ]);
            },
          },
        ],
      },
      squareArrayValues: {
        title: `function "squareArrayValues"`,
        instructions: `Make a function that takes one argument, an array of numbers. Use "array.map" to square each number and return it. Example: squareArrayValues([10,8]) returns [100, 64]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(squareArrayValues).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(squareArrayValues).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(squareArrayValues).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(squareArrayValues).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(squareArrayValues).withArgs([1]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(squareArrayValues).withArgs([1]).toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(squareArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(squareArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(squareArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                4, 16, 36, 64, 100, 144,
              ]);
              expect(squareArrayValues([0])).toBeSameArrayAs([0]);
              expect(squareArrayValues([])).toBeSameArrayAs([]);
            },
          },
        ],
      },
      onlyFirstLetterOfWords: {
        title: `function "onlyFirstLetterOfWords"`,
        instructions: `Make a function that takes one argument, an array of strings. Use "array.map" to return an array of the first letters of each string. Example: onlyFirstLetterOfWords(['cat','dog']) returns ['c','d']`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(onlyFirstLetterOfWords).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(onlyFirstLetterOfWords).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(onlyFirstLetterOfWords).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(onlyFirstLetterOfWords).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(onlyFirstLetterOfWords).withArgs(['a']).toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(onlyFirstLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                onlyFirstLetterOfWords(['cat', 'sibling', 'pepper', 'zebra']),
              ).toBeSameArrayAs(['c', 's', 'p', 'z']);
              expect(onlyFirstLetterOfWords([])).toBeSameArrayAs([]);
              expect(
                onlyFirstLetterOfWords(['az', 'bz', 'cz']),
              ).toBeSameArrayAs(['a', 'b', 'c']);
            },
          },
        ],
      },
      onlyLastLetterOfWords: {
        title: `function "onlyLastLetterOfWords"`,
        instructions: `Make a function that takes one argument, an array of strings. Use "array.map" to return an array of the last letter of each string. Example: onlyLastLetterOfWords(["cat","dog"]) returns ["t","g"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(onlyLastLetterOfWords).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(onlyLastLetterOfWords).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(onlyLastLetterOfWords).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(onlyLastLetterOfWords).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls the "array.map" method`,
            test: () => {
              expect(onlyLastLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                onlyLastLetterOfWords(['cat', 'wing', 'trot', 'coo']),
              ).toBeSameArrayAs(['t', 'g', 't', 'o']);
              expect(onlyLastLetterOfWords([])).toBeSameArrayAs([]);
            },
          },
        ],
      },
    },
  },
  {
    id: 'A11',
    title: 'Array.filter',
    series: 'A',

    help: 'https://www.w3schools.com/jsref/jsref_filter.asp',
    sections: {
      removeOddNumbers: {
        title: `function "removeOddNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no odd numbers. Example: removeOddNumbers([1,2,3,4]) returns [2,4]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeOddNumbers).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeOddNumbers).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeOddNumbers).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeOddNumbers).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.filter" method`,
            test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(removeOddNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6,
              ]);
              expect(removeOddNumbers([])).toBeSameArrayAs([]);
              expect(removeOddNumbers([11, 31, 51])).toBeSameArrayAs([]);
              expect(removeOddNumbers([22, 44])).toBeSameArrayAs([22, 44]);
            },
          },
        ],
      },
      removeEvenNumbers: {
        title: `function "removeEvenNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no even numbers. Example: removeEvenNumbers([1,2,3,4]) returns [1,3]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeEvenNumbers).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeEvenNumbers).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeEvenNumbers).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeEvenNumbers).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "array.filter" method`,
            test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(removeEvenNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                1, 3, 5, 7,
              ]);
              expect(removeEvenNumbers([])).toBeSameArrayAs([]);
              expect(removeEvenNumbers([11, 31, 51])).toBeSameArrayAs([
                11, 31, 51,
              ]);
              expect(removeEvenNumbers([22, 44])).toBeSameArrayAs([]);
            },
          },
        ],
      },
      removeNumbersLessThan3: {
        title: `function "removeNumbersLessThan3"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" to remove numbers less than 3. Example: removeNumbersLessThan3([1,2,3,4]) returns [3,4]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeNumbersLessThan3).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeNumbersLessThan3).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeNumbersLessThan3).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeNumbersLessThan3).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "filter" method`,
            test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                removeNumbersLessThan3([1, 2, 3, 4, 5, 6, 7]),
              ).toBeSameArrayAs([3, 4, 5, 6, 7]);
              expect(
                removeNumbersLessThan3([1, 1, 2, 2, 1, 2, 1]),
              ).toBeSameArrayAs([]);
              expect(removeNumbersLessThan3([3, 4, 5, 6, 100])).toBeSameArrayAs(
                [3, 4, 5, 6, 100],
              );
            },
          },
        ],
      },
      removeNumbersLessThanX: {
        title: `function "removeNumbersLessThanX"`,
        instructions: `Make a function that takes two arguments, an array of numbers and a number. Call "array.filter" to remove numbers less than the 2nd argument. Example: removeNumbersLessThanX([1,2,3,4,5],3) returns [3,4,5]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeNumbersLessThanX).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeNumbersLessThanX).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeNumbersLessThanX).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(removeNumbersLessThanX).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArray();
            },
          },
          {
            description: `returns an array of numbers`,
            test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            },
          },
          {
            description: `calls the "filter" method`,
            test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                removeNumbersLessThanX([1, 2, 3, 4, 5, 6, 7], 4),
              ).toBeSameArrayAs([4, 5, 6, 7]);
              expect(
                removeNumbersLessThanX([1, 1, 2, 2, 1, 2, 1], 2),
              ).toBeSameArrayAs([2, 2, 2]);
              expect(
                removeNumbersLessThanX([3, 4, 5, 6, 100], 50),
              ).toBeSameArrayAs([100]);
              expect(removeNumbersLessThanX([], 50)).toBeSameArrayAs([]);
            },
          },
        ],
      },
      removeEmptyStrings: {
        title: `function "removeEmptyStrings"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove any empty strings. Example: removeEmptyStrings(["","Phone","Josh"]) returns ["Phone","Josh"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeEmptyStrings).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeEmptyStrings).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeEmptyStrings).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeEmptyStrings).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeEmptyStrings).withArgs(['a', '']).toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls "array.filter" method`,
            test: () => {
              expect(removeEmptyStrings)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                removeEmptyStrings(['', '', 'dog', 'document', 'cat']),
              ).toBeSameArrayAs(['dog', 'document', 'cat']);
              expect(removeEmptyStrings([])).toBeSameArrayAs([]);
              expect(removeEmptyStrings(['', '', ''])).toBeSameArrayAs([]);
              expect(removeEmptyStrings(['a', 'a', 'a'])).toBeSameArrayAs([
                'a',
                'a',
                'a',
              ]);
            },
          },
        ],
      },
      removeVowelsFromArray: {
        title: `function "removeVowelsFromArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a vowel. Example: removeVowelsFromArray(["a","b","c","d","e"]) returns ["b","c","d"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeVowelsFromArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeVowelsFromArray).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeVowelsFromArray).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeVowelsFromArray).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls the "array.filter" method`,
            test: () => {
              expect(removeVowelsFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(removeVowelsFromArray(['a', 'b', 'c'])).toBeSameArrayAs([
                'b',
                'c',
              ]);
              expect(
                removeVowelsFromArray(['a', 'e', 'i', 'o', 'u']),
              ).toBeSameArrayAs([]);
              expect(removeVowelsFromArray([])).toBeSameArrayAs([]);
              expect(removeVowelsFromArray(['b', 'x', 'z'])).toBeSameArrayAs([
                'b',
                'x',
                'z',
              ]);
            },
          },
        ],
      },
      removeConsonantsInArray: {
        title: `function "removeConsonantsInArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a consonant. Example: removeConsonantsInArray(["a","b","c","d","e"]) returns ["a","e"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeConsonantsInArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeConsonantsInArray).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeConsonantsInArray).toBeFunction();
            },
          },
          {
            description: `takes one argument`,
            test: () => {
              expect(removeConsonantsInArray).takesXArguments(1);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls the "array.filter" method`,
            test: () => {
              expect(removeConsonantsInArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(removeConsonantsInArray(['a', 'b', 'c'])).toBeSameArrayAs([
                'a',
              ]);
              expect(
                removeConsonantsInArray(['a', 'e', 'i', 'o', 'u']),
              ).toBeSameArrayAs(['a', 'e', 'i', 'o', 'u']);
              expect(removeConsonantsInArray([])).toBeSameArrayAs([]);
              expect(removeConsonantsInArray(['b', 'x', 'z'])).toBeSameArrayAs(
                [],
              );
            },
          },
        ],
      },
      removeWordFromArray: {
        title: `function "removeWordFromArray"`,
        instructions: `Make a function that takes two arguments, an array of strings and a word. Call "array.filter" to remove all strings that match the word. Example: removeWordFromArray(["cat","dog","fish"],"fish") returns ["cat","dog"]`,
        tests: [
          {
            description: `is declared`,
            test: () => {
              expect(removeWordFromArray).toBeDeclared();
            },
          },
          {
            description: `has a value`,
            test: () => {
              expect(removeWordFromArray).toHaveValue();
            },
          },
          {
            description: `is a function`,
            test: () => {
              expect(removeWordFromArray).toBeFunction();
            },
          },
          {
            description: `takes two arguments`,
            test: () => {
              expect(removeWordFromArray).takesXArguments(2);
            },
          },
          {
            description: `returns something`,
            test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnSomething();
            },
          },
          {
            description: `returns an array`,
            test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArray();
            },
          },
          {
            description: `returns an array of strings`,
            test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArrayOfType('string');
            },
          },
          {
            description: `calls the "array.filter" method`,
            test: () => {
              expect(removeWordFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            },
          },
          {
            description: `returns the correct value`,
            test: () => {
              expect(
                removeWordFromArray(['joke', 'documentation'], 'documentation'),
              ).toBeSameArrayAs(['joke']);
              expect(
                removeWordFromArray(['joke', 'documentation'], 'cat'),
              ).toBeSameArrayAs(['joke', 'documentation']);
              expect(removeWordFromArray([], 'cat')).toBeSameArrayAs([]);
              expect(
                removeWordFromArray(['cat', 'cat', 'cat'], 'cat'),
              ).toBeSameArrayAs([]);
            },
          },
        ],
      },
    },
  },
];
