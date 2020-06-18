let giftCard = {
    code: 'EU483483GB',
    name: 'Gift Card',
    price: 10,
    class: 'card'
}

// string
function createMarkup(product) {
    return `
    <div class="product ${product.class}">
        <h2>${product.name}</h2>
        <span class="code">${product.code}</span>
        <span class="price">${product.price}GBP</span>
    </div>
    `
}

window.onload = function () {
    const content = document.querySelector('.content')
    content.innerHTML = this.createMarkup(giftCard)
}

// -----------  common methods  ---------------
let fruit = 'banana';
let moreFruit = 'banana\napple'; // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma ('banana, apple, etc')
console.log(fruit.split('')); //split by characters