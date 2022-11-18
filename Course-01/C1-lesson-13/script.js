"use strict";

//* Условия

if (0) {
  console.log('Ok');
} else {
  console.error('error');
}

const num = 50;
if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('To much');
} else {
  console.log('Correct');
}

//* Тернарный оператор - участвуют три аргумента
//* Сначала условие если не первое тогда второе
console.log(10 > 4 ? 1 : 2);
let num2 = 50;
(num2 == 50) ? console.log('Correct') : console.log('Error');

//* Бинарный - участвуют два аргумента
4 + 4

//* Унарный плюс - Участвует один аргумент
+'4';

//* Switch
const num3 = '50';
switch (num3) {
  case '49':
    console.log('Error');
    break;
  case '50':
    console.log('Correct');
    break;
  case '100':
    console.log('Error');
    break;
  default:
    console.log('No no no');
    break;
}
