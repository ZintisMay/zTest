const test =   {
    id: '9',
    title: 'Loops & Strings',
    help: 'https://www.w3schools.com/js/js_loops.asp',
    items: [
      { type: 'test', key: 'makeXAsterisks',
        title: `function "makeXAsterisks"`,
        instructions: `Make a function that takes one argument, a number. It should return a string with that many asterisks. Example: makeXAsterisks(5) returns "*****"`,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeXAsterisks).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeXAsterisks).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(makeXAsterisks).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(makeXAsterisks).withArgs(3).toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(makeXAsterisks(5)).toBe('*****');
              expect(makeXAsterisks(3)).toBe('***');
              expect(makeXAsterisks(12)).toBe('************');
            } }
        ],
      },
      { type: 'test', key: 'allNumbersUpToX',
        title: `function "allNumbersUpToX"`,
        instructions: `Make a function that takes one argument, a number. It should return an array of every number up to that number, starting at 1. Example: allNumbersUpToX(5) returns [1,2,3,4,5]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(allNumbersUpToX).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(allNumbersUpToX).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(allNumbersUpToX).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnSomething();
            } },
          { description: `returns array`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArray();
            } },
          { description: `returns array of numbers`, test: () => {
              expect(allNumbersUpToX).withArgs(4).toReturnArrayOfType('number');
            } },
          { description: `returns the correct result`, test: () => {
              expect(allNumbersUpToX(8)).toBeSameArrayAs([
                1, 2, 3, 4, 5, 6, 7, 8,
              ]);
              expect(allNumbersUpToX(1)).toBeSameArrayAs([1]);
              expect(allNumbersUpToX(3)).toBeSameArrayAs([1, 2, 3]);
            } }
        ],
      },
      { type: 'test', key: 'makeStringWithXLetterY',
        title: `function "makeStringWithXLetterY"`,
        instructions: `Make a function that takes two arguments, a number and a character. It should return a string with X copies of Y. Example: makeStringWithXLetterY(4, "b") returns "bbbb"`,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeStringWithXLetterY).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeStringWithXLetterY).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(makeStringWithXLetterY).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(makeStringWithXLetterY)
                .withArgs(3, 'b')
                .toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(makeStringWithXLetterY).withArgs(3, 'b').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(makeStringWithXLetterY(5, 'a')).toBe('aaaaa');
              expect(makeStringWithXLetterY(10, 'x')).toBe('xxxxxxxxxx');
              expect(makeStringWithXLetterY(0, 'q')).toBe('');
            } }
        ],
      },
      { type: 'test', key: 'reverseWord',
        title: `function "reverseWord"`,
        instructions: `Make a function that takes one argument, a string. It should return the string in reverse order. Example: reverseWord("cat") returns "tac"`,
        tests: [
          { description: `is declared`, test: () => {
              expect(reverseWord).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(reverseWord).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(reverseWord).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(reverseWord).withArgs('bill').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(reverseWord).withArgs('bill').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(reverseWord('towel')).toBe('lewot');
              expect(reverseWord('aba')).toBe('aba');
              expect(reverseWord('cow')).toBe('woc');
            } }
        ],
      },
      { type: 'test', key: 'removeVowels',
        title: `function "removeVowels"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the vowels removed. Example: removeVowels('opportunity') returns 'pprtnty'`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeVowels).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeVowels).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeVowels).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeVowels).withArgs('ca').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(removeVowels).withArgs('ca').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(removeVowels('behaviour')).toBe('bhvr');
              expect(removeVowels('aeiou')).toBe('');
              expect(removeVowels('bcdfghjklmnpqrstvwxyz')).toBe(
                'bcdfghjklmnpqrstvwxyz',
              );
            } }
        ],
      },
      { type: 'test', key: 'removeConsonants',
        title: `function "removeConsonants"`,
        instructions: `Make a function that takes one argument, a string. It should return a string with the consonants removed. Example: removeConsonants('opportunity') returns 'oouiy'`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeConsonants).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeConsonants).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeConsonants).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeConsonants).withArgs('ab').toReturnSomething();
            } },
          { description: `returns a string`, test: () => {
              expect(removeConsonants).withArgs('ab').toReturnString();
            } },
          { description: `returns the correct result`, test: () => {
              expect(removeConsonants('abcdefghijklmnopqrstuvwxyz')).toBe(
                'aeiou',
              );
              expect(removeConsonants('aeiou')).toBe('aeiou');
              expect(removeConsonants('xyz')).toBe('');
            } }
        ],
      },
      { type: 'test', key: 'removeWordsOfLengthXPlus',
        title: `function "removeWordsOfLengthXPlus"`,
        instructions: `Make a function that takes two arguments, an array of strings and a number. Remove any string as long or longer than the number. Example: removeWordsOfLengthXPlus(["homeland","cat","drop"], 5) returns ["cat","drop"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeWordsOfLengthXPlus).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(removeWordsOfLengthXPlus).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeWordsOfLengthXPlus).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnSomething();
            } },
          { description: `returns array`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArray();
            } },
          { description: `returns array of strings`, test: () => {
              expect(removeWordsOfLengthXPlus)
                .withArgs(['cat'], 5)
                .toReturnArrayOfType('string');
            } },
          { description: `returns the correct result`, test: () => {
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
            } }
        ],
      },
      { type: 'test', key: 'calculateAverage',
        title: `function "calculateAverage"`,
        instructions: `Make a function that takes one argument, an array of numbers. It should return the average of all numbers. Example: calculateAverage([2, 4, 6, 8, 10]) returns 6`,
        tests: [
          { description: `is declared`, test: () => {
              expect(calculateAverage).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(calculateAverage).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(calculateAverage).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnSomething();
            } },
          { description: `returns a number`, test: () => {
              expect(calculateAverage).withArgs([1, 2, 3]).toReturnNumber();
            } },
          { description: `returns the correct result`, test: () => {
              expect(calculateAverage([1, 8, 5, 20, 16])).toBe(10);
              expect(calculateAverage([2])).toBe(2);
              expect(calculateAverage([1, 2])).toBe(1.5);
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
