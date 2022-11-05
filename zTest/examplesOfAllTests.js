const zTestSuite = {};

zTestSuite.isNotDefinedTest = {
  title: `var isNotDefinedTest test (should fail)`,
  tests: [
    {
      description: `isNotDefined is defined`,
      test: () => expect(isNotDefined).toBeDeclared(),
    },
  ],
};

zTestSuite.isDeclaredTest = {
  title: `var 'isDeclared' tests`,
  tests: [
    {
      description: `isDeclared is declared`,
      test: () => expect(isDeclared).toBeDeclared(),
    },
  ],
};

zTestSuite.isDefinedTest = {
  title: `var 'isDefined' tests`,
  tests: [
    {
      description: `isDefined is defined`,
      test: () => expect(isDefined).toBeDeclared(),
    },
  ],
};

zTestSuite.hasValueTest = {
  title: `var 'hasValue' tests`,
  tests: [
    {
      description: `hasValue has a value`,
      test: () => expect(hasValue).toHaveValue(),
    },
  ],
};

zTestSuite.toBe1Test = {
  title: `var 'toBe1' tests`,
  tests: [
    {
      description: `toBe1 to Be 1`,
      test: () => expect(toBe1).toBe(1),
    },
  ],
};

zTestSuite.isANumberTest = {
  title: `var 'isANumber' tests`,
  tests: [
    {
      description: `isANumber is a number`,
      test: () => expect(isANumber).toBeNumber(),
    },
  ],
};

zTestSuite.isAStringTest = {
  title: `var 'isAString' tests`,
  tests: [
    {
      description: `isAString is a string`,
      test: () => expect(isAString).toBeString(),
    },
  ],
};

zTestSuite.isABooleanTest = {
  title: `var 'isABoolean' tests`,
  tests: [
    {
      description: `isABoolean is a boolean`,
      test: () => expect(isABoolean).toBeBoolean(),
    },
  ],
};

zTestSuite.isAnArrayTest = {
  title: `var 'isAnArray' tests`,
  tests: [
    {
      description: `isAnArray is an array`,
      test: () => expect(isAnArray).toBeArray(),
    },
  ],
};

zTestSuite.isAnObjectTest = {
  title: `var 'isAnObject' tests`,
  tests: [
    {
      description: `isAnObject is an object`,
      test: () => expect(isAnObject).toBeObject(),
    },
  ],
};

zTestSuite.isAFunctionTest = {
  title: `var 'isAFunction' tests`,
  tests: [
    {
      description: `isAFunction is a function`,
      test: () => expect(isAFunction).toBeFunction(),
    },
  ],
};

zTestSuite.isAnArrowFunctionTest = {
  title: `var 'isAnArrowFunction' tests`,
  tests: [
    {
      description: `isAnArrowFunction is a function`,
      test: () => expect(isAnArrowFunction).toBeFunction(),
    },
  ],
};

zTestSuite.isAFunctionDeclarationTest = {
  title: `var 'isAFunctionDeclaration' tests`,
  tests: [
    {
      description: `isAFunctionDeclaration is a function`,
      test: () => expect(isAFunctionDeclaration).toBeFunction(),
    },
  ],
};

zTestSuite.isAnArrowFunctionDeclarationTest = {
  title: `var 'isAnArrowFunctionDeclaration' tests`,
  tests: [
    {
      description: `isAnArrowFunctionDeclaration is a function`,
      test: () => expect(isAnArrowFunctionDeclaration).toBeFunction(),
    },
  ],
};

zTestSuite.isEmptyArrayTest = {
  title: `var 'isEmptyArray' tests`,
  tests: [
    {
      description: `isEmptyArray is same array as []`,
      test: () => expect(isEmptyArray).toBeSameArrayAs([]),
    },
  ],
};

zTestSuite.isArray123Test = {
  title: `var 'isArray123' tests`,
  tests: [
    {
      description: `isArray123 is same array as [1,2,3]`,
      test: () => expect(isArray123).toBeSameArrayAs([1, 2, 3]),
    },
  ],
};

zTestSuite.isArrayLengthTest = {
  title: `var 'isArrayLength' tests`,
  tests: [
    {
      description: `isEmptyArray has 0 length`,
      test: () => expect(isEmptyArray).toHaveLength(0),
    },
    {
      description: `isArray123 has 3 length`,
      test: () => expect(isArray123).toHaveLength(3),
    },
  ],
};
zTestSuite.isArrayContainTypeTest = {
  title: `Arrays only contain type:`,
  tests: [
    {
      description: `isEmptyArray contains nothing`,
      test: () => expect(isEmptyArray).toOnlyContainType(`number`),
    },
    {
      description: `isArray123 contains only numbers`,
      test: () => expect(isArray123).toOnlyContainType(`number`),
    },
  ],
};

zTestSuite.isEmptyObjectTest = {
  title: `var 'isEmptyObject' tests`,
  tests: [
    {
      description: `isEmptyObject is empty object`,
      test: () => expect(isEmptyObject).toBeSameObjectAs({}),
    },
  ],
};

zTestSuite.isObjectA1Test = {
  title: `var 'isObjectA1' tests`,
  tests: [
    {
      description: `isObjectA1 is same object as {a:1}`,
      test: () => expect(isObjectA1).toBeSameObjectAs({ a: 1 }),
    },
  ],
};

zTestSuite.objectHasAKey = {
  title: `var 'objectHasAKey' tests`,
  tests: [
    {
      description: `isObjectA1 has the key 'a'`,
      test: () => expect(isObjectA1).toHaveKey(`a`),
    },
  ],
};
zTestSuite.objectHasKeyValuePair = {
  title: `var 'objectHasKeyValuePair' tests`,
  tests: [
    {
      description: `isObjectA1 has the key:value pair 'a:1'`,
      test: () => expect(isObjectA1).toHaveKeyValuePair(`a`, 1),
    },
  ],
};

zTestSuite.objectHasTwoKeysTest = {
  title: `var 'objectHasTwoKeys' tests`,
  tests: [
    {
      description: `objectHasTwoKeys has two keys`,
      test: () => expect(objectHasTwoKeys).toHaveObjectKeyCount(2),
    },
  ],
};

zTestSuite.theseAreTrueValues = {
  title: `These variables are truthy:`,
  tests: [
    {
      description: `truthyBoolean is truthy`,
      test: () => expect(truthyBoolean).toBeTruthy(),
    },
    {
      description: `truthyNumber is truthy`,
      test: () => expect(truthyNumber).toBeTruthy(),
    },
    {
      description: `truthyString is truthy`,
      test: () => expect(truthyString).toBeTruthy(),
    },
    {
      description: `truthyArray is truthy`,
      test: () => expect(truthyArray).toBeTruthy(),
    },
    {
      description: `truthyObject is truthy`,
      test: () => expect(truthyObject).toBeTruthy(),
    },
    {
      description: `truthyFunction is truthy`,
      test: () => expect(truthyFunction).toBeTruthy(),
    },
  ],
};

zTestSuite.theseAreFalseValues = {
  title: `These variables are falsy:`,
  tests: [
    {
      description: `falsyBoolean is falsy`,
      test: () => expect(falsyBoolean).toBeFalsey(),
    },
    {
      description: `falsyNumber is falsy`,
      test: () => expect(falsyNumber).toBeFalsey(),
    },
    {
      description: `falsyString is falsy`,
      test: () => expect(falsyString).toBeFalsey(),
    },
    {
      description: `falsyNull is falsy`,
      test: () => expect(falsyNull).toBeFalsey(),
    },
    {
      description: `falsyUndefined is falsy`,
      test: () => expect(falsyUndefined).toBeFalsey(),
    },
  ],
};

zTestSuite.valuesBetweenTests = {
  title: `These values are between 0 and 10:`,
  tests: [
    {
      description: `lowNumber is between 0 and 10`,
      test: () => expect(lowNumber).toBeBetween(0, 10),
    },
    {
      description: `highNumber is between 0 and 10`,
      test: () => expect(highNumber).toBeBetween(0, 10),
    },
  ],
};

zTestSuite.returnNothing = {
  title: `Testing function returnNothing (should fail 2nd test)`,
  tests: [
    {
      description: `returnNothing has no return (returns 'undefined')`,
      test: () => expect(returnNothing).toReturnUndefined(),
    },
    {
      description: `returnNothing to return something (fails)`,
      test: () => expect(returnNothing).toReturnSomething(),
    },
    {
      description: `returnNothing has no return, so returns: 'undefined'`,
      test: () => expect(returnNothing).toReturn(undefined),
    },
  ],
};

zTestSuite.returnNull = {
  title: `Testing function returnNull`,
  tests: [
    {
      description: `function returnNull to return something (null counts)`,
      test: () => expect(returnNull).toReturnSomething(),
    },
    {
      description: `function returnNull returns null`,
      test: () => expect(returnNull).toReturn(null),
    },
  ],
};

zTestSuite.returnNumber = {
  title: `Testing function returnNumber`,
  tests: [
    {
      description: `function returnNumber to return number`,
      test: () => expect(returnNumber).toReturnNumber(),
    },
  ],
};

zTestSuite.returnString = {
  title: `Testing function returnString`,
  tests: [
    {
      description: `function returnString to return string`,
      test: () => expect(returnString).toReturnString(),
    },
  ],
};

zTestSuite.returnBoolean = {
  title: `Testing function returnBoolean`,
  tests: [
    {
      description: `function returnBoolean to return boolean`,
      test: () => expect(returnBoolean).toReturnBoolean(),
    },
  ],
};

zTestSuite.returnArray = {
  title: `Testing function returnArray`,
  tests: [
    {
      description: `function returnArray to return array`,
      test: () => expect(returnArray).toReturnArray(),
    },
  ],
};

zTestSuite.returnObject = {
  title: `Testing function returnObject`,
  tests: [
    {
      description: `function returnObject to return object`,
      test: () => expect(returnObject).toReturnObject(),
    },
  ],
};

zTestSuite.returnsBetween = {
  title: `Testing function return2 and return9`,
  tests: [
    {
      description: `function return2 to return between 0 and 10`,
      test: () => expect(return2).toReturnBetween(0, 10),
    },
    {
      description: `function return9 to return between 0 and 10`,
      test: () => expect(return9).toReturnBetween(0, 10),
    },
  ],
};

zTestSuite.takesTwoArguments = {
  title: `Testing function takes0Arguments and takes2Arguments`,
  tests: [
    {
      description: `function takes0Arguments to take 0 arguments`,
      test: () => expect(takes0Arguments).takesXArguments(0),
    },
    {
      description: `function takes2Arguments to take 2 arguments`,
      test: () => expect(takes2Arguments).takesXArguments(2),
    },
  ],
};

zTestSuite.argumentTests = {
  title: `Testing functions that require arguments`,
  tests: [
    {
      description: `function double to return double the argument's value`,
      test: () => expect(double).withArgs(2).toReturn(4),
    },
    {
      description: `function convertToString to convert argument to string`,
      test: () => expect(convertToString).withArgs(1234).toReturn(`1234`),
    },
  ],
};
zTestSuite.customTestExample = {
  title: `Custom Test`,
  tests: [
    {
      description: `function returnAOr1 should return either 'a', or 1`,
      test: () => {
        expect(returnAOr1)
          .withArgs(1)
          .customTest(function () {
            let returnVal = this.exec();
            console.log("returnVal", returnVal);
            if (returnVal !== "a" && returnVal !== 1) {
              throw new Error(`returnAOr1 does not return 'a' or 1`);
            }
          });
      },
    },
  ],
};
zTestSuite.customTestExample2 = {
  title: `Custom Test (should fail)`,
  tests: [
    {
      description: `function returnAOr1 should return either 'b', or 2 (and will fail)`,
      test: () => {
        expect(returnAOr1)
          .withArgs(1)
          .customTest(function () {
            let returnVal = this.exec();
            console.log("returnVal", returnVal);
            if (returnVal !== "b" && returnVal !== 2) {
              throw new Error(`returnAOr1 does not return 'b' or 2`);
            }
          });
      },
    },
  ],
};

Z_T.testAll(zTestSuite);
