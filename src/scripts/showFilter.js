document.addEventListener("DOMContentLoaded", function () {
    const filterToggle = document.querySelector('.filter-toggle');
    const filters = document.querySelector('.filters');

    filterToggle.addEventListener('click', function () {
        filters.style.display = (filters.style.display === 'none' || filters.style.display === '') ? 'flex' : 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterToggle = document.querySelector('.oculta-filter');
    const filters = document.querySelector('.filters');

    function ajustarDisplay() {
        if (window.innerWidth < 600) {
            filters.style.display = 'none';
        } else {
            filters.style.display = 'block';
        }
    }

    ajustarDisplay();

    filterToggle.addEventListener('click', function () {
        if (window.innerWidth < 600) {
            filters.style.display = (filters.style.display === 'none' || filters.style.display === '') ? 'block' : 'none';
        }
    });

    window.addEventListener('resize', function () {
        ajustarDisplay();
    });
});
