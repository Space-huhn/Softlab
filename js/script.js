'use strict'
let hederMenu = document.querySelector('.header-nav__menu');
let burgerElement = document.querySelector('.header-burger');
let bodyScrollLook = document.querySelector('body');
let menuNavigationList = document.querySelectorAll('.nav-list__item');
let logo = document.querySelector('.header__logo');
let logoSvg = logo.querySelectorAll('.logo-cologr-modify');
let language = document.querySelector('.language');
let languageArrow = language.querySelector('svg');
let burgerMenuLine = burgerElement.querySelectorAll('span');
let header = document.querySelector('.header');
let headerNavigation = document.querySelector('.header-nav');

function burgerMenu() {
    burgerElement.addEventListener('click', () => burgerElement.classList.toggle('active'));
    burgerElement.addEventListener('click', () => hederMenu.classList.toggle('active'));
    burgerElement.addEventListener('click', () => bodyScrollLook.classList.toggle('scroll-look'));
    burgerElement.addEventListener('click', () => header.classList.toggle('active'));
    burgerElement.addEventListener('click', () => headerNavigation.classList.toggle('active'));
}
burgerMenu();

language.addEventListener('click', () => language.classList.toggle('active'));


let hederNav = document.querySelector('.header-nav');
let menuList = document.querySelector('.header-nav__list');
let menuListLink = menuList.querySelectorAll('.header-nav__link');

menuListLink.forEach((element) => {
    element.addEventListener('click', () => hederNav.classList.remove('active'));
    element.addEventListener('click', () => burgerElement.classList.remove('active'));
    element.addEventListener('click', () => hederMenu.classList.remove('active'));
    element.addEventListener('click', () => header.classList.remove('active'));
    element.addEventListener('click', () => headerNavigation.classList.remove('active'));
    element.addEventListener('click', () => bodyScrollLook.classList.remove('scroll-look'));
})
//for (const element of menuList) {
//   menuListLink.addEventListener('click', () => hederNav.classList.remove('active'));
// }

function menuPaddingOnScroll() {
    window.addEventListener('scroll', scrollFromTop);
    function scrollFromTop() {
        let scrollLenth = window.pageYOffset;
        if (scrollLenth >= 100) {
            header.classList.add('on-scroll');
        } else {
            header.classList.remove('on-scroll');
        }
    }
}
menuPaddingOnScroll();

function showMore() {
    let buttonReadMore = document.querySelector('.read-more__btn');
    let readMoreBlock = document.querySelector('.read-more');
    buttonReadMore.addEventListener('click', () => readMoreBlock.classList.toggle('unhide'));
    buttonReadMore.addEventListener('click', () => buttonReadMore.classList.toggle('active'));
}
showMore()

let ibg = document.querySelectorAll('.ibg');
ibg.forEach((element, index) => {
    let a = `../${element.querySelector('img').getAttribute('src')}`;
    element.style.backgroundImage = `url('${a}')`;
});

function dinamicAdaptiveMenu() {
    let mainScreenWidth = document.documentElement.clientWidth;
    let btn = document.querySelector('.contacts-form__btn');
    let referensBlock = document.querySelector('.contacts-call__row');
    let form = document.querySelector('.contacts-call__form');
    function moveElement() {
        let viewportWidt = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewportWidt < 992) {
            referensBlock.after(btn);
        } else {
            form.append(btn);
        }
    }

    let lider = document.querySelector('.lider');
    let readMore = document.querySelector('.read-more');
    let portfolioRow = document.querySelector('.portfolio-row');
    function readMoreCount() {
        let viewportWidt = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewportWidt < 992) {
            readMore.prepend(lider);
        } else {
            portfolioRow.append(lider);
        }
    }
    window.addEventListener('resize', moveElement);
    window.addEventListener('resize', readMoreCount);

    if (mainScreenWidth < 992) {
        moveElement();
    }
    if (mainScreenWidth < 992) {
        readMoreCount();
    }
}

dinamicAdaptiveMenu();
