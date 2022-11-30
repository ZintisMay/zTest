zTestSuite = {};

zTestSuite.emptyArray = {
  title: `var "emptyArray"`,
  instructions: `Declare a variable named "emptyArray", an array with no values`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(emptyArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(emptyArray).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(emptyArray).toBeArray();
      },
    },

    {
      description: `has 0 items`,
      test: () => {
        expect(emptyArray).toHaveLength(0);
      },
    },
  ],
};

zTestSuite.varSimpleArrayTests = {
  title: `var "simpleArray"`,
  instructions: `Declare a variable named "simpleArray", an array whose values are the numbers 1, 2 and 3`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(simpleArray).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(simpleArray).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(simpleArray).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(simpleArray).toOnlyContainType(`number`);
      },
    },
    {
      description: `has 3 items`,
      test: () => {
        expect(simpleArray).toHaveLength(3);
      },
    },
    {
      description: `contains numbers 1,2,3`,
      test: () => {
        expect(simpleArray).toBeSameArrayAs([1, 2, 3]);
      },
    },
  ],
};

zTestSuite.varFavoriteFoodsTest = {
  title: `var "favoriteFoods"`,
  instructions: `Declare a variable named "favoriteFoods", an array whose values are three words (your favorite foods!).`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(favoriteFoods).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(favoriteFoods).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(favoriteFoods).toBeArray();
      },
    },
    {
      description: `contains only strings`,
      test: () => {
        expect(favoriteFoods).toOnlyContainType(`string`);
      },
    },
    {
      description: `contains only words of 3+ letters`,
      test: () => {
        expect(favoriteFoods).customTest(function () {
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

zTestSuite.bigNumbers = {
  title: `var "bigNumbers"`,
  instructions: `Declare a variable named "bigNumbers", an array with 3 numbers all greater than 9000.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(bigNumbers).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(bigNumbers).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(bigNumbers).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(bigNumbers).toOnlyContainType(`number`);
      },
    },
    {
      description: `only contains numbers over 9000`,
      test: () => {
        expect(bigNumbers).customTest(function () {
          this.value.forEach((item) => {
            if (!(item > 9000)) {
              throw new Error(`not all numbers are over 9000`);
            }
            return this;
          });
        });
      },
    },
  ],
};

zTestSuite.arrayOf10 = {
  title: `var "arrayOf10"`,
  instructions: `Declare a variable named "arrayOf10", an array of 10 numbers.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(arrayOf10).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(arrayOf10).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(arrayOf10).toBeArray();
      },
    },
    {
      description: `contains only numbers`,
      test: () => {
        expect(arrayOf10).toOnlyContainType(`number`);
      },
    },
    {
      description: `has 10 items`,
      test: () => {
        expect(arrayOf10).toHaveLength(10);
      },
    },
  ],
};

zTestSuite.arrayOfBooleans = {
  title: `var "arrayOfBooleans"`,
  instructions: `Declare a variable named "arrayOfBooleans", an array of 5 booleans.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(arrayOfBooleans).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(arrayOfBooleans).toHaveValue();
      },
    },
    {
      description: `is an array`,
      test: () => {
        expect(arrayOfBooleans).toBeArray();
      },
    },
    {
      description: `contains only booleans`,
      test: () => {
        expect(arrayOfBooleans).toOnlyContainType(`boolean`);
      },
    },
    {
      description: `has 5 items`,
      test: () => {
        expect(arrayOfBooleans).toHaveLength(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
