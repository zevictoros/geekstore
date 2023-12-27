function filterProducts() {
  const produtos = Array.from(document.querySelectorAll('.product'));
  console.log("Filtering products...");
  
  const camisasCheckbox = document.getElementById('camisasCheckbox');
  const funkoCheckbox = document.getElementById('funkoCheckbox');
  const almofadaCheckbox = document.getElementById('almofadaCheckbox');
  const canecaCheckbox = document.getElementById('canecaCheckbox');
  const capachoCheckbox = document.getElementById('capachoCheckbox');
  const placaCheckbox = document.getElementById('placaCheckbox');

  const showCamisas = camisasCheckbox.checked;
  const showFunko = funkoCheckbox.checked;
  const showAlmofada = almofadaCheckbox.checked;
  const showCaneca = canecaCheckbox.checked;
  const showCapacho = capachoCheckbox.checked;
  const showPlaca = placaCheckbox.checked;

  console.log("Show Camisas:", showCamisas);
  console.log("Show Funko:", showFunko);
  console.log("Show Almofada:", showAlmofada);
  console.log("Show Caneca:", showCaneca);
  console.log("Show Capacho:", showCapacho);
  console.log("Show Placa:", showPlaca);

  const checkboxes = [showCamisas, showFunko, showAlmofada, showCaneca, showCapacho, showPlaca];
  const allUnchecked = checkboxes.every(checkbox => !checkbox);

  if (allUnchecked) {
    produtos.forEach(produto => {
      produto.style.display = 'block';
    });
    return;
  }

  produtos.forEach(produto => {
    const categoria = produto.getAttribute('data-category');
    console.log("Product Category:", categoria);

    produto.style.display = 'none';

    if (
      (showCamisas && categoria === 'camisas') ||
      (showFunko && categoria === 'funko') ||
      (showAlmofada && categoria === 'almofada') ||
      (showCaneca && categoria === 'caneca') ||
      (showCapacho && categoria === 'capacho') ||
      (showPlaca && categoria === 'placa')
    ) {
      console.log("Displaying product");
      produto.style.display = 'block';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const camisasCheckbox = document.getElementById('camisasCheckbox');
  const funkoCheckbox = document.getElementById('funkoCheckbox');
  const almofadaCheckbox = document.getElementById('almofadaCheckbox');
  const canecaCheckbox = document.getElementById('canecaCheckbox');
  const capachoCheckbox = document.getElementById('capachoCheckbox');
  const placaCheckbox = document.getElementById('placaCheckbox');

  camisasCheckbox.addEventListener('change', filterProducts);
  funkoCheckbox.addEventListener('change', filterProducts);
  almofadaCheckbox.addEventListener('change', filterProducts);
  canecaCheckbox.addEventListener('change', filterProducts);
  capachoCheckbox.addEventListener('change', filterProducts);
  placaCheckbox.addEventListener('change', filterProducts);

  filterProducts();
});
