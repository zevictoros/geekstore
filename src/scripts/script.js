const cartItems = {};

function addToCart(name, price) {
    const cart = document.querySelector('.cart-items');

    if (cartItems[name]) {
        cartItems[name].quantity++;
        const itemElement = cartItems[name].element;
        itemElement.textContent = `${name} - R$ ${price} (Quantidade: ${cartItems[name].quantity})`;

        updateTotal(parseFloat(price));
    } else {
        const item = document.createElement('li');
        item.textContent = `${name} - R$ ${price} (Quantidade: 1)`;
        cart.appendChild(item);

        cartItems[name] = {
            element: item,
            quantity: 1
        };

        updateTotal(parseFloat(price));
    }
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