const test =   {
    id: '14',
    title: 'For...Of Loops',
    help: 'https://www.w3schools.com/js/js_loop_forof.asp',
    items: [
    {
      type: 'lesson',
      key: 'lesson-for-of',
      title: 'For...Of Loops',
      text: `A <b>for...of</b> loop is a cleaner way to loop over arrays and strings.<br><br>

Instead of tracking an index with <b>i</b>, you get each item directly:<br><br>

<b>for (var item of array)</b><br><br>

This is simpler than a regular for loop when you don't need the index — you just care about the values.<br><br>

It works on strings too — each iteration gives you one character.<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

for (var fruit of fruits) {
  console.log(fruit);
}
// "apple"
// "banana"
// "cherry"

// Also works on strings
for (var char of "hello") {
  console.log(char);
}`,
    },
      { type: 'test', key: 'getCharsTests',
        title: `function "getChars"`,
        instructions: `Make a function named "getChars" that takes one argument, a string. Using a for...of loop, return an array containing each character of the string. Example: getChars("hi") returns ["h", "i"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(getChars).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(getChars).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(getChars).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(getChars).withArgs('hi').toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(getChars('hi')).toBeSameArrayAs(['h', 'i']);
              expect(getChars('abc')).toBeSameArrayAs(['a', 'b', 'c']);
              expect(getChars('z')).toBeSameArrayAs(['z']);
              expect(getChars('')).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'shoutTests',
        title: `function "shout"`,
        instructions: `Make a function named "shout" that takes one argument, a string. Using a for...of loop, return an array of each character uppercased. Example: shout("hi") returns ["H", "I"]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(shout).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(shout).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(shout).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(shout).withArgs('hi').toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(shout('hi')).toBeSameArrayAs(['H', 'I']);
              expect(shout('abc')).toBeSameArrayAs(['A', 'B', 'C']);
              expect(shout('z')).toBeSameArrayAs(['Z']);
              expect(shout('')).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'totalTests',
        title: `function "total"`,
        instructions: `Make a function named "total" that takes one argument, an array of numbers. Using a for...of loop, return the sum of all the numbers. Example: total([1, 2, 3]) returns 6`,
        tests: [
          { description: `is declared`, test: () => {
              expect(total).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(total).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(total).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(total).withArgs([1, 2]).toReturnNumber();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(total([1, 2, 3])).toBe(6);
              expect(total([10, 20, 30])).toBe(60);
              expect(total([0])).toBe(0);
              expect(total([])).toBe(0);
              expect(total([100, 1])).toBe(101);
            } }
        ],
      },
      { type: 'test', key: 'addOneTests',
        title: `function "addOne"`,
        instructions: `Make a function named "addOne" that takes one argument, an array of numbers. Using a for...of loop, return a new array with 1 added to each number. Example: addOne([1, 2, 3]) returns [2, 3, 4]`,
        tests: [
          { description: `is declared`, test: () => {
              expect(addOne).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(addOne).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(addOne).takesXArguments(1);
            } },
          { description: `returns an array`, test: () => {
              expect(addOne).withArgs([1, 2]).toReturnArray();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(addOne([1, 2, 3])).toBeSameArrayAs([2, 3, 4]);
              expect(addOne([0, 0, 0])).toBeSameArrayAs([1, 1, 1]);
              expect(addOne([9])).toBeSameArrayAs([10]);
              expect(addOne([])).toBeSameArrayAs([]);
            } }
        ],
      },
      { type: 'test', key: 'makeStringTests',
        title: `function "makeString"`,
        instructions: `Make a function named "makeString" that takes one argument, an array of strings. Using a for...of loop, return a single string with all items concatenated together. Example: makeString(["hello", " ", "world"]) returns "hello world"`,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeString).toBeDeclared();
            } },
          { description: `is a function`, test: () => {
              expect(makeString).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(makeString).takesXArguments(1);
            } },
          { description: `returns a string`, test: () => {
              expect(makeString).withArgs(['a', 'b']).toReturnString();
            } },
          { description: `uses a for...of loop`, test: () => {
              expectCode().toUseForOfLoop();
            } },
          { description: `returns correct values`, test: () => {
              expect(makeString(['hello', ' ', 'world'])).toBe('hello world');
              expect(makeString(['a', 'b', 'c'])).toBe('abc');
              expect(makeString(['one'])).toBe('one');
              expect(makeString([])).toBe('');
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
