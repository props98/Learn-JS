'use strict';

//* Передача по ссылке или значению / «Spread - оператор»

let a = 5,
    b = a;

b = b + 5
console.log(b); //b = 5 + 5
console.log(a); //a = 5


const obj = {
  a: 5,
  b: 1
};

// const copyObj = obj; //! Передаем значение по ссылке - ссылка на объект

// copyObj.a = 10; //a = 10
// console.log(copyObj); //a = 10
// console.log(obj); //a = 10


// Copy object
//* 1. Клонирование обекта только первого уровня с помощью цикла «for in»
function copy(mainObj) {
  let objCopy = {};
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 100;
// newNumbers.c.x = 100;
// console.log(numbers);
// console.log(newNumbers);

//* 2. Объединение двух объектов «Object.assign()»
//  Получение независомой поверхостной копии объекта

const add = {
  d: 20,
  e: 50
};

// console.log(Object.assign(numbers, add));

// Копия объекта
const clone = Object.assign({}, add);
clone.d = 200;
// console.log(add);
// console.log(clone); // Поверхностная копия объекта

//*  Поверхостная копия массива

const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; // Ссылка на массив
const newArray = oldArray.slice(); // Копия массива без привязки ссылки

newArray[1] = "Hello";
console.log(newArray);
console.log(oldArray);

//*  ES6  Spread операвтор разворота - разварачивает массивы
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'lifejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'faceboook'];

console.log(internet);

// Передача массива ввиде аргументов с помощью Spread оператора
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newAarray = [...array]; // Новая копия массива

// Копия объекта с помощью Spread оператора
const q = {
  one: 1,
  two: 2,
  three: 3
};

const newObj = {...q};
newObj.two = 22;
console.log(q);
console.log(newObj);
