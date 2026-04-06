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

Objects are declared with curly braces <b>{ }</b>. Inside, you write <b>key: value</b> pairs separated by commas. The key is the name, the value is the data. Example:<br><br>

var obj = { key: value };<br><br>

Keys are always strings (quotes optional, but usually no quotes).<br><br>

Values can be any type: strings, numbers, booleans, arrays, even other objects.<br><br>

Try running the code and look at the output!`,
      sampleCode: `var emptyObject = {};

console.log(emptyObject);      

var person = {
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

<b>make</b> is a key, <b>"Toyota"</b> is its value.<br>
<b>model</b> is a key, <b>"Corolla"</b> is its value.<br>
<b>year</b> is a key, <b>2020</b> is its value.<br>
<b>electric</b> is a key, <b>false</b> is its value.<br><br>

Properties can hold any type of value including arrays and other objects!<br><br>

Try adding a new property (key AND value).`,
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
          description: `has key/value pair of "firstName" and "Bethany"`,
          test: () => {
            expect(person).toHaveKeyValuePair('firstName', 'Bethany');
          },
        },
        {
          description: `has key "lastName"`,
          test: () => {
            expect(person).toHaveKey('lastName');
          },
        },
        {
          description: `has key/value pair of "lastName" and "Wagner"`,
          test: () => {
            expect(person).toHaveKeyValuePair('lastName', 'Wagner');
          },
        },
        {
          description: `has key "isTeacher"`,
          test: () => {
            expect(person).toHaveKey('isTeacher');
          },
        },
        {
          description: `has key/value pair of "isTeacher" and true`,
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
          description: `has key/value pair of "students" and 100`,
          test: () => {
            expect(person).toHaveKeyValuePair('students', 100);
          },
        },
        {
          description: `is correct value`,
          test: () => {
            expect(person).toBe({
              firstName: 'Bethany',
              lastName: 'Wagner',
              isTeacher: true,
              students: 100,
            });
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'jsClassroomObject',
      title: `var "jsClassroom"`,
      instructions: `Declare a variable named "jsClassroom" an object. Read tests closely for keys and values`,
      sampleCode: `var jsClassroom = {

};`,
      tests: [
        {
          description: `is declared`,
          test: () => {
            expect(jsClassroom).toBeDeclared();
          },
        },
        {
          description: `has a value`,
          test: () => {
            expect(jsClassroom).toHaveValue();
          },
        },
        {
          description: `is an object`,
          test: () => {
            expect(jsClassroom).toBeObject();
          },
        },
        {
          description: `has 2 keys`,
          test: () => {
            expect(jsClassroom).toHaveObjectKeyCount(2);
          },
        },
        {
          description: `has key "class"`,
          test: () => {
            expect(jsClassroom).toHaveKey('class');
          },
        },
        {
          description: `has key/value pair of "class" and "javascript"`,
          test: () => {
            expect(jsClassroom).toHaveKeyValuePair('class', 'javascript');
          },
        },
        {
          description: `has key "grades"`,
          test: () => {
            expect(jsClassroom).toHaveKey('grades');
          },
        },
        {
          description: `key "grades" is [85, 94, 82, 79, 77, 88, 96, 95, 57, 100]`,
          test: () => {
            expect(jsClassroom.grades).toBe([
              85, 94, 82, 79, 77, 88, 96, 95, 57, 100,
            ]);
          },
        },
        {
          description: `is correct value`,
          test: () => {
            expect(jsClassroom).toBe({
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
          description: `has key/value pair of "total" and 5`,
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
          description: `has key/value pair of "onlinePurchase" and true`,
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

You can also use <b>bracket notation</b>: <b>object["key"]</b> (useful when the key is stored in a variable or has special characters).<br><br>

Both do the same thing. Dot notation is more common and easier to read.<br><br>

Try running the code and see how each property is accessed.`,
      sampleCode: `var person = {
  firstName: "Billy",
  lastName: "Baxter",
  age: 30
};

// Dot notation
console.log(person.firstName);  // "Billy"
console.log(person.age);        // 30

// Bracket notation (ignore the warning)
console.log(person["lastName"]); // "Baxter"

// Bracket notation with a variable
var theKey = "lastName";
console.log(person[theKey]); 
`,
    },

    {
      type: 'test',
      key: 'accessPropertyTest',
      title: `Accessing a Property`,
      instructions: `Declare a variable named <b>city</b> that is an object with a property <b>name</b> set to <b>"London"</b> and a property <b>population</b> set to <b>9000000</b> (9 million).<br><br>

Use two console.log to log both values separately.<br><br>`,
      sampleCode: ``,
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
          description: `console.log the city.name`,
          test: () => {
            expectConsole().toHaveLogged('London');
          },
        },

        {
          description: `console.log the city.population`,
          test: () => {
            expectConsole().toHaveLogged(9000000);
          },
        },
      ],
    },
    {
      type: 'test',
      key: 'accessPropertyBracketTest',
      title: `Bracket Notation`,
      instructions: `Use console.log to log the properties of the object.<br><br>
      
      Use bracket notation to access maker. i.e. obj["maker"]<br><br>
      Use bracket notation to access year. i.e. obj[keyName]<br>`,
      sampleCode: `var toy = {
      maker: "Hasbro",
      year: 1999,
      }
      var keyName = "year"
      `,

      tests: [
        {
          description: `variables are declared by default (toy, keyName... reset if this is red)`,
          test: () => {
            expect(toy).toBeDeclared();
            expect(keyName).toBeDeclared();
            expect(toy).toBe({
              maker: 'Hasbro',
              year: 1999,
            });
            expect(keyName).toBe('year');
          },
        },
        {
          description: `uses bracket notation`,
          test: () => {
            expectCode().toUseBracketNotation();
          },
        },
        {
          description: `console.log the "maker" using bracket notation (you may see a warning in the editor, that's OK)`,
          test: () => {
            expectConsole().toHaveLogged('Hasbro');
          },
        },
        {
          description: `should NOT use dot notation`,
          test: () => {
            expectCode().toNotUseDotNotation();
          },
        },
        {
          description: `console.log "Hasbro"`,
          test: () => {
            expectConsole().toHaveLogged('Hasbro');
          },
        },
        {
          description: `console.log 1999`,
          test: () => {
            expectConsole().toHaveLogged(1999);
          },
        },
      ],
    },
    {
      type: 'lesson',
      key: 'lesson-setting',
      title: 'Setting Properties',
      text: `You can also change the value of a property. It's about the same way you would change a variable:<br><br>

          var obj = {
              name: "Zoe"
          };<br><br>

          obj.name = "Zachary";
    `,
      sampleCode: `var obj = {
      name: "Zoe"
    };

    console.log(obj);

    obj.name = "Zachary";

    console.log(obj);`,
    },
    {
      type: 'test',
      key: 'setPropertyTest',
      title: `Setting a Property`,
      instructions: `Leave <b>book</b> alone, we're going to change it's properties.<br><br>
      Change its title to "Dune".<br><br>
      Change its pages to 412.<br><br>
      Change its year to 1965.<br><br>

Then add a new property <b>author</b> to the <b>book</b> object and set it to <b>"Frank Herbert"</b> using dot notation.`,
      sampleCode: `// Don't touch this!
var book = {
  title: "Moby Dick",
  pages: 720,
  year: 1851
};
// Just add new code below!
`,
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
          description: `change "book" key "title" to value "Dune"`,
          test: () => {
            expect(book).toHaveKeyValuePair('title', 'Dune');
          },
        },
        {
          description: `change "book" key "pages" to value 412`,
          test: () => {
            expect(book).toHaveKeyValuePair('pages', 412);
          },
        },
        {
          description: `change "book" key "year" to value 1965`,
          test: () => {
            expect(book).toHaveKeyValuePair('year', 1965);
          },
        },
        {
          description: `add "book" key "author" to value "Frank Herbert"`,
          test: () => {
            expect(book).toHaveKeyValuePair('author', 'Frank Herbert');
          },
        },
        {
          description: `should use dot notation`,
          test: () => {
            expectCode().toUseDotNotation();
          },
        },
      ],
    },
  ],
};

if (typeof module !== 'undefined') module.exports = test;
