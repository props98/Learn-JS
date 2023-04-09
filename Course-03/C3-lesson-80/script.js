'use strict';

//* Анимация -> «RequestAnimationFrame»

//Todo: https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');

// function myAnimation() {
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos === 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }

//   }
// }


//* Анимация с помощью RequestAnimationFrame

// Глобальная переменная
let pos = 0;

// function myAnimation() {
//   pos++;
//   elem.style.top = pos + 'px';
//   elem.style.left = pos + 'px';

//   if (pos < 300) {
//     requestAnimationFrame(myAnimation);
//   } 

// }

// // Чтобы анимация заработала нужно создать ананимную функцию для вызова анимации послу клика
// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// //! Отмена анимации
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);


function Anim() {
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  // function elastic(x, timeFraction) {
  //   return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
  // }

  if (pos < 300) {
    requestAnimationFrame(Anim)
  }

}

btn.addEventListener('click', () => requestAnimationFrame(Anim));

