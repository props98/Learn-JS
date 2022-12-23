'use strict';

//* Именованный экспорт
export let one = 1;

let two = 2;
export {two};

//* Экспорт по умолчанию «default»
export default function sayHi() {
  console.log('Hello');
}