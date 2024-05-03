// ********************* FILTER, MAP, REDUCE **************************

// Array of numbers
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get numbers greater than 6
const newArray = array.filter((item) => item > 6);
console.log("Filtered Array:", newArray); // Outputs [7, 8, 9, 10]

// Common mistake with filter: forgetting to return the condition explicitly
const incorrectArray = array.filter((num) => {
    num > 6; // This does nothing because there's no return
});
console.log("Incorrect Filter:", incorrectArray); // Outputs []

// Correct usage of filter
const correctArray = array.filter((num) => num > 6); // Explicit return
console.log("Correct Filter:", correctArray); // Outputs [7, 8, 9, 10]

// Using forEach to build a new array with a condition
const empArray = [];
array.forEach((num) => {
    if (num > 6) {
        empArray.push(num);
    }
});
console.log("ForEach Example:", empArray); // Outputs [7, 8, 9, 10]

// Using filter with an array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books by genre
let historyBooks = books.filter((book) => book.genre === 'History');
console.log("History Books:", historyBooks);

// Filtering books by publish year and genre
let booksFrom2000 = books.filter((book) => book.publish >= 1995 && book.genre === 'History');
console.log("Books from 2000:", booksFrom2000);

// *********************** MAP ******************************
const numArray = [1, 2, 3, 4, 5, 6, 7];

// Adding 10 to each element using map
const mappedArray = numArray.map((num) => num + 10);
console.log("Mapped Array:", mappedArray); // Outputs [11, 12, 13, 14, 15, 16, 17]

// Chaining map and filter methods
const chainedArray = numArray
    .map((num) => num * 10)
    .map((num) => num + 3)
    .filter((num) => num > 38);
console.log("Chained Array:", chainedArray); // Outputs [43, 53, 63, 73]

// *********************** REDUCE ******************************
// Using reduce to sum all elements in an array
const totalSum = numArray.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", totalSum); // Outputs 28

// Using reduce with an array of objects to sum a property
const objectArray = [
    {
        Type: "Oppo",
        price: 12999
    },
    {
        Type: "Iphone",
        price: 129999
    }
];

const totalPrice = objectArray.reduce((acc, item) => acc + item.price, 0);
console.log("Total Price:", totalPrice); // Outputs 142998
