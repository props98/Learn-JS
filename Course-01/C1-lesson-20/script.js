'use strict';

//* Objects, деструктуризация объектов

//! Вариант возможен, но не используеться
//! const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: function() {
    console.log('Test');
  }
};

//* Созданный метод объекта
options.makeTest();

//* Деструктуризация объекта
const {name, width, height} = options;
console.log(width);
const {border, background} = options.colors;
console.log(border);


// Перебор объекта поверхностных свойств и вложенных свойств

let counter = 0;

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойства: ${i} имеет значение ${options[key][i]}`);
      counter++;
  }} else {
    console.log(`Свойства: ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(counter);


//! Удаление свойства объекта при помощи «delete»
// delete options.name;
// console.log(options);

//! Перебор вложенных объектов «for (let item in object)»
//* Встроенный метод 
//* Делаем из свойств объекта массив «Object.keys()»
console.log(Object.keys(options));

//* Делаем подсчет массива свойством «length»
console.log(Object.keys(options).length);
