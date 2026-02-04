//=> 1.
const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers) {
  let lowest = numbers[0];
  for (const number of numbers) {
    if (number < lowest) {
      lowest = number;
    }
  }
  return lowest;
}

console.log("Lowest number:", findLowestNumber(heights2));

// => 2
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

function findSmallestName(friends) {
  let smallest = friends[0];
  for (const friend of friends) {
    if (friend.length < smallest.length) {
      smallest = friend;
    }
  }
  return smallest;
}

console.log("Friend with smallest name:", findSmallestName(friends));

// => 3
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const prices = { laptop: 35000, tablet: 15000, mobile: 20000 };
  const totalBudget =
    laptopQty * prices.laptop +
    tabletQty * prices.tablet +
    mobileQty * prices.mobile;
  return totalBudget;
}

const laptop = 3;
const tablet = 5;
const mobile = 3;

const total = calculateElectronicsBudget(laptop, tablet, mobile);
console.log("Total Electronics Budget:", total, "TK");

// => 4
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let total = 0;
  for (const phone of phones) {
    total += phone.price;
  }
  const average = (total / phones.length).toFixed(2);
  return `Average price of phone: ${average}`;
}

console.log(findAveragePhonePrice(phones));

// => 5

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function getTotalMonthlySalary(employees) {
  let total = 0;
  for (const employee of employees) {
    const salary = employee.starting + employee.experience * employee.increment;
    total += salary;
  }
  return total;
}

const totalSalary = getTotalMonthlySalary(employees);
console.log(
  `Total salary has to be provided by the company in a month: ${totalSalary} TK`,
);
