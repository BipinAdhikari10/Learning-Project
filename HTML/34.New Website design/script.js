// // Find the sum of first 10 natural numbers:
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// // Write a function to return  the sum of given numbers:

// // splice

// let fruits = ["apple", "banana", "pear", "mango", "orange"];
// let removedItems = fruits.splice(2, 1);
// console.log(removedItems);
// console.log(fruits);

// function sumArr(arr)
// {
//   let sum=0;
//   for(let i=0;i<arr.length;i++)
//   {
//     sum+=arr[i];
//   }
//   return sum
// }
// let arr=[1,2,3,4]
// const result=sumArr(arr)
// console.log(arr)
console.log("Hello world");

function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
    return false;
  }
}
let array = ["car", "van", "taxi", "bus"];
let ele = "jeep";
// const isElementExist = findElement(array, ele);
const isElementExist = array.includes(ele);
if (isElementExist) {
  console.log("Element exist");
} else {
  console.log("Element doesn't exist");
}

function removedElement(arr, index) {
  arr.splice(index, 1);
  return arr;
}
let arr = [1, 2, 3];
let result = removedElement(arr, 1);
console.log(result);

function printArrayElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
let num = [1, 2, 3, 4, 5];
let num1 = printArrayElement(num);
console.log(num1);

function reversedItems(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reversedItems(["apple", "ball", "cat", "dog"]);
