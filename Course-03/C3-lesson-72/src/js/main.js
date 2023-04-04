'use strict';

//* Именованный экспорт, обязательно должно быть имя
export let one = 1;

let two = 2;
export {two};

// Экспорт функций
export function sayHy() {
  console.log('Hello!');
}

//* Экспорт по умолчанию «default» - Передача только функции
//! Экспорт по умолчанию может быть только один
export default function sayBye() {
  console.log('Bye bye bye!');
}