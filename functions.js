// Functions

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(1, 3);

// This way the function will not return any value
// If we try to save this into a variable and print that we will get "undefined" as a result
const printValue = addTwoNumbers(1, 3);
console.log(printValue);

// To avoid this we will return the result

function addTwoNumbers1(number3, number4) {
  return number3 + number4;

  // Any code after the return statement is not reachable
  console.log(
    "This will not be Printed, since it is declared after the return statement"
  );
}

const willPrint = addTwoNumbers1(1, 2);
console.log(willPrint);

// The "..." when used in functions it is called rest operator
// The "..." rest operator is used so that the function can accept multiple parameters as input
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(2, 3, 5, 6, 7, "y"));

// Handling objects in functions

const user = {
  username: "Tejas",
  price: 199,
};

function handleObj(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObj(user);

// Handling arrays in functions

const myNewArr = [1, 3, 5, 6, 7];

function handleArray(getArray) {
  return getArray[0];
}

console.log(handleArray(myNewArr));
