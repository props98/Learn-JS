'use strict';

//* Работа с датами
const now = new Date();
// const now = new Date('2022-11-06'); // передача дата в виде строки
  // new Date.parse('2022-11-06') метод parse

// const now = new Date(2022, 10, 6); // передача даты числовыми значениями
// const now = new Date(0); // Timestamp - передача милесекунд отсчет с 1979.01.01

//* Получение 
console.log(now);
console.log(now.getFullYear()); // get only Year //!Местный часовой пояс
console.log(now.getMonth()); // get Month //!Местный часовой пояс
console.log(now.getDate()); // get Date //!Местный часовой пояс
console.log(now.getHours()); // get Hours //!Местный часовой пояс
console.log(now.getMinutes()); // get Minutes //!Местный часовой пояс
console.log(now.getSeconds()); // get Seconds //!Местный часовой пояс
console.log(now.getMilliseconds()); // get Milliseconds //!Местный часовой пояс

console.log(now.getDay()); //* Номер дня недели отсчет -> ВОСКРЕСЕНЬЕ = 0

 //! Часовой пояс UTC
console.log(now.getUTCHours());

//* Получение разницы В МИНУТАХ между местным часовым поясом и UTC
console.log(now.getTimezoneOffset());

//* Возвращение TimeStamp с 1979.01.01
console.log(now.getTime());


//* Установка времени «SET»
const setDate = new Date();

console.log(setDate.setHours(18));


// Example
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(`work for: ${end - start}ms`);