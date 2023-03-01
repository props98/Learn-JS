'use strict';

//* Отлавливаем ошибки в своем коде при помощи
//* консоли разработчика «Breakpoints»

function hello() {
  console.log('Hello!');
  debugger;
}
hello();

console.log('Hello');

function hi() {
  console.log('Say: Hi!');
}
hi();

const arr = [1, 13, 4, 40, 54];
// arr.sort((a, b) => a - b);
// console.log(arr);
const sorted = arr.sort(compareNum);
function compareNum(a, b) {
  return a - b;
}
console.log(sorted);