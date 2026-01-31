// => 1.
const str = "I am form Bangladesh";

const lowerStr = str.toLowerCase();

let count = 0;

for (let i = 0; i < lowerStr.length; i++) {
  if (lowerStr[i] === "a") {
    count++;
  }
}

console.log(`the letter "a" appears ${count} times.`); // The letter "a" appears 3 times.

// => 2.
const sentence =
  "A amazing day always allows a person a chance to achieve all amazing aspirations and appreciate a amazing adventure around all.";

let counts = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === "A" || sentence[i] === "a") {
    counts++;
  }
}
console.log(`The letter "a/A" appears ${counts} times.`);

const upperStr = sentence.toUpperCase();

let res = 0;
for (let i = 0; i < upperStr.length; i++) {
  if (upperStr[i] === "A") {
    res++;
  }
}

console.log(`The letter "a/A" appears ${res} times.`);

// => 3.
/* 
const vowels =
  "A quick Brown fox jumps over An Amazing Island, Enjoying Every Opportunity Under Open Skies.";

let result = 0;
const vowel = vowels.toLowerCase();
for (let i = 0; i < vowel.length; i++) {
  if (
    vowel[i] === "a" ||
    vowel[i] === "e" ||
    vowel[i] === "i" ||
    vowel[i] === "o" ||
    vowel[i] === "u"
  ) {
    result++;
  }
}

console.log(result); */

/* 
for (let i = 0; i < vowels.length; i++) {
  if (
    vowels[i] === "a" ||
    vowels[i] === "e" ||
    vowels[i] === "i" ||
    vowels[i] === "o" ||
    vowels[i] === "u"
  ) {
    result++;
  }
}
console.log(result);
 */

const word =
  "A quick Brown fox jumps over An Amazing Island, Enjoying Every Opportunity Under Open Skies.";

const lowerWord = word.toLowerCase();
const vowelS = ["a", "e", "i", "o", "u"];
const foundVowelS = new Set();

for (let char of lowerWord) {
  if (vowelS.includes(char)) {
    foundVowelS.add(char);
  }
}

if (foundVowelS.size === 5) {
  console.log("All vowels are present.");
} else {
  console.log("Not all vowels are present.");
}

///

const strS =
  "A quick Brown fox jumps over An Amazing Island, Enjoying Every Opportunity Under Open Skies.";

const s = strS.toLowerCase();

let a = false,
  e = false,
  i = false,
  o = false,
  u = false;

// Check each character
for (let j = 0; j < s.length; j++) {
  if (s[j] === "a") a = true;
  if (s[j] === "e") e = true;
  if (s[j] === "i") i = true;
  if (s[j] === "o") o = true;
  if (s[j] === "u") u = true;
}

// Final check
if (a && e && i && o && u) {
  console.log("All vowels are present.");
} else {
  console.log("Not all vowels are present.");
}
