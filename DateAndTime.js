// Dates

let myDate = new Date();
// We have multiple options to display the date
console.log(myDate.toString());
console.log(myDate.toLocaleString());

// Date is an object in JavaScript

console.log(typeof myDate);

// Here the month value starts from 0 => 0 -> Jan 1 -> Feb 11 -> Dec and 12 -> Jan again
let newDate = new Date(2022, 0, 2);
console.log(newDate.toDateString());

// TimeStamp

let myTimeStamp = Date.now();

console.log(myTimeStamp);

let oldDate = new Date();
console.log(oldDate.getFullYear());
