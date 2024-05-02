// JavaScript's Coercive Nature - Tricky, Isn't It? 😉

// String concatenation with numbers
console.log(1 + "2"); // Outputs "12" - number is coerced into a string
console.log("1" + 2); // Outputs "12" - number is coerced into a string

// Addition followed by string concatenation
console.log(1 + 2 + "2"); // Outputs "32" - addition is performed first, then the result is concatenated to "2"
console.log("1" + 2 + 2); // Outputs "122" - string concatenation is performed from left to right

// String subtraction
console.log("2" + "2" - 2); // Outputs 20 - strings are converted to numbers for subtraction

// Comparison Operators vs Equality Operators
// Comparison operators (>, >=, <=, <) convert null to a number (0)
console.log("2" > 1); // Outputs true - "2" is converted to a number
console.log("1" > 1); // Outputs false - "1" is not greater than 1

// Avoiding automatic conversions
console.log(null > 0); // Outputs false - null is not greater than 0
console.log(null >= 0); // Outputs true - null is treated as 0 in comparison operators
console.log(null == 0); // Outputs false - null is not equal to 0 (loose equality)
console.log(null === 0); // Outputs false - strict equality, types don't match

// Comparing with undefined
console.log(undefined > 0); // Outputs false - undefined is not comparable to a number
console.log(undefined >= 0); // Outputs false - undefined is not comparable to a number
console.log(undefined == 0); // Outputs false - undefined is not equal to 0 (loose equality)
console.log(undefined === 0); // Outputs false - strict equality, types don't match
