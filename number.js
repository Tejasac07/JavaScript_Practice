const number = new Number(300);

// Some of the Methods available with Numbers
console.log(number);

console.log(number.toString().length);

console.log(number.toFixed(1));

const otherNumber = 1123.434243;
// used to set how many decimal values must be printed
console.log(otherNumber.toFixed(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// The Math function is an object
console.log(Math);

// using ".abs" we can convert any negative value to a positive value, abs => absolute value
console.log(Math.abs(-4));

// The "round" function is Math is used to round off the value to the nearest posible value
console.log(Math.round(500.55));

// The "ceiling" function is used to round off the value to a value larger than that
console.log(Math.ceil(54.2));

// The "floor" function is used to round off a decimal value to a value less than that
console.log(Math.floor(54.9));

// To find the lowest value inside an array
console.log(Math.min(2, 3, 4, 1));

// To find the highest value inside an array
console.log(Math.max(5, 3, 4, 6, 5));

console.log(Math.random() * 100);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)));
