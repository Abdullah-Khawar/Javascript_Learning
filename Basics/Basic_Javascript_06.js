// Numbers and Math Operations in JavaScript

// Creating numbers
const score = 200; // Primitive number
const newScore = new Number(400); // Number object (less common)

console.log(score); // Outputs 200
console.log(newScore); // Outputs [Number: 400] - Object wrapper for numbers

// Useful methods with numbers
console.log(score.toString()); // Converts number to string
console.log(typeof score.toString()); // Outputs "string"

console.log(score.toFixed(2)); // Formats number with 2 decimal places, outputs "200.00"

const num = 19.876;
console.log(num.toPrecision(3)); // Limits precision to 3 digits, outputs "19.9"

const largeNumber = 100000000;
console.log(largeNumber.toLocaleString('en-PK')); // Outputs "10,00,00,000" - localized number formatting (Pakistani style)

// Math Object
console.log(Math); // Outputs the Math object, which contains mathematical constants and functions
console.log(Math.abs(-5.67)); // Outputs absolute value, 5.67
console.log(Math.round(56.98)); // Rounds to the nearest integer, outputs 57

// Generating Random Values
console.log(Math.random()); // Outputs a random number between 0 and 1

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); 

// Random integer between a given min and max
const min = 15;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Outputs a random integer between 15 and 30

// Additional Math functions
console.log(Math.sqrt(64)); // Outputs the square root, 8
console.log(Math.pow(2, 3)); // Outputs 2 raised to the power of 3, 8
console.log(Math.max(1, 5, 3, 7, 9)); // Outputs the maximum value, 9
console.log(Math.min(1, 5, 3, 7, 9)); // Outputs the minimum value, 1
