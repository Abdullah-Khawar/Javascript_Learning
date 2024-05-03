// ************************** Functions ***********************************
// Defining functions in JavaScript and passing various parameters

// Simple function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(3, 5)); // Outputs 8

// Function with a conditional check
function userName(username) {
    if (!username) { // Check if the parameter is provided
        console.log("Enter a valid username");
        return;
    }
    console.log(`${username} just logged in!`);
}

userName("Abdullah Noor"); // Outputs "Abdullah Noor just logged in!"

// Function with a rest parameter
function cartPrice(...num) { // Takes any number of arguments and returns an array
    return num;
}
console.log(cartPrice(4, 5, 7, 8)); // Outputs [4, 5, 7, 8]

// Passing objects to functions
const user = {
    name: "Abdullah Noor",
    age: 20
};

function passObject(object) {
    console.log(`Username is ${object.name} and age is ${object.age}`);
}

// Using object destructuring to access properties directly in function parameters
function passObject2({ name, age }) {
    console.log(`Username is ${name} and age is ${age}`);
}

passObject(user); // Outputs "Username is Abdullah Noor and age is 20"
passObject2(user); // Outputs "Username is Abdullah Noor and age is 20"

// Passing arrays as function parameters
const myArr = [4, 5, 6, 7];

function getSecondElement(array) { // Takes an array and returns the second element
    return array[1];
}

console.log(getSecondElement(myArr)); // Outputs 5

// Function with default parameter
function greetUser(name = "Guest") { // If no argument is passed, "Guest" is used
    console.log(`Hello, ${name}`);
}

greetUser(); // Outputs "Hello, Guest"
greetUser("Abdullah"); // Outputs "Hello, Abdullah"

// Interview Considerations
// - Understand different ways to define functions in JavaScript
// - Know how to use default parameters and rest parameters
// - Learn about object destructuring in function parameters for unpacking properties
// - Be familiar with passing objects and arrays to functions
// - Understand the importance of conditional checks to avoid undefined or incorrect values
