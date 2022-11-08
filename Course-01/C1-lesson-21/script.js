'use strict';

//* Массивы и псевдомассивы
const arr = [10, 6, 3, 15, 7, 9];

// arr[99] = 0;
// console.log(arr.length); // Свойство «length» состоит из последнего индекса + 1
// console.log(arr);

////////! Правильная сортировка цифр в методе sort();
  console.log(arr.sort((a, b) => a - b));
////////!

// Удаляет послдений элемент из массива
arr.pop();
// Добавляет элемент в конец массива
arr.push(10)
// console.log(arr);

//* Переборы массива
// Циклом
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Перебор через метод «for of» работает только с массиво подобными сущностями
// for (let value of arr) {
//   console.log(value);
// }

// Перебор массива с помощью метода «forEach»
// Колбэк функция прнимает три аргумента
// 1. сам элемента с произвольнм названием 
// 2. номер элемента по порядку в массиве
// 3. ссылка на массив который мы перебираем
arr.forEach(function(item, i, array) {
  console.log(`${i}: ${item} in array - ${array}`)
});


const str = 'milk, orange, apple, bag'; // prompt();
const product = str.split(',');
console.log(str);
// console.log(product);
console.log(product.join(';'));