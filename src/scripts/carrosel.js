const carrossel = document.querySelector('.carrossel');
const secoesCarrossel = document.querySelectorAll('.carrossel-section');

let currentSectionIndex = 0;
let sectionWidth = secoesCarrossel[0].offsetWidth;
let totalSections = secoesCarrossel.length;

function updateSectionWidth() {
  sectionWidth = secoesCarrossel[0].offsetWidth;
}

function goToSection(index) {
  carrossel.style.transform = `translateX(-${index * sectionWidth}px)`;
  currentSectionIndex = index;
}

function nextSection() {
  if (currentSectionIndex < totalSections - 1) {
    goToSection(currentSectionIndex + 1);
  } else {
    goToSection(0);
  }
}

setInterval(nextSection, 3000);

window.addEventListener('resize', () => {
  updateSectionWidth();
  goToSection(currentSectionIndex);
});
