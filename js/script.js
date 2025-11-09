document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const headerElement = document.querySelector('.main-header'); 

    if (toggleButton && headerElement) {
        toggleButton.addEventListener('click', () => {
            headerElement.classList.toggle('active');
        });
    }
});