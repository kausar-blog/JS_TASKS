// => 1. Declare an array

/* let fruits = ['apple', 'mango', 'banana', 'orange', 'lichi'];
// console.log(fruits.indexOf('orange'));
console.log(fruits[3]);
fruits[2] = 'Jambura';
console.log(fruits);
 */

// => 2. Add or remove element

/* let tourist = ["Saudi Arabic", "Japan", "Nepal"];
tourist.push("Dubai");
tourist.push("Qatar", "China");
tourist.pop();
console.log(tourist);
 */

// => 3. Checking Array Membership with ‘includes’

/* let books = ["Python", "JavaScript", "C", "PHP"];

if (books.includes("JavaScript")) {
  console.log("JavaScript book is present in the array");
} else {
  console.log("JavaScript book is not present in the array");
} */

// ==> 4. Checking if it's an Array
// Array variables
/* let fruits = ["apple", "banana", "mango"];
let numbers = [10, 20, 30];
let books = ["JavaScript", "Python", "PHP"];

// Non-array variable
let age = 20;
let name = "Kausar";
let isStudent = true;

// Checking which ones are arrays

if (Array.isArray(fruits)) {
  console.log("Fruits is an array.");
} else {
  console.log("Fruits is not an array.");
}

if (Array.isArray(numbers)) {
  console.log("numbers is an array.");
} else {
  console.log("numbers is not an array.");
}

if (Array.isArray(books)) {
  console.log("books is an array.");
} else {
  console.log("books is not an array.");
}

if (Array.isArray(age)) {
  console.log("age is an array.");
} else {
  console.log("age is not an array.");
}

if (Array.isArray(name)) {
  console.log("name is an array.");
} else {
  console.log("name is not an array.");
}

if (Array.isArray(isStudent)) {
  console.log("isStudent is an array.");
} else {
  console.log("isStudent is not an array.");
} */

// =>  5. Combining Arrays

let books = ["Python", "JavaScript", "C", "PHP"];

let tourist = ["Qatar", "Saudi Arabic", "Japan", "China"];

let kausar = books.concat(tourist);

console.log(books);
console.log(tourist);
console.log(kausar);
