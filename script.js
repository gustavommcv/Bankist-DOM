// Header hamburguer menu
const hamburguerMenu = document.querySelector('.header__button');
const headerList = document.querySelector('.header__list');

hamburguerMenu.addEventListener('click', () => {
    headerList.classList.toggle('header__list--active');
});

// Open account buttons
const openAccountMenu = document.querySelector('.open-account-menu');
const blurContainer = document.querySelector('.blur-container');

const openAccountButtons = document.querySelectorAll('.open-account-btn');

openAccountButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();

    openAccountMenu.classList.toggle('hidden');
    blurContainer.classList.toggle('active');
}));

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

// LECTURES

// Selecting elements
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(document.querySelector('.header'));
// console.log(document.querySelectorAll('.main__section'));

// console.log(document.getElementById('section-1'));

// console.log(document.getElementsByTagName('button'));

// console.log(document.getElementsByClassName('main__section'));

// Creating and inserting elements
// .insertAdjacentHTML

const header = document.querySelector('.body');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improve functionality and analytics";
message.innerHTML = `We use cookies for improve functionality and analytics. <button class="button button-green button-cookie">Got it!</button>`;

// First child
// document.body.prepend(message);

// Last child
document.body.append(message);

// Before body as a sibling
// document.body.before(message);

// after body as a sibling
// document.body.after(message);

// Delete elementts
const cookieButton = document.querySelector('.button-cookie');

cookieButton.addEventListener('click', function() {

    //Old way
    // message.parentElement.removeChild(message)

    // New way
    message.remove();
});
