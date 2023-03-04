'use strict';

//* Получение элементов со страницы
const box = document.getElementById('box');
// console.log(box);

const btns = document.getElementsByTagName('button');
// console.log(btns);
// console.log(btns[1]);

const span = document.getElementsByTagName('span');
// console.log(span);

const circles = document.getElementsByClassName('circle');
// console.log(circles);


//* Современные методы получения элементов со страницы
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
  console.log(item);
});

//! Получает только самый первый элемент со страницы
const firstHeart = document.querySelector('.heart');
console.log(firstHeart);

const firstDiv = document.querySelector('div');
console.log(firstDiv);


// Получение первого элемента со страницы
