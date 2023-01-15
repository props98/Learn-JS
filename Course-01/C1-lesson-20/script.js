'use strict';

//* Objects, деструктуризация объектов

//! Вариант возможен, но не используеться
// const obj = new Object(); 

//* Созданный метод объекта
const options = {
  name: 'test',
  width: 1920,
  height: 1080,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('Hello!');
  }
};

//* Деструктуризация объекта
const {name, width, height} = options;
const {border, bg} = options.colors;

console.log(name);
console.log(width);
console.log(bg);

options.makeTest(); // Вызов метода объекта

// console.log(options.name); // Вызов свойства объекта

//* Узнаем сколько свойств у объекта
//! Старый и не удобный метод подсчета свойств в объекте

//! Удаление свойства объекта при помощи «delete»
// delete options.name; // Удаление свойства объекта
// console.log(options);

// for (let key in options) { // Перебор свойств объекта «for in»
//   if (typeof(options[key]) === 'object') { 
//     for (let i in options[key]) {
//       console.log(`Свойство: ${i} имеет значение: ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство: ${key} имеет значение: ${options[key]}`);
//   }
// }

//! Перебор вложенных объектов «for (let item in object)»
// let counter = 0;
// for (let key in options) { // Подсчет свойств объекта «for in»
//   if (typeof(options[key]) === 'object') { 
//     for (let i in options[key]) {
//       console.log(`Свойство: ${i} имеет значение: ${options[key][i]}`);
//       // counter++
//     }
//   } else {
//     console.log(`Свойство: ${key} имеет значение: ${options[key]}`);
//     counter++
//   }
// }
// console.log(counter);

//* Метод //* Делаем из свойств объекта массив «Object.keys()»
console.log(Object.keys(options));

//* Делаем подсчет массива свойством «length»
console.log(Object.keys(options).length);
