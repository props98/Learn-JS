'use strict';

//* Regular Expression -> Регулярные выражения

//! Классический синтаксис
// new RegExp('pattern', 'flags');

//! Новая запись
// /pattern/flag

//* Паттерн
// const ans = prompt('Your name');
const ans = 'Mr. Anderson';
//! Флаги
// i - Нахождение вне зависимости от регистра
// g - Нахождение нескольких вхождений
// m - Нахождение в многострочном режиме

// const reg = /n/i;
// console.log(ans.search(reg)); // У метода search() ноходит только первый подходящий

// const reg = /n/i;
// console.log(ans.match(reg)); // С флагом i возращает массив c информацией об элементе

const reg = /n/ig;
console.log(ans.match(reg)); // С флагом g возращает массив со всеми подзодящими элементами

const pass = 'Password.';
console.log(pass.replace(/\./g, '*'));
console.log(pass.replace(/\w/g, '*'));
console.log(pass.replace(/s|d/g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));

const name = 'N5e o2';
// const reg2 = /n/ig;
// console.log(reg2.test(name));
//! Классы
// \d - поиск цифр
// \w - все слова, буквы
// \s - поиск пробелов

const reg2 = /\d/g;
console.log(name.match(reg2));
const px = name.match(reg2);
let pixels = px.reduce((sum, current) => sum + current);
console.log(pixels + 'px');

const str = 'My name is R2D2'; // Найти R2D2
// console.log(str.match(/\w\d\w\d/ig));

//! Обратные классы
// \D - Все кроме чисел
// \W - Все кроме букв
console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));