console.log('----------------- TYPES -----------------');

// Returns a string describing the type — handles the null and array edge cases
function getType(value) {
  // TODO: write your code here
  if (value === null) {
    return "null"
  }
  if (Array.isArray(value)) {
    return "array"
  }
  return typeof value;
}

console.log(getType(42)); // "number"
console.log(getType('hello')); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "null"       ← typeof null === "object"!
console.log(getType([])); // "array"      ← typeof [] === "object"!
console.log(getType({})); // "object"
console.log(getType(() => {})); // "function"

//----------------------------------------------------
console.log('\n');

// Returns true only if value is a number and not NaN
function isNumber(value) {
  // TODO: write your code here
  return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(5)); // true
console.log(isNumber(NaN)); // false  ← typeof NaN === "number"!
console.log(isNumber('5')); // false
console.log(isNumber(Infinity)); // true

//----------------------------------------------------
console.log('\n');

// Predict true or false before running each line, then explain why in a comment
console.log(Boolean(0)); // ? False  0 is boolean for false
console.log(Boolean('')); // ? False an emptry strings are falsy
console.log(Boolean(null)); // ? null is false
console.log(Boolean(undefined)); // ? undefined is false
console.log(Boolean(NaN)); // ? Nan is false because it is not a number
console.log(Boolean(false)); // ? false is self explanatory
console.log(Boolean('0')); // ?  ← may surprise you  |because it is a non-empty string its true
console.log(Boolean([])); // ?  ← may surprise you true even an empty array is truthy
console.log(Boolean({})); // ?  ← may surprise you true even an empty object is truthy

//----------------------------------------------------
console.log('\n');

// Predict the output, then add a comment explaining why
console.log(1 == '1'); // ? true because == strings mutate to numbers when compared with numbers
console.log(1 === '1'); // ? false because compare (===) does not mutate different types. a number is not a string
console.log(null == undefined); // ? true because both are falsy and == mutates them to the same value when compareed with the same number
console.log(null === undefined); // ?false because null and undefined are different types and === does not mutate them to the same value
console.log(0 == false); // ? true because == mutates 0 to false when compared with a boolean
console.log('' == false); // ?true and empty string is falsy and == mutates it to false when compared with a boolean 
