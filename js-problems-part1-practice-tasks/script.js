// => 1.

function temperature(cel) {
  const fah = (cel * 9) / 5 + 32;
  console.log(fah);
}
// temperature(0);
// temperature(100);

// => 2.

function findArray(numbers) {
  // console.log(numbers);
  let findNumber = 5;
  let count = 0;
  for (const number of numbers) {
    // console.log(number);
    if (findNumber === number) {
      // console.log(number);
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const result = findArray(numbers);
// console.log(result);
// result;

// best
function countOccurrences(numbers, findNumber) {
  let count = 0;
  for (const number of numbers) {
    if (number === findNumber) {
      count++;
    }
  }
  return count;
}

const num = [5, 6, 11, 12, 98, 5];
// console.log(countOccurrences(numbers, 5)); // 2
// console.log(countOccurrences(numbers, 25)); // 0

// => 5

console.log("");
function randomEl() {
  const math = Math.random() * 20;
  if (Math.random() >= 10 || Math.random() <= 20) {
    // console.log(math);
  }
}

const kausar = randomEl();

console.log(kausar);
