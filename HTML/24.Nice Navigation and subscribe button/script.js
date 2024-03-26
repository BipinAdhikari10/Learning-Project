function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let numbers = [10, 20, 30, 40];
let result = sumArray(numbers);
console.log(`The sum of the number is ${result}`);
