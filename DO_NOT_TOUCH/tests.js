const varQTests = [
  {
    section: `variable Q`,
    description: `variable Q exists`,
    test: () => {
      expect(q).isDeclared();
    },
  },
];
const varXTests = [
  {
    section: `variable X`,
    description: `variable X exists`,
    test: () => {
      expect(x).isDeclared();
    },
  },
  {
    section: `variable X`,
    description: `variable X not.isDeclared`,
    test: () => {
      expect(x).not.isDeclared();
    },
  },
];
const varFruitTests = [
  {
    section: `variable fruit`,
    description: `variable fruit exists`,
    test: () => {
      expect(fruit).isDeclared();
    },
  },
  {
    section: `variable fruit`,
    description: `variable fruit is "apple"`,
    test: () => {
      expect(fruit).toBe(`apple`);
    },
  },
];
const functionAddTests = [
  {
    section: `function add`,
    description: `add(3,1) is 4`,
    test: () => {
      expect(add(3, 1)).toBe(4);
    },
  },
  {
    section: `function add`,
    description: `add(4,4) is 8`,
    test: () => {
      expect(add(4, 4)).toBe(8);
    },
  },
];

const objectComparisonTests = [
  {
    section: `object comparison`,
    description: `object comparison {} and {}`,
    test: () => {
      expect({}).toBeSameObjectAs({});
    },
  },
  {
    section: `object comparison`,
    description: `object comparison { a: 1 } and {}`,
    test: () => {
      expect({ a: 1 }).toBeSameObjectAs({});
    },
  },
  {
    section: `object comparison`,
    description: `object comparison expect({ a: 1 }).toBeSameObjectAs({ a: 1 });`,
    test: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 1 });
    },
  },
  {
    section: `object comparison`,
    description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 2 });`,
    test: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 2 });
    },
  },
  {
    section: `object comparison`,
    description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ b: 1 });`,
    test: () => {
      expect({ a: 1 }).toBeSameObjectAs({ b: 1 });
    },
  },
];
const functionSubtractTests = [
  {
    section: `function subtract`,
    description: `subtract exists`,
    test: () => {
      expect(subtract).isDeclared();
    },
  },
  {
    section: `function subtract`,
    description: `subtract is a function`,
    test: () => {
      expect(subtract).toBeFunction();
    },
  },
  {
    section: `function subtract`,
    description: `subtract(3,1) is 2`,
    test: () => {
      expect(subtract(3, 1)).toBe(2);
    },
  },
];

const arrayComparisonTests = [
  {
    section: `array comparison`,
    description: `array comparison [] []`,
    test: () => {
      expect([]).toBeSameArrayAs([]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [] [1]`,
    test: () => {
      expect([]).toBeSameArrayAs([1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] []`,
    test: () => {
      expect([1]).toBeSameArrayAs([]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] [1]`,
    test: () => {
      expect([1]).toBeSameArrayAs([1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] [1,2]`,
    test: () => {
      expect([1]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [2,1] [2,1]`,
    test: () => {
      expect([2, 1]).toBeSameArrayAs([2, 1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1,2] [1,2] `,
    test: () => {
      expect([1, 2]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [2,1] [1,2] `,
    test: () => {
      expect([2, 1]).toBeSameArrayAs([1, 2]);
    },
  },
];
const numberToStringTests = [
  {
    section: `Number To String`,
    description: `numberToString is a function`,
    test: () => {
      expect(numberToString).toBeFunction();
    },
  },
  {
    section: `Number To String`,
    description: `Number uses method "String"`,
    test: () => {
      expect(numberToString).toUseMethod("String");
    },
  },
  {
    section: `Number To String`,
    description: `Number returns a string`,
    test: () => {
      expect(numberToString(1)).isString();
    },
  },
];
// Function Method Check
const arr3Tests = [
  {
    section: `arr3`,
    description: `arr3 exists`,
    test: () => {
      expect(arr3).isDeclared();
    },
  },
  {
    section: `arr3`,
    description: `arr3 is an array`,
    test: () => {
      expect(arr3).toBeArray();
    },
  },
  {
    section: `arr3`,
    description: `arr3 has length of 3`,
    test: () => {
      expect(arr3).toHaveArrayLength(3);
    },
  },
];

const boolTests = [
  {
    section: `b`,
    description: `b is declared`,
    test: () => {
      expect(b).isDeclared();
    },
  },
  {
    section: `b`,
    description: `b is a boolean`,
    test: () => {
      expect(b).toBeBoolean();
    },
  },
  {
    section: `b`,
    description: `b is true`,
    test: () => {
      expect(b).toBe(true);
    },
  },
];

const zTests = {
  // varQTests,
  // varXTests,
  varFruitTests,
  functionAddTests,
  functionSubtractTests,
  // numberToStringTests,
  arr3Tests,
  boolTests,
};
