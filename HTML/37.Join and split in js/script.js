// const fruits = ["apple", "banana", "mango"];
// const joinedStrings = fruits.join(",");
// console.log(joinedStrings);

// // Split

// const sentence = "i am bipin adhikari";
// const words = sentence.split("a");
// console.log(words);

// function returnSum(num) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }

// returnSum(5);

// Arrow function:
let returnedSum = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + i;
  }
  return sum;
};
let sum = returnedSum(6);
console.log(sum);

// Arrow function:
let addNum = (a, b) => a + b; // When only one line of code.

let addedNum = (a, b) => {
  return a + b;
};
