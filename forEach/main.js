const shoppingList = ["Milk", "Sugar", "Eggs", "Bananas", "Salt"];

shoppingList.forEach(product => {
    console.log(product);
})


shoppingList.forEach((product, index) => {
    console.log(`The index is ${index} and the product is ${product}`);
})