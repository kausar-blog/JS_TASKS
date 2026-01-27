/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let oddNum = 91;
let oddSum = 0;
for (oddNum; oddNum <= 129; oddNum++) {
  if (oddNum % 2 !== 0) {
    oddSum = oddSum + oddNum;
  }
}
console.log(`All the odd numbers of sum: ${oddSum}`);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let evenNum = 51;
let evenSum = 0;
for (evenNum; evenNum <= 85; evenNum++) {
  if (evenNum % 2 === 0) {
    evenSum = evenSum + evenNum;
  }
}

console.log(`All the even numbers of sum: ${evenSum}`);

/*programming hero*/
