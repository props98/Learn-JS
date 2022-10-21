'use strict';

//* Objects, деструктуризация объектов

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'tomato'
  }
};

// console.log(options.name);
// console.log(options.colors.bg);

//! Удаление свойства объекта при помощи «delete»
// delete options.name
// console.log(options);

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство: ${i} имеет значение ${options[key][i]} в объекте OPTIONS[COLORS]`);
    }
  } else {
    console.log(`Свойство: ${key} имеет значение ${options[key]} в объекте OPTIONS`);
  }
};

