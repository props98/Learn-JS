'use strict';

//* setTimeout & setInterval and animation

// const timerId = setTimeout(logger, 2000); // устанавливаем таймер
// clearInterval(timerId); // очищает таймер по переменной «ID»

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

// btn.addEventListener('click', () => {
//   // timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 1000);
// })

// function logger() {
//   console.log('Hello');
//   i++;
//   if (i === 3) {
//     clearInterval(timerId);
//   }
// }

// //* Рекурсивный вызов setTimeout
// let id = setTimeout(function log() {
//   console.log('Hello Recursion');
//   id = setTimeout(log, 500);
// }, 500);

//* Animation
function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
    console.log(pos);
  }
}

btn.addEventListener('click', myAnimation);