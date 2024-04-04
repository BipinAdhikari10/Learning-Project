// // let sum = 0;
// // for (let i = 0; i <= 10; i++) {
// //   sum = sum + i;
// // }
// // console.log(sum);

// // Arrow function to calculate the sum of first n natural numbers
// const sumOfFirstN = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const result = sumOfFirstN(10);
// console.log("Sum of first 10 natural numbers:", result);

// const str = "Hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);

function EvenNum(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
let result = EvenNum([1, 2, 3, 4, 5, 6]);
console.log(result);
