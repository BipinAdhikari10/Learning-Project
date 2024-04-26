console.log("Hello World");

// for of loop
function findMax(arr) {
  let max = arr[0];
  for (let element of arr) {
    if (max < element) {
      max = element;
    }
  }
  return max;
}
let numbers = [10, 20, 5, 3, 50];
let results = findMax(numbers);
console.log(results);

// find min using an arrow function

const findMin = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};
let num = [10, 2, 20, 5, 25];
let result = findMin(num);
console.log(result);
