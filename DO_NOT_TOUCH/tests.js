const variableQTests = {
  title: "var q tests",
  tests: [
    {
      description: `variable Q exists`,
      test: () => {
        expect(q).toBeDeclared();
      },
    },
  ],
};

const variableXTests = {
  title: "variable X",
  tests: [
    {
      description: `variable X exists`,
      test: () => {
        expect(x).toBeDeclared();
      },
    },
  ],
};

const varFruitTests = {
  title: `Variable Fruit`,
  tests: [
    {
      description: `variable fruit exists`,
      test: () => {
        expect(fruit).toBeDeclared();
      },
    },
    {
      description: `variable fruit is "apple"`,
      test: () => {
        expect(fruit).toBe(`apple`);
      },
    },
  ],
};

const functionAddTests = {
  title: "function add",
  tests: [
    {
      description: `var exists`,
      test: () => {
        expect(add).toBeDeclared();
      },
    },
    {
      description: `function exists`,
      test: () => {
        expect(add).toBeFunction();
      },
    },
    {
      description: `add(3,1) is 4`,
      test: () => {
        expect(add).withArgs(3, 1).toReturn(4);
      },
    },
    {
      description: `add(4,4) is 8`,
      test: () => {
        expect(add).withArgs(4, 4).toReturn(8);
      },
    },
  ],
};

const objectComparisonTests = {
  title: "object comparison",
  tests: [
    {
      description: `object comparison {} and {}`,
      test: () => {
        expect({}).toBeSameObjectAs({});
      },
    },
    {
      description: `object comparison { a: 1 } and {}`,
      test: () => {
        expect({ a: 1 }).toBeSameObjectAs({});
      },
    },
    {
      description: `object comparison expect({ a: 1 }).toBeSameObjectAs({ a: 1 });`,
      test: () => {
        expect({ a: 1 }).toBeSameObjectAs({ a: 1 });
      },
    },
    {
      description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 2 });`,
      test: () => {
        expect({ a: 1 }).toBeSameObjectAs({ a: 2 });
      },
    },
    {
      description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ b: 1 });`,
      test: () => {
        expect({ a: 1 }).toBeSameObjectAs({ b: 1 });
      },
    },
  ],
};

const functionSubtractTests = {
  title: "function subtract",
  tests: [
    {
      description: `subtract exists`,
      test: () => {
        expect(subtract).toBeDeclared();
      },
    },
    {
      description: `subtract is a function`,
      test: () => {
        expect(subtract).toBeFunction();
      },
    },
    {
      description: `subtract(3,1) is 2`,
      test: () => {
        expect(subtract).withArgs(3, 1).toReturn(2);
      },
    },
  ],
};

const arrayComparisonTests = {
  title: "array comparison",
  tests: [
    {
      description: `(pass) [] []`,
      test: () => {
        expect([]).toBeSameArrayAs([]);
      },
    },
    {
      description: `(fail) [] [1] `,
      test: () => {
        expect([]).toBeSameArrayAs([1]);
      },
    },
    {
      description: `(fail) [1] []`,
      test: () => {
        expect([1]).toBeSameArrayAs([]);
      },
    },
    {
      description: `(pass) [1] [1]`,
      test: () => {
        expect([1]).toBeSameArrayAs([1]);
      },
    },
    {
      description: `(fail) [1] [1,2]`,
      test: () => {
        expect([1]).toBeSameArrayAs([1, 2]);
      },
    },
    {
      description: `(pass) [2,1] [2,1]`,
      test: () => {
        expect([2, 1]).toBeSameArrayAs([2, 1]);
      },
    },
    {
      description: `(pass) [1,2] [1,2] `,
      test: () => {
        expect([1, 2]).toBeSameArrayAs([1, 2]);
      },
    },
    {
      description: `(fail) [2,1] [1,2] `,
      test: () => {
        expect([2, 1]).toBeSameArrayAs([1, 2]);
      },
    },
  ],
};

const numberToStringTests = {
  title: "numberToString",
  tests: [
    {
      description: `is a function`,
      test: () => {
        expect(numberToString).toBeFunction();
      },
    },
    {
      description: `uses method "String"`,
      test: () => {
        expect(numberToString).withArgs("1").toUseMethod("String");
      },
    },
    {
      description: `returns a string`,
      test: () => {
        expect(numberToString(1)).toBeString();
      },
    },
    {
      description: `returns "1"`,
      test: () => {
        expect(numberToString(1)).toBe("1");
      },
    },
  ],
};

// Function Method Check
const threeItemArrayTests = {
  title: "arr3 exists",
  tests: [
    {
      description: `arr3 exists`,
      test: () => {
        expect(arr3).toBeDeclared();
      },
    },
    {
      description: `arr3 is an array`,
      test: () => {
        expect(arr3).toBeArray();
      },
    },
    {
      description: `arr3 has length of 3`,
      test: () => {
        expect(arr3).toHaveArrayLength(3);
      },
    },
  ],
};

const boolTests = {
  title: "boolean tests",
  tests: [
    {
      description: `b is declared`,
      test: () => {
        expect(b).toBeDeclared();
      },
    },
    {
      description: `b is a boolean`,
      test: () => {
        expect(b).toBeBoolean();
      },
    },
    {
      description: `b is true`,
      test: () => {
        expect(b).toBe(true);
      },
    },
  ],
};
const functionCallTests = {
  title: "functionCallTests",
  tests: [
    {
      description: `stringToNumber is declared`,
      test: () => {
        expect(stringToNumber).toBeDeclared();
      },
    },
    {
      description: `stringToNumber is a function`,
      test: () => {
        expect(stringToNumber).toBeFunction();
      },
    },
    {
      description: `stringToNumber returns a value`,
      test: () => {
        console.log(
          `stringToNumber("1")`,
          stringToNumber("1"),
          !!stringToNumber("1")
        );
        expect(stringToNumber("1")).toBeTruthy();
      },
    },
    {
      description: `stringToNumber("1") returns 1`,
      test: () => {
        expect(stringToNumber("1")).toBe(1);
      },
    },
  ],
};

const returnTypeTests = {
  title: "returnTypeTests",
  tests: [
    {
      description: `return bool`,
      test: () => {
        expect(() => true).toReturnBoolean();
      },
    },
    {
      description: `return number`,
      test: () => {
        expect(() => 1).toReturnNumber();
      },
    },
    {
      description: `return string`,
      test: () => {
        expect(() => "string").toReturnString();
      },
    },
    {
      description: `return function`,
      test: () => {
        expect(() => () => {}).toReturnFunction();
      },
    },
    {
      description: `return object`,
      test: () => {
        let o = {};
        let f = () => o;
        expect(f).toReturnObject();
      },
    },
    {
      description: `return array`,
      test: () => {
        let a = [];
        let f = () => a;
        expect(f).toReturnArray();
      },
    },
  ],
};

const returnTypeTestFails = {
  title: "returnTypeTestFails",
  tests: [
    {
      description: `return bool`,
      test: () => {
        expect(() => undefined).toReturnBoolean();
      },
    },
    {
      description: `return number`,
      test: () => {
        expect(() => undefined).toReturnNumber();
      },
    },
    {
      description: `return string`,
      test: () => {
        expect(() => undefined).toReturnString();
      },
    },
    {
      description: `return function`,
      test: () => {
        expect(() => undefined).toReturnFunction();
      },
    },
    {
      description: `return object`,
      test: () => {
        let o = {};
        let f = () => undefined;
        expect(f).toReturnObject();
      },
    },
    {
      description: `return array`,
      test: () => {
        let a = [];
        let f = () => undefined;
        expect(f).toReturnArray();
      },
    },
  ],
};

const zTestSuite = {
  variableQTests,
  variableXTests,
  varFruitTests,
  functionAddTests,
  functionSubtractTests,
  numberToStringTests,
  threeItemArrayTests,
  boolTests,
  arrayComparisonTests,
  functionCallTests,
  returnTypeTests,
  returnTypeTestFails,
};
