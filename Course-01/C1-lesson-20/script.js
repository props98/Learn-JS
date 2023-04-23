'use strict';

//* Objects, деструктуризация объектов

//! Вариант возможен, но не используеться
// const obj = new Object(); 

//* Созданный метод объекта
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: function() {
    console.log('Test!');
  }
};

//! Созданный метод объекта
options.makeTest();

console.log(options.name);
console.log(options.colors.border);

// Перебор объекта поверхностных свойств
let counter1 = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
      // counter1++;
    }
  } else {
    console.log(`Свойства ${key} имеет значение ${options[key]}`);
    counter1++;
  }
};

console.log(counter1);

//* Деструктуризация объекта
const {border, background} = options.colors;
console.log(border, background);


//* Узнаем сколько свойств у объекта / без вложенных
//! Старый и не удобный метод подсчета свойств в объекте
let counter2 = 0;
for (let key in options) {
    counter2++;
};

console.log(counter2);

//! Удаление свойства объекта при помощи «delete»
delete options.name;
console.log(options);

//! Перебор вложенных объектов «for (let item in object)»

//* Встроенный метод 
//* Делаем из свойств объекта массив «Object.keys()»
console.log(Object.keys(options));

//* Делаем подсчет массива свойством «length»
console.log(Object.keys(options).length);
