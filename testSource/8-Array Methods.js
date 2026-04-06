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

<ul>
<li><b>push()</b> - adds an item to the end<br></li>
<li><b>pop()</b> - removes the last item (and returns it to you)<br></li>
<li><b>reverse()</b> - reverses the order<br></li>
<li><b>sort()</b> - sorts the items<br><br></li>
</ul>

There are more, but lets start with these.<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits.push("mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

let oneFruit = fruits.pop(); // Pulls out the last item
console.log(oneFruit); // mango
console.log(fruits); // ["apple", "banana", "cherry"]

fruits.reverse(); // Flips the order
console.log(fruits); // ["cherry", "banana", "apple"]

fruits.sort(); // By default this alphabetizes them
console.log(fruits); // ["apple", "banana", "cherry"]`,
    },

    {
      type: 'test',
      key: 'add3ToArray',
      title: `function "add3ToArray"`,
      instructions: `Create a function called add3ToArray, and inside use push() to add "ho" to the array, three times. Then return the array.<br><br>`,
      sampleCode: `// Don't need to touch this!
var arr = ["santa", "says"];

function add3ToArray(arr, str){
  // Write your code in here!
}`,
      tests: [
        {
          description: `arr is ["santa", "says"] (reset if red)`,
          test: () => {
            expect(arr).toBe(['santa', 'says']);
          },
        },
        {
          description: `add3ToArray is a function (reset if red)`,
          test: () => {
            expect(add3ToArray).toBeFunction();
          },
        },
        {
          description: `use arr.push()`,
          test: () => {
            expect(add3ToArray)
              .withArgs(arr, 'ho')
              .callsFunction(Array.prototype, 'push');
          },
        },
        {
          description: `add3ToArray returns an array`,
          test: () => {
            expect(add3ToArray).withArgs(arr, 'ho').toReturnArray();
          },
        },
        {
          description: `returns ['santa', 'says', 'ho', 'ho', 'ho']`,
          test: () => {
            arr = ['santa', 'says'];
            expect(add3ToArray)
              .withArgs(arr, 'ho')
              .toReturn(['santa', 'says', 'ho', 'ho', 'ho']);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'reverseArray',
      title: `function "reverseArray"`,
      instructions: `Make a function that takes an array as an argument.<br><br>
      
      It should return the array in reverse order.<br><br>
      
      Example: reverseArray(['d', 'e', 'f']) returns ['f','e','d']`,
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
      type: 'lesson',
      key: 'lesson-sort',
      title: 'Sorting Arrays',
      text: `<b>sort()</b> sorts an array alphabetically by default - which works great for strings, but not for numbers.<br><br>

<b>Why doesn't sort() work for numbers by default?</b><br>
It converts numbers to strings first, so 10 comes before 2 (because "1" comes before "2" alphabetically).<br><br>

To sort numbers correctly, pass a <b>compare function</b> to sort():<br><br>

<b>array.sort(function(a, b) {return a - b})</b> - sorts smallest to biggest<br>
<b>array.sort(function(a, b) {return b - a})</b> - sorts biggest to smallest<br><br>

The compare function returns a negative, zero, or positive number to tell sort() which item comes first.<br><br>

Try running the code and see the difference!`,
      sampleCode: `var words = ["banana", "apple", "cherry"];
var wordsInOrder = words.sort();
console.log(wordsInOrder); // ["apple", "banana", "cherry"]

var numbers = [10, 2, 30, 5];

var numbersInWrongOrder = numbers.sort();
console.log(numbersInWrongOrder); // wrong: [10, 2, 30, 5]

var numbersInRightOrder = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbersInRightOrder); // correct: [2, 5, 10, 30]

`,
    },
    {
      type: 'lesson',
      key: 'lesson-callbacks',
      title: 'Callback Functions',
      text: `So that last lesson had something new we hadn't seen before:<br><br>
      
      <b>array.sort(function(a, b) {return a - b})</b> - sorts smallest to biggest.<br><br>

See how we wrote a function inside the sort( )?<br><br>

When we <b>GIVE</b> a function as the parameter to another function, it's referred to as a <b>Callback Function</b>.<br><br>

It's not a formal keyword in JS. It's just how we refer to using a function in that way. (see next lesson)<br><br>
      `,
      sampleCode: `function yell() {
  console.log("YELL");
}

function doItThreeTimes(func) {
  func();
  func();
  func();
}

// This one uses a named function: yell
doItThreeTimes(yell);
`,
    },
    {
      type: 'lesson',
      key: 'lesson-anonymous-functions',
      title: 'Anonymous Functions',
      text: `Anonymous functions are usually used as callbacks for other functions. You can also use them as the value of an object.<br><br>

      Lets try a simple (but kind of impractical) example:<br><br>

      <ul><b>function doAnotherFunction(func){<br><ul>func();</ul>}</b><br><br></ul>

      Then you would use it like this:<br><br>

      <ul><b>doAnotherFunction( function(){} )</b></ul><br>

      In this example, we have a function that takes a function as an argument, and then calls it. What does the func() do? Could be anything! All depends on the function you pass in.<br><br>

      <i>(Also, the name "func" doesn't matter. Just like variables, it could be any variable name. If you accidentally pass a non-function as the argument, there'll be an error.)</i><br><br>
      `,
      sampleCode: `function doItThreeTimes(func) {
  func();
  func();
  func();
}

// This uses an "anonymous" function, because we are not declaring it with a name, as usual. But this works when you only need the function once, and as a callback.
doItThreeTimes(function () {
  console.log("scream");
});
`,
    },
    {
      type: 'test',
      key: 'sortLetters',
      title: `function "sortLetters"`,
      instructions: `Make a function that takes one argument, an array of letters.<br><br>
      
      It should return the array of letters in alphabetical order.`,
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
      instructions: `Make a function that takes one argument, an array of numbers.<br><br>
      
      It should return the numbers from smallest to largest.`,
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
      instructions: `Make a function that takes one argument, an array of words.<br><br>
      
      Return the words in an array from shortest to longest.`,
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
