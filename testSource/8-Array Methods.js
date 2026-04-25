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

You call a method using dot notation: <b>arrayName.methodName( )</b><br><br>

Some methods <b>modify</b> the original array. Others <b>return a new array</b> and leave the original untouched. It's important to know which is which!<br><br>

Here are a few common ones:<br><br>

<ul>
<li><b>push( )</b> - adds an item to the end<br></li>
<li><b>pop( )</b> - removes the last item (and returns it to you)<br></li>
<li><b>reverse( )</b> - reverses the order<br></li>
<li><b>sort( )</b> - sorts the items<br><br></li>
</ul>

There are more, but lets start with these.<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits.push("mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

let oneFruit = fruits.pop( ); // Pulls out the last item
console.log(oneFruit); // mango
console.log(fruits); // ["apple", "banana", "cherry"]

fruits.reverse( ); // Flips the order
console.log(fruits); // ["cherry", "banana", "apple"]

fruits.sort( ); // By default this alphabetizes them
console.log(fruits); // ["apple", "banana", "cherry"]`,
    },

    {
      type: 'test',
      key: 'add3ToArray',
      title: `function "add3ToArray"`,
      instructions: `Create a function called add3ToArray, and inside use push( ) to add "ho" to the array, three times. Then return the array.<br><br>`,
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
          description: `use arr.push( )`,
          test: () => {
            expect(add3ToArray)
              .withArgs(arr, 'ho')
              .callsFunction(Array.prototype, 'push');
          },
        },
        {
          description: `use arr.push( ) three times`,
          test: () => {
            expect(add3ToArray)
              .withArgs(arr, 'ho')
              .callsFunction(Array.prototype, 'push', 3);
          },
        },
        {
          description: `add3ToArray returns something`,
          test: () => {
            expect(add3ToArray).withArgs(arr, 'ho').toReturnSomething();
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
      key: 'popTwice',
      title: `function "popTwice"`,
      instructions: `Make a function that takes an array as an argument.<br><br>

      Use pop( ) twice to remove the last two items from the array, and return the array.<br><br>

      Example: popTwice(['a', 'b', 'c']) returns ['a']`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(popTwice).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(popTwice).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(popTwice).takesXArguments(1);
          },
        },
        {
          description: `uses arr.pop( )`,
          test: () => {
            expect(popTwice)
              .withArgs(['a', 'b', 'c'])
              .callsFunction(Array.prototype, 'pop');
          },
        },
        {
          description: `uses arr.pop( ) twice`,
          test: () => {
            expect(popTwice)
              .withArgs(['a', 'b', 'c'])
              .callsFunction(Array.prototype, 'pop', 2);
          },
        },
        {
          description: `return something`,
          test: () => {
            expect(popTwice).withArgs(['a', 'b', 'c']).toReturnSomething();
          },
        },
        {
          description: `return array`,
          test: () => {
            expect(popTwice).withArgs(['a', 'b', 'c']).toReturnArray();
          },
        },
        {
          description: `returns the remaining array`,
          test: () => {
            expect(popTwice(['a', 'b', 'c'])).toBe(['a']);
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
      
      Example: reverseArray(['a', 'b', 'c']) returns ['c','b','a']`,
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
          description: `calls array.reverse( )`,
          test: () => {
            expect(reverseArray)
              .withArgs([])
              .callsFunction(Array.prototype, 'reverse');
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
              .withArgs(['a', 'b', 'c'])
              .toReturnArrayOfType('string');
          },
        },
        {
          description: `returns the correct result (i.e. ['c', 'b', 'a'] returns ['a', 'b', 'c'])`,
          test: () => {
            expect(reverseArray(['a', 'b', 'c'])).toBeSameArrayAs([
              'c',
              'b',
              'a',
            ]);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'sortArray',
      title: `function "sortArray"`,
      instructions: `Make a function that takes an array of strings as an argument.<br><br>

      Use sort( ) to sort the strings alphabetically, and return the sorted array.<br><br>

      Example: sortArray(['banana', 'apple', 'cherry']) returns ['apple', 'banana', 'cherry']`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(sortArray).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(sortArray).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(sortArray).takesXArguments(1);
          },
        },
        {
          description: `uses arr.sort( )`,
          test: () => {
            expect(sortArray)
              .withArgs(['banana', 'apple', 'cherry'])
              .callsFunction(Array.prototype, 'sort');
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(sortArray).withArgs(['b', 'a']).toReturnSomething();
          },
        },
        {
          description: `returns an array`,
          test: () => {
            expect(sortArray).withArgs(['b', 'a']).toReturnArray();
          },
        },
        {
          description: `returns the correct result (i.e. ['banana', 'apple', 'cherry'] returns ['apple', 'banana', 'cherry'])`,
          test: () => {
            expect(sortArray(['banana', 'apple', 'cherry'])).toBeSameArrayAs([
              'apple',
              'banana',
              'cherry',
            ]);
            expect(sortArray(['z', 'a', 'm'])).toBeSameArrayAs(['a', 'm', 'z']);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-sort',
      title: 'Sorting Arrays (custom)',
      text: `<b>sort( )</b> sorts an array alphabetically by default - which works great for strings, but not for numbers.<br><br>

<b>Why doesn't sort( ) work for numbers by default?</b><br>
It converts numbers to strings first, so 10 comes before 2 (because "1" comes before "2" alphabetically).<br><br>

To sort numbers correctly, pass a <b>compare function to sort( )</b>:<br><br>

<ul>
<b>array.sort( function( a, b ) { return a - b } )</b> - sorts smallest to biggest<br>
<b>array.sort( function( a, b ) { return b - a } )</b> - sorts biggest to smallest
</ul>
<br>

In the above functions, a and b are two items in the array. <b>sort( )</b> goes through the items and compares them to each other, and re-orders them when a value is greater or lesser (that's the a - b and b - a parts)<br><br>

The compare function returns a negative, zero, or positive number to tell sort( ) which item comes first.<br><br>

Try running the code and see the difference!`,
      sampleCode: `var words = ["banana", "apple", "cherry"];
var wordsInOrder = words.sort( );
console.log(wordsInOrder); // ["apple", "banana", "cherry"]

var numbers = [10, 2, 30, 5];

// This is the "normal" sort( ) behavior, doesn't work for numbers
var numbersInWrongOrder = numbers.sort( );
console.log(numbersInWrongOrder); // wrong: [10, 2, 30, 5]

// This is the working sort( ) behavior, which DOES work for numbers
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
      
<ul><b>array.sort( function( a, b ) { return a - b } )</b> - sorts smallest to biggest.</ul><br>

See how we wrote a <b>function</b> inside the <b>sort( )</b>?<br><br>

When we <b>GIVE</b> a function as the parameter to another function, it's referred to as a <b>Callback Function</b>.<br><br>

It's not a formal keyword in JS. It's just how we refer to using a function in that way. (see next lesson)<br><br>
      `,
      sampleCode: `function yell( ) {
  console.log("YELL");
}

function doItThreeTimes(func) {
  func( );
  func( );
  func( );
}

// This one uses a named function: yell
doItThreeTimes(yell);
`,
    },
    {
      type: 'lesson',
      key: 'lesson-anonymous-functions',
      title: 'Anonymous Functions',
      text: `Anonymous functions are usually used as callbacks for other functions. We used them before when declaring object methods.<br><br>

      Lets try a simple (but kind of impractical) example:<br><br>

      <ul><b>function doAnotherFunction( func ){<br><ul>func( );</ul>}</b><br><br></ul>

      Then you would use it like this:<br><br>

      <ul><b>doAnotherFunction( function( ){ } )</b></ul><br>

      In this example, we have a function that takes a function as an argument, and then calls it. What does the func( ) do? Could be anything! All depends on the function you pass in.<br><br>

      <i>(Also, the name "func" doesn't matter. Just like variables, it could be any variable name. If you accidentally pass a non-function as the argument, there'll be an error.)</i><br><br>
      `,
      sampleCode: `function doItThreeTimes(func) {
  func( );
  func( );
  func( );
}

// This uses an "anonymous" function, because we are not declaring it with a name, as usual. But this works when you only need the function once, and as a callback.
doItThreeTimes(function ( ) {
  console.log("scream");
});

// This will throw an error. Since we aren't passing in anything, when it tries to call the "undefined" value as if it was a function, the JS will error out. Since undefined is not a function it cannot be called like a function.
doItThreeTimes( );
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
      
      Return the words in an array from shortest to longest.<br><br>
      
      <i>Remember that you can use ".length" to access the length of a string. ( i.e. word.length )`,
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
    {
      type: 'lesson',
      key: 'lesson-sort-complex',
      title: 'Sorting Arrays (complex)',
      text: `So <b>sort( )</b> can be much more complex than what we've used so far. Especially if you have more complex data.<br><br>
      
      You could, for example, have it sort by word length AND alphabetically, or if you have a more complex data structure (like an object) sort by different values in the object.<br><br>
      
      Here's an example, we have an array of objects that have a name and age, and we're going to sort by age, then name.`,
      sampleCode: `var people = [
  {
    name: "Abby",
    age: 88,
  },
  {
    name: "Zach",
    age: 40,
  },
  {
    name: "Abby",
    age: 40,
  },
  {
    name: "Zach",
    age: 22,
  },
  {
    name: "Megan",
    age: 22,
  },  
  {
    name: "Abby",
    age: 88,
  },
];

people.sort(function (a, b) {

  // This part checks if one has a greater/lesser age
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  }

  // This part checks if one has an earlier/later alphabetical name
  // Note that we do not get to this part of the code UNLESS the ages are the same
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }

  // Lastly, if the ages and names are the same, we return 0 to show they are equal
  return 0;
});

// Notice that the array has been sorted by age first, THEN by name
console.log(people);

`,
    },
    {
      type: 'lesson',
      key: 'lesson-finding',
      title: 'Finding Things in Arrays',
      text: `Sometimes you don't want to transform an array - you just want to <b>look something up</b> in it.<br><br>

Here are four methods for that:<br><br>

<ul>
<li><b>includes(value)</b> - returns <b>true</b> or <b>false</b>: is this value in the array?<br></li>
<li><b>indexOf(value)</b> - returns the <b>index</b> of the value, or <b>-1</b> if not found<br></li>
<li><b>find(fn)</b> - returns the <b>first item</b> that passes your test function, or <b>undefined</b><br></li>
<li><b>findIndex(fn)</b> - same, but returns the <b>index</b> instead of the item<br><br></li>
</ul>

Use <b>includes</b> and <b>indexOf</b> when you're looking for a simple value.<br>
Use <b>find</b> and <b>findIndex</b> when you need to match on a condition.<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry", "mango"];

// includes - just true or false
console.log("includes banana?", fruits.includes("banana")); // true
console.log("includes grape?", fruits.includes("grape")); // false

// indexOf - gives you the position (-1 if not found)
console.log("indexOf cherry:", fruits.indexOf("cherry")); // 2
console.log("indexOf grape:", fruits.indexOf("grape")); // -1

// find - returns the first item that passes the test
var numbers = [4, 9, 2, 7, 5];

var firstBigNumber = numbers.find(function (n) {
  return n > 6;
});
console.log("first Big Number:", firstBigNumber); // 9

// findIndex - returns the index of that item instead
var firstBigIndex = numbers.findIndex(function (n) {
  return n > 6;
});
console.log("first Big Index:", firstBigIndex); // 1

`,
    },
    {
      type: 'test',
      key: 'hasItem',
      title: `function "hasItem"`,
      instructions: `Make a function that takes an array and a value.<br><br>

      Use includes( ) to return true if the value is in the array, false if not.<br><br>

      Example: hasItem(['a', 'b', 'c'], 'b') returns true`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(hasItem).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(hasItem).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(hasItem).takesXArguments(2);
          },
        },
        {
          description: `uses arr.includes( )`,
          test: () => {
            expect(hasItem)
              .withArgs(['a', 'b', 'c'], 'b')
              .callsFunction(Array.prototype, 'includes');
          },
        },
        {
          description: `returns the correct result`,
          test: () => {
            expect(hasItem(['a', 'b', 'c'], 'b')).toBe(true);
            expect(hasItem(['a', 'b', 'c'], 'z')).toBe(false);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'getIndex',
      title: `function "getIndex"`,
      instructions: `Make a function that takes an array and a value.<br><br>

      Use indexOf( ) to return the index of the value in the array. If it's not found, return -1.<br><br>

      Example: getIndex(['a', 'b', 'c'], 'b') returns 1`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(getIndex).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(getIndex).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(getIndex).takesXArguments(2);
          },
        },
        {
          description: `uses arr.indexOf( )`,
          test: () => {
            expect(getIndex)
              .withArgs(['a', 'b', 'c'], 'b')
              .callsFunction(Array.prototype, 'indexOf');
          },
        },
        {
          description: `returns the correct result`,
          test: () => {
            expect(getIndex(['a', 'b', 'c'], 'b')).toBe(1);
            expect(getIndex(['a', 'b', 'c'], 'z')).toBe(-1);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'findOver10',
      title: `function "findOver10"`,
      instructions: `Make a function that takes an array of numbers.<br><br>

      Use find( ) to return the first number that is greater than 10.<br><br>

      Example: findOver10([3, 15, 8, 20]) returns 15`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(findOver10).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(findOver10).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(findOver10).takesXArguments(1);
          },
        },
        {
          description: `uses arr.find( )`,
          test: () => {
            expect(findOver10)
              .withArgs([3, 15, 8, 20])
              .callsFunction(Array.prototype, 'find');
          },
        },
        {
          description: `returns the correct result`,
          test: () => {
            expect(findOver10([3, 15, 8, 20])).toBe(15);
            expect(findOver10([1, 2, 3])).toBe(undefined);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'findIndexOver10',
      title: `function "findIndexOver10"`,
      instructions: `Make a function that takes an array of numbers.<br><br>

      Use findIndex( ) to return the index of the first number greater than 10.<br><br>

      Example: findIndexOver10([3, 15, 8, 20]) returns 1`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(findIndexOver10).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(findIndexOver10).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(findIndexOver10).takesXArguments(1);
          },
        },
        {
          description: `uses arr.findIndex( )`,
          test: () => {
            expect(findIndexOver10)
              .withArgs([3, 15, 8, 20])
              .callsFunction(Array.prototype, 'findIndex');
          },
        },
        {
          description: `returns the correct result`,
          test: () => {
            expect(findIndexOver10([3, 15, 8, 20])).toBe(1);
            expect(findIndexOver10([1, 2, 3])).toBe(-1);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-shift-unshift',
      title: 'shift( ) and unshift( )',
      text: `You already know <b>push( )</b> and <b>pop( )</b> work on the <b>end</b> of an array. <b>shift( )</b> and <b>unshift( )</b> do the same thing but at the <b>beginning</b>.<br><br>

      <i>(I don't know who named them, but that's what they're called!)</i><br><br>

<ul>
<li><b>shift( )</b> - removes the <b>first</b> item and returns it<br></li>
<li><b>unshift(value)</b> - adds a new item to the <b>beginning</b> of the array<br><br></li>
</ul>

Think of it like a queue - <b>shift( )</b> lets the first person leave, <b>unshift( )</b> puts someone at the front of the line.<br><br>

Try running the code!`,
      sampleCode: `var line = ["Alice", "Bob", "Carol"];

var first = line.shift( ); // Removes and returns the first item
console.log(first); // "Alice"
console.log(line);  // ["Bob", "Carol"]

line.unshift("Zara"); // Adds to the beginning
console.log(line);  // ["Zara", "Bob", "Carol"]
`,
    },
    {
      type: 'test',
      key: 'replaceFirst',
      title: `function "replaceFirst"`,
      instructions: `Make a function that takes an array and a new value as arguments.<br><br>

      Use shift( ) to remove the first item, then use unshift( ) to add the new value to the beginning. Return the modified array.<br><br>

      Example: replaceFirst(['a', 'b', 'c'], 'z') returns ['z', 'b', 'c']`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(replaceFirst).toBeDeclared();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(replaceFirst).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(replaceFirst).takesXArguments(2);
          },
        },
        {
          description: `uses arr.shift( )`,
          test: () => {
            expect(replaceFirst)
              .withArgs(['a', 'b', 'c'], 'z')
              .callsFunction(Array.prototype, 'shift');
          },
        },
        {
          description: `uses arr.unshift( )`,
          test: () => {
            expect(replaceFirst)
              .withArgs(['a', 'b', 'c'], 'z')
              .callsFunction(Array.prototype, 'unshift');
          },
        },
        {
          description: `returns the correct result (i.e. replaceFirst(['a', 'b', 'c'], 'z') returns ['z', 'b', 'c'])`,
          test: () => {
            expect(replaceFirst(['a', 'b', 'c'], 'z')).toBeSameArrayAs([
              'z',
              'b',
              'c',
            ]);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-concat',
      title: 'Combining Arrays with concat( )',
      text: `<b>concat( )</b> combines two or more arrays into a <b>new array</b>. It does not modify the originals.<br><br>

      <ul>
<b>array1.concat(array2)</b></ul><br>


You can also chain it to combine more than two:<br><br>

<ul>
<b>array1.concat(array2, array3)</b></ul> <br>

Because it returns a new array, it's one of the safer methods to use - your original data stays untouched.<br><br>

Try running the code!`,
      sampleCode: `var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];

var combined = a.concat(b);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Originals are unchanged
console.log(a); // [1, 2, 3]
console.log(b); // [4, 5, 6]

// Chain to combine three arrays
var all = a.concat(b, c);
console.log(all); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
`,
    },
    {
      type: 'test',
      key: 'combineArrays',
      title: `function "combineArrays"`,
      instructions: `Make a function that takes two arrays as arguments.<br><br>

      Use concat( ) to combine them and return the result.<br><br>

      Example: combineArrays([1, 2], [3, 4]) returns [1, 2, 3, 4]`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(combineArrays).toBeDeclared();
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
          description: `uses arr.concat( )`,
          test: () => {
            expect(combineArrays)
              .withArgs([1, 2], [3, 4])
              .callsFunction(Array.prototype, 'concat');
          },
        },
        {
          description: `returns an array`,
          test: () => {
            expect(combineArrays).withArgs([1, 2], [3, 4]).toReturnArray();
          },
        },
        {
          description: `returns the correct result (i.e. combineArrays([1, 2], [3, 4]) returns [1, 2, 3, 4])`,
          test: () => {
            expect(combineArrays([1, 2], [3, 4])).toBeSameArrayAs([1, 2, 3, 4]);
          },
        },
        {
          description: `returns the correct result (i.e. combineArrays(['a', 'b'], ['c', 'd']) returns ['a', 'b', 'c', 'd'])`,
          test: () => {
            expect(combineArrays(['a', 'b'], ['c', 'd'])).toBeSameArrayAs([
              'a',
              'b',
              'c',
              'd',
            ]);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-slice',
      title: 'Cutting Arrays with slice( )',
      text: `<b>slice( )</b> cuts out a portion of an array and returns it as a <b>new array</b>. The original is not modified.<br><br>

      <ul>
<b>array.slice(start, end)</b> - returns items from start up to (but not including) end<br>
<b>array.slice(start)</b> - returns everything from start to the end of the array</ul><br>


Indices start at 0. You can also use <b>negative numbers</b> to count from the end:<br><br>

<ul>
<b>array.slice(-2)</b> - returns the last 2 items</ul><br>

Try running the code!`,
      sampleCode: `var letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters.slice(0, 2)); // ['a', 'b']  - index 0 and 1
console.log(letters.slice(2));    // ['c', 'd', 'e']  - index 2 to end
console.log(letters.slice(1, 4)); // ['b', 'c', 'd']  - index 1, 2, 3
console.log(letters.slice(-2));   // ['d', 'e']  - last 2 items

// Original is untouched
console.log(letters); // ['a', 'b', 'c', 'd', 'e']
`,
    },
    {
      type: 'test',
      key: 'slicePractice',
      title: `slice( ) practice`,
      instructions: `A variable called <b>letters</b> has been declared for you.<br><br>

      Using slice( ), assign the correct portions to these three variables:<br><br>

      <b>firstTwo</b> - the first 2 letters<br>
      <b>lastTwo</b> - the last 2 letters<br>
      <b>middle</b> - everything except the first and last item`,
      sampleCode: `// Don't modify this!
var letters = ['a', 'b', 'c', 'd', 'e'];

// Assign slices to these variables:
var firstTwo;
var lastTwo;
var middle;`,
      tests: [
        {
          description: `letters is still ['a', 'b', 'c', 'd', 'e'] (reset if red)`,
          test: () => {
            expect(letters).toBeSameArrayAs(['a', 'b', 'c', 'd', 'e']);
          },
        },
        {
          description: `firstTwo is ['a', 'b']`,
          test: () => {
            expect(firstTwo).toBeSameArrayAs(['a', 'b']);
          },
        },
        {
          description: `lastTwo is ['d', 'e']`,
          test: () => {
            expect(lastTwo).toBeSameArrayAs(['d', 'e']);
          },
        },
        {
          description: `middle is ['b', 'c', 'd']`,
          test: () => {
            expect(middle).toBeSameArrayAs(['b', 'c', 'd']);
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
