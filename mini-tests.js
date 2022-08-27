const MINI_TESTS = [
  {
    description: "add(3+1) is 4",
    function: () => {
      expect(add(3, 1)).toBe(4);
    },
  },
  {
    description: "add(4 + 4) is 8",
    function: () => {
      expect(add(4, 4)).toBe(8);
    },
  },
  {
    description: "  expect(add(3 + 7)).toBe(11);    ",
    function: () => {
      expect(add(3 + 7)).toBe(11);
    },
  },
  {
    description: "object comparison empty",
    function: () => {
      expect({}).toBeSameObjectAs({});
    },
  },
  {
    description: "object comparison one key vs none",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({});
    },
  },
  {
    description:
      "object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 1 });",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 1 });
    },
  },
  {
    description:
      "object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 2 });",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 2 });
    },
  },
  {
    description: "subtract exists",
    function: () => {
      mTest(subtract).exists();
    },
  },
  {
    description: "subtract is a function",
    function: () => {
      mTest(subtract).isFunction();
    },
  },
];
