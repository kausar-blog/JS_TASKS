// ==> 1.
function highestAndLowest(numbers) {
  let highest = -Infinity;
  let lowest = Infinity;
  for (const number of numbers) {
    if (number > highest) {
      highest = number;
    }
    if (number < lowest) {
      lowest = number;
    }
  }

  return { highest, lowest };
}

const height = [167, 190, 120, 165, 137];
const output = highestAndLowest(height);

// console.log(output);
// console.log("--------------------");
// console.log("lowest: ", Math.min(...height));
// console.log("hightest: ", Math.max(...height));

// ==> 2.

function friendsAll(friends) {
  // console.log(friends);

  let smallest = Infinity;
  let smallestFriendName = friends[0];
  for (const friend of friends) {
    // console.log(friend);
    // console.log(friend, "length: ", friend.length);
    /*    const length = friend.length;
    if (length < smallest) {
      smallest = length;
      smallestFriendName = friend;
    } */
    if (friend.length < smallestFriendName.length) {
      smallestFriendName = friend;
    }
  }
  // return { smallest, smallestFriendName };
  return smallestFriendName;
}

const allFriends = ["rahim", "robin", "rafi", "ron", "rashed"];

const result = friendsAll(allFriends);

// console.log(result);

// ==> 3...

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const products = { laptop: 35000, tablet: 15000, mobile: 20000 };

  let total_laptop = products.laptop * laptop;
  let total_tablet = products.tablet * tablet;
  let total_mobile = products.mobile * mobile;

  let total_budget = total_laptop + total_tablet + total_mobile;

  return { total_budget };

  /* const totalBudget =
    laptopQty * products.laptop +
    tabletQty * products.tablet +
    mobileQty * products.mobile;

  return totalBudget; */
}

let laptop = 3;
let tablet = 5;
let mobile = 3;

const total = calculateElectronicsBudget(laptop, tablet, mobile);

// console.log("Total Electronics Budget:", total, "TK");

/// =>>> 4.

function findAveragePhonePrice(phones) {
  // console.log(phones);
  let totalPhonePrice = 0;
  for (const phone of phones) {
    // console.log(phone);
    // console.log(phone.price);
    totalPhonePrice += phone.price;
  }

  const average = (totalPhonePrice / phones.length).toFixed(2);

  return `average price of phone ${average}`;
}
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const average = findAveragePhonePrice(phones);

// console.log(average);

// => 5.

function getTotalMonthlySalary(employees) {
  // console.log(employees);

  let total = 0;

  for (const employee of employees) {
    // console.log(employee);

    const res = employee.experience * employee.increment;

    const salary = res + employee.starting;

    total += salary;
    // console.log(salary);
  }
  return total;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const salary = getTotalMonthlySalary(employees);

console.log(
  `total salary has to be provided by the company in a month ${salary} tk`,
  salary,
);
