const test =   {
    id: '15',
    title: 'If Statements',
    help: 'https://www.w3schools.com/js/js_if_else.asp',
    items: [
      { type: 'test', key: 'ifTrueTests',
        title: `if (true)`,
        instructions: `Write an if statement with the condition "true". Inside it, console.log the string "it's true".`,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `if statement has "true" argument`, test: () => {
              expectCode().toUseIfTrue();
            } }
        ],
      },
      { type: 'test', key: 'ifFalseTests',
        title: `if (false)`,
        instructions: `Write an if statement with the condition "false". Inside it, console.log the string "you shouldn't see this". Nothing should appear in the terminal.`,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `has a console.log inside it`, test: () => {
              expectCode().toContain(`console.log(`);
            } },
          { description: `has "you shouldn't see this" as argument for console.log()`, test: () => {
              expectCode().toContain(`console.log("you shouldn't see this")`);
            } },
          { description: `does not log anything`, test: () => {
              expectConsole().notToHaveLogged();
            } }
        ],
      },
      { type: 'test', key: 'ifNotFalseTests',
        title: `if NOT (false)`,
        instructions: `Write an if statement with the condition "!false". Inside it, console.log the string "you should see this!".`,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `if statement has "!" (NOT) before the "false" argument`, test: () => {
              expectCode().toUseIfWithNot();
            } },
          { description: `has a console.log`, test: () => {
              expectCode().toContain(`console.log(`);
            } },
          { description: `has "you should see this" as argument for console.log()`, test: () => {
              expectCode().toContain(`console.log("you should see this")`);
            } },
          { description: `logs "you should see this"`, test: () => {
              expectConsole().toHaveLogged('you should see this');
            } }
        ],
      },
      { type: 'test', key: 'numberComparisonTests',
        title: `number comparison`,
        instructions: `Write if (5 > 3) and inside it console.log the string "five is greater than three".`,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the > operator`, test: () => {
              expectCode().toUseOperator('>');
            } },
          { description: `logs "five is greater than three"`, test: () => {
              expectConsole().toHaveLogged('five is greater than three');
            } }
        ],
      },
      { type: 'test', key: 'variableComparisonTests',
        title: `variable comparison`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 3. Write if (a > b) and inside it console.log the string "five is greater than three".`,
        tests: [
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 3`, test: () => {
              expect(b).toBe(3);
            } },
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the > operator`, test: () => {
              expectCode().toUseOperator('>');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `logs "five is greater than three"`, test: () => {
              expectConsole().toHaveLogged('five is greater than three');
            } }
        ],
      },
      { type: 'test', key: 'equalsComparisonTests',
        title: `equals ==`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 5. Write if (a == b) and inside it console.log the string "a and b are equal".`,
        tests: [
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the == operator`, test: () => {
              expectCode().toUseOperator('==');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 5`, test: () => {
              expect(b).toBe(5);
            } },
          { description: `logs "a and b are equal"`, test: () => {
              expectConsole().toHaveLogged('a and b are equal');
            } }
        ],
      },
      { type: 'test', key: 'notEqualsComparisonTests',
        title: `not equals !=`,
        instructions: `Declare a variable "a" set to 5 and a variable "b" set to 3. Write if (a != b) and inside it console.log the string "a and b are not equal".`,
        tests: [
          { description: `"a" is 5`, test: () => {
              expect(a).toBe(5);
            } },
          { description: `"b" is 3`, test: () => {
              expect(b).toBe(3);
            } },
          { description: `uses an if statement`, test: () => {
              expectCode().toUseIfStatement();
            } },
          { description: `uses the != operator`, test: () => {
              expectCode().toUseOperator('!=');
            } },
          { description: `uses "a" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('a');
            } },
          { description: `uses "b" in the if condition`, test: () => {
              expectCode().toUseVariableInIfCondition('b');
            } },
          { description: `logs "a and b are not equal"`, test: () => {
              expectConsole().toHaveLogged('a and b are not equal');
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
