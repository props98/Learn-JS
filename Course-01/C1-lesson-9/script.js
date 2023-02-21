"use strict";

//* Операторы в JS

console.log('arr' + ' - object'); // arr - object
console.log(4 + ' - object'); // 4 - object


//! Знак "+" перед стракой 5 называется УНАРНЫЙ ПЛЮС преобразует строку с число, 
console.log(4  + +'11'); // 15

//! не преобразует если в строке текст или слово.
console.log(4  + +' - object'); // NaN

//! Инкременты и Дикременты
//! Префиксная операторы перед значением
let preIncr = 10,
    preDecr = 10;
++preIncr; // Оператор инкремента - увелечение на 1
--preDecr; // Оператор декримента - уменьшение на 1
console.log(preIncr); // 11
console.log(preDecr); // 9

//! Постфиксная операторы после значения - если применили сразу
//! Возвращает сначала старое значение, а после увеличивает или уменьшает
let incrPos = 10,
    decrPos = 10;
console.log(incrPos++); // 10 - возвращает сначала старое значение
console.log(decrPos--); // 10 - возвращает сначала старое значение

//! Остаток от деления
console.log(5%2);

//! Операторы сравнения
// Сравнение по значению
console.log(2 * 4 == 8); // true
console.log(2 * 4 == '8'); // true

// Сравнение по типу данных
console.log(2 * 4 === '8'); // false
console.log(2 * 4 === 8); // true


const isChecked = true,
      isClose = true,
      bad = false;

//! && - Если есть два провдивых аргумента
console.log(isChecked && isClose); // true - Оба выражения верны
console.log(isChecked && bad); // false - одно из выражанения false

//! || - Если один из аргументов провдивый
console.log(isChecked || bad); // true - хотябы один правдив
console.log(bad || bad); // false

//! Оператор отрицания
console.log(!bad); // true

//! Порядок выполения операторов
console.log(2 + 2 * 2 === 8); // false
console.log(2 + 2 * 2 != 8); // true
console.log(2 + 2 * 2 != '6'); // false
console.log((2 + 2) * 2 === 8); // true
