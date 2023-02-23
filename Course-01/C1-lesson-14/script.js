"use strict";

//* Циклы

let num = 50;

//* Цикл «while» - выполняеться пока условие дает true
// while (num <= 55) {
//   console.log(num + ' while');
//   num++; //! обязательный итератор 
// };

//* Цикл «do while»
// do {
//   console.log(num + ' do while');
//   num++;
// } 
// while (num <= 55);

//* Цикл «for of»
for (let i = 1; i <= 5; i++) {
  console.log(num + ' for');
  num++;
};

// «break» & «continue»
for (let i = 1; i < 10; i++) {
  if (i == 5) {
    break;  // Останавливаеться на 4
    // continue; // Пропускает цифру 5
  }
  console.log(i);
};

 
