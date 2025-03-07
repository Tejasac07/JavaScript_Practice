// Arrow Functions and This keyword

// This keyword

const user = {
  username: "Tejas",
  price: 899,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "anotherName";
user.welcomeMessage();

// Note the context which is available if nothing is declared is a empty object
console.log(this);

// Arrow Functions

const chai = () => {
  let username = "Tejas";
  console.log(
    'It will print "',
    this.username,
    "\" Because 'this' keyword works only with objects"
  );
};

chai();

// Explicit Return
// If we use curly braces for a function we have to declare a return statement

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// Implicit Return
// We can avoid using return statement for a function

const add2 = (num3, num4) => num3 + num4;
console.log(add2(1, 3));

// This will return an object
const add3 = (num1, num2) => ({ username: "Tejas" });
console.log(add3);

// Or else you can write the above code like this
// These types of codes are very much used in React

//const add2 = (num3, num4) => (num3 + num4);

// Important
// Immediately Invoked Function Expression (IIFE)

// Wrapping a function and calling the function immediately
// Named IIFE
(function dbCon() {
  console.log(`DB CONNECTED`);
})();

// IIFE with arrow function
(() => {
  console.log(`DB 2 CONNECTED`);
})();
