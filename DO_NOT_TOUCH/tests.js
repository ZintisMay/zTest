const varXTests = [
  {
    section: `variable x`,
    description: `variable x exists`,
    test: () => {
      expect(x).isDeclared();
    },
  },
  {
    section: `variable x`,
    description: `variable x is not declared`,
    test: () => {
      expect(x).toBe(undefined);
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

const functionMultiplyTests = [
  {
    section: `function multiply`,
    description: `multiply exists`,
    test: () => {
      expect(multiply).isDeclared();
    },
  },
  {
    section: `function multiply`,
    description: `multiply is a function`,
    test: () => {
      expect(multiply).toBeFunction();
    },
  },
  {
    section: `function multiply`,
    description: `multiply(3,4) is 12`,
    test: () => {
      expect(multiply(3, 4)).toBe(12);
    },
  },
];

const functionDivideTests = [
  {
    section: `function divide`,
    description: `divide exists`,
    test: () => {
      expect(divide).isDeclared();
    },
  },
  {
    section: `function divide`,
    description: `divide is a function`,
    test: () => {
      expect(divide).toBeFunction();
    },
  },
  {
    section: `function divide`,
    description: `divide(10,2) is 5`,
    test: () => {
      expect(divide(10, 2)).toBe(5);
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
      expect(numberToString(1)).toBeString();
    },
  },
];

const stringToNumberTests = [
  {
    section: `String to Number`,
    description: `stringToNumber is a function`,
    test: () => {
      expect(stringToNumber).toBeFunction();
    },
  },
  {
    section: `String to Number`,
    description: `stringToNumber uses method "String"`,
    test: () => {
      expect(stringToNumber).toUseMethod("Number");
    },
  },
  {
    section: `String to Number`,
    description: `stringToNumber returns a string`,
    test: () => {
      expect(stringToNumber("11")).toBeNumber();
    },
  },
  {
    section: `String to Number`,
    description: `stringToNumber returns 11`,
    test: () => {
      expect(stringToNumber("11")).toBe(11);
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

const MINI_TESTS = [
  ...varXTests,
  ...boolTests,
  ...varFruitTests,
  ...arr3Tests,
  ...functionAddTests,
  ...functionSubtractTests,
  ...functionMultiplyTests,
  ...functionDivideTests,
  ...numberToStringTests,
  ...stringToNumberTests,
];
