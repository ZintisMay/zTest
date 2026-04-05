const test = {
  id: '8',
  title: 'Array Methods',
  help: 'https://www.w3schools.com/js/js_array_methods.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-what-are-methods',
      title: 'Array Methods',
      text: `Arrays come with built-in functions called <b>methods</b> that let you manipulate them.<br><br>

You call a method using dot notation: <b>array.methodName()</b><br><br>

Some methods <b>modify</b> the original array. Others <b>return a new array</b> and leave the original untouched. It's important to know which is which!<br><br>

Here are a few common ones:<br><br>

<b>push()</b> — adds an item to the end<br>
<b>pop()</b> — removes the last item<br>
<b>reverse()</b> — reverses the order<br>
<b>sort()</b> — sorts the items<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits.push("mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]`,
    },
    {
      type: 'lesson',
      key: 'lesson-sort',
      title: 'Sorting Arrays',
      text: `<b>sort()</b> sorts an array alphabetically by default — which works great for strings, but not for numbers.<br><br>

<b>Why doesn't sort() work for numbers by default?</b><br>
It converts numbers to strings first, so 10 comes before 2 (because "1" comes before "2" alphabetically).<br><br>

To sort numbers correctly, pass a <b>compare function</b> to sort():<br><br>

<b>array.sort((a, b) => a - b)</b> — sorts smallest to biggest<br>
<b>array.sort((a, b) => b - a)</b> — sorts biggest to smallest<br><br>

The compare function returns a negative, zero, or positive number to tell sort() which item comes first.<br><br>

Try running the code and see the difference!`,
      sampleCode: `var letters = ["banana", "apple", "cherry"];
console.log(letters.sort()); // ["apple", "banana", "cherry"]

var numbers = [10, 2, 30, 5];
console.log(numbers.sort());           // wrong: [10, 2, 30, 5]
console.log(numbers.sort((a, b) => a - b)); // correct: [2, 5, 10, 30]`,
    },
    {
      type: 'test',
      key: 'makeArrayOfX',
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
            expect(makeArrayOfX).withArgs(3, 'a').toReturnArrayOfType('string');
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
    {
      type: 'test',
      key: 'reverseArray',
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
    {
      type: 'test',
      key: 'sortLetters',
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
    {
      type: 'test',
      key: 'sortNumbers',
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
            expect(sortNumbers([1, 1000, 2, 2000, 5, 30, 400])).toBeSameArrayAs(
              [1, 2, 5, 30, 400, 1000, 2000],
            );
            expect(sortNumbers([5, 3, 1])).toBeSameArrayAs([1, 3, 5]);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'sortByWordLength',
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
            expect(sortByWordLength).withArgs(['bob', 'bill']).toReturnArray();
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
  ],
};

if (typeof module !== 'undefined') module.exports = test;
