const camisasCheckbox = document.getElementById('camisasCheckbox');
const funkoCheckbox = document.getElementById('funkoCheckbox');
const almofadaCheckbox = document.getElementById('almofadaCheckbox');
const canecaCheckbox = document.getElementById('canecaCheckbox');
const capachoCheckbox = document.getElementById('capachoCheckbox');
const placaCheckbox = document.getElementById('placaCheckbox');
const produtos = document.querySelectorAll('.product');

camisasCheckbox.addEventListener('change', filterProducts);
funkoCheckbox.addEventListener('change', filterProducts);
almofadaCheckbox.addEventListener('change', filterProducts);
canecaCheckbox.addEventListener('change', filterProducts);
capachoCheckbox.addEventListener('change', filterProducts);
placaCheckbox.addEventListener('change', filterProducts);

function filterProducts() {
  const showCamisas = camisasCheckbox.checked;
  const showFunko = funkoCheckbox.checked;
  const showAlmofada = almofadaCheckbox.checked;
  const showCaneca = canecaCheckbox.checked;
  const showCapacho = capachoCheckbox.checked;
  const showPlaca = placaCheckbox.checked;

  produtos.forEach(produto => {
    const categoria = produto.getAttribute('data-category');

    if (
      (showCamisas && categoria === 'camisas') ||
      (showFunko && categoria === 'funko') ||
      (showAlmofada && categoria === 'almofada') ||
      (showCaneca && categoria === 'caneca') ||
      (showCapacho && categoria === 'capacho') ||
      (showPlaca && categoria === 'placa')
    ) {
      produto.style.display = 'block';
    } else if (
      !showCamisas &&
      !showFunko &&
      !showAlmofada &&
      !showCaneca &&
      !showCapacho &&
      !showPlaca
    ) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}
