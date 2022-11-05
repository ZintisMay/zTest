// Variables:

// var isNotDefined // commented on purpose to fail test
var isDeclared;
var isDefined = null;
var hasValue = null;
var toBe1 = 1;

// Type Values:
var isANumber = 1;
var isAString = "word";
var isABoolean = true;
var isAnArray = [];
var isAnObject = {};
var isAFunction = function () {};
var isAnArrowFunction = () => {};
var isAFunctionDeclaration = function () {};
var isAnArrowFunctionDeclaration = function () {};

// Array values
var isEmptyArray = [];
var isArray123 = [1, 2, 3];

// Object values
var isEmptyObject = {};
var isObjectA1 = { a: 1 };
var objectHasTwoKeys = { a: 1, b: 2 };

// True Values
var truthyBoolean = true;
var truthyNumber = 1;
var truthyString = "yes";
var truthyArray = [];
var truthyObject = {};
var truthyFunction = function () {};

// False Values
var falsyBoolean = false;
var falsyNumber = 0;
var falsyString = "";
var falsyNull = null;
var falsyUndefined = undefined;

// Between numbers
var lowNumber = 2;
var highNumber = 9;

// Function returns
function returnNothing() {}
function returnNull() {
  return null;
}
function returnNumber() {
  return 1;
}
function returnString() {
  return "";
}
function returnBoolean() {
  return true;
}
function returnArray() {
  return [];
}
function returnObject() {
  return {};
}
function return2() {
  return 2;
}
function return9() {
  return 9;
}
function takes0Arguments() {}
function takes2Arguments(a, b) {}
function double(x) {
  return x * 2;
}
function convertToString(x) {
  return String(x);
}

// Custom test example
function returnAOr1(x) {
  return x ? `a` : 1;
}
