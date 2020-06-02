let animals = new Map();
animals.set(1, "hamster"); // add new element (key to the element, element)
animals.set(2, "dog");
animals.set(3, "cat");

animals.delete(3); // delete key

console.log(animals.has(3)); // check if it exists

console.log(animals.get(1));
console.log(animals.get(2));
console.log(animals.get(3));