// Data Type Conversions in JavaScript (Beware of unexpected results)

// Converting a string to a number
let strValue = "42";
console.log(typeof strValue); // Outputs "string"

let numValue = Number(strValue); // Converts the string to a number
console.log(typeof numValue); // Outputs "number"

// Converting a non-numeric string to a number
let nonNumericStr = "42xyz";
let convertedNum = Number(nonNumericStr); // Results in NaN (Not a Number)
console.log(convertedNum); // Outputs NaN
console.log(typeof convertedNum); // Outputs "number" (NaN is technically a number type)

// Converting undefined to a number
let undefinedVar;
let undefinedToNumber = Number(undefinedVar); // Results in NaN
console.log(undefinedToNumber); // Outputs NaN
console.log(typeof undefinedToNumber); // Outputs number

// Boolean Conversions
let zero = 0;
let isZeroTrue = Boolean(zero); // Converts to boolean (false because 0 is falsy)
console.log(isZeroTrue); // Outputs false

let one = 1;
let isOneTrue = Boolean(one); // Converts to boolean (true because 1 is truthy)
console.log(isOneTrue); // Outputs true

// Converting a non-empty string to a boolean
let nonEmptyStr = "hello";
let strToBool = Boolean(nonEmptyStr); // Non-empty strings are truthy
console.log(strToBool); // Outputs true

// Converting an empty string to a boolean
let emptyStr = "";
let emptyStrToBool = Boolean(emptyStr); // Empty strings are falsy
console.log(emptyStrToBool); // Outputs false

// NaN behaves oddly in comparisons
console.log(NaN === NaN); // Outputs false - NaN is not equal to itself
console.log(isNaN(NaN)); // Outputs true - using isNaN to check for NaN

// Type Coercion in JavaScript (Automatic conversions)
let mixedType = "2" + 3; // String concatenation
console.log(mixedType); // Outputs "23" (string)

let anotherMixedType = "5" - 2; // Numeric subtraction
console.log(anotherMixedType); // Outputs 3 (number)
