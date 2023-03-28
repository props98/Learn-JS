'use strict';

//* Оператор «Rest - ...name в крнце аргументов»

const log = function(a, b, ...rest) {
  console.log(a, b, rest);
}
log('a', 'b', 'option', 'use');


function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
};
calcOrDouble(3, 5);