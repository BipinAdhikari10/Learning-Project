// splice
let fruits = ["apple", "banana", "grapes"];
let removedItems = fruits.splice(1, 2, "pear", "mango");
console.log(removedItems);
console.log(fruits);

let vehicle = ["car", "van", "bike", "taxi"];
let removeItems = vehicle.splice(2, 2);
console.log(vehicle);
console.log(removeItems);

let vegetables = ["cabbage", "onion", "tomato", "cauliflower"];
let removeVegetables = vegetables.splice(1, 2, "brocauli", "pea");
console.log(removeVegetables);
console.log(vegetables);

let animals = ["dog", "lion", "tiger"];
let removeAnimals = animals.splice(1, 2, "deer");
console.log(removeAnimals);
console.log(animals);
