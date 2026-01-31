// => 1.
const colors = ["red", "blue", "green", "yellow", "orange"];
// colors.reverse();
// console.log(colors);
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// => 2.
console.log("--------------");

const numbers = [12, 98, 5, 41, 23, 78, 46];

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// ==> 3.
console.log("--------------");

let number = ["Tom", "Tim", "Tin", "Tik"];
console.log(number.join(""));

let res = "";
for (const char of number) {
  res = res + char;
}
console.log(res);

// ==> 4.
console.log("--------------");

const statement = "I am a hard working person";

const reversed = statement.split(" ");
const result = reversed.reverse().join(" ");
console.log(result);

const bestAns = statement.split(" ").reverse().join(" ");
console.log(bestAns);

// ==> 5.
console.log("--------------");

const firstArray = [1, 2, 3];
const secondArray = [...firstArray];
secondArray[0] = 99;
console.log(secondArray);
console.log(firstArray);

// ==> 6
console.log("--------------");

const object = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const obj of object) {
  console.log(`${obj.name} scored ${obj.marks}`);
}

// ===> 7
console.log("--------------");
const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(array);
array[1][0] = 99;
console.log(array);
