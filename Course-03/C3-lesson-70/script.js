'use strict';

//* «Модульное» разбиение кода

// const app = '123';

const number = 1;

//* Ананимная самовызывающая функция
// function expression
(function() {

  let number = 2;
  console.log(number);
  console.log(number + 3);

}());

console.log(number);

//* Создание модуля при помощи объектного интерфейса
const user = (function(){
  const privat = function() {
    console.log('Private function');
  };

  return {
    sayHello: privat
  };
}());

user.sayHello();