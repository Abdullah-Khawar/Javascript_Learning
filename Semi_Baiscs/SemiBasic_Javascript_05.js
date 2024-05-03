// ********************** For Each ***************************
// `forEach` is used to iterate over arrays and execute a function on each item
const array = ["js", "python", "cpp", "java", "c"];

// Using a traditional function
array.forEach(function (value) { // function will not have a name
    console.log(value); // Outputs each language in the array
});

// Using arrow functions
array.forEach((key) => {  // function will not have a name
    console.log(key); // Outputs each language in the array
});

// Using a predefined function
function print(key) {
    console.log(key);
}
array.forEach(print); // Outputs each language in the array by calling the print function

// Accessing additional parameters with `forEach`
array.forEach((item, index, arr) => {
    console.log(`Index ${index}: ${item}`); // Outputs the index and item
    console.log("Array:", arr); // Outputs the entire array (for each iteration)
});

// Working with arrays containing objects
const objectList = [
    {
        "Name": "Abdullah",
        age: 20
    },
    {
        "Name": "Najam",
        age: 19
    },
    {
        "Name": "Uzair",
        age: 18
    }
];

// Using `forEach` with an array of objects
objectList.forEach((item) => {
    console.log(item["Name"]); // Outputs the "Name" property for each object
    console.log(`Age: ${item.age}`); // Outputs the "age" property for each object
});

// Important Note: `forEach` does not return a value; it always returns `undefined`. It's designed for side effects (e.g., modifying items or printing to console).

// Why use `forEach`?
// - Ideal for iterating over arrays where you need to perform an action on each item
// - Useful for modifying or processing array elements

// Interview Considerations
// - Understand that `forEach` is used for iteration and has three parameters: item, index, and the original array
// - Be aware that `forEach` does not return a new array, unlike `map`
// - Know when to use `forEach`: for operations on each item, not when a transformed array is needed
