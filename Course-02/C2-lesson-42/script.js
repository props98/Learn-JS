'use strict';

//* Параметры документа окна и работа с ними

// console.dir(document);

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//* Ширина и высота с паддингами минус 15px «прокрутка»
// const clientWidth = box.clientWidth;
// const clientHeight = box.clientHeight;
// console.log(clientWidth, clientHeight);

//* Ширина и высота с маргинами
const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;
console.log(offsetWidth, offsetHeight);

//* Полная высота элемента и та что скрыта
const scrollHeight = box.scrollHeight;
console.log(scrollHeight);


// При клике открываеться весь скрытый тексл за скролом
btn.addEventListener('click', (evt) => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
})

// Получение всех координат окна методом «getBoundingClientRect»
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// Получение информацию какие стили приенены к опр. элементу «Cumputed»
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);


// //* Премещение относительно того места на котором остановились (x, y)
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// //* Премещение с начала страницы (x, y)
window.scrollBy(0, 400);
window.scrollTo(0, 400);