'use strict';

//* Работа с датами

const now = new Date();
console.log(now);

// передача дата в виде строки
// const now1 = newDate('1989-03-27');

// метод parse
// new Date.parse('1989-03-27');

// передача даты числовыми значениями
// Timestamp - передача милесекундах отсчет с 1979.01.01

//* Получение 
// const date1 = new Date();
// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getHours());
// console.log(date1.getMinutes());
// console.log(date1.getMilliseconds());

//* Номер дня недели отсчет -> ВОСКРЕСЕНЬЕ = 0
// console.log(date1.getDay());

//! Часовой пояс UTC
// console.log(date1.getUTCHours()); // -3 часа

//* Получение разницы В МИНУТАХ между местным часовым поясом и UTC (-180минут)
// console.log(now.getTimezoneOffset());

//* Возвращение TimeStamp с 1979.01.01
// console.log(now.getTime());

//* Установка времени «SET»
const dateSet = new Date();
console.log(dateSet.setHours(18));
console.log(dateSet.setMinutes(10));
console.log(dateSet.setSeconds(10));
console.log(dateSet.setMilliseconds(10));
console.log(dateSet);


let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3// « ** » сокращение возведение в степень
}

let end = new Date();

console.log(`Work for: ${end - start}ms`);