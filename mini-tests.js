const MINI_TESTS = [
  {
    section: "variable X",
    description: "variable X exists",
    function: () => {
      expect(x).isDeclared();
    },
  },
  {
    section: "variable fruit",
    description: "variable fruit exists",
    function: () => {
      expect(fruit).isDeclared();
    },
  },
  {
    section: "variable fruit",
    description: "variable fruit is apple",
    function: () => {
      expect(fruit).toBe("apple");
    },
  },
  {
    section: "function add",
    description: "add(3,1) is 4",
    function: () => {
      expect(add(3, 1)).toBe(4);
    },
  },
  {
    section: "function add",
    description: "add(4,4) is 8",
    function: () => {
      expect(add(4, 4)).toBe(8);
    },
  },
  {
    section: "object comparison",
    description: "object comparison empty",
    function: () => {
      expect({}).toBeSameObjectAs({});
    },
  },
  {
    section: "object comparison",
    description: "object comparison one key vs none",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({});
    },
  },
  {
    section: "object comparison",
    description:
      "object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 1 });",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 1 });
    },
  },
  {
    section: "object comparison",
    description:
      "object comparison   expect({ a: 1 }).toBeSameObjectAs({ a: 2 });",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ a: 2 });
    },
  },
  {
    section: "object comparison",
    description:
      "object comparison   expect({ a: 1 }).toBeSameObjectAs({ b: 1 });",
    function: () => {
      expect({ a: 1 }).toBeSameObjectAs({ b: 1 });
    },
  },
  {
    section: "function subtract",
    description: "subtract exists",
    function: () => {
      expect(subtract).isDeclared();
    },
  },
  {
    section: "function subtract",
    description: "subtract is a function",
    function: () => {
      expect(subtract).isFunction();
    },
  },
  {
    section: "function subtract",
    description: "subtract(3,1) is 2",
    function: () => {
      expect(subtract(3, 1)).toBe(2);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [] []",
    function: () => {
      expect([]).toBeSameArrayAs([]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [] [1]",
    function: () => {
      expect([]).toBeSameArrayAs([1]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [1] []",
    function: () => {
      expect([1]).toBeSameArrayAs([]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [1] [1]",
    function: () => {
      expect([1]).toBeSameArrayAs([1]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [1] [1,2]",
    function: () => {
      expect([1]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [2,1] [2,1]",
    function: () => {
      expect([2, 1]).toBeSameArrayAs([2, 1]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [1,2] [1,2] ",
    function: () => {
      expect([1, 2]).toBeSameArrayAs([1, 2]);
    },
  },
  {
    section: "array comparison",
    description: "array comparison [2,1] [1,2] ",
    function: () => {
      expect([2, 1]).toBeSameArrayAs([1, 2]);
    },
  },
];
