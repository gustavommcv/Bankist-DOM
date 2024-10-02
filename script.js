// Header hamburguer menu
const hamburguerMenu = document.querySelector('.header__button');
const headerList = document.querySelector('.header__list');

hamburguerMenu.addEventListener('click', () => {
    headerList.classList.toggle('header__list--active');
});

// Open account button
const openAccountButton = document.querySelector('.header__link--open-acc');
const openAccountMenu = document.querySelector('.open-account-menu');
const blurContainer = document.querySelector('.blur-container');

openAccountButton.addEventListener('click', (e) => {
    e.preventDefault();

    openAccountMenu.classList.toggle('hidden');
    blurContainer.classList.toggle('active');
});

blurContainer.addEventListener('click', (e) => {
    // Clicking outside the menu to close it
    e.preventDefault();

    openAccountMenu.classList.toggle('hidden');
    blurContainer.classList.toggle('active');
});

document.addEventListener('keydown', function(event) {
    // Using escape key to exit the menu
    if (event.key === 'Escape' && !openAccountMenu.classList.contains('hidden')) {
        openAccountMenu.classList.toggle('hidden');
        blurContainer.classList.toggle('active');
    }
});
