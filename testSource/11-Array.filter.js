const test =   {
    id: '11',
    title: 'Array.filter',
    help: 'https://www.w3schools.com/jsref/jsref_filter.asp',
    items: [
    {
      type: 'lesson',
      key: 'lesson-filter',
      title: 'Array.filter()',
      text: `<b>array.filter()</b> returns a <b>new array</b> containing only the items that pass a test.<br><br>

You pass it a function that takes each item and returns <b>true</b> (keep it) or <b>false</b> (remove it).<br><br>

The original array is <b>not modified</b>. The new array may be shorter — or even empty if nothing passes.<br><br>

Think of it like a sieve — only what fits through stays.<br><br>

Try running the code!`,
      sampleCode: `var numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
var evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);   // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] — unchanged

// Keep only words longer than 3 letters
var words = ["cat", "elephant", "dog", "rhinoceros"];
var longWords = words.filter((word) => word.length > 3);
console.log(longWords); // ["elephant", "rhinoceros"]`,
    },
      { type: 'test', key: 'removeOddNumbers',
        title: `function "removeOddNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no odd numbers. Example: removeOddNumbers([1,2,3,4]) returns [2,4]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeOddNumbers).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeOddNumbers).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeOddNumbers).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeOddNumbers).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeOddNumbers).withArgs([1, 2]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeOddNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeOddNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                2, 4, 6,
              ]);
              expect(removeOddNumbers([])).toBeSameArrayAs([]);
              expect(removeOddNumbers([11, 31, 51])).toBeSameArrayAs([]);
              expect(removeOddNumbers([22, 44])).toBeSameArrayAs([22, 44]);
            } }
        ],
      },
      { type: 'test', key: 'removeEvenNumbers',
        title: `function "removeEvenNumbers"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" and return an array with no even numbers. Example: removeEvenNumbers([1,2,3,4]) returns [1,3]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeEvenNumbers).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeEvenNumbers).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeEvenNumbers).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeEvenNumbers).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeEvenNumbers).withArgs([1, 2]).toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeEvenNumbers)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(removeEvenNumbers([1, 2, 3, 4, 5, 6, 7])).toBeSameArrayAs([
                1, 3, 5, 7,
              ]);
              expect(removeEvenNumbers([])).toBeSameArrayAs([]);
              expect(removeEvenNumbers([11, 31, 51])).toBeSameArrayAs([
                11, 31, 51,
              ]);
              expect(removeEvenNumbers([22, 44])).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'removeNumbersLessThan3',
        title: `function "removeNumbersLessThan3"`,
        instructions: `Make a function that takes one argument, an array of numbers. Call "array.filter" to remove numbers less than 3. Example: removeNumbersLessThan3([1,2,3,4]) returns [3,4]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeNumbersLessThan3).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeNumbersLessThan3).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeNumbersLessThan3).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeNumbersLessThan3).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "filter" method`, test: () => {
              expect(removeNumbersLessThan3)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
              expect(
                removeNumbersLessThan3([1, 2, 3, 4, 5, 6, 7]),
              ).toBeSameArrayAs([3, 4, 5, 6, 7]);
              expect(
                removeNumbersLessThan3([1, 1, 2, 2, 1, 2, 1]),
              ).toBeSameArrayAs([]);
              expect(removeNumbersLessThan3([3, 4, 5, 6, 100])).toBeSameArrayAs(
                [3, 4, 5, 6, 100],
              );
            } }
        ],
      },
      { type: 'test', key: 'removeNumbersLessThanX',
        title: `function "removeNumbersLessThanX"`,
        instructions: `Make a function that takes two arguments, an array of numbers and a number. Call "array.filter" to remove numbers less than the 2nd argument. Example: removeNumbersLessThanX([1,2,3,4,5],3) returns [3,4,5]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeNumbersLessThanX).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeNumbersLessThanX).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeNumbersLessThanX).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeNumbersLessThanX).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArray();
            } },
          { description: `returns an array of numbers`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .toReturnArrayOfType('number');
            } },
          { description: `calls the "filter" method`, test: () => {
              expect(removeNumbersLessThanX)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
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
            } }
        ],
      },
      { type: 'test', key: 'removeEmptyStrings',
        title: `function "removeEmptyStrings"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove any empty strings. Example: removeEmptyStrings(["","Phone","Josh"]) returns ["Phone","Josh"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeEmptyStrings).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeEmptyStrings).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeEmptyStrings).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeEmptyStrings).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeEmptyStrings).withArgs(['a', '']).toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeEmptyStrings)
                .withArgs(['a', ''])
                .toReturnArrayOfType('string');
            } },
          { description: `calls "array.filter" method`, test: () => {
              expect(removeEmptyStrings)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
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
            } }
        ],
      },
      { type: 'test', key: 'removeVowelsFromArray',
        title: `function "removeVowelsFromArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a vowel. Example: removeVowelsFromArray(["a","b","c","d","e"]) returns ["b","c","d"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeVowelsFromArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeVowelsFromArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeVowelsFromArray).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeVowelsFromArray).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeVowelsFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
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
            } }
        ],
      },
      { type: 'test', key: 'removeConsonantsInArray',
        title: `function "removeConsonantsInArray"`,
        instructions: `Make a function that takes one argument, an array of strings. Call "array.filter" and remove all strings that are a consonant. Example: removeConsonantsInArray(["a","b","c","d","e"]) returns ["a","e"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeConsonantsInArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeConsonantsInArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeConsonantsInArray).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(removeConsonantsInArray).takesXArguments(1);
            } },
          { description: `returns something`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs(['a', 'z'])
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeConsonantsInArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
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
            } }
        ],
      },
      { type: 'test', key: 'removeWordFromArray',
        title: `function "removeWordFromArray"`,
        instructions: `Make a function that takes two arguments, an array of strings and a word. Call "array.filter" to remove all strings that match the word. Example: removeWordFromArray(["cat","dog","fish"],"fish") returns ["cat","dog"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(removeWordFromArray).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(removeWordFromArray).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(removeWordFromArray).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(removeWordFromArray).takesXArguments(2);
            } },
          { description: `returns something`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnSomething();
            } },
          { description: `returns an array`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArray();
            } },
          { description: `returns an array of strings`, test: () => {
              expect(removeWordFromArray)
                .withArgs(['a', 'b'], 'a')
                .toReturnArrayOfType('string');
            } },
          { description: `calls the "array.filter" method`, test: () => {
              expect(removeWordFromArray)
                .withArgs([1, 2, 3])
                .callsFunction(Array.prototype, 'filter');
            } },
          { description: `returns the correct value`, test: () => {
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
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
