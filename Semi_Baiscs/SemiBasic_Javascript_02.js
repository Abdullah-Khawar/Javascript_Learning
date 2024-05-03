// === Nullish coalescing operator (??) vs logical OR (||) ===

// 1- Nullish Coalescing Operator (??)
let nullValue = null;
let undefinedValue = undefined;
let zeroValue = 0;
let emptyString = "";
let defaultValue = 10;

// The ?? operator only checks for `null` and `undefined`
let result1 = nullValue ?? defaultValue; // Outputs 10, because null is "nullish"
let result2 = undefinedValue ?? defaultValue; // Outputs 10, because undefined is "nullish"
let result3 = zeroValue ?? defaultValue; // Outputs 0, because 0 is not null or undefined
let result4 = emptyString ?? defaultValue; // Outputs "", because "" is not null or undefined

console.log(result1); // 10
console.log(result2); // 10
console.log(result3); // 0
console.log(result4); // ""

// 2- Logical OR Operator (||)
let result5 = nullValue || defaultValue; // Outputs 10, because null is falsy
let result6 = undefinedValue || defaultValue; // Outputs 10, because undefined is falsy
let result7 = zeroValue || defaultValue; // Outputs 10, because 0 is falsy
let result8 = emptyString || defaultValue; // Outputs 10, because "" is falsy

console.log(result5); // 10
console.log(result6); // 10
console.log(result7); // 10
console.log(result8); // 10
