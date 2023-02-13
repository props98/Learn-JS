'use strict';

//* Методы перебора массива

//* Метод «Filter» - Возвращает новый отфильтрованный массив
const names = ['Neo', 'Trinity', 'Morphius', 'Alexandria'];

const shortNames = names.filter(function(name) {
  return name.length < 4;
});

console.log(shortNames);

//* Метод «Map» - Трансформирующий метод
const answers =  ['NeO', 'tRinIty'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

//* Методы «Every / Some» - возвращает булиновое значение true & false
const some = [4, 3, 3];

// console.log(some.some(item => typeof(item) === 'number')); // SOME - есть хотя бы один элемент подходит под условя
console.log(some.every(item => typeof(item) === 'number')); // EVERY -  если все элементы подходят под условия

//* method «Reduce» - схлопование массива в единое целое
const arr = [3, 4, 5, 6, 1, 2, 8];
            // 0   3
            // 3   4 -> начало
            // 7   5
            // 12  6 ...etc

// const res = arr.reduce((sum, current) => sum + current); // 29
const res = arr.reduce((sum, current) => sum + current, 1); // 30 - Второй аргумент + «1»
console.log(res);

const arrWords = ['apple', 'orange', 'banana'];

const res2 = arrWords.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

//* Example /////////////
const obj = {
  neo: 'person',
  trinity: 'person',
  cat: 'animal',
  dog: 'animal'
};

const newArr = Object.entries(obj) // Создание матрицы из массивов
  .filter(item => item[1] === 'person') // Перебор вложенного массива по второму индексу «person»
  .map(item => item[0]); // Перебор массива и возвращение первого индекса

console.log(newArr);