"use strict";

//* Класификация типов данных
// 8 типов данных

let number = 4; // Number

console.log(-4 / 0); // -Infinity
console.log('string' * 9); // NaN

const person1 = 'Neo'; // String
const person2 = `Trinity`; // String

const bool = true; // Boolean «true - Yes/ false - No»

//* Null
console.log(something); // ReferenceError - Ошибка ссылочного типа

//* Udefined (холодильник)
let und;
console.log(und); // undefined

//* Object
const obj = {
  name: 'Neo',
  age: 25,
  human: true
};

console.log(typeof(obj.name));
console.log(obj.name);
console.log(typeof(obj['age']));
console.log(obj['age']);

//* Array - нумерация с нуля
let arr = ['apple', 'orange', 'banana', 5, {}, []];
console.log(arr[0]);
