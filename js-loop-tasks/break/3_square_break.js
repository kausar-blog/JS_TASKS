/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
  // console.log(i);

  if (Math.sqrt(i) % 1 === 0) {
    console.log(i);
  }
}

/* 
for (let i = 1; i <= 100; i++) {
  if (i === 1) {
    console.log(i);
    continue;
  }

  if (Number.isInteger(Math.sqrt(i))) {
    console.log(`Found the first square: ${i}. Stopping loop.`);
    break;
  }
  console.log(i);
}
 */
