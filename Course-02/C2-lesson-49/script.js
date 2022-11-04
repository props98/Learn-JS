'use strict';

//* Оператор «Rest»

const log = function(a, b, ...rest) { // rest - любое название
  console.log(a, b, rest);
}
log('a', 'b', 'rest1', 'rest2', 'rest3');


function calcOrDouble(number, basis = 2) { // в ES6
  // basis = basis || 2; // проверка аргумента до ES6
  console.log(number * basis);
}
calcOrDouble(3);