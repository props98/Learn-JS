'use strict';

//* Анимация
//* RequestAnimationFrame
//Todo: https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');

// function myAnimation() {
//   let pos = 0;
//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// Глобальная переменная
let pos = 0;

function myAnimation() {
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  }

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

//! Отмена анимации
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);