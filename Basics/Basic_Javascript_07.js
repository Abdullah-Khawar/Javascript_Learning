// *********************************Dates*********************************
// Working with dates in JavaScript is important, especially for technical interviews.

// Getting the current date and time
const currentDate = new Date(); // Gets the current date and time

console.log(currentDate); // Outputs the full date and time
console.log(currentDate.toString()); // Converts date to string
console.log(currentDate.toLocaleString()); // Localized date/time representation
console.log(currentDate.toDateString()); // Date only, without time

// Creating custom dates
const customDate = new Date(2023, 6, 23, 6, 56, 45); // (year, month-1, day, hour, minute, second)
console.log(customDate.toString()); // Outputs the custom date and time

const anotherDate = new Date("2023-06-23"); // ISO 8601 format for creating dates
console.log(anotherDate.toString()); // Outputs the date in string form

// Time in milliseconds since Unix epoch (1970-01-01 00:00:00 UTC)
const millisecondsSinceEpoch = Date.now(); // Current time in milliseconds
console.log(millisecondsSinceEpoch); // Outputs milliseconds since Unix epoch

// Getting time from a specific date in milliseconds and seconds
console.log(customDate.getTime()); // Milliseconds since Unix epoch for custom date
console.log(Math.floor(customDate.getTime() / 1000)); // Converts to seconds

// Retrieving components of a date
console.log(customDate.getMonth()); // Returns the month (0-based, so 6 means July)
console.log(customDate.getFullYear()); // Returns the year

// Using toLocaleString with specific parameters
const localizedDate = new Date();

console.log(localizedDate.toLocaleString()); // Localized string for current date/time

const formattedDate = localizedDate.toLocaleString('default', {
    dateStyle: 'full', // Other options: 'short', 'medium', 'long'
});
console.log(formattedDate); // Outputs date in full format

// Interview Questions and Considerations
// - Know how to get the current date/time
// - Understand how to create dates in various formats (ISO 8601, individual components, etc.)
// - Be aware of the month indexing (0-based in JavaScript)
// - Know how to manipulate and extract information from dates (like getting month, day, etc.)
// - Be familiar with common date methods like `toLocaleString`, `getTime`, and `Date.now()`
