import products from './products.js';

function populateProducts() {
    const productsSection = document.querySelector('.products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.dataset.category = product.category;

        const productHTML = `
      <div class="product-image">
        <img src="${product.photo}">
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>R$ ${product.price}</p>
        <button onclick="addToCart('${product.name}', '${product.price}')">Adicionar ao Carrinho</button>
      </div>
    `;

        productDiv.innerHTML = productHTML;
        productsSection.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', populateProducts);
