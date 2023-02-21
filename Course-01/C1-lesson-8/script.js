"use strict";

//* Интерполяция

const catergory = 'toys';

//! старый образец записи - конкотенация строк
console.log('https://someurl.com/' + catergory + '/' + '5');

//! Интерполяция 
console.log(`https://someurl.com/${catergory}/10`);

// Пример.....
const user = 'Neo';
console.log(`Hello, ${user}`);