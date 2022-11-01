"use strict";

//* Навигация по DOM - элемента
//* [data-атрибуты]
//* Преимущества «for of»

//? Отталкиваемся от родителя
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //!NODElist
// console.log(document.body.firstChild); //! Перенос строки
// console.log(document.body.lastChild); //! Последний элемент скрипт

// console.log(document.body.firstElementChild); // первый элемент body
// console.log(document.body.lastElementChild); // последний элемент body

//! Получение элемента
//? Получение родителя от ребенка
// console.log(document.querySelector('#current').parentNode); // первый родитель
// console.log(document.querySelector('#current').parentNode.parentNode); // второй родитель


//? Получение через дата атрибута
//! Получает перенос строки
// console.log(document.querySelector('[data-current="3"]').nextSibling); // следующий перенос строки
// console.log(document.querySelector('[data-current="3"]').previousSibling); // предыдущий перенос строки

//! Получает элемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // предыдущий элемент

//!  Переберающая функция NODE-list (for of)
for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }


  console.log(node);
}