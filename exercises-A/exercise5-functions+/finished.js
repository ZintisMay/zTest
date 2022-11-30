function greeting(name) {
  return `Hello ${name}!`;
}

function isThisValueTrue(val) {
  if (val) {
    return true;
  }
  return false;
}

function isThisNumberEven(n) {
  if (n % 2 === 0) {
    return "even";
  }
  return "odd";
}

function makeNumberNegative(n) {
  if (n > 0) {
    return n * -1;
  }
  return n;
}

function doYouWantCake(hungry) {
  if (hungry) {
    return "yes";
  }
  return "no";
}

function wordLength(word) {
  return word.length;
}

function carBuilder(make, model, year) {
  return { make, model, year };
}

function createStudent(firstName, lastName, yearBorn, schoolName) {
  return {
    name: {
      first: firstName,
      last: lastName,
    },
    yearBorn,
    schoolName,
  };
}

function teachersNeeded(studentCount, studentsPerTeacher) {
  return Math.ceil(studentCount / studentsPerTeacher);
}
