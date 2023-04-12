'use strict';

//* EventLoop
//* Подробная работа с асинхронных и синхронных операций

/* http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D */

// console.log(1);

// setTimeout(() => {
//   console.log('timeout 2 sec');
// }, 2000);

// setTimeout(() => {
//   console.log('timeout 4 sec');
// }, 4000);

// console.log(2);

//* Пример перезагруженной функции
// Что бы избедать перегрузки, лучше делать деструктурирование функции

let k = 0;

function count() {
  for (let i = 0; i < 1e9; i++) {
    k++;
  }
  alert('done!')
}

// count();

// Програманая задача
// асинхронный код всегда идет после синхронной
// асинхронный код
setTimeout(() => {
  console.log(1);
}, 0); // JS - вместо нуля подставляет 0.4ms стандартно

// синхронный код
console.log(2);