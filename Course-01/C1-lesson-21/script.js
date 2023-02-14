'use strict';

//* Массивы и псевдомассивы

const arr1 = [10, 6, 3, 15, 7, 9];
arr1[99] = 0;
// arr.pop(); // удаление последнего элемента в массиве
// arr1.push(10); // добавление элемента в конец массива
// console.log(arr1.length); // индекс последнего элемента в массиве + один


////////! Правильная сортировка цифр в методе sort();
  console.log(arr1.sort((a, b) => a - b));
////////!
const nums = [2, 13, 234, 8, 10];
nums.sort((a, b) => a - b);
console.log(nums);

const str = 'aaa, ccc, bbb';
console.log(str);
const products = str.split(', ');
products.sort();
console.log(products.join('; '));


//* Переборы массива
// Циклом
const arr2 = [2, 4, 6, 2, 7];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// Перебор через метод «for of» работает только с массиво подобными сущностями
// Плюс break & continue
const arr3 = [4, 5, 7, 2, 8];
for (let value of arr3) {
  console.log(value);
}

//* Перебор массива с помощью метода «forEach»
// Колбэк функция прнимает три аргумента
// 1. «item» сам элемента с произвольнм названием 
// 2. «index» номер элемента по порядку в массиве
// 3. «array» ссылка на массив который мы перебираем
const arr4 = [3, 4, 6, 1, 7, 11];
arr4.forEach(function(item, index, array) {
  console.log(`${index}: ${item} in array ${array}`);
});