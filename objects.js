// Objects

// We can declare an object in 2 ways
// 1. Like Literal
// 2. Like Constructor

// object literals

const JsUser = {
  name: "Tejas",
  age: 28,
  location: "Bengaluru",
  email: "example@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

console.log(JsUser.name);
// This is the prefered way to call / print object values
console.log(JsUser["age"]);

// If you want to use a Symbol variable as an input to the object
// In that case you need to use this syntax "[symbolVariable]: Value"

const newValue = Symbol("mySym");

const JsUser1 = {
  name: "Tejas",
  age: 28,
  [newValue]: "findValue",
  location: "Bengaluru",
  email: "example@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

console.log(JsUser1[newValue]);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting());

// How to declare an object with constructor
// When an Object is declared using a constructor it is called Singleton object
// Objects declared using literals are not Singleton objects

const newAppUser = new Object();

console.log(newAppUser);

// de-structuring an object

const course = {
  couseName: "js course",
  price: "899",
  courseDuration: "3 hours",
};

const { couseName } = course;

// You can give an custome name with the below syntax
//const { couseName: Title } = course;

console.log(couseName);

// Objects for API's

// API's are in JSON format most of the time, sometimes even as arrays
