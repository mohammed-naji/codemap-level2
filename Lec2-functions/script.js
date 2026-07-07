// let num1 = prompt("Enter The First Number:");
// let num2 = prompt("Enter The Second Number:");
// let op = prompt("Enter The Operation (+, -, *, /):");

// console.log(num1, num2, op);

// if (confirm("Are you sure?!")) {
//   console.log("Done");
// }

// alert("fff");

// let price = Number(prompt("Enter the price"));

// let total = calc_total(price);
// let total2 = calc_total(price, 20);

// console.log(total, total2);

// function calc_total(price, vat = 15) {
//   return price + price * (vat / 100);
// }

let name = prompt("Enter your name:");
let dob = prompt("Enter your birthday year:");

let years = new Date().getFullYear() - dob;
let months = years * 12;
let days = years * 365;

console.log(
  `Welcome ${name}, your age in years ${years}, in months ${months}, in days ${days}`,
);

// console.log(
//   "Welcome " +
//     name +
//     ", your age in years " +
//     years +
//     ", in months " +
//     months +
//     ", in days " +
//     days,
// );
