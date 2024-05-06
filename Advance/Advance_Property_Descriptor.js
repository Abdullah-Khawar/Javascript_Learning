// ************** Interview Question *******************

// Check the value of Math.PI
console.log(Math.PI); // Outputs: 3.141592653589793

// Attempt to change Math.PI (this won't work because it's read-only)
Math.PI = 4;
console.log(Math.PI); // Outputs: 3.141592653589793 (unchanged)

// Get the property descriptor for Math.PI
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Outputs: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// Trying to change Math.PI property descriptor (it should fail due to configurable: false)
Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
}); // This operation fails silently or throws an error (depending on environment)

// Example of changing property descriptors
const example = {
    name: "Abdullah",
    age: 20,
};

// Make 'name' property read-only and non-enumerable
Object.defineProperty(example, "name", {
    writable: false, // No longer writable
    enumerable: false, // Will not show in enumerations
});

// Get the property descriptor for 'name' in the 'example' object
console.log(Object.getOwnPropertyDescriptor(example, "name"));
// Outputs: { value: 'Abdullah', writable: false, enumerable: false, configurable: true }
