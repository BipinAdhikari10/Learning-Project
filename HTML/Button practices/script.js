console.log("Hello world");
// Making new array
let array = ["apple", "ball", "cat", "dog", "elephant"];
// PRINTING third element of an array
console.log(array[2]);
// Adding element in the end of an array
array.push("fish");
// Printing the modified array after adding the new element at the end of an array
console.log(array);

// find the length of an array
console.log(array.length);

// if value exists in an array

console.log(array.includes("zebra"));

// convert string to array

let string = "i am bipin";
let stringArray = string.split("");
console.log(stringArray);

let sentence = "today is very beautiful day";
console.log(sentence.split("a"));

// convert array to string
console.log(array.join("s"));

// convert array to string
let arrayString = array.join("+");
console.log(`Strig made from array ${arrayString}`);

let arr = arrayString.split("+");
console.log(`Array made from the arrayString`, arr);

// convert string to array
let introduction = "My name is Bipin Adhikari";
let introArray = introduction.split(" ");
console.log(`The intro array is `, introArray);

// convert introArrray to string

let myIntro = introArray.join(" ");
console.log(`The intro string is ${myIntro}`);

// Convert array to string:
let fruits = ["apple", "banana", "cherry", "orange", "grapes"];
let arrayFruits = fruits.join("+");

console.log(arrayFruits);
// Convert string to array:
let sentences = "I live in Kathmandu ";
let arrays = sentences.split(" ");
console.log(arrays);

//Convert array to string:
let colors = ["red", "green", "purple", "yellow"];
let color = colors.join("$ ");
console.log(color);

// Convert string to array:
let animalIntroduction = "King of jungle is lion";
let animal = animalIntroduction.split(" ");
console.log(animal);
