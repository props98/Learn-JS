"use strict";

//* Динамическая типизация
//! Все данные от пользователя это строка

//////////////* to String
// 1)
console.log(typeof(String(null))); // string
console.log(String(null)); // string -> null
console.log(String(4)); // string -> 4

// 2) Конкaтенация
console.log(typeof(5 + '')); // string
console.log(typeof(null + '')); // string

// Example

const num = 5;
console.log('https://vk.com/ctalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);


//////////////* To Number
// 1)
console.log(typeof(Number('4'))); // number

// 2) Унарный плюс
console.log(typeof(+'4')); // number

// 3)
console.log(typeof(parseInt('15px', 10))); // number

// Example
let answer = +prompt('How are you?', '');


//////////////* to Bolean
//! Всегда false
// 0 -> нуль
// '' -> пустая срока
// null 
// undefined 
// NaN 

let swithcher = null;
if (swithcher) {
  console.log('Switcher: false');
} else {
  console.log('Switcher: false');
}

swithcher = 1;
if (swithcher) {
  console.log('Switcher: true');
}

//* Не работает switcher => null => false
console.log(typeof(Boolean('4'))); // boolean

//* Работает switcher => 1 => true
console.log(typeof(!!'4444')); // boolean