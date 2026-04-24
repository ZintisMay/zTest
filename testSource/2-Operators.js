const test = {
  id: '2',
  title: 'Operators',
  help: 'https://www.w3schools.com/js/js_operators.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'Operators',
      text: `An operator is a symbol that performs an operation on values.<br><br>

You already know one: the <b>=</b> sign, which assigns a value to a variable.<br><br>

The math operators are:<br><br>

<b>+</b> → addition<br>
<b>-</b> → subtraction<br>
<b>*</b> → multiplication<br>
<b>/</b> → division<br>
<b>%</b> → modulus (the remainder after division)<br>
<b>**</b> → exponent (to the power of)<br><br>

Try running the code!`,
      sampleCode: `console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1 (remainder of 10 / 3)
console.log(2 ** 8);  // 256 (2 to the power of 8)`,
    },
    {
      type: 'lesson',
      key: 'lesson-1',
      title: 'Operators with Variables',
      text: `Operators work just as well with variables as they do with plain numbers.<br><br>

The result of an operation can also be stored in a new variable.<br><br>

Try running the code and see if the output matches what you'd expect!`,
      sampleCode: `var a = 100;
var b = 25;

var sum = a + b;
var difference = a - b;
var product = a * b;
var quotient = a / b;

console.log(sum);        // 125
console.log(difference); // 75
console.log(product);    // 2500
console.log(quotient);   // 4`,
    },
    {
      type: 'test',
      key: 'plusTests',
      title: `var "g" +`,
      instructions: `Declare a variable "g" and it should be the number equal to 54321 plus 12345`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(g).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(g).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(g).toBeNumber();
          },
        },
        {
          description: `uses the + operator`,
          test: () => {
            expectCode().toUseOperator('+');
          },
        },
        {
          description: `is 54321 + 12345`,
          test: () => {
            expect(g).toBe(54321 + 12345);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'minusTests',
      title: `var "h" -`,
      instructions: `Declare a variable "h" and it should be the number equal to 54321 minus 12345`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(h).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(h).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(h).toBeNumber();
          },
        },
        {
          description: `uses the - operator`,
          test: () => {
            expectCode().toUseOperator('-');
          },
        },
        {
          description: `is 54321 - 12345`,
          test: () => {
            expect(h).toBe(54321 - 12345);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'multiplyTests',
      title: `var "i" *`,
      instructions: `Declare a variable "i" and it should be the number equal to 54321 times 12345`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(i).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(i).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(i).toBeNumber();
          },
        },
        {
          description: `uses the * operator`,
          test: () => {
            expectCode().toUseOperator('*');
          },
        },
        {
          description: `is 54321 * 12345`,
          test: () => {
            expect(i).toBe(54321 * 12345);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'divideTests',
      title: `var "j" /`,
      instructions: `Declare a variable "j" and it should be the number equal to 54321 divided by 12345`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(j).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(j).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(j).toBeNumber();
          },
        },
        {
          description: `uses the / operator`,
          test: () => {
            expectCode().toUseOperator('/');
          },
        },
        {
          description: `is 54321 / 12345`,
          test: () => {
            expect(j).toBe(54321 / 12345);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'modulusTests',
      title: `var "k" %`,
      instructions: `Declare a variable "k" and it should be the number equal to 54321 modulus 12345`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(k).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(k).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(k).toBeNumber();
          },
        },
        {
          description: `uses the % operator`,
          test: () => {
            expectCode().toUseOperator('%');
          },
        },
        {
          description: `is 54321 % 12345`,
          test: () => {
            expect(k).toBe(54321 % 12345);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'exponentTests',
      title: `var "l" **`,
      instructions: `Declare a variable "l" and it should be the number equal to 2 to the 20th power`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(l).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(l).toHaveValue();
          },
        },
        {
          description: `is a number`,
          test: () => {
            expect(l).toBeNumber();
          },
        },
        {
          description: `uses the ** operator`,
          test: () => {
            expectCode().toUseOperator('**');
          },
        },
        {
          description: `is 2 ** 20`,
          test: () => {
            expect(l).toBe(2 ** 20);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-3',
      title: 'String Concatenation',
      text: `So those operators are all for math, BUT they also have some other uses.<br><br>
      
      The most common one would be the "+" operator, which ALSO lets you put strings together.<br><br>
      
      Try running the code on the right, take a look at the output.<br><br>
      
      Also notice there is a space being added.<br><br>
      
      (This works with strings but ONLY STRINGS... if you try using "+" with different data types it could have an unexpected result)`,
      sampleCode: `var name1 = "Hudson";
var name2 = "Carter";
console.log(name1 + name2);
console.log(name1 + " " + name2);`,
    },
    {
      type: 'test',
      key: 'concatenationTest',
      title: `String Concatenation`,
      instructions: `There are two variables already declared. Please use "+" to put them together into variable c as "campfire".`,
      sampleCode: `var a = "camp";
var b = "fire";`,
      tests: [
        {
          description: `a is "camp"`,
          test: () => {
            expect(a).toBe('camp');
          },
        },
        {
          description: `b is "fire"`,
          test: () => {
            expect(b).toBe('fire');
          },
        },
        {
          description: `c is declared`,
          test: () => {
            expect(c).toBeDeclared();
          },
        },
        {
          description: `code uses +`,
          test: () => {
            expectCode().toContain('+');
          },
        },
        {
          description: `c is campfire`,
          test: () => {
            expect(c).toBe('campfire');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'concatenation3Test',
      title: `More Concatenation`,
      instructions: `Three variables are declared. Combine the first two into variable "d", and all three into variable "e".`,
      sampleCode: `var a = "sun";
var b = "flow";
var c = "er";`,
      tests: [
        {
          description: `a is "sun"`,
          test: () => {
            expect(a).toBe('sun');
          },
        },
        {
          description: `b is "flow"`,
          test: () => {
            expect(b).toBe('flow');
          },
        },
        {
          description: `c is "er"`,
          test: () => {
            expect(c).toBe('er');
          },
        },
        {
          description: `d is declared`,
          test: () => {
            expect(d).toBeDeclared();
          },
        },
        {
          description: `code uses +`,
          test: () => {
            expectCode().toContain('+');
          },
        },
        {
          description: `d is "sunflow"`,
          test: () => {
            expect(d).toBe('sunflow');
          },
        },
        {
          description: `e is declared`,
          test: () => {
            expect(e).toBeDeclared();
          },
        },
        {
          description: `e is "sunflower"`,
          test: () => {
            expect(e).toBe('sunflower');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'concatSpaceTest',
      title: `Concat with Space`,
      instructions: `Two variables are declared. Use "+" to combine them with a space in between, and store the result in "fullName".`,
      sampleCode: `var firstName = "John";
var lastName = "Smith";`,
      tests: [
        {
          description: `firstName is "John"`,
          test: () => {
            expect(firstName).toBe('John');
          },
        },
        {
          description: `lastName is "Smith"`,
          test: () => {
            expect(lastName).toBe('Smith');
          },
        },
        {
          description: `fullName is declared`,
          test: () => {
            expect(fullName).toBeDeclared();
          },
        },
        {
          description: `code uses +`,
          test: () => {
            expectCode().toContain('+');
          },
        },
        {
          description: `fullName is "John Smith"`,
          test: () => {
            expect(fullName).toBe('John Smith');
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
