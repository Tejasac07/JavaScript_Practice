// Arrays -- They are also objects

const myArr = [0, 1, 2, 3, 4];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr);
console.log(myArr2);

console.log(myArr2[1]);

// Array methods

myArr.push(5);
myArr2.pop();
console.log(myArr);
console.log(`after deleting the last value, myArr2 consists of ${myArr2}`);

// the "unshift" will add the value to the start of the array
myArr.unshift(11);
console.log(myArr);

// And "shift" will delete the value from the start
myArr.shift();
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(2));

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log(myArr);
console.log(myArr.splice(1, 3));
console.log(myArr);

const marvel = ["IronMan", "SpiderMan", "Hulk"];
const dc = ["BatMan", "Flash", "SuperMan"];
// The push feature will add the entier array as an value
marvel.push(dc);
console.log(marvel);

// So we will use concat feature to add to arrays so that it returns a single array with all the values
const marvel1 = ["IronMan", "SpiderMan", "Hulk"];
const dc1 = ["BatMan", "Flash", "SuperMan"];
const newArr = marvel1.concat(dc1);
console.log(newArr);

// Spread feature in Arrays(...variableName), this will perform same as concat
const allSuperHeros = [...marvel1, ...dc1];
console.log(allSuperHeros);

// Flat feature returns a new Array with all sub-array elements concatenated into it recursively up to the specified depth
// When you have an array which containes arrays inside arrays use "Flat" feature

const anotherArray = [1, 2, 3, 4, [2, 4, 5], 4, 5, [1, 3, [3, 5]]];
// By only using the flat feature it will only look into a single array with in an array
const singleArray = anotherArray.flat();
console.log(singleArray);

// But if you pass the "Infinity" parameter to the flat function it will look into endless arrays inside an array
const singleArrayI = anotherArray.flat(Infinity);
console.log(singleArrayI);

// Converting an String into an array

console.log(Array.isArray("Tejas"));
console.log(Array.from("Tejas"));

// This will give an empty array since this is an Object
// we are not specifying wheather to convert key or value part of the Object
console.log(Array.from({ name: "tejas" })); //interesting

// Convert Numbers into arrays

let number1 = 100;
let number2 = 200;
let number3 = 300;

console.log(Array.of(number1, number2, number3));
