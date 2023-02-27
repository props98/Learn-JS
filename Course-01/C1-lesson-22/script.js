'use strict';

//* Передача по ссылке или значению / «Spread - оператор» *//

// Примитивы - передача по значению
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

// Объекты - передача по ссылке
const obj = {
  a: 5,
  b: 1
};
const copyObg = obj; // Кладется ссылка на объект
copyObg.a = 10;
console.log(copyObg);
console.log(obj);


//* 1. Клонирование обекта только первого уровня с помощью цикла «for in»
//! Поверхностная копия объекта
function copy(mainObj) {
  let objCopy = {};
  
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {      // Клонироватся не будет
    x: 7,
    y: 5
  }
};

const copyNumbers = copy(numbers);
copyNumbers.a = 100;
copyNumbers.c.x = 100;
console.log(numbers);
console.log(copyNumbers);

//* 2. Объединение двух объектов «Object.assign()»
//! Делает глубокое клонирование
// Получение независомой поверхостной копии объекта
const obj1 = {
  d: 17,
  b: 20
};
const obj2 = {
  a: 100,
  c: {
    x: 7,
    y: 10
  }
}
// console.log(Object.assign(obj1, obj2));

const cloneObj = Object.assign({}, obj2);
console.log(obj2);
cloneObj.a = 1;
cloneObj.c.x = 700;
console.log(cloneObj);


//*  Поверхостная копия массива методом «slice()»
const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; // Ссылка на массив
const newArray = oldArray.slice();

newArray[1] = 'Hello, Neo!'
console.log(oldArray);
console.log(newArray);

// Передача массива ввиде аргументов с помощью «Spread» -> «Oператор Разварота ... »
const video = ['youtube', 'vimeo', 'rutube'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

//! С помощью Spread оператора перада аргументов в функцию по отдельности не массивом
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 4, 7];
log(...num);

//! Поверхностная копия при помощи Spread оператора
const array = ['a', 'b'];
const newArray = [...array];
const q = {
  one: 1,
  two: {
    x: 100,
    y: 200
  }
};
const newq = {...q};

newArray[0] = 'Hello, Neo!';
newq.one = 'Neo' // Поверхностная копия
newq.two.x = 'one hundred'; // Копируеться ссылка

console.log(array);
console.log(q);
console.log(newArray);
console.log(newq);