const test = {
  id: '0',
  title: 'Getting Started',
  help: 'https://www.w3schools.com/js',
  items: [
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'Z_Test',
      text: `Z_Test is a free and open source teaching tool for Javascript students.<br><br>
      
      The goal is to <b>LEARN</b>.<br><br>
      
      So if you get confused, or stuck, <b>go look it up!</b> Google! Forums! AI!<br><br>
      
      An important part of programming is being able to <b>figure things out</b>. So do whatever you need to do in order to figure it out, and make sure you learn something along the way.<br><br>
      
      <b>If you use AI to help, DO NOT COPY/PASTE</b>. Have it explain to you the topic, and then you write out the suggestion by hand to help you remember. <b>LEARNING</b> is the goal, not finishing.<br><br>

      Z_Test lessons are <b>SHORT</b>. For some they will be enough to understand a topic. But for others, you may need more! Go look up a tutorial, an article, etc...<br><br>

      Z_Test lessons are <b>aimed at beginners</b>. So a LOT of nuance and detail are skipped in favor of building out your understanding. This material is NOT comprehensive.<br><br>

      If you can complete Z_Test quickly and easily, you are no longer a beginner!
      `,
      sampleCode: ``,
    },
    {
      type: 'lesson',
      key: 'lesson-1',
      title: 'Z_Test Flow',
      text: `Z_Test is a series of sections, like this one.<br><br>

      There will be lesson blocks that explain something, and give you some code to tinker with.<br><br>

      There will be test blocks that give you a little challenge. There will be instructions, some tests to pass, and you need to write in the code section to pass the tests.<br><br>

      The instructions will help guide you towards the answer. But there will often be more than one working answer!<br><br>
      `,
      sampleCode: `// I'm a comment!
var sampleCode;`,
    },
    {
      type: 'test',
      key: 'firstTest',
      title: `Passing A Test`,
      instructions: `Write this exactly in the code area:<br><br>
      
      var x = "@";<br><br>
      
      Then press CTRL+ENTER.<br><br>
      
      If you passed the tests, you can press CTRL+SHIFT+ENTER to go to the next panel.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(x).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(x).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(x).toBeString();
          },
        },
        {
          description: `is @`,
          test: () => {
            expect(x).toBe('@');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'secondTest',
      title: `Failing A Test`,
      instructions: `Write this exactly in the code area:<br><br>
      
      var x;<br><br>
      
      Then press CTRL+ENTER<br><br>
      
      You'll see that only one test passed. You declared the variable but didn't give it a value.<br><br>
      
      Try completing it:<br><br>
      
      var x = "@";<br><br>
      
      Then press CTRL+SHIFT+ENTER`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(x).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(x).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(x).toBeString();
          },
        },
        {
          description: `is @`,
          test: () => {
            expect(x).toBe('@');
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'thirdTest',
      title: `Errors`,
      instructions: `Try it without quotes:<br><br>
      
      var x = @;<br><br>
      
      Then press CTRL+ENTER<br><br>
      
      You'll see there's an error in the terminal. Red errors like this cause the code to stop running, and need to be fixed. 

      The @ symbol doesn't get processed by Javascript. Try adding quotes around it like this "@"<br><br>
      
      These errors are normal and part of Javascript. Z_Test gives you little tests that check whether your code is written in a certain way. But it requires you to have working code. If there is a red error, fix that first, then worry about the tests!<br><br>

      Errors can be cryptic, so do whatever you need to figure it out (google, ai, etc...). Many errors will get caught by the editor! So watch for squiggly lines and tooltips.<br><br>
      
      If you hover over them, often it'll explain how to fix it!<br><br>

      (Fix this one by putting quotes (") around the "@" character)
      `,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(x).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(x).toHaveValue();
          },
        },
        {
          description: `is a string`,
          test: () => {
            expect(x).toBeString();
          },
        },
        {
          description: `is @`,
          test: () => {
            expect(x).toBe('@');
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'console.log()',
      text: `You're going to see a lot of console.log(), and when writing code, you'll use this to peek at values.<br><br>
console.log("Hi there") outputs it into the "terminal".<br><br>
Give it a try!
`,
      sampleCode: `console.log("Hi there");
console.log(3);
console.log(true);

// Try running the code with CTRL+ENTER
// You'll see the output below in the Terminal`,
    },
    {
      type: 'test',
      key: 'consoleLogTest',
      title: `console.log`,
      sampleCode: `console.log(1);`,
      instructions: `Use console.log three times to log the numbers 1, 2, and 3.<br><br>
      The editor already has some sample code for you, try pressing CTRL+ENTER<br><br>

      Now repeat this for the numbers 2 and 3.
      `,
      tests: [
        {
          description: `console.log is called`,
          test: () => {
            expectConsole().toHaveLoggedAnything();
          },
        },
        {
          description: `1 is logged`,
          test: () => {
            expectConsole().toHaveLogged(1);
          },
        },
        {
          description: `2 is logged`,
          test: () => {
            expectConsole().toHaveLogged(2);
          },
        },
        {
          description: `3 is logged`,
          test: () => {
            expectConsole().toHaveLogged(3);
          },
        },
        {
          description: `console.log is called 3 times`,
          test: () => {
            expectConsole().toHaveLoggedXTimes(3);
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
