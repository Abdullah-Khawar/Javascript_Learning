// ******************* (For-Of_LOOP) vs (For-In_LOOP) ******************

/*
For-of Loop
Purpose: Iterates over iterable objects like arrays, strings, maps, sets, etc.
Returns: The values of the iterable.
Usage: Commonly used when you need to loop through the actual values in an iterable collection.
*/

// === For-Of loop example ===
// With Array
let arr = [9, 8, 7, 6, 5, 4];
for (const a of arr) {
    console.log(a); // Outputs 9, 8, 7, 6, 5, 4
}

// With String
let greeting = "Hello Abdullah";
for (const greet of greeting) {
    console.log(greet); // Outputs each character in "Hello Abdullah"
}

// With Maps
const map = new Map();
map.set("Name", "Abdullah");
map.set("age", "20");
map.set("Interest", "Coding");

console.log(map); // Outputs the entire map

// Iterating over maps
for (const [key, value] of map) {
    console.log(key, "=>", value); // Outputs "Name => Abdullah", "age => 20", "Interest => Coding"
}

              // *********************************************************** //

/*
For-in Loop
Purpose: Iterates over the keys or property names of an object.
Returns: The property names (keys) in the object.
Usage: Best used when you need to loop through the keys of an object.
*/

// === For-In loop example === 
// With Object
const object = {
    "Name": "Abdullah",
    age: 18.5,
    height: "5.11"
};
for (const key in object) {
    console.log(`${key} => ${object[key]}`); // Outputs "Name => Abdullah", "age => 18.5", "height => 5.11"
}

// With Array (not recommended)
const myArray = ["js", "cpp", "java", "python"];
for (const key in myArray) {
    console.log(myArray[key]); // Outputs "js", "cpp", "java", "python"
}

/*
In summary:
If you want values, use for-of.
If you want keys or property names, use for-in.
*/

// Interview Considerations
// - For-Of loop: Gives values, used with arrays, strings, maps, and sets
// - For-In loop: Gives keys, used with objects and arrays
