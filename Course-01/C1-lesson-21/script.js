'use strict';

//* Массивы и псевдомассивы
// Массивы это структура которая содержит элементы по порядку
// http://algolist.ru/sort/quick_sort.php
// http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript

const arr1 = [10, 6, 3, 15, 7, 9];
// arr1[99] = 0;
// console.log(arr1);
//! arr.pop(); // удаление последнего элемента в массиве
//! arr1.push(100); // добавление элемента в конец массива
//! console.log(arr1.length); // индекс последнего элемента в массиве + один

// arr1.pop();
// arr1.push(100);

console.log(arr1.length); // 5 index + 1 => 6


//* Переборы массива
// Циклом
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

//* Перебор через метод «for of» работает только с массиво подобными сущностями
//! Плюс break & continue - можно остановть на опр. этапе
// for (let value of arr1) {
//   console.log(value);
// }

//* Перебор массива с помощью метода «forEach»
// Колбэк функция прнимает три аргумента
// 1. «elem» сам элемента с произвольнм названием 
// 2. «index» номер элемента по порядку в массиве
// 3. «arr» ссылка на массив который мы перебираем
arr1.forEach((elem, index, arr) => {
  console.log(`${index}: ${elem} in array - ${arr}`);
})

const str = 'Hello, Neo, Trinity';
const single = str.split(', ');
console.log(single.join(' -> '));

////////! Правильная сортировка цифр в методе sort();
  const products = ['aaa', 'ddd', 'eee', 'wwww'];
  products.sort();
  console.log(products);

  const arr2 = [10, 6, 3, 15, 7, 9];
  arr2.sort(compareNum);
  console.log(arr2);

  function compareNum(a, b) {
    return a - b;
  };
////////!