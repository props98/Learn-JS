'use strict';

//* Методы перебора массива

//! Метод «forEach» - Перебирает переданный массив, не создает новый
//* Метод «Filter» - Возвращает новый отфильтрованный массив
const names = ['Neo', 'Trin', 'Morphius', 'Konstantine'];
const shortNames = names.filter((name) => {
  console.log(name);
  return name.length < 5;
});
console.log(shortNames);


//* Метод «Map» - Трансформирующий метод, на выходе новый массив
const answers = ['nEo', 'tRInitY', 'HeLLo'];
const resultAnswers = answers.map((answer) => {
  return answer.toLowerCase();
});
console.log(resultAnswers);

// Сокращенная запись с методом map();
const resultShortAnswers = answers.map(answer => answer.toLocaleLowerCase());
console.log(resultShortAnswers);

//* Можно не создавать новую переменную, а перезависать исходную с возвращенным новым массивом
//! Лучше создавать отдельную переменную для возращаемого нового массива
let cars = ['bMW', 'MeRCedec', 'JEEP'];
cars = cars.map(car => car.toLocaleLowerCase());
console.log(cars);


//* Методы «Every / Some» - возвращает булиновое значение true & false
//! some() проверяет что хотябы один элемент должен соответствовать условию
const some = [4, 'neo', 'sdf'];
console.log(some.some(item => typeof(item) === 'number'));

//! every() -  если все элементы подходят под условия
console.log(some.every(item => typeof(item) === 'number')); // false

const every = [3, 4, 5];
console.log(every.every(item => typeof(item) === 'number')); // true


//* method «Reduce» - схлопование массива в единое целое
//! Возвращает новый результат
const arr = [4, 5, 1, 3, 2, 6];
          // 0   4             // 3   4 третий аргумент 3
          // 4   5 -> начало   // 7   5
          // 9   1             // 12  1
          // 10  3 ...etc      // 13  3 ...etc

const res = arr.reduce((sum, current) => sum + current, 3); 
console.log(res);


//* Example /////////////
const arrFruit = ['apple', 'pear', 'plum'];
const resFruit = arrFruit.reduce((fruit, current) => `${fruit}, ${current}`);
console.log(resFruit);


// 1. Из объекта делаем митрицу массивов с помощью Object.entries
// 2. По цепочке делаем перебор полученой матрицы массива:
  // 2.1 Перебор вложенного массива по второму индексу «person» //! filter();
  // 2.1 Перебор массива и возвращение первого индекса //! map();
const obj = {
  neo: 'person',
  trin: 'person',
  dog: 'animal',
  cat: 'animal'
}

let newArr = Object.entries(obj)
  .filter(item => item[1] === 'person')
  .map(item => item[0]);

console.log(newArr);