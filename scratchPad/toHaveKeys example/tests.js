zTestSuite = {};
zTestSuite.student = {
  title: "function student",
  tests: [
    {
      description: `student is declared`,
      test: () => {
        expect(student).toBeDeclared();
      },
    },
    {
      description: `student has a value`,
      test: () => {
        expect(student).toHaveValue();
      },
    },
    {
      description: `student is a function`,
      test: () => {
        expect(student).toBeObject();
      },
    },
    {
      description: `student has keys: name, major, minor, gpa`,
      test: () => {
        expect(student).toHaveKeys("name", "major", "minor", "gpa");
      },
    },
    {
      description: `student has key:value pair name:"Jake"`,
      test: () => {
        expect(student).toHaveKeyValuePair("name", "Jake");
      },
    },
    {
      description: `student has key:value pair major:"Psychology"`,
      test: () => {
        expect(student).toHaveKeyValuePair("major", "Psychology");
      },
    },
    {
      description: `student has key:value pair minor:"Anthropology"`,
      test: () => {
        expect(student).toHaveKeyValuePair("minor", "Anthropology");
      },
    },
    {
      description: `student has key:value pair gpa:3.0`,
      test: () => {
        expect(student).toHaveKeyValuePair("gpa", 3.0);
      },
    },
    {
      description: `student has key:value pair livesOnCampus:false`,
      test: () => {
        expect(student).toHaveKeyValuePair("livesOnCampus", false);
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
