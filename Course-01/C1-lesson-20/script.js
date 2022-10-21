'use strict';

//* Objects, деструктуризация объектов

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'tomato'
  },
  
  makeTest: function() {
    console.log('Obj methods Test');
  }
};

//* Созданный метод объекта
options.makeTest();

//* Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);


// console.log(options.name);
// console.log(options.colors.bg);

//! Удаление свойства объекта при помощи «delete»
// delete options.name
// console.log(options);

//! Перебор вложенных объектов


// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство: ${i} имеет значение ${options[key][i]} в объекте OPTIONS[COLORS]`);
//       // counter++;
//     }
//   } else {
//     console.log(`Свойство: ${key} имеет значение ${options[key]} в объекте OPTIONS`);
//     // counter++;
//   }
// };

//* Узнаем сколько свойств у объекта
//! Старый и не удобный метод подсчета свойств в объекте
// let counter = 0;
// for (let key in options) {
//   counter++
// };
// console.log(counter);

//* Делаем из свойств объекта массив «Object.keys()»
console.log(Object.keys(options));

//* Делаем подсчет массива свойством «length»
console.log(Object.keys(options).length);



const locker = {
  name: 'cupboard',
  width: 100,
  height: 300,
  pants: 2,
  tshirt: 10,
  innerbox: {
    color: 'white',
    square: 30,
    socks: 5,
    box: {
      color: 'yellow',
      underpants: 10,
      box2: {
        pen: 3,
        pencil: 5
      }
    }
  }
};

// console.log(locker);
// console.log(locker.innerbox.box.color);
const {color, square, socks} = locker.innerbox;
const {box} = locker.innerbox;
const {box2} = box;

console.log(color);
console.log(box);
console.log(box2.pencil);