/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
/* 
for (let i = 1; i <= 40; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
} */

let n = 1;
while (n <= 40) {
  // n++;
  if (n % 2 !== 0) {
    n++; //
    continue;
  }
  console.log(n);
  n++;
}
