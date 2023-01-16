"use strict";
 
//* ООП в JS >>> прототипное ориентированное прогроммирование
//* Объектно ориентированное програмирование
let str = 'some';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const worker = {
  health: 100,
  skills: 50,
  sayHello: function() {
    console.log('Hello');
  }
};

const john = {
  health: 80
};

//! Устаревший формат добавление свойства «__proto__»
// john.__proto__ = worker;
// console.log(john.skills);
// john.sayHello();

//! Новый способ формата свойств 
//* 1 - Object.setPrototypeOf(john, man) - Установили прототип «man» для «john»
Object.setPrototypeOf(john, worker); // добавление свойст и методов от  «рабочего» для Джона
// john.sayHello();

//* 2 - Object.create(solder) - Создали объект крирпый будет прототипно наследоватся от прототипа «man»
const mike = Object.create(worker);
// mike.sayHello();

//* 3 - getPrototypeOf
console.log(Object.getPrototypeOf(john));  // john наследуемый прототип от «worker»