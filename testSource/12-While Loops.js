const test = {
  id: '12',
  title: 'While Loops',
  help: 'https://www.w3schools.com/js/js_loop_while.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-while',
      title: 'While Loops',
      text: `A <b>while loop</b> keeps running as long as a condition is true.<br><br>

Unlike a for loop where you know how many times it will run, a while loop is useful when you don't know in advance - you just keep going until something changes.<br><br>

<b>Important:</b> you must change something inside the loop that will eventually make the condition false, otherwise you'll have an <b>infinite loop</b> that freezes the page!<br><br>

Try running the code!`,
      sampleCode: `var i = 1;

while (i <= 5) {
  console.log(i);
  i++; // without this, the loop runs forever!
}

// While loops are great when you don't know how many steps you need
var num = 100;
while (num > 1) {
  num = Math.floor(num / 2);
  console.log(num);
}`,
    },
    {
      type: 'test',
      key: 'countUpTests',
      title: `function "countUp"`,
      instructions: `Make a function named "countUp" that takes one argument, a number. Using a while loop, return an array of numbers counting up from 1 to that number. Example: countUp(5) returns [1, 2, 3, 4, 5]`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(countUp).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(countUp).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(countUp).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(countUp).takesXArguments(1);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(countUp).withArgs(3).toReturnSomething();
          },
        },
        {
          description: `returns an array`,
          test: () => {
            expect(countUp).withArgs(3).toReturnArray();
          },
        },
        {
          description: `uses a while loop`,
          test: () => {
            expectCode().toUseWhileLoop();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(countUp(1)).toBeSameArrayAs([1]);
            expect(countUp(3)).toBeSameArrayAs([1, 2, 3]);
            expect(countUp(5)).toBeSameArrayAs([1, 2, 3, 4, 5]);
            expect(countUp(8)).toBeSameArrayAs([1, 2, 3, 4, 5, 6, 7, 8]);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'countDownTests',
      title: `function "countDown"`,
      instructions: `Make a function named "countDown" that takes one argument, a number. Using a while loop, return an array of numbers counting down from that number to 1. Example: countDown(5) returns [5, 4, 3, 2, 1]`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(countDown).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(countDown).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(countDown).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(countDown).takesXArguments(1);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(countDown).withArgs(3).toReturnSomething();
          },
        },
        {
          description: `returns an array`,
          test: () => {
            expect(countDown).withArgs(3).toReturnArray();
          },
        },
        {
          description: `uses a while loop`,
          test: () => {
            expectCode().toUseWhileLoop();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(countDown(1)).toBeSameArrayAs([1]);
            expect(countDown(3)).toBeSameArrayAs([3, 2, 1]);
            expect(countDown(5)).toBeSameArrayAs([5, 4, 3, 2, 1]);
            expect(countDown(8)).toBeSameArrayAs([8, 7, 6, 5, 4, 3, 2, 1]);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'sumWhileTests',
      title: `function "sumWhile"`,
      instructions: `Make a function named "sumWhile" that takes one argument, a number. Using a while loop, return the sum of all numbers from 1 up to and including that number. Example: sumWhile(5) returns 15 (because 1+2+3+4+5 = 15)`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(sumWhile).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(sumWhile).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(sumWhile).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(sumWhile).takesXArguments(1);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(sumWhile).withArgs(3).toReturnSomething();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(sumWhile).withArgs(3).toReturnNumber();
          },
        },
        {
          description: `uses a while loop`,
          test: () => {
            expectCode().toUseWhileLoop();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(sumWhile(1)).toBe(1);
            expect(sumWhile(3)).toBe(6);
            expect(sumWhile(5)).toBe(15);
            expect(sumWhile(10)).toBe(55);
            expect(sumWhile(100)).toBe(5050);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'repeatStringTests',
      title: `function "repeatString"`,
      instructions: `Make a function named "repeatString" that takes two arguments: a string and a number. Using a while loop, return the string repeated that many times. Example: repeatString("ha", 3) returns "hahaha"`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(repeatString).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(repeatString).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(repeatString).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(repeatString).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(repeatString).withArgs('ha', 3).toReturnSomething();
          },
        },
        {
          description: `returns a string`,
          test: () => {
            expect(repeatString).withArgs('ha', 3).toReturnString();
          },
        },
        {
          description: `uses a while loop`,
          test: () => {
            expectCode().toUseWhileLoop();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(repeatString('ha', 3)).toBe('hahaha');
            expect(repeatString('ab', 1)).toBe('ab');
            expect(repeatString('x', 4)).toBe('xxxx');
            expect(repeatString('na', 8)).toBe('nananananananana');
            expect(repeatString('yo', 0)).toBe('');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'firstOverTests',
      title: `function "firstOver"`,
      instructions: `Make a function named "firstOver" that takes two arguments: an array of numbers and a threshold number. Using a while loop, return the first number in the array that is greater than the threshold. If no number exceeds the threshold, return null. Example: firstOver([1, 5, 3, 8], 4) returns 5`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(firstOver).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(firstOver).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(firstOver).toBeFunction();
          },
        },
        {
          description: `takes two arguments`,
          test: () => {
            expect(firstOver).takesXArguments(2);
          },
        },
        {
          description: `returns something`,
          test: () => {
            expect(firstOver).withArgs([1, 5, 3], 4).toReturnSomething();
          },
        },
        {
          description: `uses a while loop`,
          test: () => {
            expectCode().toUseWhileLoop();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(firstOver([1, 5, 3, 8], 4)).toBe(5);
            expect(firstOver([10, 1, 2], 5)).toBe(10);
            expect(firstOver([1, 2, 3], 10)).toBe(null);
            expect(firstOver([], 0)).toBe(null);
            expect(firstOver([3, 3, 3, 7], 5)).toBe(7);
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
