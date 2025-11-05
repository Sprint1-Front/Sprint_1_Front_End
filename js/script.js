document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {

            // Alterna a classe 'active' no elemento de navegação.
            // O CSS usará essa classe (.main-nav.active) para mostrar/esconder o menu.
            mainNav.classList.toggle('active');

            // --- ACESSIBILIDADE E UX (BÔNUS) ---
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Mudar o ícone (☰ <-> X)
            const iconSpan = menuToggle.querySelector('.hamburguer-icon');
            if (iconSpan) {
                iconSpan.innerHTML = mainNav.classList.contains('active') ? '&#10005;' : '&#9776;';
            }
        });
    }
});