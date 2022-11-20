zTestSuite = {};
zTestSuite.emptyArray = {
  title: "var emptyArray",
  tests: [
    {
      description: `emptyArray is declared`,
      test: () => {
        expect(emptyArray).toBeDeclared();
      },
    },
    {
      description: `emptyArray has a value`,
      test: () => {
        expect(emptyArray).toHaveValue();
      },
    },
    {
      description: `emptyArray is an array`,
      test: () => {
        expect(emptyArray).toBeArray();
      },
    },

    {
      description: `emptyArray has 0 items`,
      test: () => {
        expect(emptyArray).toHaveLength(0);
      },
    },
  ],
};

zTestSuite.varSimpleArrayTests = {
  title: "var simpleArray",
  tests: [
    {
      description: `simpleArray is declared`,
      test: () => {
        expect(simpleArray).toBeDeclared();
      },
    },
    {
      description: `simpleArray has a value`,
      test: () => {
        expect(simpleArray).toHaveValue();
      },
    },
    {
      description: `simpleArray is an array`,
      test: () => {
        expect(simpleArray).toBeArray();
      },
    },
    {
      description: `simpleArray contains only numbers`,
      test: () => {
        expect(simpleArray).toOnlyContainType("number");
      },
    },
    {
      description: `simpleArray contains numbers 1,2,3`,
      test: () => {
        expect(simpleArray).toBeSameArrayAs([1, 2, 3]);
      },
    },
  ],
};

zTestSuite.varFavoriteFoodsTest = {
  title: "var favoriteFoods",
  tests: [
    {
      description: `favoriteFoods is declared`,
      test: () => {
        expect(favoriteFoods).toBeDeclared();
      },
    },
    {
      description: `favoriteFoods has a value`,
      test: () => {
        expect(favoriteFoods).toHaveValue();
      },
    },
    {
      description: `favoriteFoods is an array`,
      test: () => {
        expect(favoriteFoods).toBeArray();
      },
    },
    {
      description: `favoriteFoods contains only strings`,
      test: () => {
        expect(favoriteFoods).toOnlyContainType("string");
      },
    },
    {
      description: `favoriteFoods contains words`,
      test: () => {
        expect(favoriteFoods).customTest(function () {
          this.value.every((item) => {
            console.log(item);
            if (!(item.length > 2)) {
              throw new Error("there are no foods with just 1 letter");
            }
            return this;
          });
        });
      },
    },
  ],
};

zTestSuite.bigNumbers = {
  title: "var bigNumbers",
  tests: [
    {
      description: `bigNumbers is declared`,
      test: () => {
        expect(bigNumbers).toBeDeclared();
      },
    },
    {
      description: `bigNumbers has a value`,
      test: () => {
        expect(bigNumbers).toHaveValue();
      },
    },
    {
      description: `bigNumbers is an array`,
      test: () => {
        expect(bigNumbers).toBeArray();
      },
    },
    {
      description: `bigNumbers contains only numbers`,
      test: () => {
        expect(bigNumbers).toOnlyContainType("number");
      },
    },
    {
      description: `bigNumbers only contains numbers over 9000`,
      test: () => {
        expect(bigNumbers).customTest(function () {
          this.value.every((item) => {
            console.log(item);
            if (!(item > 9000)) {
              throw new Error("not all numbers are over 9000");
            }
            return this;
          });
        });
      },
    },
  ],
};
zTestSuite.arrayOf10 = {
  title: "var arrayOf10",
  tests: [
    {
      description: `arrayOf10 is declared`,
      test: () => {
        expect(arrayOf10).toBeDeclared();
      },
    },
    {
      description: `arrayOf10 has a value`,
      test: () => {
        expect(arrayOf10).toHaveValue();
      },
    },
    {
      description: `arrayOf10 is an array`,
      test: () => {
        expect(arrayOf10).toBeArray();
      },
    },
    {
      description: `arrayOf10 has 10 items`,
      test: () => {
        expect(arrayOf10).toHaveLength(10);
      },
    },
    {
      description: `arrayOf10 contains only numbers`,
      test: () => {
        expect(arrayOf10).toOnlyContainType("number");
      },
    },
  ],
};
zTestSuite.arrayOfBooleans = {
  title: "var arrayOfBooleans",
  tests: [
    {
      description: `arrayOfBooleans is declared`,
      test: () => {
        expect(arrayOfBooleans).toBeDeclared();
      },
    },
    {
      description: `arrayOfBooleans has a value`,
      test: () => {
        expect(arrayOfBooleans).toHaveValue();
      },
    },
    {
      description: `arrayOfBooleans is an array`,
      test: () => {
        expect(arrayOfBooleans).toBeArray();
      },
    },
    {
      description: `arrayOfBooleans contains only booleans`,
      test: () => {
        expect(arrayOfBooleans).toOnlyContainType("boolean");
      },
    },
    {
      description: `arrayOfBooleans has 5 items`,
      test: () => {
        expect(arrayOfBooleans).toHaveLength(5);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
