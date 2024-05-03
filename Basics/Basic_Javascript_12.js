// **************************** OBJECTS PART_2 ****************************
// Creating objects with Object constructor (singleton)
const newObject = new Object(); // Creates an empty object
console.log(newObject);

newObject.id = "25"; // Adding properties
newObject.name = "Abdullah Noor";
newObject.GPA = 3.85;
newObject.isLoggedIn = false;

console.log(newObject); // Outputs the object with its properties

// Nested objects
const nestedObject = {
  userName: {
    fullName: {
      firstName: "Muhammad",
      middleName: "Abdullah",
      lastName: "Khawar"
    }
  }
};

console.log(nestedObject.userName.fullName.lastName); // Outputs "Khawar"

// Merging two or more objects
const obj1 = {
  1: "a",
  2: "b",
  3: "c"
};

const obj2 = {
  4: "d",
  5: "e",
  6: "f"
};

const obj11 = {
  7: "g"
};

// Merging objects with Object.assign
const obj3 = Object.assign({}, obj1, obj2, obj11); // Creates a new object
console.log(obj3); // Outputs {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g"}

// Preferred way to merge with spread operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // Outputs {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// Databases often return arrays of objects
const dataBase = [
  { user1: "Abdullah" },
  { user2: "Najam" },
  { user3: "Uzair" }
];


console.log(dataBase[1].user2); // Outputs "Najam"

// Getting keys, values, and entries from an object
console.log(Object.keys(newObject)); // Outputs ["id", "name", "GPA", "isLoggedIn"]
console.log(Object.values(newObject)); // Outputs ["25", "Abdullah Noor", 3.85, false]
console.log(Object.entries(newObject)); // Outputs [["id", "25"], ["name", "Abdullah Noor"], ["GPA", 3.85], ["isLoggedIn", false]]

// Checking if a property exists in an object
console.log(newObject.hasOwnProperty("name")); // true - checks for a property in the object itself

// Destructuring objects
const person = {
  name: "Abdullah",
  age: 20
};

// Avoid writing (person.name) every time, just use below syntax
// Syntax --> const {propertyName: UserDefinedName(optional)} = className
const { name } = person; // Destructuring to extract 'name'
console.log(name); // Outputs "Najam"

// Using alias in destructuring
const { name: n } = person; // Destructuring with an alias
console.log(n); // Outputs "Najam"
