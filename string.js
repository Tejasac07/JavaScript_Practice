const name = "tejas";
const age = 28;

/* To concatinate strings don't use the below syntax
rather try using backticks(string interpolation) for example
(`Hello my name is ${name} and my age is ${age}`)
*/
//console.log(name + age + " Value");

console.log(`Hello my name is ${name} and my age is ${age}.`);

const gameName = new String("Tejasac-07");

// Below are the methods which are available with String for String manipulation

console.log(gameName);

console.log(gameName[4]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf("s"));

const newString = "    TrimSpaces    ";
console.log(newString);
console.log(newString.trim());
