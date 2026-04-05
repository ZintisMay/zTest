const test = {
  id: '6',
  title: 'Objects',
  help: 'https://www.w3schools.com/js/js_objects.asp',
  items: [
    {
      type: 'lesson',
      key: 'lesson-what-is-object',
      title: 'What is an Object?',
      text: `An object is a collection of related data, grouped together under one variable.<br><br>

Instead of making separate variables for a person's first name, last name, and age, you can put them all in one object.<br><br>

Objects are declared with curly braces <b>{ }</b>. Inside, you write <b>key: value</b> pairs separated by commas. The key is the name, the value is the data.<br><br>

Keys are always strings (you don't need quotes around them). Values can be any type — strings, numbers, booleans, arrays, even other objects.<br><br>

Try running the code and look at the output!`,
      sampleCode: `var person = {
  firstName: "Amy",
  lastName: "Miller",
  age: 30,
  isTeacher: true
};

console.log(person);`,
    },
    {
      type: 'lesson',
      key: 'lesson-properties',
      title: 'Properties',
      text: `Each key-value pair in an object is called a <b>property</b>.<br><br>

The <b>key</b> is the property name. The <b>value</b> is what it holds.<br><br>

In this example:<br><br>

<b>firstName</b> is a key, <b>"Zintis"</b> is its value.<br>
<b>age</b> is a key, <b>30</b> is its value.<br>
<b>isTeacher</b> is a key, <b>true</b> is its value.<br><br>

Properties can hold any type of value — including arrays and other objects!<br><br>

Try adding a new property to the object below.`,
      sampleCode: `var car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  electric: false
};

console.log(car);`,
    },
    {
      type: 'test',
      key: 'personObject',
      title: `var "person"`,
      instructions: `Declare a variable named "person", an object. Read tests closely for keys and values.`,
      sampleCode: `var person = {

};`,
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
            expect(person).toHaveKey('firstName');
          },
        },
        {
          description: `has key/value pair of "firstName"/"Zintis"`,
          test: () => {
            expect(person).toHaveKeyValuePair('firstName', 'Zintis');
          },
        },
        {
          description: `has key "lastName"`,
          test: () => {
            expect(person).toHaveKey('lastName');
          },
        },
        {
          description: `has key/value pair of "lastName"/"May"`,
          test: () => {
            expect(person).toHaveKeyValuePair('lastName', 'May');
          },
        },
        {
          description: `has key "isTeacher"`,
          test: () => {
            expect(person).toHaveKey('isTeacher');
          },
        },
        {
          description: `has key/value pair of "isTeacher"/true`,
          test: () => {
            expect(person).toHaveKeyValuePair('isTeacher', true);
          },
        },
        {
          description: `has key "students"`,
          test: () => {
            expect(person).toHaveKey('students');
          },
        },
        {
          description: `has key/value pair of "students"/100`,
          test: () => {
            expect(person).toHaveKeyValuePair('students', 100);
          },
        },
        {
          description: `is correct value`,
          test: () => {
            expect(person).toBe({
              firstName: 'Zintis',
              lastName: 'May',
              isTeacher: true,
              students: 100,
            });
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'jsClassObject',
      title: `var "jsClass"`,
      instructions: `Declare a variable named "jsClass" an object. Read tests closely for keys and values`,
      sampleCode: `var jsClass = {

};`,
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
            expect(jsClass).toHaveKey('class');
          },
        },
        {
          description: `has key/value pair of "class"/"javascript"`,
          test: () => {
            expect(jsClass).toHaveKeyValuePair('class', 'javascript');
          },
        },
        {
          description: `has key "grades"`,
          test: () => {
            expect(jsClass).toHaveKey('grades');
          },
        },
        {
          description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`,
          test: () => {
            expect(jsClass.grades).toBe([
              85, 94, 82, 79, 77, 88, 96, 95, 57, 100,
            ]);
          },
        },
        {
          description: `is correct value`,
          test: () => {
            expect(jsClass).toBe({
              class: 'javascript',
              grades: [85, 94, 82, 79, 77, 88, 96, 95, 57, 100],
            });
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'shoppingCartObject',
      title: `var "shoppingCart"`,
      instructions: `Declare a variable named "shoppingCart", an object. Read tests closely for keys and values`,
      sampleCode: `var shoppingCart = {

};`,
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
            expect(shoppingCart).toHaveKey('total');
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
            expect(shoppingCart).toHaveKeyValuePair('total', 5);
          },
        },
        {
          description: `has key "onlinePurchase"`,
          test: () => {
            expect(shoppingCart).toHaveKey('onlinePurchase');
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
            expect(shoppingCart).toHaveKeyValuePair('onlinePurchase', true);
          },
        },
        {
          description: `has key "items"`,
          test: () => {
            expect(shoppingCart).toHaveKey('items');
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
            expect(shoppingCart.items).toBe([
              'toothbrush',
              'toothpaste',
              'floss',
            ]);
          },
        },
        {
          description: `is correct value`,
          test: () => {
            expect(shoppingCart).toBe({
              items: ['toothbrush', 'toothpaste', 'floss'],
              total: 5,
              onlinePurchase: true,
            });
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-accessing',
      title: 'Accessing Properties',
      text: `To read a value from an object, use <b>dot notation</b>: <b>object.key</b><br><br>

You can also use <b>bracket notation</b>: <b>object["key"]</b> — useful when the key is stored in a variable or has special characters.<br><br>

Both do the same thing. Dot notation is more common and easier to read.<br><br>

Try running the code and see how each property is accessed.`,
      sampleCode: `var person = {
  firstName: "Zintis",
  lastName: "May",
  age: 30
};

// Dot notation
console.log(person.firstName);  // "Zintis"
console.log(person.age);        // 30

// Bracket notation
console.log(person["lastName"]); // "May"`,
    },
    {
      type: 'test',
      key: 'accessPropertyTest',
      title: `Accessing a Property`,
      instructions: `Declare a variable named <b>city</b> that is an object with a property <b>name</b> set to <b>"London"</b> and a property <b>population</b> set to <b>9000000</b>.<br><br>

Then declare a variable named <b>cityName</b> and set it to the <b>name</b> property of <b>city</b> using dot notation.`,
      sampleCode: `var city = {

};

var cityName = // access city.name here`,
      tests: [
        {
          description: `"city" is declared`,
          test: () => {
            expect(city).toBeDeclared();
          },
        },
        {
          description: `"city" is an object`,
          test: () => {
            expect(city).toBeObject();
          },
        },
        {
          description: `"city" has key "name" with value "London"`,
          test: () => {
            expect(city).toHaveKeyValuePair('name', 'London');
          },
        },
        {
          description: `"city" has key "population" with value 9000000`,
          test: () => {
            expect(city).toHaveKeyValuePair('population', 9000000);
          },
        },
        {
          description: `"cityName" is declared`,
          test: () => {
            expect(cityName).toBeDeclared();
          },
        },
        {
          description: `"cityName" is "London"`,
          test: () => {
            expect(cityName).toBe('London');
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-setting',
      title: 'Setting Properties',
      text: `You can add or update properties on an object after it's been created using dot notation: <b>object.key = value</b><br><br>

If the key already exists, this updates its value. If it doesn't exist, it creates a new property.<br><br>

You can also use bracket notation: <b>object["key"] = value</b><br><br>

Try running the code to see properties being added and updated.`,
      sampleCode: `var car = {
  make: "Toyota"
};

// Add a new property
car.color = "blue";
console.log(car.color);  // "blue"

// Update an existing property
car.make = "Honda";
console.log(car.make);   // "Honda"

console.log(car);`,
    },
    {
      type: 'test',
      key: 'setPropertyTest',
      title: `Setting a Property`,
      instructions: `Declare a variable named <b>book</b> that is an object with a property <b>title</b> set to <b>"Dune"</b>.<br><br>

Then add a new property <b>author</b> to the <b>book</b> object and set it to <b>"Frank Herbert"</b> using dot notation.`,
      sampleCode: `var book = {

};

// Add the author property here`,
      tests: [
        {
          description: `"book" is declared`,
          test: () => {
            expect(book).toBeDeclared();
          },
        },
        {
          description: `"book" is an object`,
          test: () => {
            expect(book).toBeObject();
          },
        },
        {
          description: `"book" has key "title" with value "Dune"`,
          test: () => {
            expect(book).toHaveKeyValuePair('title', 'Dune');
          },
        },
        {
          description: `"book" has key "author"`,
          test: () => {
            expect(book).toHaveKey('author');
          },
        },
        {
          description: `"book" has key "author" with value "Frank Herbert"`,
          test: () => {
            expect(book).toHaveKeyValuePair('author', 'Frank Herbert');
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
