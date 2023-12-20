function addToCart(name, price) {
    const cart = document.querySelector('.cart-items');

    const item = document.createElement('li');
    item.innerHTML = `${name} - R$ ${price}`;

    cart.appendChild(item);

    // Atualiza o total
    updateTotal(price);
}

function updateTotal(price) {
    const totalElement = document.getElementById('cart-total');
    let total = parseFloat(totalElement.textContent.replace('R$ ', ''));

    total += parseFloat(price);
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('h2').textContent;
        const price = product.querySelector('p:last-of-type').textContent.replace('R$ ', '');

        addToCart(name, price);
    });
});

function ocultarCart() {
    var elemento = document.querySelector('.cart');
    elemento.style.display = 'none';
    var buttonCart = document.querySelector('.exibirCart');
    buttonCart.style.display = 'block';
}

function exibirCart() {
    var elemento = document.querySelector('.cart');
    elemento.style.display = 'block';
    var buttonCart = document.querySelector('.exibirCart');
    buttonCart.style.display = 'none';
}