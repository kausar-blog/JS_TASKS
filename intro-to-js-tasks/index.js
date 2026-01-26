// ==> 1
/*
const money = 1000;
const oranges = 300;
const apples = 400;

const result = money - (oranges + apples);

console.log(result);
 
const money = 1000;
const cost = 700;
const result = money - cost;
console.log(result); */

// ==> 2
/* 
const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.5;

const results = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log((results / 5).toFixed(2));

const marks = [75.25, 65, 80, 35.45, 99.5];
const result = marks.reduce((a, b) => a + b, 0);
const average = result / marks.length;
console.log(average.toFixed(2)); */

// ==> 3
/*
const num = 119;
 if (number % 5 === 0) {
  console.log(number);
} else {
  console.log(number);
}


const number = 119 % 5;
console.log(number);

const num = 119;
const result = num % 5;
console.log(result);
 */

// ==> 4

var a = isNaN("11");
var b = isNaN(2 - 10);
console.log(a); // false
console.log(b); // false
