console.log("=== Task 1: Reverse Array Without reverse() ===");
const colors = ["red", "blue", "green", "yellow", "orange"];
const reversedColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}
console.log(reversedColors); // ['orange', 'yellow', 'green', 'blue', 'red']

console.log("\n=== Task 2: Get Even Numbers ===");
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evens = [];
for (const num of numbers) {
  if (num % 2 === 0) evens.push(num);
}
console.log(evens); // [12, 98, 78, 46]

console.log("\n=== Task 3: Concatenate Array Elements ===");
const names = ["Tom", "Tim", "Tin", "Tik"];
let concatenated = "";
for (const name of names) {
  concatenated += name;
}
console.log(concatenated); // 'TomTimTinTik'
// One-line alternative:
// console.log(names.join(""));

console.log("\n=== Task 4: Reverse Words in Sentence ===");
const statement = "I am a hard working person";
const reversedSentence = statement.split(" ").reverse().join(" ");
console.log(reversedSentence); // 'person working hard a am I'

console.log("\n=== Task 5: Copy Array and Change First Element ===");
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // spread operator for independent copy
copyArray[0] = 99;
console.log("Original:", originalArray); // [1, 2, 3]
console.log("Copy:", copyArray); // [99, 2, 3]

console.log("\n=== Task 6: Print Student Names and Marks ===");
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
// Output:
// John scored 85
// Alice scored 90

console.log("\n=== Task 7: Update 2D Array Element ===");
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
matrix[1][0] = 99; // only update second row, first column
console.log(matrix);
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]
