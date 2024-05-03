// === Freezing and Sealing Methods in JavaScript ===

const myObject = {
    name: "Abdullah",
    age: 19,
    interest: "Coding",
    lastName: "Khawar",
    email: "abdullahkhawar@gmail.com",
    address: "Lahore",
};

// ******************************************
// Object.freeze() prevents any modifications to the object
// After freezing, you can't add, remove, or change properties
Object.freeze(myObject);

// Attempting to change a property in a frozen object
myObject.address = "Islamabad"; // This will not work
console.log(myObject.address); // Outputs "Lahore" (unchanged)

// Attempting to add new properties to a frozen object
myObject.country = "Pakistan"; // This won't be added
console.log(myObject.country); // Undefined, because the object is frozen

// ******************************************
// Object.seal() prevents adding or removing properties
// However, you can still modify existing properties
const sealedObject = {
    name: "Uzair",
    age: 25,
    location: "Karachi",
};

// Sealing the object
Object.seal(sealedObject);

// Changing an existing property in a sealed object
sealedObject.age = 26; // This change is allowed
console.log(sealedObject.age); // Outputs 26

// Trying to add a new property to a sealed object
sealedObject.country = "Pakistan"; // This won't work
console.log(sealedObject.country); // Undefined, because the object is sealed

// Trying to delete a property in a sealed object
delete sealedObject.location; // This won't work
console.log(sealedObject.location); // Outputs "Karachi"

// Interview Considerations
// - Understand the differences between Object.freeze() and Object.seal()
// - Object.freeze() completely prevents any modifications (no adding, removing, or changing)
// - Object.seal() allows modification of existing properties but disallows adding/removing properties
// - Know when to use each method and the implications for immutability and object stability
