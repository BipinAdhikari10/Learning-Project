// // // console.log("Hello world");

// // // function arraySum(arr) {
// // //   let sum = 0;
// // //   for (let i = 0; i < arr.length; i++) {
// // //     sum = sum + arr[i];
// // //   }
// // //   return sum;
// // // }
// // // let array = [1, 2, 3];
// // // let result = arraySum(array);

// // // console.log(result);

// // // // array push
// // // // add last elements from an array

// // // let fruits = ["apple", "banana"];
// // // let fruit = fruits.push("cherry");
// // // console.log(fruits);

// // // // array pop
// // // // remove last element from an array

// // // let vehicles = ["car", "van", "truck"];
// // // let removedVehicle = vehicles.pop();
// // // console.log(removedVehicle);
// // // console.log(vehicles);

// // // // array shift
// // // // remove the first element of an array

// // // let animals = ["tiger", "lion"];
// // // let removedAnimals = animals.unshift();
// // // console.log(removedAnimals);
// // // console.log(animals);

// // // // unshift
// // // // add one or more element to the begining of an array

// // // let cars = ["tesla", "creta"];
// // // let car = cars.unshift("suzuki", "polo");
// // // console.log(cars);

// // // // concat
// // // // combine two or more array

// // // let transportation = ["car", "van"];
// // // let heavy = ["truck", "bus"];
// // // let combined = transportation.concat(heavy);
// // // console.log(combined);

// // // // splice

// // // let city = ["pokhara", "kathmandu", "dhangadhi"];
// // // let removeItems = city.splice("1,2");
// // // console.log(removeItems);
// // // console.log(city);

// // // //

// // //  Function to find maximum number from an array.

// // function findMax(arr) {
// //   let max = arr[0];

// //   for (let i = 0; i < arr.length; i++) {
// //     if (max < arr[i]) {
// //       max = arr[i];
// //     }
// //   }
// //   console.log(max);
// // }
// // findMax([1, 2, 3]);

// // console.log("hello");

// // const findMaxNumber = (arr) => {
// //   let max = arr[0];
// //   for (let ele of arr) {
// //     if (max < ele) {
// //       max = ele;
// //     }
// //   }
// //   console.log(max);
// // };

// // findMaxNumber([10, 3, 20, 100, 40]);

// // // Function to return minimum number from an array.

// // const findminNumber = (arr) => {
// //   let min = arr[0];
// //   {
// //     for (let i = 0; i < arr.length; i++) {
// //       if (min > arr[i]) {
// //         min = arr[i];
// //       }
// //     }
// //     return min;
// //   }
// // };
// // let array = [10, 20, 4, 50];
// // let result = findminNumber(array);
// // console.log(result);

// function maxNumber(arr) {
//   let max = arr[0];
//   {
//     for (let element of arr) {
//       if (max < element) {
//         max = element;
//       }
//     }
//     return max;
//   }
// }
// let number = [20, 50, 5, 15];
// let results = maxNumber(number);
// console.log(results);

// const minNum = (arr) => {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// };
// let numbers = [10, 20, 5, 150, 15];
// let result = minNum(numbers);
// console.log(result);

function maxNum(arr) {
  let max = arr[0];
  {
    for (let element of arr) {
      if (max < element) {
        max = element;
      }
    }
  }
  return max;
}
let numbers = [10, 20, 3, 30, 40, 5];
let result = maxNum(numbers);
console.log(result);
