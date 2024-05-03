// Array Method Examples with New Data

const names = ["Abdullah", "Najam", "Uzair"];
const cities = ["Gujranwala", "Multan", "Lahore"];

// Using push to add elements to an array
// This will nest the entire `cities` array as a single element in `names`
names.push(cities); 
// console.log("Nested Array: ", names); // ["Abdullah", "Najam", "Uzair", ["Gujranwala", "Multan", "Lahore"]]

// Using concat to combine arrays
const combinedArray = names.concat(cities); // Creates a new array
console.log("Concatenated Array: ", combinedArray); // ["Abdullah", "Najam", "Uzair", ["Gujranwala", "Multan", "Lahore"], "Gujranwala", "Multan", "Lahore"]

// Using spread operator to merge arrays
const combinedArrayWithSpread = [...names, ...cities]; // Flattens the nested structure
console.log("Spread Operator Array: ", combinedArrayWithSpread); // ["Abdullah", "Najam", "Uzair", ["Gujranwala", "Multan", "Lahore"], "Gujranwala", "Multan", "Lahore"]

// Flattening nested arrays with flat()
const nestedArray = [2, 3, 4, [7, 6, 5], 4, -5, [0, 1, 2, 5, [-8, -6, -4]]];
console.log("Original Nested Array: ", nestedArray);
console.log("Flattened Array (depth=2): ", nestedArray.flat(2)); // Flattens the nested array to depth 2

// Using Array.from() to create an array from an iterable or string
console.log("String to Array: ", Array.from("100")); // Converts the string into an array of characters

// Using Array.from() with an object returns an empty array since objects aren't iterable
console.log("Array from Object: ", Array.from({ name: "Ali" })); // Outputs []

// Converting separate elements into an array with Array.of()
let score1 = 100;
let score2 = 75;
let score3 = 85;

console.log("Array.of(): ", Array.of(score1, score2, score3)); // Outputs [100, 75, 85]

// Interview Considerations
// - Understand the differences between various array operations like push(), concat(), and spread operator
// - Learn about flattening arrays with flat() and the implications of nested arrays
// - Know the usage and limitations of Array.from() and Array.of()
// - Grasp the concept of array-based operations and the impact of nested structures
