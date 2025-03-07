// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
// for the same statement above if we use {} we need to give a return statement to get result
// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

console.log(newNums);

// Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNumbers.map((num) => num + 10);
console.log(nums);

// chaining functions
const mulNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(mulNums);

// Reduce function

const myVar = [1, 2, 3];

// This is using named function
// const myTotal = myVar.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and curval ${currval}`);
//   return acc + currval;
// }, 3);

// This is with arrow function
const myTotal = myVar.reduce((acc, curval) => acc + curval, 1);

console.log(myTotal);

// Shopping Cart
// The reduce function most of the time used to calculate the total value of a shopping cart

const shoppingCart = [
  {
    itemName: "js-course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "mobdev",
    price: 2599,
  },
  {
    itemName: "dataScince",
    price: 2799,
  },
];

const Total = shoppingCart.reduce((acc, item) => item.price + acc, 0);
console.log(Total);
