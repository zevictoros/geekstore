const cartItems = {};

function increaseQuantity(name, price) {
    cartItems[name].quantity++;
    const itemElement = cartItems[name].element;
    itemElement.querySelector('.quantity').textContent = cartItems[name].quantity;

    updateTotal(parseFloat(price));
}

function decreaseQuantity(name, price) {
    if (cartItems[name].quantity === 1) {
        // Se a quantidade for 1, remova o item do carrinho
        const itemElement = cartItems[name].element;
        itemElement.remove();
        delete cartItems[name];

        updateTotal(-parseFloat(price));
    } else if (cartItems[name].quantity > 1) {
        // Se a quantidade for maior que 1, diminua a quantidade normalmente
        cartItems[name].quantity--;
        const itemElement = cartItems[name].element;
        itemElement.querySelector('.quantity').textContent = cartItems[name].quantity;

        updateTotal(-parseFloat(price));
    }
}

function addToCart(name, price) {
    const cart = document.querySelector('.cart-items');

    if (cartItems[name]) {
        cartItems[name].quantity++;
        const itemElement = cartItems[name].element;
        itemElement.querySelector('.quantity').textContent = cartItems[name].quantity;

        updateTotal(parseFloat(price));
    } else {
        const item = document.createElement('li');
        item.textContent = `${name} - R$ ${price} - `;

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', () => decreaseQuantity(name, price));

        const quantityElement = document.createElement('span');
        quantityElement.classList.add('quantity');
        quantityElement.textContent = '1';

        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => increaseQuantity(name, price));

        item.appendChild(document.createTextNode('Quantidade: '));
        item.appendChild(decreaseButton);
        item.appendChild(quantityElement);
        item.appendChild(increaseButton);

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
