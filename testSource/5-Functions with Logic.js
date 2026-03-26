const test =   {
    id: '5',
    title: 'Functions with Logic',
    help: 'https://www.w3schools.com/js/js_conditionals.asp',
    items: [
      { type: 'test', key: 'greeting',
        title: `function greeting`,
        instructions: `Make a function named "greeting" that takes one argument. It should return a string like "Hello Zintis!" when passed the argument "Zintis"`,
        tests: [
          { description: `is declared`, test: () => {
              expect(greeting).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(greeting).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(greeting).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(greeting).takesXArguments(1);
            } },
          { description: `returns a string`, test: () => {
              expect(greeting).withArgs().toReturnString();
            } },
          { description: `returns correct values`, test: () => {
              expect(greeting).withArgs('Barry').toReturn(`Hello Barry!`);
              expect(greeting).withArgs(`Rosie`).toReturn(`Hello Rosie!`);
            } }
        ],
      },
      { type: 'test', key: 'isThisValueTrue',
        title: `function isThisValueTrue`,
        instructions: `Make a function named "isThisValueTrue" that takes one argument (of any type). It should return true if the argument is truthy, and false otherwise.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(isThisValueTrue).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(isThisValueTrue).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(isThisValueTrue).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(isThisValueTrue).takesXArguments(1);
            } },
          { description: `returns a boolean`, test: () => {
              expect(isThisValueTrue).withArgs().toReturnBoolean();
            } },
          { description: `returns correct values`, test: () => {
              expect(isThisValueTrue).withArgs(true).toReturn(true);
              expect(isThisValueTrue).withArgs(false).toReturn(false);
              expect(isThisValueTrue).withArgs().toReturn(false);
            } }
        ],
      },
      { type: 'test', key: 'isThisNumberEven',
        title: `function isThisNumberEven`,
        instructions: `Make a function named "isThisNumberEven" that takes one argument, a number. It should return true if the number is even, and false if odd.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(isThisNumberEven).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(isThisNumberEven).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(isThisNumberEven).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(isThisNumberEven).takesXArguments(1);
            } },
          { description: `returns a boolean`, test: () => {
              expect(isThisNumberEven).toReturnBoolean();
            } },
          { description: `returns correct values`, test: () => {
              expect(isThisNumberEven).withArgs(1).toReturn(false);
              expect(isThisNumberEven).withArgs(2).toReturn(true);
              expect(isThisNumberEven).withArgs(-1).toReturn(false);
              expect(isThisNumberEven).withArgs(0).toReturn(true);
            } }
        ],
      },
      { type: 'test', key: 'makeNumberNegative',
        title: `function makeNumberNegative`,
        instructions: `Make a function named "makeNumberNegative" that takes one argument, a number. It should return the same number, but negative.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(makeNumberNegative).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(makeNumberNegative).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(makeNumberNegative).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(makeNumberNegative).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(makeNumberNegative).withArgs(1).toReturnNumber();
            } },
          { description: `returns correct values`, test: () => {
              expect(makeNumberNegative).withArgs(1).toReturn(-1);
              expect(makeNumberNegative).withArgs(0).toReturn(0);
              expect(makeNumberNegative).withArgs(-1).toReturn(-1);
            } }
        ],
      },
      { type: 'test', key: 'doYouWantCake',
        title: `function doYouWantCake`,
        instructions: `Make a function named "doYouWantCake" that takes one argument, a boolean. If the boolean is true, return "yes". Otherwise return "no".`,
        tests: [
          { description: `is declared`, test: () => {
              expect(doYouWantCake).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(doYouWantCake).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(doYouWantCake).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(doYouWantCake).takesXArguments(1);
            } },
          { description: `returns a string`, test: () => {
              expect(doYouWantCake).withArgs().toReturnString();
            } },
          { description: `returns correct values`, test: () => {
              expect(doYouWantCake).withArgs(true).toReturn('yes');
              expect(doYouWantCake).withArgs(false).toReturn('no');
              expect(doYouWantCake).withArgs().toReturn('no');
            } }
        ],
      },
      { type: 'test', key: 'wordLength',
        title: `function wordLength`,
        instructions: `Make a function named "wordLength" that takes one argument, a string. It should return the length of the string as a number.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(wordLength).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(wordLength).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(wordLength).toBeFunction();
            } },
          { description: `takes one argument`, test: () => {
              expect(wordLength).takesXArguments(1);
            } },
          { description: `returns a number`, test: () => {
              expect(wordLength).withArgs('string').toReturnNumber();
            } },
          { description: `returns correct values`, test: () => {
              expect(wordLength).withArgs('cat').toReturn(3);
              expect(wordLength).withArgs('steep').toReturn(5);
              expect(wordLength).withArgs('').toReturn(0);
            } }
        ],
      },
      { type: 'test', key: 'carBuilder',
        title: `function carBuilder`,
        instructions: `Make a function named "carBuilder" that takes 3 arguments, string, string, and number. It should return an object that has 3 keys: "make", "model", and "year", with the first/second/third arguments as the "make", "model", and "year" values.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(carBuilder).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(carBuilder).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(carBuilder).toBeFunction();
            } },
          { description: `takes three arguments`, test: () => {
              expect(carBuilder).takesXArguments(3);
            } },
          { description: `returns an object`, test: () => {
              expect(carBuilder).withArgs().toReturnObject();
            } },
          { description: `returns an object with 3 keys`, test: () => {
              expect(carBuilder(1, 2, 3)).toHaveObjectKeyCount(3);
            } },
          { description: `returns an object with key "make"`, test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`make`);
            } },
          { description: `returns an object with key "model"`, test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`model`);
            } },
          { description: `returns an object with key "year"`, test: () => {
              expect(carBuilder(1, 2, 3)).toHaveKey(`year`);
            } },
          { description: `carBuilder("Hyundai", "Accent", 2010) returns correct "make"`, test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `make`,
                `Hyundai`,
              );
            } },
          { description: `carBuilder("Hyundai", "Accent", 2010) returns correct "model"`, test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `model`,
                `Accent`,
              );
            } },
          { description: `carBuilder("Hyundai", "Accent", 2010) returns correct "year"`, test: () => {
              expect(carBuilder(`Hyundai`, `Accent`, 2010)).toHaveKeyValuePair(
                `year`,
                2010,
              );
            } },
          { description: `returns correct values`, test: () => {
              expect(carBuilder)
                .withArgs(`Volkswagen`, `Beetle`, `1963`)
                .toReturn({
                  make: `Volkswagen`,
                  model: `Beetle`,
                  year: `1963`,
                });
              expect(carBuilder)
                .withArgs(`Lotus`, `Esprit S1`, `1976`)
                .toReturn({ make: `Lotus`, model: `Esprit S1`, year: `1976` });
            } }
        ],
      },
      { type: 'test', key: 'teachersNeeded',
        title: `function teachersNeeded`,
        instructions: `Make a function named "teachersNeeded" that takes 2 arguments, a number and a number. The first number is how many students there are. The second number is how many students there should be per teacher. It should return the minimum number of teachers required (google "Math.ceil")`,
        tests: [
          { description: `is declared`, test: () => {
              expect(teachersNeeded).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(teachersNeeded).toHaveValue();
            } },
          { description: `is a function`, test: () => {
              expect(teachersNeeded).toBeFunction();
            } },
          { description: `takes two arguments`, test: () => {
              expect(teachersNeeded).takesXArguments(2);
            } },
          { description: `returns a number`, test: () => {
              expect(teachersNeeded).withArgs(1, 1).toReturnNumber();
            } },
          { description: `returns an integer`, test: () => {
              expect(teachersNeeded).withArgs(3, 2).toReturnInteger();
            } },
          { description: `returns correct values`, test: () => {
              expect(teachersNeeded).withArgs(10, 5).toReturn(2);
              expect(teachersNeeded).withArgs(18, 7).toReturn(3);
              expect(teachersNeeded).withArgs(1000, 234).toReturn(5);
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
