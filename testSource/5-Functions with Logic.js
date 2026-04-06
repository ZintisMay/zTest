const test = {
  id: '5',
  title: 'Logic',
  help: 'https://www.w3schools.com/js/js_conditionals.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-0',
      title: 'If Statements',
      text: `An <b>if statement</b> runs a block of code only when a condition is true.<br><br>

The condition goes inside the <b>( )</b>. If it's true, the code inside <b>{ }</b> runs. If not, it's skipped.<br><br>

Try running the code and changing true to false!`,
      sampleCode: `if (true) {
  console.log("You passed!");
}`,
    },
    {
      type: 'test',
      key: 'writeAnIfStatement',
      title: `Write an if statement`,
      instructions: `Write an if statement with <b>true</b> as the condition. Inside, use console.log() to print "banana".`,
      tests: [
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `uses if (true)`,
          test: () => {
            expectCode().toUseIfTrue();
          },
        },
        {
          description: `console.log something`,
          test: () => {
            expectConsole().toHaveLoggedAnything();
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'writeAnIfStatementFalse',
      title: `Write an if statement (false)`,
      instructions: `Write an if statement with <b>false</b> as the condition. Inside, use console.log() to print anything you like. Notice that it doesn't run!`,
      tests: [
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `uses if (false)`,
          test: () => {
            expectCode().toUseIfFalse();
          },
        },
        {
          description: `console.log nothing`,
          test: () => {
            expectConsole().notToHaveLogged();
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-0a',
      title: 'Else Statements',
      text: `You can add an <b>else</b> block after an <b>if</b> block to run code when the prior conditions are NOT met.<br><br>

Try running the code and changing true to false!`,
      sampleCode: `if (true) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}`,
    },
    {
      type: 'test',
      key: 'ifTrueWithElse',
      title: `if (true) with else`,
      instructions: `Write an if statement with <b>true</b> as the condition, and an <b>else</b> block. Put a console.log() inside the if block.`,
      tests: [
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `uses if (true)`,
          test: () => {
            expectCode().toUseIfTrue();
          },
        },
        {
          description: `uses an else block`,
          test: () => {
            expectCode().toContain('else');
          },
        },
        {
          description: `logs something`,
          test: () => {
            expectConsole().toHaveLoggedAnything();
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'ifFalseWithElse',
      title: `if (false) with else`,
      instructions: `Write an if statement with <b>false</b> as the condition, and an <b>else</b> block. Put a console.log() inside the false block only.`,
      tests: [
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `uses if (false)`,
          test: () => {
            expectCode().toUseIfFalse();
          },
        },
        {
          description: `uses an else block`,
          test: () => {
            expectCode().toContain('else');
          },
        },
        {
          description: `logs something`,
          test: () => {
            expectConsole().toHaveLoggedAnything();
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-0b',
      title: 'Else If Statements',
      text: `You can combine the two to create an <b>"Else If( ){ }"</b> statement.<br><br>

Just keep in mind:<br><br>

<ul>
<li>The first one is always just "if".</li>
<li>The later ones are "Else If".</li>
<li>If you want to catch all other possibilities, then put an "else" statement at the end.</li>
</ul><br>

When you write these, you'll have to think about what kinds of values you'll see, and what you want the outcome to be.<br><br>

Try running the code!`,
      sampleCode: `
var a = 101;

// This one is check first
if (a > 1000) {
  // This won't fire, b/c a is NOT greater than 1000
  console.log("Huge Number");
} else if (a > 100){
  // This one WILL fire
  console.log("Big Number");
} else {
  // b/c the prior one fired, this one won't.
  console.log("Small Number");
}`,
    },
    {
      type: 'lesson',
      key: 'lesson-0c',
      title: 'The ! Operator',
      text: `The <b>!</b> operator means <b>not</b>. It flips a truthy value to false, and a falsy value to true.<br><br>

It goes right before the value or condition you want to flip.<br><br>

You'll use <b>!</b> a lot when writing if statements as it lets you check for the opposite of something.<br><br>

Try running the code!`,
      sampleCode: `console.log("true and not true");
console.log(true);  // true
console.log(!true);  // false
console.log("false and not false");
console.log(false); // false
console.log(!false); // true

var isRaining = false;

if (!isRaining) {
  console.log("Go outside!");
} else {
  console.log("Stay inside.");
}`,
    },
    {
      type: 'test',
      key: 'isThisValueTrue',
      title: `function isThisValueTrue`,
      instructions: `Make a function named "isThisValueTrue" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise. Use an if statement.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(isThisValueTrue).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(isThisValueTrue).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(isThisValueTrue).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(isThisValueTrue).takesXArguments(1);
          },
        },
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `returns a boolean`,
          test: () => {
            expect(isThisValueTrue).withArgs().toReturnBoolean();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(isThisValueTrue).withArgs(true).toReturn(true);
            expect(isThisValueTrue).withArgs(false).toReturn(false);
            expect(isThisValueTrue).withArgs().toReturn(false);
          },
        },
      ],
    },
    // {
    //   type: 'test',
    //   key: 'isThisNumberEven',
    //   title: `function isThisNumberEven`,
    //   instructions: `Make a function named "isThisNumberEven" that takes one argument, a number. It should return true if the number is even, and false if odd.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(isThisNumberEven).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(isThisNumberEven).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(isThisNumberEven).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes one argument`,
    //       test: () => {
    //         expect(isThisNumberEven).takesXArguments(1);
    //       },
    //     },
    //     {
    //       description: `returns a boolean`,
    //       test: () => {
    //         expect(isThisNumberEven).toReturnBoolean();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(isThisNumberEven).withArgs(1).toReturn(false);
    //         expect(isThisNumberEven).withArgs(2).toReturn(true);
    //         expect(isThisNumberEven).withArgs(-1).toReturn(false);
    //         expect(isThisNumberEven).withArgs(0).toReturn(true);
    //       },
    //     },
    //   ],
    // },
    {
      type: 'test',
      key: 'makeNumberNegative',
      title: `function makeNumberNegative`,
      instructions: `Make a function named "makeNumberNegative" that takes one argument, a number. If it's negative, just return it. If it's positive, return it as a negative number.`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(makeNumberNegative).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(makeNumberNegative).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(makeNumberNegative).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(makeNumberNegative).takesXArguments(1);
          },
        },
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `returns a number`,
          test: () => {
            expect(makeNumberNegative).withArgs(1).toReturnNumber();
          },
        },
        {
          description: `returns negative number when given positive number`,
          test: () => {
            expect(makeNumberNegative).withArgs(1).toReturn(-1);
          },
        },
        {
          description: `returns negative number when given negative number`,
          test: () => {
            expect(makeNumberNegative).withArgs(-1).toReturn(-1);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'doYouWantCake',
      title: `function doYouWantCake`,
      instructions: `Make a function named "doYouWantCake" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(doYouWantCake).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(doYouWantCake).toHaveValue();
          },
        },
        {
          description: `is a function`,
          test: () => {
            expect(doYouWantCake).toBeFunction();
          },
        },
        {
          description: `takes one argument`,
          test: () => {
            expect(doYouWantCake).takesXArguments(1);
          },
        },
        {
          description: `returns a string`,
          test: () => {
            expect(doYouWantCake).withArgs().toReturnString();
          },
        },
        {
          description: `uses an if statement`,
          test: () => {
            expectCode().toUseIfStatement();
          },
        },
        {
          description: `returns correct values`,
          test: () => {
            expect(doYouWantCake).withArgs(true).toReturn('yes');
            expect(doYouWantCake).withArgs(false).toReturn('no');
            expect(doYouWantCake).withArgs().toReturn('no');
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-1',
      title: 'What is True?',
      text: `In JavaScript lots of values are considered <b>true</b>. Almost all, in fact.<br><br>

This is called being <b>truthy</b>. If a value is truthy, an <b>if</b> statement will run its block.<br><br>

It's actually easiest to learn which values are <b>falsy</b> rather than all the true values (see next lesson).<br><br>

Try running the code!`,
      sampleCode: `// All of these are truthy
if (1) {
  console.log("1 is truthy");
}
if (true) {
  console.log("true is truthy");
}
if ("a") {
  console.log("characters are truthy");
}
if ("hello") {
  console.log("words are truthy");
}
if ("hi there") {
  console.log("sentences are truthy");
}`,
    },
    {
      type: 'lesson',
      key: 'lesson-2',
      title: 'What is False?',
      text: `There are only a handful of <b>falsy</b> values.<br><br>

Just try to keep these in mind when you code your own projects! There's only 6 to remember!<br><br>

<ul>
<li><b>false</b> is "false", a boolean</li>
<li><b>0</b> the number zero</li>
<li><b>null</b> keyword "null"</li>
<li><b>""</b> an empty string (not even a space!)</li>
<li><b>undefined</b> is a keyword</li>
<li><b>NaN</b> is a keyword (stands for <b>Not a Number</b>)</li>
</ul><br><br>

(There's actually 9, but the last 3 are rare, go look them up if you want!)

Everything else is truthy. When in doubt, assume it's true!`,
      sampleCode: `// All of these are falsy
if (!false) {
  console.log("false is falsy");
}
if (!0) {
  console.log("0 is falsy");
}
if (!"") {
  console.log("an empty string is falsy");
}
if (!null) {
  console.log("null is falsy");
}
if (!undefined) {
  console.log("undefined is falsy");
}
if (!NaN) {
  console.log("NaN is falsy");
}`,
    },

    // {
    //   type: 'test',
    //   key: 'greeting',
    //   title: `function greeting`,
    //   instructions: `Make a function named "greeting" that takes one argument. It should return a string like "Hello Zintis!" when passed the argument "Zintis"`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(greeting).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(greeting).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(greeting).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes one argument`,
    //       test: () => {
    //         expect(greeting).takesXArguments(1);
    //       },
    //     },
    //     {
    //       description: `returns a string`,
    //       test: () => {
    //         expect(greeting).withArgs().toReturnString();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(greeting).withArgs('Barry').toReturn(`Hello Barry!`);
    //         expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
    //       },
    //     },
    //   ],
    // },

    {
      type: 'lesson',
      key: 'lesson-9',
      title: 'null, undefined, and NaN',
      text: `These are different kinds of falsy values:<br><br>

<b>null</b> means "intentionally empty". If something is null, it's empty on purpose (usually).<br><br>

<b>undefined</b> means "this hasn't been given a value yet". So like null, but unintentional (usually). You'll get it if you try to access a variable that hasn't been assigned or doesn't exist!<br><br>

<b>NaN</b> stands for "Not a Number". When you accidentally  do math to something that isn't a number. This one is almost always an unintentional error.<br><br>

Try running the code!`,
      sampleCode: `// null - intentionally empty
var winner = null;
console.log(winner); // null

// undefined - notice that there's no value assigned, no "="
var score;
console.log(score); // undefined

// A function with no return gives undefined
function doNothing() {}
console.log(doNothing()); // undefined

// NaN - a bad math operation
var result = "hello" * 5;
console.log(result);         // NaN`,
    },
    {
      type: 'test',
      key: 'nullUndefinedNaNTest',
      title: `null, undefined, and NaN`,
      instructions: `Declare three variables:<br><br>
      <b>a</b> set to <b>null</b><br>
      <b>b</b> with no value assigned (undefined)<br>
      <b>c</b> set to <b>"hello" * 5</b> (NaN)<br><br>
      Then console.log all three.`,
      sampleCode: `var a;
var b;
var c;

console.log(a);
console.log(b);
console.log(c);`,
      tests: [
        {
          description: `a is null`,
          test: () => {
            expect(a).toBe(null);
          },
        },
        {
          description: `b is undefined`,
          test: () => {
            expect(b).toBe(undefined);
          },
        },
        {
          description: `c is NaN`,
          test: () => {
            expect(c).toBe(NaN);
          },
        },
        {
          description: `logs null`,
          test: () => {
            expectConsole().toHaveLogged(null);
          },
        },
        {
          description: `logs undefined`,
          test: () => {
            expectConsole().toHaveLogged(undefined);
          },
        },
        {
          description: `logs NaN`,
          test: () => {
            expectConsole().toHaveLogged(NaN);
          },
        },
      ],
    },
    // {
    //   type: 'test',
    //   key: 'wordLength',
    //   title: `function wordLength`,
    //   instructions: `Make a function named "wordLength" that takes one argument, a string. It should return the length of the string as a number.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(wordLength).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(wordLength).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(wordLength).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes one argument`,
    //       test: () => {
    //         expect(wordLength).takesXArguments(1);
    //       },
    //     },
    //     {
    //       description: `returns a number`,
    //       test: () => {
    //         expect(wordLength).withArgs('string').toReturnNumber();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(wordLength).withArgs('cat').toReturn(3);
    //         expect(wordLength).withArgs('steep').toReturn(5);
    //         expect(wordLength).withArgs('').toReturn(0);
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'test',
    //   key: 'carBuilder',
    //   title: `function carBuilder`,
    //   instructions: `Make a function named "carBuilder" that takes 3 arguments, string, string, and number. It should return an object that has 3 keys: "make", "model", and "year", with the first/second/third arguments as the "make", "model", and "year" values.`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(carBuilder).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(carBuilder).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(carBuilder).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes three arguments`,
    //       test: () => {
    //         expect(carBuilder).takesXArguments(3);
    //       },
    //     },
    //     {
    //       description: `returns an object`,
    //       test: () => {
    //         expect(carBuilder).withArgs().toReturnObject();
    //       },
    //     },
    //     {
    //       description: `returns an object with 3 keys`,
    //       test: () => {
    //         expect(carBuilder(1, 2, 3)).toHaveObjectKeyCount(3);
    //       },
    //     },
    //     {
    //       description: `returns an object with key "make"`,
    //       test: () => {
    //         expect(carBuilder(1, 2, 3)).toHaveKey(`make`);
    //       },
    //     },
    //     {
    //       description: `returns an object with key "model"`,
    //       test: () => {
    //         expect(carBuilder(1, 2, 3)).toHaveKey(`model`);
    //       },
    //     },
    //     {
    //       description: `returns an object with key "year"`,
    //       test: () => {
    //         expect(carBuilder(1, 2, 3)).toHaveKey(`year`);
    //       },
    //     },
    //     {
    //       description: `carBuilder("Hyundai", "Accent", 2010) returns correct "make"`,
    //       test: () => {
    //         expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
    //           `make`,
    //           `Hyundai`,
    //         );
    //       },
    //     },
    //     {
    //       description: `carBuilder("Hyundai", "Accent", 2010) returns correct "model"`,
    //       test: () => {
    //         expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
    //           `model`,
    //           `Accent`,
    //         );
    //       },
    //     },
    //     {
    //       description: `carBuilder("Hyundai", "Accent", 2010) returns correct "year"`,
    //       test: () => {
    //         expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
    //           `year`,
    //           2010,
    //         );
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(carBuilder)
    //           .withArgs(`Volkswagen`, `Beetle`, `1963`)
    //           .toReturn({
    //             make: `Volkswagen`,
    //             model: `Beetle`,
    //             year: `1963`,
    //           });
    //         expect(carBuilder)
    //           .withArgs(`Lotus`, `Esprit S1`, `1976`)
    //           .toReturn({ make: `Lotus`, model: `Esprit S1`, year: `1976` });
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'test',
    //   key: 'teachersNeeded',
    //   title: `function teachersNeeded`,
    //   instructions: `Make a function named "teachersNeeded" that takes 2 arguments, a number and a number. The first number is how many students there are. The second number is how many students there should be per teacher. It should return the minimum number of teachers required (google "Math.ceil")`,
    //   tests: [
    //     {
    //       description: `is declared`,
    //       test: () => {
    //         expect(teachersNeeded).toBeDeclared();
    //       },
    //     },
    //     {
    //       description: `has a value`,
    //       test: () => {
    //         expect(teachersNeeded).toHaveValue();
    //       },
    //     },
    //     {
    //       description: `is a function`,
    //       test: () => {
    //         expect(teachersNeeded).toBeFunction();
    //       },
    //     },
    //     {
    //       description: `takes two arguments`,
    //       test: () => {
    //         expect(teachersNeeded).takesXArguments(2);
    //       },
    //     },
    //     {
    //       description: `returns a number`,
    //       test: () => {
    //         expect(teachersNeeded).withArgs(1, 1).toReturnNumber();
    //       },
    //     },
    //     {
    //       description: `returns an integer`,
    //       test: () => {
    //         expect(teachersNeeded).withArgs(3, 2).toReturnInteger();
    //       },
    //     },
    //     {
    //       description: `returns correct values`,
    //       test: () => {
    //         expect(teachersNeeded).withArgs(10, 5).toReturn(2);
    //         expect(teachersNeeded).withArgs(18, 7).toReturn(3);
    //         expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
    //       },
    //     },
    //   ],
    // },
    {
      type: 'lesson',
      key: 'lesson-6',
      title: 'Comparison Operators',
      text: `You may remember (some of) these from math class:<br><br>

      <ul>
     <li><b>\></b> greater than</li>
     <li><b>\<</b> less than</li>
     <li><b>\>=</b> greater than or equal</li>
     <li><b>\<=</b> less than or equal</li>
     <br>
     <li><b>!=</b> not equal</li>
     <li><b>==</b> is equal (be careful with this one! it looks like assignment but is actually comparison!)</li>

      </ul><br>

These can be used in logical operations like so:<br><br>

<ul><b>if( 5 > 3 ){ console.log("five is greater than three") }</b></ul><br>

But to most, this would seem pretty obvious. No reason to use fancy code here right?<br><br>

These statements really shine through when you use variables. Especially when those values change. <br><br>

Check out the code on the right, try running it!`,
      sampleCode: `function whichIsGreater(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else if (a < b) {
    console.log("a is less than b");
  } else if (a == b) {
    console.log("a is equal to b");
  }
}
  
whichIsGreater(2, 1);
whichIsGreater(1, 2);
whichIsGreater(2, 2);
`,
    },
    {
      type: 'lesson',
      key: 'lesson-7',
      title: 'Focusing on == and !=',
      text: `<b>== and !=</b> can be used with other values, like strings and booleans.<br><br>

      It can be used with arrays and objects, but the behavior is NOT what you would expect. The details go a little beyond the scope of Z_Test (they are nuanced and unintuitive, and not always useful).<br><br>
      
      <i>(Basically you should treat arrays and objects like they are always unique and different. There ARE ways to compare them, but it's more complicated than just "obj == otherObj".</i><br><br>

Check out the code on the right, try running it!`,
      sampleCode: `function areTheyTheSame(a,b){
  console.log(a, " is ", typeof a);
  console.log(b, " is ", typeof b);
  if(a == b){
      console.log("a and b are the same!");
  }else {
      console.log("a and b are NOT the same!");
  }      
}

areTheyTheSame(55, 55);
areTheyTheSame(1, 100);
`,
    },
    {
      type: 'lesson',
      key: 'lesson-8a',
      title: '== Equality (loose)',
      text: `Ok now, here's a confusing part:<br><br>

      =, ==, and === are all operators in JS. BUT they do different things. Here's my way of remembering it:<br><br>

      = "is"<br>
      == "is equal"<br>
      === "is exactly equal"<br><br>

      So when you see <b>var x = 5</b>... that reads as <b>"variable x IS 5"</b>.<br><br>

      When you see <b>if (x == 5) {}</b>... that reads as <b>"if x IS EQUAL to 5"</b>.<br><br>

      <b>==</b> only checks the value, not the type. So it thinks the number 5 and the string "5" are the same.<br><br>

Check out the code on the right, try running it!`,
      sampleCode: `function areTheyExactlyTheSame(a,b){
  console.log(a, " is ", typeof a);
  console.log(b, " is ", typeof b);
  if(a == b){
      console.log("a and b are the same!");
  }else {
      console.log("a and b are NOT the same!");
  }      
}

areTheyExactlyTheSame(55, 55);
areTheyExactlyTheSame(55, "55");`,
    },
    {
      type: 'lesson',
      key: 'lesson-8b',
      title: '=== Equality (strict)',
      text: `<b>===</b> is the strict version of <b>==</b>. It checks both the <b>value AND the type</b>.<br><br>

      So <b>if (x === 5) {}</b> reads as <b>"if x IS EXACTLY EQUAL to 5"</b>. This would fail if x is the <b>string "5"</b>, because even though the value looks the same, the types are different.<br><br>

      <b>My general recommendation is to use ===</b> as it's more predictable and avoids subtle bugs.<br><br>

Check out the code on the right, try running it!`,
      sampleCode: `function areTheyExactlyTheSame(a, b) {
  if (a === b) {
    console.log("a and b are exactly the same!");
  } else {
    console.log("a and b are NOT exactly the same!");
  }
}

areTheyExactlyTheSame(55, 55);    // exactly the same
areTheyExactlyTheSame(55, "55");  // NOT exactly the same — different types!`,
    },
    {
      type: 'test',
      key: 'equalityOperatorsTest',
      title: `== and ===`,
      instructions: `Declare a variable <b>a</b> set to the number <b>5</b> and a variable <b>b</b> set to the string <b>"5"</b>.<br><br>
      Using an if statement with <b>==</b>, console.log <b>"loosely equal"</b> if they are loosely equal.<br><br>
      Using an if statement with <b>===</b>, console.log <b>"strictly equal"</b> if they are strictly equal.<br><br>
      Only the first should a number and a string are never strictly equal.`,
      sampleCode: `var a = 5;
var b = "5";

// fix the #### using the equality operator
if (a #### b) {
  console.log("loosely equal");
} 

// fix the #### using the equality operator
if (a #### b) {
  console.log("strictly equal");
}`,
      tests: [
        {
          description: `a is 5 (number)`,
          test: () => {
            expect(a).toBe(5);
          },
        },
        {
          description: `b is "5" (string)`,
          test: () => {
            expect(b).toBe('5');
          },
        },
        {
          description: `uses ==`,
          test: () => {
            expectCode().toUseOperator('==');
          },
        },
        {
          description: `uses ===`,
          test: () => {
            expectCode().toUseOperator('===');
          },
        },
        {
          description: `logs "loosely equal"`,
          test: () => {
            expectConsole().toHaveLogged('loosely equal');
          },
        },
        {
          description: `does not log "strictly equal"`,
          test: () => {
            expectConsole().toHaveLoggedXTimes(1);
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
