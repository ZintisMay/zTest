zTestSuite = {};
/* 
Total 9 exercises. All functions.

Tests
* is declared
* has a value
* is a function
* takes n arguments
* returns value type t
* returns correct values/does the right thing

===============================================

 zTestSuite.REPLACEME = {
  title: "function REPLACEME",
  tests: [
    {
      description: `REPLACEME is declared`,
      test: () => {
        expect(REPLACEME).toBeDeclared();
      },
    },
    {
      description: `REPLACEME has a value`,
      test: () => {
        expect(REPLACEME).toHaveValue();
      },
    },
    {
      description: `REPLACEME is a function`,
      test: () => {
        expect(REPLACEME).toBeFunction();
      },
    },
    {
      description: `REPLACEME takes two arguments`,
      test: () => {
        expect(REPLACEME).takesXArguments(2);
      },
    },
    {
      description: `REPLACEME returns a number`,
      test: () => {
        expect(REPLACEME).withArgs(1, 1).toReturnNumber();
      },
    },
    {
      description: `REPLACEME returns correct values`,
      test: () => {
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(-1, 1).toReturn(0);
        expect(REPLACEME).withArgs(1000, 234).toReturn(1234);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
        expect(REPLACEME).withArgs(1, 1).toReturn(2);
      },
    },
  ],
};
 */
/*
 * Exercise 1
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns value type string
 * tests: string includes `Hello ${name}!`
 */

zTestSuite.greeting = {
  title: "function greeting",
  tests: [
    {
      description: `greeting is declared`,
      test: () => {
        expect(greeting).toBeDeclared();
      },
    },
    {
      description: `greeting has a value`,
      test: () => {
        expect(greeting).toHaveValue();
      },
    },
    {
      description: `greeting is a function`,
      test: () => {
        expect(greeting).toBeFunction();
      },
    },
    {
      description: `greeting takes one argument`,
      test: () => {
        expect(greeting).takesXArguments(1);
      },
    },
    {
      description: `greeting returns a string`,
      test: () => {
        expect(greeting).withArgs().toReturnString();
      },
    },
    {
      description: `greeting returns correct values`,
      test: () => {
        expect(greeting).withArgs("Barry").toReturn(`Hello Barry!`);
        expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
      },
    },
  ],
};

/*
 * Exercise 2
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns value type bool
 * tests: bool output is accurate. True arguments return bool:true, false arguments return bool:false
 */
zTestSuite.isThisValueTrue = {
  title: "function isThisValueTrue",
  tests: [
    {
      description: `isThisValueTrue is declared`,
      test: () => {
        expect(isThisValueTrue).toBeDeclared();
      },
    },
    {
      description: `isThisValueTrue has a value`,
      test: () => {
        expect(isThisValueTrue).toHaveValue();
      },
    },
    {
      description: `isThisValueTrue is a function`,
      test: () => {
        expect(isThisValueTrue).toBeFunction();
      },
    },
    {
      description: `isThisValueTrue takes one argument`,
      test: () => {
        expect(isThisValueTrue).takesXArguments(1);
      },
    },
    {
      description: `isThisValueTrue returns a boolean`,
      test: () => {
        expect(isThisValueTrue).withArgs().toReturnBoolean();
      },
    },
    // I initially had some concerns about this test. It was a function call, and variable 'val' was not assigned a value. But it seems the below tests work.
    {
      description: `isThisValueTrue returns correct values`,
      test: () => {
        expect(isThisValueTrue).withArgs(true).toReturn(true);
        expect(isThisValueTrue).withArgs(false).toReturn(false);
        expect(isThisValueTrue).withArgs().toReturn(false);
      },
    },
  ],
};
/*
 * Exercise 3
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns value type string
 * returns values "even" or "odd"
 * tests: output is accurate. even cases, odd cases, a clever 0 case.
 */
zTestSuite.isThisNumberEven = {
  title: "function isThisNumberEven",
  tests: [
    {
      description: `isThisNumberEven is declared`,
      test: () => {
        expect(isThisNumberEven).toBeDeclared();
      },
    },
    {
      description: `isThisNumberEven has a value`,
      test: () => {
        expect(isThisNumberEven).toHaveValue();
      },
    },
    {
      description: `isThisNumberEven is a function`,
      test: () => {
        expect(isThisNumberEven).toBeFunction();
      },
    },
    {
      description: `isThisNumberEven takes one argument`,
      test: () => {
        expect(isThisNumberEven).takesXArguments(1);
      },
    },
    {
      description: `isThisNumberEven returns a string`,
      test: () => {
        expect(isThisNumberEven).withArgs(1).toReturnString();
      },
    },
    {
      description: `isThisNumberEven returns correct values`,
      test: () => {
        expect(isThisNumberEven).withArgs(1).toReturn("odd");
        expect(isThisNumberEven).withArgs(2).toReturn("even");
        expect(isThisNumberEven).withArgs(-1).toReturn("odd");
        expect(isThisNumberEven).withArgs(0).toReturn("even");
      },
    },
  ],
};
/*
 * Exercise 4
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns a positive or negative number.
 * tests: input n, output -n. input -n, output n
 */
zTestSuite.makeNumberNegative = {
  title: "function makeNumberNegative",
  tests: [
    {
      description: `makeNumberNegative is declared`,
      test: () => {
        expect(makeNumberNegative).toBeDeclared();
      },
    },
    {
      description: `makeNumberNegative has a value`,
      test: () => {
        expect(makeNumberNegative).toHaveValue();
      },
    },
    {
      description: `makeNumberNegative is a function`,
      test: () => {
        expect(makeNumberNegative).toBeFunction();
      },
    },
    {
      description: `makeNumberNegative takes one argument`,
      test: () => {
        expect(makeNumberNegative).takesXArguments(1);
      },
    },
    {
      description: `makeNumberNegative returns a number`,
      test: () => {
        expect(makeNumberNegative).withArgs(1).toReturnNumber();
      },
    },
    {
      description: `makeNumberNegative returns correct values`,
      test: () => {
        expect(makeNumberNegative).withArgs(1).toReturn(-1);
        expect(makeNumberNegative).withArgs(0).toReturn(0);
        expect(makeNumberNegative).withArgs(-1).toReturn(-1);
      },
    },
  ],
};
/*
 * Exercise 5
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns a string, either "yes" or "no"
 * tests:
 */
zTestSuite.doYouWantCake = {
  title: "function doYouWantCake",
  tests: [
    {
      description: `doYouWantCake is declared`,
      test: () => {
        expect(doYouWantCake).toBeDeclared();
      },
    },
    {
      description: `doYouWantCake has a value`,
      test: () => {
        expect(doYouWantCake).toHaveValue();
      },
    },
    {
      description: `doYouWantCake is a function`,
      test: () => {
        expect(doYouWantCake).toBeFunction();
      },
    },
    {
      description: `doYouWantCake takes one arguments`,
      test: () => {
        expect(doYouWantCake).takesXArguments(1);
      },
    },
    {
      description: `doYouWantCake returns a string`,
      test: () => {
        expect(doYouWantCake).withArgs().toReturnString();
      },
    },
    {
      description: `doYouWantCake returns correct values`,
      test: () => {
        expect(doYouWantCake).withArgs(true).toReturn("yes");
        expect(doYouWantCake).withArgs(false).toReturn("no");
        expect(doYouWantCake).withArgs().toReturn("no");
      },
    },
  ],
};
/*
 * Exercise 6
 *
 * is declared
 * has a value
 * is a function
 * takes one argument
 * returns a number, value of word.length
 * tests:
 */
zTestSuite.wordLength = {
  title: "function wordLength",
  tests: [
    {
      description: `wordLength is declared`,
      test: () => {
        expect(wordLength).toBeDeclared();
      },
    },
    {
      description: `wordLength has a value`,
      test: () => {
        expect(wordLength).toHaveValue();
      },
    },
    {
      description: `wordLength is a function`,
      test: () => {
        expect(wordLength).toBeFunction();
      },
    },
    {
      description: `wordLength takes one argument`,
      test: () => {
        expect(wordLength).takesXArguments(1);
      },
    },
    {
      description: `wordLength returns a number`,
      test: () => {
        expect(wordLength).withArgs("string").toReturnNumber();
      },
    },
    {
      description: `wordLength returns correct values`,
      test: () => {
        expect(wordLength).withArgs("cat").toReturn(3);
        expect(wordLength).withArgs("steep").toReturn(5);
        expect(wordLength).withArgs("").toReturn(0);
      },
    },
  ],
};
/*
 * Exercise 7
 *
 * is declared
 * has a value
 * is a function
 * takes three args
 * returns an object
 * To have object key count (3) ?
 * To have key x
 * tests:
 * Problems here: It seems like keys are treated as properties and not keys or key:value pairs. We seem to have no test for properties.
 */
zTestSuite.carBuilder = {
  title: "function carBuilder",
  tests: [
    {
      description: `carBuilder is declared`,
      test: () => {
        expect(carBuilder).toBeDeclared();
      },
    },
    {
      description: `carBuilder has a value`,
      test: () => {
        expect(carBuilder).toHaveValue();
      },
    },
    {
      description: `carBuilder is a function`,
      test: () => {
        expect(carBuilder).toBeFunction();
      },
    },
    {
      description: `carBuilder takes three arguments`,
      test: () => {
        expect(carBuilder).takesXArguments(3);
      },
    },
    {
      description: `carBuilder returns an object`,
      test: () => {
        expect(carBuilder).withArgs().toReturnObject();
      },
    },
    // The below tests need to be revisited.
    {
      description: `carBuilder returns correct values`,
      test: () => {
        expect(carBuilder).withArgs().toReturn();
        expect(carBuilder).withArgs(-1, 1).toReturn(0);
        expect(carBuilder).withArgs(1000, 234).toReturn(1234);
        expect(carBuilder).withArgs(1, 1).toReturn(2);
        expect(carBuilder).withArgs(1, 1).toReturn(2);
        expect(carBuilder).withArgs(1, 1).toReturn(2);
      },
    },
  ],
};

/*
 * Exercise 8
 *
 * is declared
 * has a value
 * is a function
 * takes 4 args
 * returns an object
 * To have object key count (3) ?
 * To have key x
 * tests:
 */

/*
 * Exercise 9
 *
 * is declared
 * has a value
 * is a function
 * takes 2 args
 * returns a number
 * tests:
 */

Z_T.testAll(zTestSuite);
