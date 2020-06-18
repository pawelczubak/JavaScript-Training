let animals = ['cat', 'dog', 'horse', 'hamster'];
animals[2] // access value



// get and remove the first element of the array
// let firstAnimal = animals.shift(); 
// console.log(firstAnimal);

// get and remove the last element of the array
// let lastAnimal = animals.pop(); 
// console.log(lastAnimal);

// remove (index, how many elements from chosen index)
// animals.splice(0, 1);  


// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);


// ------------  processing  ---------------

// for loop

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// or for of loop

// for (let animal of animals) {
//     console.log(animal);
// }

//  ------------- common methods ----------------

console.log('to string', animals.toString());
console.log(animals.join('--'));
console.log(animals.pop(), animals); //   remove last item
console.log(animals.push('pig'), animals); //   add a new element at the end of the array
animals[animals.length] = 'new animal';
console.log(animals);
animals.shift(); //remove first element from a array
console.log(animals);
animals.unshift('tiger'); // add a new element at the beginning of the array
console.log(animals);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let animalsAndVegetables = animals.concat(vegetables);
console.log(animalsAndVegetables);
console.log(animalsAndVegetables.slice(1, 4));
console.log(animalsAndVegetables.reverse());
console.log(animalsAndVegetables.sort());

let someNumbers = [2, 56, 7, 12, 1, 8, 330, 54, 22, 9, 1];

console.log(someNumbers.sort(function (a, b) {
    return a - b
})); // sorting ascending

console.log(someNumbers.sort(function (a, b) {
    return b - a
})); // sorting descending

let emptyArray = [];
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);