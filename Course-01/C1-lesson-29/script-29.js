"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'lightgreen';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'tomato';

// CSS text //////////////*
// btns[3].style.cssText = 'background-color: lightgreen; width: 150px';
let num = 150;
btns[3].style.cssText = `background-color: lightgreen; width: ${num}px`;

// for (let i = 0; i < btns.length; i++) {
//     console.log(btns[i]);
//     btns[i].style.cssText = `background-color: yellow`;
// }

hearts.forEach(heart => {
    // console.log(heart);
    heart.style.cssText = `background-color: lightgreen`;
});


// Создание элементов //////////////*
const div = document.createElement('div');
// const text = document.createTextNode('Some NODE'); // Используеться редко

// Добавление класса элементу //////////////*
div.classList.add('black');

// Размещение элемента
wrapper.prepend(div); // в начале 
// wrapper.append(div); // в конце

// hearts[0].before(div); // после выбраного элемента
// hearts[0].after(div); // перед выбранным элементом

// circles[0].remove(); // удаление выбранного элемента

hearts[0].replaceWith(circles[0]); // Замена элементов


//! Старые команды - могут пригодиться
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);


// Добавление текста и HTML элемента //////////////*
div.innerHTML = '<h1>Hello</h1>'; // Работает с HTML структурой
// div.textContent = '<h1>Hello</h1>'; // Работает только с текстом

//* Расположение после или до выбранного элемента
// div.insertAdjacentHTML('beforebegin', '<h2>Helllllo</h2>'); // Перед элемнтом div
// div.insertAdjacentHTML('afterend', '<h2>Helllllo</h2>'); // После элемета div

//* Расположение после или до вложенного элемента
// div.insertAdjacentHTML('afterbegin', '<h2>Helllllo</h2>');  // Перед вложенным элементом h1
div.insertAdjacentHTML('beforeend', '<h2>Helllllo</h2>'); // После вложенного элемента h1
