"use strict";

//* События и их обработчики

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

//! Лучше Не использовать - если свойство повторяеться, 
//! выполняеться последний обработчик,
//! нельзя удалить обработчик.
// btn.onclick = function() {
//   console.log('JS script onclick');
// }

// btn.addEventListener('click', () => {
//   console.log('addEventListener click 1');
// });

// btn.addEventListener('click', () => {
//   console.log('addEventListener click 2');
// });

// btn.addEventListener('mouseenter', (evt) => {
//   console.log(evt.target);
//   evt.target.remove();
// });

// let i = 0;
// const deleteElem = (evt) => {
//   console.log(evt.target);
//   console.log(evt.type);
//   // i++;
//   // if (i == 1) {
//   //   btn.removeEventListener('click', deleteElem);
//   // }
// };

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);


// const link = document.querySelector('a');
// link.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   console.log(evt.target);
// });

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    console.log(evt.target);
  })
})
