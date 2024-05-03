// ************************ Control Statements **************************

let score = 200;

// Basic if-else statement
if (score > 150) {
    console.log("Greater than 150"); // Outputs this if condition is true
} else {
    console.log("Not Greater"); // Outputs this if condition is false
}

// Single-liner if statement
if (score > 150) console.log("Greater than 150"), console.log("Greater");

// Switch statement
const day = 5;

switch (day) { // Switch-case structure for multiple conditions
    case 2:
        console.log("Tuesday"); // Outputs for case 2
        break;
    case 5:
        console.log("Friday"); // Outputs for case 5
        break;
    default:
        console.log("Sunday"); // Default output if no cases match
        break;
}

// Interview Concepts 😎
// Truthy / Falsy values in JavaScript
// Falsy values: false, 0, -0, BigInt(0n), null, undefined, "", NaN
// Truthy values: "0", "false", " ", [], {}, function() {}

// Nullish Coalescing Operator (??) focuses on null and undefined
// If a value is null or undefined, it returns the next non-nullish value

let value = 45;
value = null ?? 34; // Outputs 34 (nullish coalescing)
let num;
num = null ?? 45; // Outputs 45 (returns the first non-nullish value)
console.log(num); // Outputs 45

value = null ?? undefined ?? 10; // Outputs 10 (first non-nullish)
console.log(value); // Outputs 10

// Ternary Operator
let val = 34;
val > 40 ? console.log("Greater than 34") : console.log("Less than or equal to 34"); // Outputs "Less than or equal to 34"

// Notes for Interviews
// - Understand how to use if-else, switch-case, and ternary operators
// - Know the truthy and falsy values in JavaScript and their impact on control statements
// - Learn about the nullish coalescing operator (??) and how it differs from || (logical OR) (Included In the next file)
// - Understand common control flow patterns, such as switch-case and nested if-else structures
