"use strict";

//* Функции, стрелочные функции
/* 

Полезная информация.

Замыкания
https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970

*/

let num = 30; // Глобальная переменная

function showFirstMessage(text) {
  console.log(text);
  // let num = 20; // Локальная переменная видна только в функции
  console.log(num);
}; 
showFirstMessage('Hello, Neo!');
// console.log(numLocal); // num is undefined
console.log(num);


//* Function declaration -
  /*
      function foo() {
        code
      }
  */
//* Создается до начала выполнения скрипта, можно вызывать перед объявлением (; - можно опустить)
function calc(a, b) {
  return (a + b);
}
console.log(calc(5, 5));
console.log(calc(5, 10));
console.log(calc(5, 25));

function ret() {
  let num = 50;

  // Обработка кода

  return num;
}
const anotherNum = ret();
console.log(anotherNum);


//* Function expression - 
  /*
      let foo = function() {
        code
      }
  */
//! Вызываеться ТОЛЬКО после объявления
//* Создается только тогда, когда доходит поток кода, можно вызвать только после объявления (нужна - ;)
const logger = function() {
  console.log("Hello, Neo!");
};
logger();


//* Стрелочные функции -
  /*
      () =>
  */
//* Не имеет своего контескта (this) - контекста вызова
const calc = (a, b) => {
  return a + b;
};

//* Если помещается в одну строчку
const calc = (a, b) => a + b; // Несколько аргументов
const calc = a => a + b; // Один аргумент

