'use strict';

//* setTimeout & setInterval and animation

// const timerId = setTimeout(function(text) {
//   console.log(text);
// }, 3000, 'Hello!');

// const timerId = setTimeout(logger, 2000);
const btn = document.querySelector('.btn');
let timerId,
    i = 0;
  
// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 500);
// });
      
// // Сброс таймера
// // clearInterval(timerId);

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('Hello2!');
//   i++;
// }

// Рекурсивная функция, поэтапный повтор
// let id = setTimeout(function log() {
//   console.log('Hellllo');
//   id = setTimeout(log, 500)
// }, 500);

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 10)
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);