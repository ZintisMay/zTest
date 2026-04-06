const test = {
  id: '7',
  title: 'Arrays',
  help: 'https://www.w3schools.com/js/js_arrays.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-what-is-array',
      title: 'What is an Array?',
      text: `An array is an ordered list of values stored under one variable.<br><br>

Instead of making separate variables for each item, you can put them all in one array.<br><br>

Arrays are declared with square brackets <b>[ ]</b>. Values inside are separated by commas.<br><br>

Array values can be any type. Such as numbers, strings, booleans, objects, even other arrays.<br><br>

Try running the code!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

console.log(fruits);`,
    },

    {
      type: 'test',
      key: 'emptyArray',
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
    {
      type: 'test',
      key: 'varSimpleArrayTests',
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
    {
      type: 'test',
      key: 'varFavoriteFoodsTest',
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
    {
      type: 'test',
      key: 'bigNumbers',
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
    {
      type: 'test',
      key: 'arrayOf10',
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
    {
      type: 'test',
      key: 'arrayOfBooleans',
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
    {
      type: 'lesson',
      key: 'lesson-indexes',
      title: 'Indexes',
      text: `Each item in an array has a position called an <b>index</b>.<br><br>

Arrays are <b>zero-indexed</b> so the first item is at index <b>0</b>, the second at index <b>1</b>, and so on.<br><br>

You access items using square brackets: <b>array[index]</b><br><br>

The <b>length</b> property tells you how many items are in the array: <b>array.length</b><br><br>

Try running the code and check the output!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "cherry"

console.log(fruits.length);  // 3`,
    },
    {
      type: 'test',
      key: 'accessArrayItems',
      title: `Access Array Items`,
      instructions: `Here's an array.<br><br>
      I want you to store the 2nd item in the array inside variable "a", and the 4th item inside variable "b".<br><br>
      Then console.log the 3rd and 5th items.<br><br>
      (remember arrays start counting from zero!)`,
      sampleCode: `var arr = ['New York', 'Paris', 'London', 'Beijing', 'Mumbai'];`,
      tests: [
        {
          description: `arr is already declared for you (reset if red)`,
          test: () => {
            expect(arr).toHaveValue([
              'New York',
              'Paris',
              'London',
              'Beijing',
              'Mumbai',
            ]);
          },
        },
        {
          description: `var a is the 2nd item of the array`,
          test: () => {
            expect(a).toBe('Paris');
          },
        },
        {
          description: `var b is the 4th item of the array`,
          test: () => {
            expect(b).toBe('Beijing');
          },
        },

        {
          description: `console.log the 3rd item of the array`,
          test: () => {
            expectConsole().toHaveLogged('London');
          },
        },

        {
          description: `console.log the 5rd item of the array`,
          test: () => {
            expectConsole().toHaveLogged('Mumbai');
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-array-changes',
      title: 'Changing Index',
      text: `Just like with objects, you can change the values in an array using <b>"="</b>.

Try running the code and check the output!`,
      sampleCode: `var fruits = ["apple", "banana", "cherry"];

fruits[0] = "watermelon";
fruits[1] = "kiwi";
fruits[2] = "tomato";

console.log(fruits[0]);  // "watermelon"
console.log(fruits[1]);  // "kiwi"
console.log(fruits[2]);  // "tomato"

console.log(fruits.length);  // 3`,
    },
    {
      type: 'test',
      key: 'changeArrayItems',
      title: `Change Array Items`,
      instructions: `Here's an array.<br><br>
      I want you to, by hand, change the values so that the numbers are in order.<br><br>
      (remember arrays start counting from zero!)`,
      sampleCode: `var arr = [1, 4, 2, 3, 5];`,
      tests: [
        {
          description: `arr is an array`,
          test: () => {
            expect(arr).toBeArray();
          },
        },
        {
          description: `arr[0] is 1`,
          test: () => {
            expect(arr[0]).toBe(1);
          },
        },
        {
          description: `arr[1] is 2`,
          test: () => {
            expect(arr[1]).toBe(2);
          },
        },
        {
          description: `arr[2] is 3`,
          test: () => {
            expect(arr[2]).toBe(3);
          },
        },
        {
          description: `arr[3] is 4`,
          test: () => {
            expect(arr[3]).toBe(4);
          },
        },
        {
          description: `arr[4] is 5`,
          test: () => {
            expect(arr[4]).toBe(5);
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
