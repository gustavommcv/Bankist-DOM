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

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('#section-3__buttons');
const tabsContent = document.querySelectorAll('.operation__content');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));

    clicked.classList.add('operations__tab--active');

    // Activate content area
    tabsContent.forEach(c => c.classList.remove('operation__content--active'));

    document.querySelector(`.operation__content--${clicked.getAttribute('data-tab')}`).classList.add('operation__content--active');
});

// Menu fade animation
const handleHover = function(e) {
    if (e.target.classList.contains('header__link')) {
        const link = e.target;
        const siblings = link.closest('.header').querySelectorAll('.header__link');
        const logo = link.closest('.header').querySelector('img');
    
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
            }
            logo.style.opacity = this;
        });
    }
}

const nav = document.querySelector('.header');

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// Bad way (performance)
// const initialCoords = section2.getBoundingClientRect();

// window.addEventListener('scroll', function(e) {
//     if (window.scrollY > initialCoords.top) nav.classList.add('sticky'); else nav.classList.remove('sticky');
// });

// Good way (Intersection Observer API)

// const obsCallBack = function(entries, observer) {
//     entries.forEach(entry => console.log(entry));
// }

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallBack, obsOptions);

// observer.observe(section2);

const section1 = document.querySelector('#section-1');
const headerHeight = document.querySelector('.header').getBoundingClientRect().height;

const stickyNav = function(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('sticky'); 
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`
});

headerObserver.observe(section1);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        return;
    }

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('.img--blur');

const loadIMG = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('img--blur');

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadIMG, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const maxSlides = slides.length - 1;

const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
}

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
// 0% 100% 200% 300%

let curSlide = 0;

// Next slide
const nextSlide = function() {
    if(curSlide === maxSlides) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
}
btnRight.addEventListener('click', nextSlide);
// -100% 0% 100% 200%

// Previous slide
const prevSlide = function() {
    if(curSlide === 0) {
        curSlide = maxSlides;
    } else {
        curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
}
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();    
})

const dotContainer = document.querySelector('.dots');

const createDots = function() {
    slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML('beforeend', `
            <button class="dots__dot" data-slide="${i}"></button>`);
    });
}
createDots();

const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
activateDot(0);

dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide)
    }
});

///////////////////////////////////////////
// LECTURES
///////////////////////////////////////////

// Lifecycle DOM Events
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
})
