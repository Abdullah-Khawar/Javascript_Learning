// Variables to store user information
let fullName = "Abdullah Khawar"; // Recommended for variables that might change
const securityKey = "SecurePass123"; // Use const to declare constants, not intended to change
var contactEmail = "abdullahkhawar@example.com"; // `var` has wider scope, consider using `let` or `const`
userId = "ABC-12345"; // Implicit global variable, not recommended

// securityKey = "NewSecurePass456"; // Error: Cannot reassign a constant value
let undefinedVar; // Declared but not initialized, holds `undefined`

console.table([fullName, securityKey, contactEmail, userId, undefinedVar]);
