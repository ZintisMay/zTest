const varSimpleArrayTests = {
  title: "var simpleArray tests",
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
      description: `simpleArray contains numbers only`,
      test: () => {
        expect(simpleArray).toBeArrayWithItemsOfType("number");
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

const varFavoriteFoodsTest = {
  title: "var favoriteFoods tests",
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
      description: `favoriteFoods contains strings only`,
      test: () => {
        expect(favoriteFoods).toBeArrayWithItemsOfType("string");
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

const varFunTests = {
  title: "var fun tests",
  tests: [
    {
      description: `fun is declared`,
      test: () => {
        expect(fun).toBeDeclared();
      },
    },
    {
      description: `fun has a value`,
      test: () => {
        expect(fun).toHaveValue();
      },
    },
    {
      description: `fun is an function`,
      test: () => {
        expect(fun).toBeFunction();
      },
    },
    {
      description: `fun returns an object`,
      test: () => {
        expect(fun).toReturnString();
      },
    },
    {
      description: `fun returns "Zintis"`,
      test: () => {
        expect(fun).toReturn("Zintis");
      },
    },
  ],
};

const zTestSuite = {
  varSimpleArrayTests,
  varFavoriteFoodsTest,
};

Z_T.testAll(zTestSuite);
