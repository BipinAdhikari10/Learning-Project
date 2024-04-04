// function addNum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// let array = [1, 2, 3];
// const result = addNum(array);
// console.log(result);

// function evenNum(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// let results = evenNum([1, 2, 3, 4, 5, 6]);
// console.log(results);

function arrayNum(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
let numbers = [1, 2, 3, 4, 5, 8];
let result = arrayNum(numbers);
console.log(result);

function addSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let number = addSum([1, 2, 3]);
console.log(number);
