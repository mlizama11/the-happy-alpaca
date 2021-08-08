window.onload = addEventListenerToMenuButton();

function addEventListenerToMenuButton() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    toggleButton.addEventListener('click', () => {
        toogleMenu();
    })
}

function toogleMenu() {
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    navbarLinks.classList.toggle('active');
}