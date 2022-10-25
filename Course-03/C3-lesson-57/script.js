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
