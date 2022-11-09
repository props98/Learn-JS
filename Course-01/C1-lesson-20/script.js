'use strict';

//* Objects, деструктуризация объектов

// const obj = new Object(); //! Вариант возможен, но не используеться

//* Созданный метод объекта
const options = {
  name: 'test',
  width: 1080,
  height: 1920,
  colors: {
    border: 'black',
    background: 'red',
    material: {
      color: 'yellow',
      size: 200,
      counter: 2,
    }
  },
  makeTest: function() {
    console.log('My first Method');
  }
};
options.makeTest();

// console.log(options.name);

//* Деструктуризация объекта
// console.log(options['colors']['border']); // заменить деструктуризацией
const {border, background} = options.colors;
console.log(background);

const {color, size, counter} = options.colors.material;
console.log(color, size, counter);


//* Метод //* Делаем из свойств объекта массив «Object.keys()»
console.log(Object.keys(options));

//* Делаем подсчет массива свойством «length»
console.log(Object.keys(options).length);


//! Удаление свойства объекта при помощи «delete»
// delete options.name; // удалили свойство - можно циклом
// console.log(options); 

//! Перебор вложенных объектов «for (let item in object)»
// for (let key in options) { 
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
// }

//* Узнаем сколько свойств у объекта
//! Старый и не удобный метод подсчета свойств в объекте
let count = 0;
for (let key in options) { 
  // if (typeof(options[key]) === 'object') {
  //   for (let i in options[key]) {
  //     console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
  //   }
  // } else {
  //   console.log(`Свойство ${key} имеет значение ${options[key]}`);
    count++;
  // }
}
console.log(count);







