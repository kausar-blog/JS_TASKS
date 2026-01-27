/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let oddNum = 81;
let oddSum = 0;
while (oddNum <= 131) {
  if (oddNum % 2 !== 0) {
    oddSum = oddSum + oddNum;
  }
  oddNum++;
}
console.log(`Sum of odd numbers:${oddSum}`);
/***


Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let evenNum = 206;
let evenSum = 0;
while (evenNum <= 311) {
  if (evenNum % 2 === 0) {
    evenSum = evenSum + evenNum;
  }
  evenNum++;
}

console.log(`Sum of even numbers:${evenSum}`);
