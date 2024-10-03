'use strict';

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

// Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section2 = document.querySelector('#section-2');

btnScrollTo.addEventListener('click', (e) => {
    section2.scrollIntoView({behavior: 'smooth'});
});

// Page navigation - smooth scrolling

// document.querySelectorAll('.header__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();

//         const id = this.getAttribute('href');

//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.header__list').addEventListener('click', function(e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('header__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

///////////////////////////////////////////
// LECTURES
///////////////////////////////////////////
