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

<b>+</b> — addition<br>
<b>-</b> — subtraction<br>
<b>*</b> — multiplication<br>
<b>/</b> — division<br>
<b>%</b> — modulus (the remainder after division)<br>
<b>**</b> — exponent (to the power of)<br><br>

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
      instructions: `Declare a variable "g" and it should be the number equal to 654321 plus 123456`,
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
          description: `is 654321 + 123456`,
          test: () => {
            expect(g).toBe(654321 + 123456);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'minusTests',
      title: `var "h" -`,
      instructions: `Declare a variable "h" and it should be the number equal to 654321 minus 123456`,
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
          description: `is 654321 - 123456`,
          test: () => {
            expect(h).toBe(654321 - 123456);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'multiplyTests',
      title: `var "i" *`,
      instructions: `Declare a variable "i" and it should be the number equal to 654321 times 123456`,
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
          description: `is 654321 * 123456`,
          test: () => {
            expect(i).toBe(654321 * 123456);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'divideTests',
      title: `var "j" /`,
      instructions: `Declare a variable "j" and it should be the number equal to 654321 divided by 123456`,
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
          description: `is 654321 / 123456`,
          test: () => {
            expect(j).toBe(654321 / 123456);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'modulusTests',
      title: `var "k" %`,
      instructions: `Declare a variable "k" and it should be the number equal to 654321 modulus 123456`,
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
          description: `is 654321 % 123456`,
          test: () => {
            expect(k).toBe(654321 % 123456);
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
  ],
};

if (typeof module !== 'undefined') module.exports = test;
