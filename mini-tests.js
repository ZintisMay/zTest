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
    description: "Failing Test",
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
      expect(subtract).isDeclared();
    },
  },
  {
    description: "subtract is a function",
    function: () => {
      expect(subtract).isFunction();
    },
  },
  {
    description: "subtract 3 - 1 = 2",
    function: () => {
      expect(subtract(3, 1)).toBe(2);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([]).toBeSameArrayAs([]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([]).toBeSameArrayAs([1]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([1]).toBeSameArrayAs([]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([1]).toBeSameArrayAs([1]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([1]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([2, 1]).toBeSameArrayAs([2, 1]);
    },
  },
  {
    description: "array comparison",
    function: () => {
      expect([1, 2]).toBeSameArrayAs([1, 2]);
    },
  },
];
