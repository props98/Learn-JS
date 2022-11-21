'use strict';

//* Regular Expression -> Регулярные выражения

// Классический синтаксис
// new RecExp('pattern', 'flags');
// Новая запись
// /pattern/f

// Паттерн
const ans = '200px';
// const reg = /n/ig;
/*
Флаги:
i - Поиск вне зависимости от регистра
g - Поиск нескольких вхождений
m - Многострочный режим
*/

// Проаверка на содержание регулярного вырожения
// console.log(reg.test(ans));

const reg = /\d/g;
console.log(ans.match(reg));
// Классы
// \d - Поиск цифр
// \w - Поиск слов, всех букв
// \s - Поиск всех пробелов

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

console.log(str.match(/\D/ig));
// Обратные классы
// \D - Поиск не чискл
// \W - Поиск не букв

// console.log(ans.search(reg)); // 1 - порядковый номер буквы в имени
// console.log(ans.match(reg));

const pass = 'dsfsd...';
console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));


// Флаги