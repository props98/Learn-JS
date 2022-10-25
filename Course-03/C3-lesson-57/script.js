'use strict';

//* Методы перебора массива

//* method «Filter»
const names = ['Alexia', 'John', 'Neo', 'Moana', 'Konstantin'];
const shortNames = names.filter( (name) => {
  return name.length < 5;
});

console.log(shortNames);
