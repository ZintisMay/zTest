const test =   {
    id: '2',
    title: 'Operators',
    help: 'https://www.w3schools.com/js/js_operators.asp',
    items: [
      { type: 'test', key: 'plusTests',
        title: `var "g" +`,
        instructions: `Declare a variable "a" and it should be the number equal to 654321 plus 123456`,
        tests: [
          { description: `is declared`, test: () => {
              expect(g).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(g).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(g).toBeNumber();
            } },
          { description: `uses the + operator`, test: () => {
              expectCode().toUseOperator('+');
            } },
          { description: `is 654321 + 123456`, test: () => {
              expect(g).toBe(654321 + 123456);
            } }
        ],
      },
      { type: 'test', key: 'minusTests',
        title: `var "h" -`,
        instructions: `Declare a variable "b" and it should be the number equal to 654321 minus 123456`,
        tests: [
          { description: `is declared`, test: () => {
              expect(h).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(h).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(h).toBeNumber();
            } },
          { description: `uses the - operator`, test: () => {
              expectCode().toUseOperator('-');
            } },
          { description: `is 654321 - 123456`, test: () => {
              expect(h).toBe(654321 - 123456);
            } }
        ],
      },
      { type: 'test', key: 'multiplyTests',
        title: `var "i" *`,
        instructions: `Declare a variable "c" and it should be the number equal to 654321 times 123456`,
        tests: [
          { description: `is declared`, test: () => {
              expect(i).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(i).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(i).toBeNumber();
            } },
          { description: `uses the * operator`, test: () => {
              expectCode().toUseOperator('*');
            } },
          { description: `is 654321 * 123456`, test: () => {
              expect(i).toBe(654321 * 123456);
            } }
        ],
      },
      { type: 'test', key: 'divideTests',
        title: `var "j" /`,
        instructions: `Declare a variable "d" and it should be the number equal to 654321 divided by 123456`,
        tests: [
          { description: `is declared`, test: () => {
              expect(j).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(j).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(j).toBeNumber();
            } },
          { description: `uses the / operator`, test: () => {
              expectCode().toUseOperator('/');
            } },
          { description: `is 654321 / 123456`, test: () => {
              expect(j).toBe(654321 / 123456);
            } }
        ],
      },
      { type: 'test', key: 'modulusTests',
        title: `var "k" %`,
        instructions: `Declare a variable "e" and it should be the number equal to 654321 modulus 123456`,
        tests: [
          { description: `is declared`, test: () => {
              expect(k).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(k).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(k).toBeNumber();
            } },
          { description: `uses the % operator`, test: () => {
              expectCode().toUseOperator('%');
            } },
          { description: `is 654321 % 123456`, test: () => {
              expect(k).toBe(654321 % 123456);
            } }
        ],
      },
      { type: 'test', key: 'exponentTests',
        title: `var "l" **`,
        instructions: `Declare a variable "f" and it should be the number equal to 2 to the 20th power`,
        tests: [
          { description: `is declared`, test: () => {
              expect(l).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(l).toHaveValue();
            } },
          { description: `is a number`, test: () => {
              expect(l).toBeNumber();
            } },
          { description: `uses the ** operator`, test: () => {
              expectCode().toUseOperator('**');
            } },
          { description: `is 2 ** 20`, test: () => {
              expect(l).toBe(2 ** 20);
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
