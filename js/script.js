'use strict'
let hederMenu = document.querySelector('.menu');
let burgerElement = document.querySelector('.header-burger');
let bodyScrollLook = document.querySelector('body');
let menuNavigationList = document.querySelectorAll('.nav-list__item');
let logo = document.querySelector('.header__logo');
let logoSvg = logo.querySelectorAll('.logo-cologr-modify');
let language = document.querySelector('#language');
let languageArrow = language.querySelector('svg');
let burgerMenuLine = burgerElement.querySelectorAll('span');
let header = document.querySelector('.header');

function burgerMenu() {
    burgerElement.addEventListener('click', () => burgerElement.classList.toggle('active'));
    burgerElement.addEventListener('click', () => hederMenu.classList.toggle('active'));
    burgerElement.addEventListener('click', () => bodyScrollLook.classList.toggle('scroll-look'));
    burgerElement.addEventListener('click', () => header.classList.toggle('active'));
}
burgerMenu();

language.addEventListener('click', () => language.classList.toggle('active'));


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
    window.addEventListener('resize', moveElement);
    if (mainScreenWidth < 992) {
        moveElement();
    }
}
dinamicAdaptiveMenu();
