/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 80;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log(" B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

if (score >= 90) {
  console.log("GPA 5 | Golden A+");
} else if (score >= 80) {
  console.log("GPA 4 | A+");
} else if (score >= 70) {
  console.log("GPA 3 | A-");
} else if (score >= 60) {
  console.log("GPA 3.5 | B+");
} else if (score >= 50) {
  console.log("GPA 3 | B-");
} else if (score >= 40) {
  console.log("GPA 2| C");
} else if (score >= 33) {
  console.log("GPA 1 | D");
} else {
  console.log("F");
}
