"use strict";

const arr = [10, 13, 2, 3, 26, 8];

//* Сортировка идет посимвольно как строки
arr.sort();
//* Правильная сортировка чисел с дополнительной функцией
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//! Так не делать
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
//!

// Удаляет последний элемент массива
// arr.pop();

// Добавляет новый элемент в конец массива
// arr.push(10);

// console.log(arr);

//* Циклы и переборы массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

//* Методы массивов
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//! Методы перебора
// arr.map();
// arr.every/some();
// arr.filter();
// arr.reduce();
//!

//* Из строки дулаем массив
const str = prompt("", '');
const products = str.split(', ');
console.log(products);
//* Из массива делаем строку
console.log(products.join('; '));
//* Метод сортировки
products.sort();

