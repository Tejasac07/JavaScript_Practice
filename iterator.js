// For Loop

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 7) {
    console.log(`${element} is the best number.`);
  }
  console.log(element);
}

// Nested for loop

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(`Outer loop value ${i}`);
//   for (let j = 0; j < 10; j++) {
//     const element = j;
//     console.log(`Inner loop value ${j} and outer loop value ${i}`);
//   }
// }

// Print tables from 1 to 10 using nested for loop

for (let i = 1; i <= 10; i++) {
  const element = i;
  for (let j = 1; j <= 10; j++) {
    const element = j;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// for loops for arrays
let myArray = ["1", "2", "3"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

// While Loop
let count = 0;
while (count <= 10) {
  console.log(`Value of count is ${count}`);
  count = count + 2;
}

// while loop for arrays

let count1 = 0;
while (count1 < myArray.length) {
  console.log(myArray[count1]);
  count1 += 1;
}

// do while loop

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
