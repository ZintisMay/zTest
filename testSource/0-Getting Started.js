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
      
      Then press CTRL+Enter`,
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
      
      These errors are normal and part of Javascript. Z_Test gives you little tests that check whether your code is written in a certain way. But requires you to have working code. If there is a red error, fix that first, then worry about the tests!<br><br>

      Errors can be cryptic, so do whatever you need to figure it out. Many errors will get caught by the editor! So watch for squiggly lines and tooltips.<br><br>
      
      If you hover over them, often it'll explain how to fix it!
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
  ],
};

if (typeof module !== 'undefined') module.exports = test;
