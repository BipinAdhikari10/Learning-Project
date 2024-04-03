// function sumNum(a, b) {
//   return a + b;
// }
// let num = sumNum(2, 4);
// console.log(num);

// let Sumnum = (a, b) => a + b;
// console.log(sumNum(2, 2));

// for (let num = 1; num < 10; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// arrow function

function sumNum(a, b) {
  return a + b;
}
let sum = sumNum(4, 5);
console.log(sum);

let addNum = (a, b) => a + b;
let sumA = addNum(4, 5);
console.log(sumA);

const sub = (a, b) => a - b;
console.log(sub(5, 4));

const checkEven = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};
let result = checkEven(4);
console.log(result);

const checkOdd = (num1) => {
  if (num1 % 2 !== 0) {
    return "odd";
  } else {
    return "Even";
  }
};
console.log(checkOdd(1));
