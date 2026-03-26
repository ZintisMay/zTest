const test = {
  "id": "13",
  "title": "For Loops",
  "help": "https:\u002F\u002Fwww.w3schools.com\u002Fjs\u002Fjs_loop_for.asp",
  "items": [
    {
      "type": "test",
      "key": "countToNTests",
      "title": "function \"countToN\"",
      "instructions": "Make a function named \"countToN\" that takes one argument, a number. Using a for loop, return an array of numbers from 1 up to and including that number. Example: countToN(4) returns [1, 2, 3, 4]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(countToN).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(countToN).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(countToN).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(countToN).takesXArguments(1);
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(countToN).withArgs(3).toReturnArray();
            }
        },
        {
          "description": "uses a for loop",
          "test": () => {
              expectCode().toUseForLoop();
            }
        },
        {
          "description": "returns correct values",
          "test": () => {
              expect(countToN(1)).toBeSameArrayAs([1]);
              expect(countToN(3)).toBeSameArrayAs([1, 2, 3]);
              expect(countToN(5)).toBeSameArrayAs([1, 2, 3, 4, 5]);
              expect(countToN(7)).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "sumArrayTests",
      "title": "function \"sumArray\"",
      "instructions": "Make a function named \"sumArray\" that takes one argument, an array of numbers. Using a for loop, return the sum of all numbers in the array. Example: sumArray([1, 2, 3]) returns 6",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(sumArray).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(sumArray).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(sumArray).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(sumArray).takesXArguments(1);
            }
        },
        {
          "description": "returns a number",
          "test": () => {
              expect(sumArray).withArgs([1, 2]).toReturnNumber();
            }
        },
        {
          "description": "uses a for loop",
          "test": () => {
              expectCode().toUseForLoop();
            }
        },
        {
          "description": "returns correct values",
          "test": () => {
              expect(sumArray([1, 2, 3])).toBe(6);
              expect(sumArray([10, 20, 30])).toBe(60);
              expect(sumArray([0, 0, 0])).toBe(0);
              expect(sumArray([])).toBe(0);
              expect(sumArray([100])).toBe(100);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "doubleAllTests",
      "title": "function \"doubleAll\"",
      "instructions": "Make a function named \"doubleAll\" that takes one argument, an array of numbers. Using a for loop, return a new array where every number has been doubled. Example: doubleAll([1, 2, 3]) returns [2, 4, 6]",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(doubleAll).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(doubleAll).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(doubleAll).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(doubleAll).takesXArguments(1);
            }
        },
        {
          "description": "returns an array",
          "test": () => {
              expect(doubleAll).withArgs([1, 2]).toReturnArray();
            }
        },
        {
          "description": "uses a for loop",
          "test": () => {
              expectCode().toUseForLoop();
            }
        },
        {
          "description": "returns correct values",
          "test": () => {
              expect(doubleAll([1, 2, 3])).toBeSameArrayAs([2, 4, 6]);
              expect(doubleAll([0, 5, 10])).toBeSameArrayAs([0, 10, 20]);
              expect(doubleAll([])).toBeSameArrayAs([]);
              expect(doubleAll([7])).toBeSameArrayAs([14]);
              expect(doubleAll([-3, -1, 0])).toBeSameArrayAs([-6, -2, 0]);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "findMaxTests",
      "title": "function \"findMax\"",
      "instructions": "Make a function named \"findMax\" that takes one argument, an array of numbers. Using a for loop, return the largest number in the array. Example: findMax([3, 1, 7, 2]) returns 7",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(findMax).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(findMax).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(findMax).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(findMax).takesXArguments(1);
            }
        },
        {
          "description": "returns a number",
          "test": () => {
              expect(findMax).withArgs([1, 2]).toReturnNumber();
            }
        },
        {
          "description": "uses a for loop",
          "test": () => {
              expectCode().toUseForLoop();
            }
        },
        {
          "description": "returns correct values",
          "test": () => {
              expect(findMax([3, 1, 7, 2])).toBe(7);
              expect(findMax([1])).toBe(1);
              expect(findMax([-5, -1, -3])).toBe(-1);
              expect(findMax([0, 0, 0])).toBe(0);
              expect(findMax([100, 200, 150])).toBe(200);
            }
        }
      ]
    },
    {
      "type": "test",
      "key": "joinWordsTests",
      "title": "function \"joinWords\"",
      "instructions": "Make a function named \"joinWords\" that takes one argument, an array of strings. Using a for loop, return a single string with all words joined by a space. Example: joinWords([\"hello\", \"world\"]) returns \"hello world\"",
      "tests": [
        {
          "description": "is declared",
          "test": () => {
              expect(joinWords).toBeDeclared();
            }
        },
        {
          "description": "has a value",
          "test": () => {
              expect(joinWords).toHaveValue();
            }
        },
        {
          "description": "is a function",
          "test": () => {
              expect(joinWords).toBeFunction();
            }
        },
        {
          "description": "takes one argument",
          "test": () => {
              expect(joinWords).takesXArguments(1);
            }
        },
        {
          "description": "returns a string",
          "test": () => {
              expect(joinWords).withArgs(['a', 'b']).toReturnString();
            }
        },
        {
          "description": "uses a for loop",
          "test": () => {
              expectCode().toUseForLoop();
            }
        },
        {
          "description": "returns correct values",
          "test": () => {
              expect(joinWords(['hello', 'world'])).toBe('hello world');
              expect(joinWords(['one'])).toBe('one');
              expect(joinWords(['a', 'b', 'c', 'd'])).toBe('a b c d');
              expect(joinWords(['the', 'quick', 'brown', 'fox'])).toBe(
                'the quick brown fox',
              );
            }
        }
      ]
    }
  ]
};
if (typeof module !== 'undefined') module.exports = test;
