'use strict';

//* Методы перебора массива

//* method «Filter»
const names = ['Alexia', 'John', 'Neo', 'Moana', 'Konstantin'];
const shortNames = names.filter( (name) => {
  return name.length < 5;
});

console.log(shortNames);

//* method «Map»
const answers = ['IvAn', 'AnnA', 'HELlo'];
const result = answers.map( item => {
  return item.toLowerCase();
});

console.log(result);

//! Не стоит так делать
let answers2 = ['IvAn', 'AnnA', 'HELlo'];
answers2 = answers2.map( item => item.toLowerCase());
console.log(answers2);

//* method «Every / Some» - выдает true & false
const some = [4, 2, 4];
// console.log(some.some(item => typeof(item) === 'number')); // проверяет один элемент
console.log(some.every(item => typeof(item) === 'number')); // проверяет все элементы по условию

//* method «Reduce»
const arr = [4, 5, 1, 2, 3, 6];
const result2 = arr.reduce((sum, current) => {
  return sum + current
}, 3); // Принимает аргумени начального числа
console.log(result2);

const str = ['apple', 'pear', 'plum'];
const resStr = str.reduce((sum, current) => `${sum}, ${current}`);
console.log(resStr);


//* Example /////////////

const obj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);