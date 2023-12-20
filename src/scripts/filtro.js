const camisasCheckbox = document.getElementById('camisasCheckbox');
const funkoCheckbox = document.getElementById('funkoCheckbox');
const produtos = document.querySelectorAll('.product');

camisasCheckbox.addEventListener('change', filterProducts);
funkoCheckbox.addEventListener('change', filterProducts);

function filterProducts() {
  const showCamisas = camisasCheckbox.checked;
  const showFunko = funkoCheckbox.checked;

  produtos.forEach(produto => {
    const categoria = produto.getAttribute('data-category');

    if ((showCamisas && categoria === 'camisas') || (showFunko && categoria === 'funko')) {
      produto.style.display = 'block';
    } else if (!showCamisas && !showFunko) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}
