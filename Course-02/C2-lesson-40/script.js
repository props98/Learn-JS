'use strict';

//* Работа с датами

const now1 = new Date(); // Текущая дата
const now2 = new Date('2011-01-21'); // Переданная дата ввиде строки
const now3 = new Date(2020, 5, 1, 20); // Переданная дата ввиде чисел
const now4 = new Date(0); //! «Time stamp - милисекунды» Получение начало отсчета (1970-01-01T00:00:00.000Z)
// console.log(now4);

//* Получение 
// console.log(now1.getFullYear()); // Текущиц год
// console.log(now1.getMonth()); // Текущиц месяц
// console.log(now1.getDate()); // Текущиц число
// console.log(now1.getHours()); // Текущиц часы
// console.log(now1.getMinutes()); // Текущиц минуты
// console.log(now1.getSeconds()); // Текущиц милисекунды

//* Номер дня недели отсчет -> ВОСКРЕСЕНЬЕ = 0
// console.log(now1.getDay()); // Получение дня недели

//! Часовой пояс UTC - Отнимает 3 часа
// console.log(now1.getUTCHours()); // Текущиц часы

//* Получение разницы В МИНУТАХ между местным часовым поясом и UTC (-180минут)
// console.log(now1.getTimezoneOffset());

//* Возвращение TimeStamp с 1979.01.01
// console.log(now1.getTime());
// let time = now1.getTime();
// const date = new Date(time);
// console.log(date);

//* Установка времени «SET»
console.log(now1.setHours(18)); // Установка часов - //! UTC отнимает 3 часа
console.log(now1);


// Аналог banchmark
let start = new Date(); // Начало отсчета

for (let i = 0; i < 10000000000; i++) { // Какие-то действия
  let some = i ** 3;
}

let end = new Date(); // Конец отсчета

console.log(`Цикл отработал за: ${end - start}ms`);