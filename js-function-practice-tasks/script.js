// => 1

function multiply(a, b, c, d) {
  // return a * b * c * d;

  if ([a, b, c, d].some((n) => typeof n !== "number")) return "Invalid input";
  return a * b * c * d;
}

// console.log(multiply(2, 3, 4, 5));

// => 2
function oddEvenMultiply(numbers) {
  // if (numbers % 2 !== 0) {
  //   return numbers * 2;
  // }
  // return numbers / 2;

  return numbers % 2 === 0 ? numbers / 2 : numbers * 2;
}

// console.log(oddEvenMultiply(4));

// => 3
function make_avg(numbers) {
  let sum = 0;
  for (const number of numbers) {
    // console.log(number);
    sum = sum + number;
  }
  return sum / numbers.length;

  // return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

const arr = [5, 4, 6, 7];

const average = make_avg(arr);

// console.log(`The average number of the: `, average);

// => 4

function count_zero(binarySting) {
  let count = 0;
  for (const char of binarySting) {
    // if (char === "0") count++;
    if (char === "0") count++;
  }
  return count;
}

// console.log(count_zero("1010010101001"));

/// =====> task-5
/* 
function odd_even(numbers) {
  let Even = [];
  let Odd = [];

  for (const number of numbers) {
    if (number % 2 === 0) {
      Even.push(number);
    }
    if (number % 2 !== 0) {
      Odd.push(number);
    }
  }
  return `Even [${Even}] and Odd [${Odd}]`;
}

const nam = [5, 4, 3, 2, 6, 7, 8, 9, 1, 10];
// const nam = [10, 5];

const result = odd_even(nam);
console.log(result); */
function oddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";

  // return number % 2 === 0 ? "Even" : "Odd";
}
console.log(oddEven(10));
console.log(oddEven(5));

// => Count both 0s and 1s
// Write a function count_zero_ones(binaryString) that returns an object with counts of 0s and 1s.

function count_zero_ones(binarySting) {
  let zeros = 0;
  ones = 0;
  for (const char of binarySting) {
    if (char === "0") {
      zeros++;
    }
    if (char === "1") {
      ones++;
    }
  }
  console.log(`{zeros: ${zeros}, ones: ${ones}}`);
}

const binary = "1010010101001";
// const res = count_zero_ones(binary);

// res;

function count_zero_ones_bin(binarySting) {
  let zeros = 0;
  ones = 0;
  for (const char of binarySting) {
    if (char === "0") zeros++;

    if (char === "1") ones++;
  }

  return { zeros, ones };
}

const bin = "1010010101001";
const re = count_zero_ones_bin(bin);

// console.log(re);

//==> Check if binary string is balanced
// Write a function is_balanced(binaryString) that returns true if the number of 0s equals the number of 1s, otherwise false.

function is_balanced(binarySting) {
  let zero = 0;
  let one = 0;
  for (const char of binarySting) {
    if (char === "0") zero++;
    if (char === "1") one++;
  }
  return zero === one;
}

let num = "1010";
const isBala = is_balanced(num);
// console.log(isBala);
// console.log(is_balanced("101"));

// ==> Find the longest consecutive 0s
// Write a function longest_zeros(binaryString) that returns the length of the longest sequence of consecutive 0s.

// longest_zeros("1001000") // 3

// ==> Flip all bits
// Write a function flip_bits(binaryString) that returns a new string where 0s become 1s and 1s become 0s.

// flip_bits("1010") // "0101"
