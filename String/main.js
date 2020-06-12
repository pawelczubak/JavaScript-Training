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