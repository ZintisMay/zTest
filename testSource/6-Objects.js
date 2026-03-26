const test =   {
    id: '6',
    title: 'Objects',
    help: 'https://www.w3schools.com/js/js_objects.asp',
    items: [
      { type: 'test', key: 'personObject',
        title: `var "person"`,
        instructions: `Declare a variable named "person", an object. Read tests closely for keys and values.`,
        tests: [
          { description: `is declared`, test: () => {
              expect(person).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(person).toHaveValue();
            } },
          { description: `is an object`, test: () => {
              expect(person).toBeObject();
            } },
          { description: `has 4 keys`, test: () => {
              expect(person).toHaveObjectKeyCount(4);
            } },
          { description: `has key "firstName"`, test: () => {
              expect(person).toHaveKey('firstName');
            } },
          { description: `has key/value pair of "firstName"/"Zintis"`, test: () => {
              expect(person).toHaveKeyValuePair('firstName', 'Zintis');
            } },
          { description: `has key "lastName"`, test: () => {
              expect(person).toHaveKey('lastName');
            } },
          { description: `has key/value pair of "lastName"/"May"`, test: () => {
              expect(person).toHaveKeyValuePair('lastName', 'May');
            } },
          { description: `has key "isTeacher"`, test: () => {
              expect(person).toHaveKey('isTeacher');
            } },
          { description: `has key/value pair of "isTeacher"/true`, test: () => {
              expect(person).toHaveKeyValuePair('isTeacher', true);
            } },
          { description: `has key "students"`, test: () => {
              expect(person).toHaveKey('students');
            } },
          { description: `has key/value pair of "students"/100`, test: () => {
              expect(person).toHaveKeyValuePair('students', 100);
            } },
          { description: `is correct value`, test: () => {
              expect(person).toBe({
                firstName: 'Zintis',
                lastName: 'May',
                isTeacher: true,
                students: 100,
              });
            } }
        ],
      },
      { type: 'test', key: 'jsClassObject',
        title: `var "jsClass"`,
        instructions: `Declare a variable named "jsClass" an object. Read tests closely for keys and values`,
        tests: [
          { description: `is declared`, test: () => {
              expect(jsClass).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(jsClass).toHaveValue();
            } },
          { description: `is an object`, test: () => {
              expect(jsClass).toBeObject();
            } },
          { description: `has 2 keys`, test: () => {
              expect(jsClass).toHaveObjectKeyCount(2);
            } },
          { description: `has key "class"`, test: () => {
              expect(jsClass).toHaveKey('class');
            } },
          { description: `has key/value pair of "class"/"javascript"`, test: () => {
              expect(jsClass).toHaveKeyValuePair('class', 'javascript');
            } },
          { description: `has key "grades"`, test: () => {
              expect(jsClass).toHaveKey('grades');
            } },
          { description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`, test: () => {
              expect(jsClass.grades).toBe([
                85, 94, 82, 79, 77, 88, 96, 95, 57, 100,
              ]);
            } },
          { description: `is correct value`, test: () => {
              expect(jsClass).toBe({
                class: 'javascript',
                grades: [85, 94, 82, 79, 77, 88, 96, 95, 57, 100],
              });
            } }
        ],
      },
      { type: 'test', key: 'shoppingCartObject',
        title: `var "shoppingCart"`,
        instructions: `Declare a variable named "shoppingCart", an object. Read tests closely for keys and values`,
        tests: [
          { description: `is declared`, test: () => {
              expect(shoppingCart).toBeDeclared();
            } },
          { description: `has a value`, test: () => {
              expect(shoppingCart).toHaveValue();
            } },
          { description: `is an object`, test: () => {
              expect(shoppingCart).toBeObject();
            } },
          { description: `has 3 keys`, test: () => {
              expect(shoppingCart).toHaveObjectKeyCount(3);
            } },
          { description: `has key "total"`, test: () => {
              expect(shoppingCart).toHaveKey('total');
            } },
          { description: `key "total" is a number`, test: () => {
              expect(shoppingCart.total).toBeNumber();
            } },
          { description: `has key/value pair of "total"/5`, test: () => {
              expect(shoppingCart).toHaveKeyValuePair('total', 5);
            } },
          { description: `has key "onlinePurchase"`, test: () => {
              expect(shoppingCart).toHaveKey('onlinePurchase');
            } },
          { description: `key "onlinePurchase" is a boolean`, test: () => {
              expect(shoppingCart.onlinePurchase).toBeBoolean();
            } },
          { description: `has key/value pair of "onlinePurchase"/true`, test: () => {
              expect(shoppingCart).toHaveKeyValuePair('onlinePurchase', true);
            } },
          { description: `has key "items"`, test: () => {
              expect(shoppingCart).toHaveKey('items');
            } },
          { description: `key "items" is an array`, test: () => {
              expect(shoppingCart.items).toBeArray();
            } },
          { description: `key "items" is an array of length 3`, test: () => {
              expect(shoppingCart.items).toHaveLength(3);
            } },
          { description: `key "items" is ["toothbrush", "toothpaste", "floss"]`, test: () => {
              expect(shoppingCart.items).toBe([
                'toothbrush',
                'toothpaste',
                'floss',
              ]);
            } },
          { description: `is correct value`, test: () => {
              expect(shoppingCart).toBe({
                items: ['toothbrush', 'toothpaste', 'floss'],
                total: 5,
                onlinePurchase: true,
              });
            } }
        ],
      }
    ],
  };

if (typeof module !== 'undefined') module.exports = test;
