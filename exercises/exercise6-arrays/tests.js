zTestSuite = {};

zTestSuite.emptyArray = {
  title: `var "emptyArray"`,
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
