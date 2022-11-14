"use strict";

//* Функции, стрелочные функции

let numGlobal = 30; // Глобальная переменная

//* Function declaration -
//* Создается до начала выполнения скрипта, можно вызывать перед объявлением
function showMyFirstMessage(a, b) {
  console.log(a + b);
  numGlobal = 35;
  let numLocal = 20; // локальная перменная - сущ. внутри функции
  console.log(numGlobal);
}

function calc(a, b) {
  return (a + b);
}

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

console.log(calc(2, 2));
showMyFirstMessage(4, 5);

//* Function expression - 
//! Вызываеться ТОЛЬКО после объявления
//* Создается только тогда, когда доходит поток кода, можно вызвать только после объявления
let logger = function() {
  console.log('hello');
};

logger();


//* Стрелочные функции -
//* Не имеет своего контескта (this) - контекста вызова
/*const calc = (a, b) => a + b;*/ //*Если помещается в одну строчку

const calc2 = (a, b) => a + b;
console.log(calc2(1, 2));