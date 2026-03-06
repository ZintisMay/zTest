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

zTestSuite.personObject = {
  title: `var "person"`,
  instructions: `Declare a variable named "person", an object. Read tests closely for keys and values.`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(person).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(person).toHaveValue();
      },
    },
    {
      description: `is an object`,
      test: () => {
        expect(person).toBeObject();
      },
    },
    {
      description: `has 4 keys`,
      test: () => {
        expect(person).toHaveObjectKeyCount(4);
      },
    },
    {
      description: `has key "firstName"`,
      test: () => {
        expect(person).toHaveKey("firstName");
      },
    },
    {
      description: `has key/value pair of "firstName"/"Zintis"`,
      test: () => {
        expect(person).toHaveKeyValuePair("firstName", "Zintis");
      },
    },
    {
      description: `has key "lastName"`,
      test: () => {
        expect(person).toHaveKey("lastName");
      },
    },
    {
      description: `has key/value pair of "lastName"/"May"`,
      test: () => {
        expect(person).toHaveKeyValuePair("lastName", "May");
      },
    },
    {
      description: `has key "isTeacher"`,
      test: () => {
        expect(person).toHaveKey("isTeacher");
      },
    },
    {
      description: `has key/value pair of "isTeacher"/true`,
      test: () => {
        expect(person).toHaveKeyValuePair("isTeacher", true);
      },
    },

    {
      description: `has key "students"`,
      test: () => {
        expect(person).toHaveKey("students");
      },
    },
    {
      description: `has key/value pair of "students"/100`,
      test: () => {
        expect(person).toHaveKeyValuePair("students", 100);
      },
    },
    {
      description: `is correct value`,
      test: () => {
        expect(person).toBe({
          firstName: "Zintis",
          lastName: "May",
          isTeacher: true,
          students: 100,
        });
      },
    },
  ],
};

zTestSuite.jsClassObject = {
  title: `var "jsClass"`,
  instructions: `Declare a variable named "jsClass" an object. Read tests closely for keys and values`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(jsClass).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(jsClass).toHaveValue();
      },
    },
    {
      description: `is an object`,
      test: () => {
        expect(jsClass).toBeObject();
      },
    },
    {
      description: `has 2 keys`,
      test: () => {
        expect(jsClass).toHaveObjectKeyCount(2);
      },
    },
    {
      description: `has key "class"`,
      test: () => {
        expect(jsClass).toHaveKey("class");
      },
    },
    {
      description: `has key/value pair of "class"/"javascript"`,
      test: () => {
        expect(jsClass).toHaveKeyValuePair("class", "javascript");
      },
    },
    {
      description: `has key "grades"`,
      test: () => {
        expect(jsClass).toHaveKey("grades");
      },
    },
    {
      description: `key "grades" is an array`,
      test: () => {
        expect(jsClass).toHaveKey("grades");
      },
    },
    {
      description: `key "grades" is an array of length 10`,
      test: () => {
        expect(jsClass).toHaveKey("grades");
      },
    },
    {
      description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`,
      test: () => {
        expect(jsClass.grades).toBe([85, 94, 82, 79, 77, 88, 96, 95, 57, 100]);
      },
    },
    {
      description: `is correct value`,
      test: () => {
        expect(jsClass).toBe({
          class: "javascript",
          grades: [85, 94, 82, 79, 77, 88, 96, 95, 57, 100],
        });
      },
    },
  ],
};

zTestSuite.shoppingCartObject = {
  title: `var "shoppingCart"`,
  instructions: `Declare a variable named "shoppingCart", an object. Read tests closely for keys and values`,
  tests: [
    {
      description: `is declared`,
      test: () => {
        expect(shoppingCart).toBeDeclared();
      },
    },
    {
      description: `has a value`,
      test: () => {
        expect(shoppingCart).toHaveValue();
      },
    },
    {
      description: `is an object`,
      test: () => {
        expect(shoppingCart).toBeObject();
      },
    },
    {
      description: `has 3 keys`,
      test: () => {
        expect(shoppingCart).toHaveObjectKeyCount(3);
      },
    },
    {
      description: `has key "total"`,
      test: () => {
        expect(shoppingCart).toHaveKey("total");
      },
    },
    {
      description: `key "total" is a number`,
      test: () => {
        expect(shoppingCart.total).toBeNumber();
      },
    },
    {
      description: `has key/value pair of "total"/5`,
      test: () => {
        expect(shoppingCart).toHaveKeyValuePair("total", 5);
      },
    },
    {
      description: `has key "onlinePurchase"`,
      test: () => {
        expect(shoppingCart).toHaveKey("onlinePurchase");
      },
    },
    {
      description: `key "onlinePurchase" is a boolean`,
      test: () => {
        expect(shoppingCart.onlinePurchase).toBeBoolean();
      },
    },
    {
      description: `has key/value pair of "onlinePurchase"/true`,
      test: () => {
        expect(shoppingCart).toHaveKeyValuePair("onlinePurchase", true);
      },
    },
    {
      description: `has key "items"`,
      test: () => {
        expect(shoppingCart).toHaveKey("items");
      },
    },
    {
      description: `key "items" is an array`,
      test: () => {
        expect(shoppingCart.items).toBeArray();
      },
    },
    {
      description: `key "items" is an array of length 3`,
      test: () => {
        expect(shoppingCart.items).toHaveLength(3);
      },
    },
    {
      description: `key "items" is ["toothbrush", "toothpaste", "floss"]`,
      test: () => {
        expect(shoppingCart.items).toBe(["toothbrush", "toothpaste", "floss"]);
      },
    },

    {
      description: `is correct value`,
      test: () => {
        expect(shoppingCart).toBe({
          items: ["toothbrush", "toothpaste", "floss"],
          total: 5,
          onlinePurchase: true,
        });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
