/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

/* for (let i = 55; i <= 85; i++) {
  if (i % 2 !== 0) {
    if (i % 5 === 0) {
      continue;
    }
    console.log(i);
  }
}
 */
//
let n = 55;
while (n <= 85) {
  if (n % 2 !== 0) {
    if (n % 5 === 0) {
      n++;
      continue;
    }
    console.log(n);
  }
  n++;
}
