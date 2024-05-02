"use strict"; // Enforce modern standards
/*
Using "use strict" helps catch common errors, such as undeclared variables,
and encourages the use of modern JavaScript features. Most recent JavaScript
engines already use strict mode, but it's still a good practice for backward compatibility.
*/

// JavaScript follows the ECMA standard (Ecma International, Technical Committee 39, and Mozilla Developer Network).

// Variables and Data Types
// 1. Primitive Data Types: Call-by-Value
let fullName = "Najam U Saqib"; // string
let personAge = 19; // number (integers and floats are both "number" type)
let isStudious = true; // boolean
let friends = null; // null represents the absence of value
let experience; // undefined: variable is declared but not initialized
// symbol: Uniqueness, often used in React components to ensure unique identifiers

// 2. Non-Primitive or Reference Data Types (Arrays, Objects, Functions)
const numbers = [1, 2, 4, 5]; // Array
let person = {
	fullName: "Najam",
	age: 19
}; // Object

// Display object information
console.log(person); // Output the object

// Common Interview Questions Regarding Data Types
console.log(typeof null); // Outputs "object" - a known quirk in JavaScript
console.log(typeof undefined); // Outputs "undefined" - the type of a variable not yet defined
console.log(typeof fullName); // Outputs "string" - type of a text value
console.log(Number.MAX_SAFE_INTEGER); // Maximum safe integer value for arithmetic
// console.log(BigInt.MAX_SAFE_INTEGER); // Uncommenting this line would result in an error, as BigInt does not have a defined "MAX_SAFE_INTEGER"

console.log(typeof isStudious); // Outputs "boolean"
console.log(typeof numbers); // Outputs "object" - arrays are a type of object in JavaScript
console.log(typeof person); // Outputs "object" - objects are a reference data type

// Arrays and objects are reference types, meaning they hold references to memory locations,
// rather than holding the actual values. Modifying a reference data type can affect other references to the same object or array.
