'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//* Получение размеров всего окная -15px прокукрутки и рамки снизу
// const width = box.clientWidth;
// const height = box.clientHeight;

//* Получение размеров окна как указаных в стилях вся видимая часть 
// const width = box.offsetWidth;
// const height = box.offsetHeight;

//* Получение размеров контента что не помещаеться в видимую часть -15px прокрутка
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// При клике открываеться весь скрытый тексл за скролом
btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

// Получение всех координат окна методом «getBoundingClientRect»
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// Получение информацию какие стили приенены к опр. элементу «Cumputed»
const style = window.getComputedStyle(btn);
console.log(style.border);

// Узнаем размер видимой части окна браузера
console.log(document.documentElement.clientWidth);



// //* Премещение относительно того места на котором остановились (x, y)
// window.scrollBy(0, 400);
// //* Премещение с начала страницы (x, y)
// window.scrollTo(0, 400);