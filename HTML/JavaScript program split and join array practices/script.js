console.log("Hello World");

// string to array

let sentence = "my name is Bipin Adhikari";
let myIntro = sentence.split(" ");
console.log(myIntro);

// array to string

let fruits = ["apple", "banana", "mango"];
let arrFruits = fruits.join("+");
console.log(arrFruits);

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
let arr = ["apple", "banana", "mango"];
printArray(arr);
