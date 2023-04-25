'use strict';

//* Методы перебора массива

//! Метод «forEach» - Перебирает переданный массив, !! не создает новый !!

//* Метод «Filter» - Возвращает новый отфильтрованный массив
//* Можно не создавать новую переменную, а перезависать исходную с возвращенным новым массивом
//! Лучше создавать отдельную переменную для возращаемого нового массива

const names = ['Neo', 'Trinity', 'Morphius', 'Dozer'];
const shortNames = names.filter((name) => {
  return name.length <= 5;
})
console.log(shortNames);

//* Метод «Map» - Трансформирующий метод, на выходе новый массив
const answers = ['nEo', 'tRInytY', 'MorphIous'];
// Сокращенная запись с методом map();
const result = answers.map(item => item.toLowerCase());
console.log(result);


//* Методы «Every / Some» - возвращает булиновое значение true & false
//! some() проверяет что хотябы один элемент должен соответствовать условию
const some = [3, 'hello', 'hi'];
console.log(some.some(item => typeof(item) === 'number'));

//! every() -  если все элементы подходят под условия
const every = ['3', 'hello', 'hi'];
console.log(every.every(item => typeof(item) === 'string'));


//* method «Reduce» - схлопование массива в единое целое
//! Возвращает новый результат
const arr = [4, 5, 1, 3, 2, 6];
          // 0   4             // 3   4 третий аргумент 3
          // 4   5 -> начало   // 7   5
          // 9   1             // 12  1
          // 10  3 ...etc      // 13  3 ...etc

const resultArr = arr.reduce((sum, current) => sum + current, 5);
console.log(resultArr);

const fruit = ['apple', 'pear', 'plum'];
const resultFruit = fruit.reduce((fruit, current) => `${fruit}, ${current}`);
console.log(resultFruit);


//* Example /////////////
//! В объекте не может быть одинаковых свойств
const obj = {
  neo: 'person',
  trinity: 'person',
  dog: 'animal',
  cat: 'animal'
};

// 1. Из объекта делаем митрицу массивов с помощью Object.entries
// 2. По цепочке делаем перебор полученой матрицы массива:
  // 2.1 Перебор вложенного массива по второму индексу «person» //! filter();
  // 2.1 Перебор массива и возвращение первого индекса //! map();

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);

