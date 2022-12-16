'use strict';

//* EventLoop
//* Подробная работа с асинхронных и синхронных операций

// Link
/* http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D */

// console.log(1);

// setTimeout(() => {
//   console.log('Timeout-2000');
// }, 4000);


// setTimeout(() => {
//   console.log('Timeout-4000');
// }, 4000);

// console.log(2);


//* Пример перезагруженной функции
// const btn = document.querySelector('button');
// let k = 0;

// function count() {
//   for (let i = 0; i < 1e9; i++) {
//     k++;
//   }
//   alert('done');
// }

// count();

setTimeout(() => {
  console.log(1); // выполниться вторым, с задержкой через Web Apis (асинхронно)
}, 0);

console.log(2);  //выполниться первым (синхронно)