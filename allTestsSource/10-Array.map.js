const test = {
  "id": "10",
  "title": "Array.map",
  "help": "https:\u002F\u002Fwww.w3schools.com\u002Fjsref\u002Fjsref_map.asp",
  "items": [
    {
      "type": "test",
      "key": "arrayValuesPlusOne",
      "title": "function \"arrayValuesPlusOne\"",
      "instructions": "Make a function that takes one argument, an array of numbers. Use \"array.map\" to add one to each number and return the resulting array. Example: arrayValuesPlusOne([1, 3, 5]) returns [2, 4, 6]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(arrayValuesPlusOne).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(arrayValuesPlusOne).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(arrayValuesPlusOne).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(arrayValuesPlusOne).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(arrayValuesPlusOne).withArgs([1, 2]).toReturnSomething();
            }
        },
        {
          "description": "returns an array of numbers",
          "test": () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(arrayValuesPlusOne)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(arrayValuesPlusOne([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs(
                [2, 3, 4, 5, 6, 7, 8],
              );
              expect(arrayValuesPlusOne([])).toBeSameArrayAs([]);
              expect(arrayValuesPlusOne([1])).toBeSameArrayAs([2]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "doubleArrayValues",
      "title": "function \"doubleArrayValues\"",
      "instructions": "Make a function that takes one argument, an array of numbers. Use \"array.map\" to double all the values and return an array. Example: doubleArrayValues([2, 5, 11]) returns [4, 10, 22]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(doubleArrayValues).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(doubleArrayValues).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(doubleArrayValues).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(doubleArrayValues).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(doubleArrayValues).withArgs([1]).toReturnSomething();
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(doubleArrayValues).withArgs([1]).toReturnArray();
            }
        },
        {
          "description": "returns an array of numbers",
          "test": () => {
              expect(doubleArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(doubleArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(doubleArrayValues([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6, 8, 10, 12, 14,
              ]);
              expect(doubleArrayValues([])).toBeSameArrayAs([]);
              expect(doubleArrayValues([-1, 0, 1])).toBeSameArrayAs([-2, 0, 2]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "halveArrayValues",
      "title": "function \"halveArrayValues\"",
      "instructions": "Make a function that takes one argument, an array of numbers. Use \"array.map\" to divide each item by 2 and return the resulting array. Example: [1, 2, 3, 4, 5] returns [.5, 1, 1.5, 2, 2.5]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(halveArrayValues).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(halveArrayValues).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(halveArrayValues).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(halveArrayValues).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(halveArrayValues).withArgs([]).toReturnSomething();
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(halveArrayValues).withArgs([]).toReturnArray();
            }
        },
        {
          "description": "returns an array of numbers",
          "test": () => {
              expect(halveArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(halveArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(halveArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6,
              ]);
              expect(halveArrayValues([])).toBeSameArrayAs([]);
              expect(halveArrayValues([-1, -2, 0])).toBeSameArrayAs([
                -0.5, -1, 0,
              ]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "squareArrayValues",
      "title": "function \"squareArrayValues\"",
      "instructions": "Make a function that takes one argument, an array of numbers. Use \"array.map\" to square each number and return it. Example: squareArrayValues([10,8]) returns [100, 64]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(squareArrayValues).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(squareArrayValues).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(squareArrayValues).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(squareArrayValues).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(squareArrayValues).withArgs([1]).toReturnSomething();
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(squareArrayValues).withArgs([1]).toReturnArray();
            }
        },
        {
          "description": "returns an array of numbers",
          "test": () => {
              expect(squareArrayValues)
                .withArgs([1])
                .toReturnArrayOfType('number');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(squareArrayValues)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(squareArrayValues([2, 4, 6, 8, 10, 12])).toBeSameArrayAs([
                4, 16, 36, 64, 100, 144,
              ]);
              expect(squareArrayValues([0])).toBeSameArrayAs([0]);
              expect(squareArrayValues([])).toBeSameArrayAs([]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "onlyFirstLetterOfWords",
      "title": "function \"onlyFirstLetterOfWords\"",
      "instructions": "Make a function that takes one argument, an array of strings. Use \"array.map\" to return an array of the first letters of each string. Example: onlyFirstLetterOfWords(['cat','dog']) returns ['c','d']",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(onlyFirstLetterOfWords).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(onlyFirstLetterOfWords).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(onlyFirstLetterOfWords).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(onlyFirstLetterOfWords).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnSomething();
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(onlyFirstLetterOfWords).withArgs(['a']).toReturnArray();
            }
        },
        {
          "description": "returns an array of strings",
          "test": () => {
              expect(onlyFirstLetterOfWords)
                .withArgs(['a'])
                .toReturnArrayOfType('string');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(onlyFirstLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(
                onlyFirstLetterOfWords(['cat', 'sibling', 'pepper', 'zebra']),
              ).toBeSameArrayAs(['c', 's', 'p', 'z']);
              expect(onlyFirstLetterOfWords([])).toBeSameArrayAs([]);
              expect(
                onlyFirstLetterOfWords(['az', 'bz', 'cz']),
              ).toBeSameArrayAs(['a', 'b', 'c']);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "onlyLastLetterOfWords",
      "title": "function \"onlyLastLetterOfWords\"",
      "instructions": "Make a function that takes one argument, an array of strings. Use \"array.map\" to return an array of the last letter of each string. Example: onlyLastLetterOfWords([\"cat\",\"dog\"]) returns [\"t\",\"g\"]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(onlyLastLetterOfWords).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(onlyLastLetterOfWords).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(onlyLastLetterOfWords).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(onlyLastLetterOfWords).takesXArguments(1);
            }
        },
        {
          "description": "returns something",
          "test": () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnSomething();
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArray();
            }
        },
        {
          "description": "returns an array of strings",
          "test": () => {
              expect(onlyLastLetterOfWords)
                .withArgs(['a', 'ab', 'abc'])
                .toReturnArrayOfType('string');
            }
        },
        {
          "description": "calls the \"array.map\" method",
          "test": () => {
              expect(onlyLastLetterOfWords)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'map');
            }
        },
        {
          "description": "returns the correct value",
          "test": () => {
              expect(
                onlyLastLetterOfWords(['cat', 'wing', 'trot', 'coo']),
              ).toBeSameArrayAs(['t', 'g', 't', 'o']);
              expect(onlyLastLetterOfWords([])).toBeSameArrayAs([]);
            }
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined') module.exports = test;
