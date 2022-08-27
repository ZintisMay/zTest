const varQTests = [
  {
    section: `variable Q`,
    description: `variable Q exists`,
    function: () => {
      expect(q).isDeclared();
    },
  },
];
const varXTests = [
  {
    section: `variable X`,
    description: `variable X exists`,
    function: () => {
      expect(x).isDeclared();
    },
  },
  {
    section: `variable X`,
    description: `variable X not.isDeclared`,
    function: () => {
      expect(x).not.isDeclared();
    },
  },
];
const varFruitTests = [
  {
    section: `variable fruit`,
    description: `variable fruit exists`,
    function: () => {
      expect(fruit).isDeclared();
    },
  },
  {
    section: `variable fruit`,
    description: `variable fruit is "apple"`,
    function: () => {
      expect(fruit).toBe(`apple`);
    },
  },
];
const functionAddTests = [
  {
    section: `function add`,
    description: `add(3,1) is 4`,
    function: () => {
      expect(add(3, 1)).toBe(4);
    },
  },
  {
    section: `function add`,
    description: `add(4,4) is 8`,
    function: () => {
      expect(add(4, 4)).toBe(8);
    },
  },
];

const objectComparisonTests = [
  {
    section: `object comparison`,
    description: `object comparison {} and {}`,
    function: () => {
      expect({}).toBeSameObjectAs({});
    },
  },
  {
    section: `object comparison`,
    description: `object comparison { a: 1 } and {}`,
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({});
    },
  },
  {
    section: `object comparison`,
    description: `object comparison expect({ a: 1 }).toBeSameObjectAs({ a: 1 });`,
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 1 });
    },
  },
  {
    section: `object comparison`,
    description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 2 });`,
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 2 });
    },
  },
  {
    section: `object comparison`,
    description: `object comparison   expect({ a: 1 }).toBeSameObjectAs({ b: 1 });`,
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ b: 1 });
    },
  },
];
const functionSubtractTests = [
  {
    section: `function subtract`,
    description: `subtract exists`,
    function: () => {
      expect(subtract).isDeclared();
    },
  },
  {
    section: `function subtract`,
    description: `subtract is a function`,
    function: () => {
      expect(subtract).toBeFunction();
    },
  },
  {
    section: `function subtract`,
    description: `subtract(3,1) is 2`,
    function: () => {
      expect(subtract(3, 1)).toBe(2);
    },
  },
];

const arrayComparisonTests = [
  {
    section: `array comparison`,
    description: `array comparison [] []`,
    function: () => {
      expect([]).toBeSameArrayAs([]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [] [1]`,
    function: () => {
      expect([]).toBeSameArrayAs([1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] []`,
    function: () => {
      expect([1]).toBeSameArrayAs([]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] [1]`,
    function: () => {
      expect([1]).toBeSameArrayAs([1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1] [1,2]`,
    function: () => {
      expect([1]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [2,1] [2,1]`,
    function: () => {
      expect([2, 1]).toBeSameArrayAs([2, 1]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [1,2] [1,2] `,
    function: () => {
      expect([1, 2]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: `array comparison`,
    description: `array comparison [2,1] [1,2] `,
    function: () => {
      expect([2, 1]).toBeSameArrayAs([1, 2]);
    },
  },
];
const numberToStringTests = [
  {
    section: `Number To String`,
    description: `numberToString is a function`,
    function: () => {
      expect(numberToString).toBeFunction();
    },
  },
  {
    section: `Number To String`,
    description: `Number uses method "String"`,
    function: () => {
      expect(numberToString).toUseMethod("String");
    },
  },
  {
    section: `Number To String`,
    description: `Number returns a string`,
    function: () => {
      expect(numberToString(1)).isString();
    },
  },
];
// Function Method Check
const arr3Tests = [
  {
    section: `arr3`,
    description: `arr3 exists`,
    function: () => {
      expect(arr3).isDeclared();
    },
  },
  {
    section: `arr3`,
    description: `arr3 is an array`,
    function: () => {
      expect(arr3).toBeArray();
    },
  },
  {
    section: `arr3`,
    description: `arr3 has length of 3`,
    function: () => {
      expect(arr3).toHaveArrayLength(3);
    },
  },
];

const boolTests = [
  {
    section: `b`,
    description: `b is declared`,
    function: () => {
      expect(b).isDeclared();
    },
  },
  {
    section: `b`,
    description: `b is a boolean`,
    function: () => {
      expect(b).toBeBoolean();
    },
  },
  {
    section: `b`,
    description: `b is true`,
    function: () => {
      expect(b).toBe(true);
    },
  },
];

const MINI_TESTS = [
  ...varQTests,
  ...varXTests,
  ...varFruitTests,
  ...functionAddTests,
  ...objectComparisonTests,
  ...functionSubtractTests,
  ...arrayComparisonTests,
  ...numberToStringTests,
  ...arr3Tests,
  ...boolTests,
];
