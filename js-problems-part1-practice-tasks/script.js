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
  let count = [];
  for (const number of numbers) {
    // console.log(number);
    if (count.includes(number) === false) {
      console.log(number);
    }
  }
}

const numbers = [5, 6, 11, 12, 98, 5];
const result = findArray(numbers);
console.log(result);
// result;

// => 5

console.log("");
function randomEl() {
  const math = Math.random() * 20;
  if (Math.random() >= 10 || Math.random() <= 20) {
    console.log(math);
  }
}

const kausar = randomEl();

console.log(kausar);
