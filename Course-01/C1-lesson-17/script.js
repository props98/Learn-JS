"use strict";

//* Методы и свойства у строк и чисел

//! Строки
const str = 'tEst';
console.log(str.length); // 4 - количество символов
console.log(str[2]); // => «s»
console.log(str.toUpperCase()); // Метод () => TEST (Возвращает новое значение)
console.log(str.toLowerCase()); // Метод () => test (Возвращает новое значение)
console.log(str); // исходник

const fruit = 'Some fruit';
//* Поиск подстроки
console.log(fruit.indexOf('fruit')); // с пятой позиции
console.log(fruit.indexOf('q')); // -1

const logg = 'Hello world';
//* Обрез строки
console.log(logg.slice(6, 11)); // slice(start, end)
console.log(logg.slice(0, 5));
console.log(logg.slice(6));
console.log(logg.substring(6, 10));
console.log(logg.substr(0, 2)); // substr(c какой позиции, количество символов)

const arr = [1, 2, 4];
console.log(arr.length); // 3 - элемента

console.dir(Number); // Выводит объект

//! Числа
const num = 12.2;
console.log(Math.round(num)); // Возвращает округленное число 12

const test = "12.2px";
console.log(parseInt(test)); // возвращает в число 12
console.log(parseFloat(test)); // возвращает в с дробными значениями 12.2 