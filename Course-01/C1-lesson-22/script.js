'use strict';

//* Передача по ссылке или значению / «Spread - оператор» *//
let a = 5,
    b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

const obj = {
  a: 5,
  b: 1
};

const copy = obj; // ссылка на сущ. объект
copy.a = 10;

console.log(copy);
console.log(obj);

//* 1. Клонирование обекта только первого уровня с помощью цикла «for in»
// Поверхностная копия объекта
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
};

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 100;

// console.log(newNumbers);
// console.log(numbers);

//* 2. Объединение двух объектов «Object.assign()»
//  Получение независомой поверхостной копии объекта
const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);
clone.d = 200;
console.log(add);
console.log(clone);

//*  Поверхостная копия массива методом «slice()»
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Hello!';
console.log(newArray);
console.log(oldArray);


// Передача массива ввиде аргументов с помощью «Spread» -> «Oператор Разварота ... »
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // Оператор разворота

console.log(internet);

//! С помощью Spread оператора перада аргументов в функцию по отдельности не массивом
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
};

const num = [2, 4, 5];

log(...num);

// Поверхностная копия при помощи Spread оператора
const array = ['a', 'b'];
const newAarray = [...array];
console.log(array);
newAarray[0] = 'Hello';
console.log(newAarray);

const q = {
  one: 1,
  two: 2
};
const newQ = {...q};
console.log(q);
newQ.one = 'one'
console.log(newQ);