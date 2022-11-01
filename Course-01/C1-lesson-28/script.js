'use strict';

//* Получение элементов со страницы

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);
btns[0].style.background = 'purple';

const circles = document.getElementsByClassName('circle');
console.log(circles);



//* Современные методы получения элементов со страницы

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(heart => {
    console.log(heart);
});

// Получение первого элемента со страницы
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const btn = document.querySelector('button');
console.log(btn);