/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let isStudent = true;
let price = 800;
let ticketPrice;

if (age < 10) {
  ticketPrice = 0;
} else if (isStudent && age <= 25) {
  ticketPrice = price - (price * 50) / 100;
} else if (age >= 60) {
  ticketPrice = price - (price * 15) / 100;
} else {
  ticketPrice = price;
}

console.log(`Ticket price: ${ticketPrice} tk`);
