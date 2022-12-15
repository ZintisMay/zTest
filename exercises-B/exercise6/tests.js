zTestSuite = {};

zTestSuite.zeroArray = {
  title: `var "zeroArray"`,
  instructions: `Declare a variable named "zeroArray", an array that is simply empty`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(zeroArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(zeroArray).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(zeroArray).toBeArray();
      },
    },

    {
      description: `has 0 items`,
      test: () => {
        expect(zeroArray).toHaveLength(0);
      },
    },
  ],
};

zTestSuite.vareasyArrayTests = {
  title: `var "easyArray"`,
  instructions: `Declare a variable named "easyArray", an array whose values are the numbers 4, 5 and 6`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(easyArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(easyArray).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(easyArray).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(easyArray).toOnlyContainType(`number`);
      },
    },
    {
      description: `has 3 items`,
      test: () => {
        expect(easyArray).toHaveLength(3);
      },
    },
    {
      description: `contains numbers 4, 5, 6`,
      test: () => {
        expect(easyArray).toBeSameArrayAs([4, 5, 6]);
      },
    },
  ],
};

zTestSuite.varsnacksTest = {
  title: `var "snacks"`,
  instructions: `Declare a variable named "snacks", an array whose values are three words (snacks that you enjoy!).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(snacks).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(snacks).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(snacks).toBeArray();
      },
    },
    {
      description: `contains only strings`,
      test: () => {
        expect(snacks).toOnlyContainType(`string`);
      },
    },
    {
      description: `contains only words of 3+ letters`,
      test: () => {
        expect(snacks).customTest(function () {
          this.value.forEach((item) => {
            console.log(item);
            if (item.length < 3) {
              throw new Error(`words must be 3 or more letters`);
            }
          });
          return this;
        });
      },
    },
  ],
};

zTestSuite.smallNumbers = {
  title: `var "smallNumbers"`,
  instructions: `Declare a variable named "smallNumbers", an array with 3 numbers all lower than 9000.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(smallNumbers).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(smallNumbers).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(smallNumbers).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(smallNumbers).toOnlyContainType(`number`);
      },
    },
    {
      description: `only contains numbers lower than 9000`,
      test: () => {
        expect(smallNumbers).customTest(function () {
          this.value.forEach((item) => {
            if (!(item <= 9000)) {
              throw new Error(`not all numbers are lower 9000`);
            }
            return this;
          });
        });
      },
    },
  ],
};

zTestSuite.arrayOfStrings = {
  title: `var "arrayOfStrings"`,
  instructions: `Declare a variable named "arrayOfStrings", an array that contains 10 strings (words) in total.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(arrayOfStrings).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(arrayOfStrings).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(arrayOfStrings).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(arrayOfStrings).toOnlyContainType(`string`);
      },
    },
    {
      description: `has 10 items`,
      test: () => {
        expect(arrayOfStrings).toHaveLength(10);
      },
    },
  ],
};

zTestSuite.booleansArray = {
  title: `var "booleansArray"`,
  instructions: `Declare a variable named "booleansArray", an array of 5 booleans.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(booleansArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(booleansArray).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(booleansArray).toBeArray();
      },
    },
    {
      description: `contains only booleans`,
      test: () => {
        expect(booleansArray).toOnlyContainType(`boolean`);
      },
    },
    {
      description: `has 5 items`,
      test: () => {
        expect(booleansArray).toHaveLength(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
