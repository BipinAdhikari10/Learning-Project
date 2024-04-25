console.log("Hello world");

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let array = [1, 2, 3];
let result = arraySum(array);
console.log(result);

// array push
// add last elements from an array

let fruits = ["apple", "banana"];
let fruit = fruits.push("cherry");
console.log(fruits);

// array pop
// remove last element from an array

let vehicles = ["car", "van", "truck"];
let removedVehicle = vehicles.pop();
console.log(removedVehicle);
console.log(vehicles);

// array shift
// remove the first element of an array

let animals = ["tiger", "lion"];
let removedAnimals = animals.unshift();
console.log(removedAnimals);
console.log(animals);

// unshift
// add one or more element to the begining of an array

let cars = ["tesla", "creta"];
let car = cars.unshift("suzuki", "polo");
console.log(cars);

// concat
// combine two or more array

let transportation = ["car", "van"];
let heavy = ["truck", "bus"];
let combined = transportation.concat(heavy);
console.log(combined);

// splice

let city = ["pokhara", "kathmandu", "dhangadhi"];
let removeItems = city.splice("1,2");
console.log(removeItems);
console.log(city);
