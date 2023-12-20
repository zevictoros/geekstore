const carrossel = document.querySelector('.carrossel');
const itensCarrossel = document.querySelectorAll('.item-carrossel');

let tamanhoItem = itensCarrossel[0].offsetWidth;

// Copie os itens do carrossel para criar um loop infinito
itensCarrossel.forEach((item) => {
    carrossel.appendChild(item.cloneNode(true));
});

// Função para mover o carrossel
function moverCarrossel() {
    carrossel.style.transition = 'transform 1s ease-in-out';
    carrossel.style.transform = `translateX(-${tamanhoItem}px)`;

    setTimeout(() => {
        carrossel.style.transition = 'none';
        carrossel.style.transform = 'translateX(0)';
        carrossel.appendChild(carrossel.firstElementChild);
    }, 1000);
}

// Move o carrossel automaticamente a cada intervalo de tempo
setInterval(moverCarrossel, 3000);
