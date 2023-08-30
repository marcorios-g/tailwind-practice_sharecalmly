'use strict';

// scroll behaviour
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', function () {
    const currentScroll = this.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
})

// burger menu
const burgerMenu = document.querySelector('.burger-menu');
const burgerBar1 = document.querySelector('.bar-1');
const burgerBar2 = document.querySelector('.bar-2');
const burgerBar3 = document.querySelector('.bar-3');
const dropdownMenu = document.querySelector('.dropdown');

burgerMenu.addEventListener('click', function () {
    burgerBar1.classList.toggle('burger-bar-top-anim');
    
    burgerBar2.classList.toggle('burger-bar-mid-anim');

    burgerBar3.classList.toggle('burger-bar-bot-anim');
    
    dropdownMenu.classList.toggle('dropdown-anim');
})