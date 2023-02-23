"use strict";

//* Условия

// Приводит условия к булиновому типу
if (4 == 4) {  // Boolean - true
  console.log('OK!');
}

if (4 == 9) { // Boolean - false
  console.log('OK!');
} else {
  console.log('No!');
}

const num = 50;

if (num < 49) {
  console.log('Error!');
} else if (num > 100) {
  console.log('To much!');
} else {
  console.log('Ok!');
}

//! Тернарный оператор - участвуют три аргумента
//* Сначала условие если не первое тогда второе
const num2 = 50;
(num2 === 50) ? console.log('Ok!') : console.log('Error!');

//* Бинарный - участвуют два аргумента
// 4 + 4

//* Унарный плюс - Участвует один аргумент
// +'4'

//* Switch
const num3 = 100;
switch (num3) {
  case 49: 
    console.log('Error 49');
    break;
  case 100:
    console.log('Error 100');
    break;
  case 50:
    console.log('Ok!');
    break;
  default:
    console.log('Default');
    break;
}

