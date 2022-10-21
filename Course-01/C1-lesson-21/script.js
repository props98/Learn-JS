'use strict';

//* Массивы и псевдомассивы

const arr = [2, 13, 26, 16, 8];
// console.log(arr.sort());

////////! Правильная сортировка цифр в методе sort();
console.log(arr.sort(compareNum));
function compareNum(a, b) {
  return a - b;
}
////////!

// Удаляет послдений элемент из массива
// arr.pop();

// Добавляет элемент в конец массива
arr.push(10);

// console.log(arr);

//* Переборы массива
// Циклом
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

// Перебор через метод «for of» работает только с массиво подобными сущностями
// for (let value of arr) {
//   console.log(value);
// };

// Перебор массива с помощью метода «forEach»
// Колбэк функция прнимает три аргумента
// 1. сам элемента с произвольнм названием 
// 2. номер элемента по порядку в массиве
// 3. ссылка на массив который мы перебираем
arr.forEach(function(item, i, array) {
  console.log(`${i}: ${item} in array «Arr»: ${array}`);
});

//* Методы split() / join() / sort()
const str = prompt('', '');
const products = str.split(',');
products.sort();
console.log(products.join(';'));



