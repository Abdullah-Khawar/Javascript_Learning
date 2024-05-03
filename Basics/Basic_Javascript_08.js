// ==== Arrays in JavaScript === 

// Creating arrays
const arr = [4, 6, 3, -5, 8, 7]; // Declared directly
// console.log(arr[4]); // Accessing by index

// Creating arrays using Array constructor
const newArr = new Array(1, 4, 7, 9, 8); // Alternative way
// console.log(newArr);

// Basic array operations
newArr.push(-8); // Adds element to the end
newArr.push(3); // Adds another element to the end
newArr.pop(); // Removes the last element
// console.log(newArr);

newArr.unshift(3); // Adds element to the start
// console.log(newArr);
newArr.shift(); // Removes the first element
// console.log(newArr);

// Common array methods
// include(), indexOf(), join()
const exampleArr = new Array(0, 3, 5, 7, 8, 8, 4, 2);
console.log("Original Array: ", exampleArr);

// Using slice() to create a shallow copy
const slicedArray = exampleArr.slice(1, 4); // Slices from index 1 to 3 (end is exclusive)
console.log("After Slice: ", exampleArr); // The original array is unchanged
console.log("Sliced Array: ", slicedArray); // Outputs [3, 5, 7]

// Using splice() to remove elements
const splicedArray = exampleArr.splice(1, 4); // Removes 4 elements starting from index 1
console.log("After Splice: ", exampleArr); // Original array is modified
console.log("Spliced Array: ", splicedArray); // Outputs [3, 5, 7, 8]

// Array Joining
const joinedArray = exampleArr.join(", "); // Joins elements into a single string
console.log("Joined Array: ", joinedArray); // Outputs "0, 8, 4, 2"

// Other common array operations
const hasSeven = exampleArr.includes(7); // Checks if the array contains 7
console.log("Contains 7: ", hasSeven); // Outputs false

const indexOfEight = exampleArr.indexOf(8); // Finds the index of the first occurrence of 8
console.log("Index of 8: ", indexOfEight); // Outputs 1

// Interview Considerations
// - Understand how arrays work (indexing, length, reference type)
// - Know common methods like push(), pop(), unshift(), shift(), slice(), splice()
// - Be familiar with other array operations such as join(), includes(), and indexOf()
// - Recognize the difference between slice() (does not modify original) and splice() (modifies original)
