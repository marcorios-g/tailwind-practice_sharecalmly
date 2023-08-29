'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const burgerBar1 = document.querySelector('.bar-1');
const burgerBar2 = document.querySelector('.bar-2');
const burgerBar3 = document.querySelector('.bar-3');
const dropdownMenu = document.querySelector('.dropdown');

burgerMenu.addEventListener('click', function () {
    console.log('burger clicked');

    burgerBar1.classList.toggle('burger-bar-top-anim');
    
    burgerBar2.classList.toggle('burger-bar-mid-anim');

    burgerBar3.classList.toggle('burger-bar-bot-anim');
    
    dropdownMenu.classList.toggle('dropdown-anim');
})