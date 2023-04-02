'use strict';

//* «Модульное» разбиение кода

// const app = '123';

const number = 1;

//! Ананнимная самовызывающая функция -> Function Expression
(function() {
  let number = 2;

  console.log(number);
  console.log(number + 3);
}());

console.log(number);

//! Экспорт методов и свойств через «Объектный интерфейс»
const user = (function() {
  const privat = function() {
    console.log('I am privat function!');
  };

  const helloName = function() {
    console.log('Hello, Neo!');
  };

  return {
    sayHello: privat,
    helloName: helloName
  };
}());

user.sayHello();
user.helloName();