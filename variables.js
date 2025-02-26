const accountId = 123445;
let accountEmail = "sample@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

//accountId = 2;
accountEmail = "hc@hc.com";
accountPassword = "12234234";
accountCity = "Bengaluru";

console.log(accountId);

// To find variable type we use "typeof" keyword
console.log(typeof "accountCity");

console.table([accountId, accountEmail, accountPassword, accountCity]);

// Converting the datatype

let number = 1;
let letter = "acx";
let bool = 1;

let toString = String(number);
console.log(toString);

let booleanIsLoggedIn = Boolean(bool);
console.log(booleanIsLoggedIn);

let toNumber = Number(letter);
// You will get "NaN" as the output when you try to convert an string into a number
console.log(toNumber);

/*

DataTypes

Primitive DataType - There are 7 types
- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt

Reference (Non primitive)
- Array
- Objects
- functions


***Important*** If you want to master JS, master both objects and browser's web events
*/

const bigNumber = 1232423423n;
console.log(typeof bigNumber);

const arr = [1, 2, 3, 4, 5];
console.log("The array type is " + typeof arr);
