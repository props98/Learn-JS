"use strict";

//* Навигация по DOM - элемента
//* [data-атрибуты]
//* Преимущества «for of»

//? Отталкиваемся от родителя - получение НОДЫ
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); // Получение всех узлов
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//! Получение элемента - Получение узла
//? Получение родителя от ребенка
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

//! Получение элемента - без НОДЫ
// console.log(document.body.lastElementChild);
// console.log(document.body.firstElementChild);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').nextElementSibling);

//? Получение через дата атрибута
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);


//!  Переберающая функция NODE-list (for of)
// console.log(document.body.childNodes);

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue; 
  }

  console.log(node);
}