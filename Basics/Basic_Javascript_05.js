// ************************************************************
// Memory Allocation: Stack vs Heap
// Stack is used for storing primitive data types, whereas the heap is used for non-primitive or reference data types.

let userInfo_1 = {
	name: "Abdullah Noor",
	age: 19,
	email: "abdullahnoor@gmail.com"
}; // This object is stored on the heap

let userInfo_2 = userInfo_1; // `userInfo_2` references the same object in the heap

// Updating the object through one reference affects all references to that object
userInfo_2.age = 18.5; // Changes both `userInfo_1` and `userInfo_2`

console.table([userInfo_1, userInfo_2]); // Both have `age` as 18.5

// ************************************************************
// Strings Concatenation Using Template Literals (Backticks)
// Backticks offer a flexible way to concatenate strings with embedded expressions

let personName = "Abdullah Khawar";
let personAge = 20;

const gameName = new String("SuperMario"); // String object
// String object methods
console.log(gameName.length); // Outputs 10 (the length of "SuperMario")
console.log(gameName.toUpperCase()); // Outputs "SUPERMARIO"

// Using template literals for string interpolation
console.log(`Name of the person is ${personName}, and their favorite game is ${gameName}`);

// ************************************************************
// Playing with String Methods 🤩

const charAtExample = gameName.charAt(4); // Retrieves the character at index 4
console.log(charAtExample); // Outputs 'r'

const substringExample = gameName.substring(0, 6); // Extracts a substring (2nd parameter is exclusive)
console.log(substringExample); // Outputs "SuperM"

const sliceExample = gameName.slice(-1); // Slices from the end, getting the last character
console.log(sliceExample); // Outputs 'o'

// Splitting strings into an array
const fullName = "Abdullah Khawar";
const splitExample = fullName.split(" "); // Splits the string into an array based on spaces
console.log(splitExample); // Outputs ["Abdullah", "Khawar"]

// Other useful string methods
const replacedExample = fullName.replace("Khawar", "Noor"); // Replaces a part of the string
console.log(replacedExample);

const trimmedExample = "   Trimmed String   ".trim(); // Removes leading/trailing spaces
console.log(trimmedExample);

const includesExample = gameName.includes("Mario"); // Checks if substring exists
console.log(includesExample);
