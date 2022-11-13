"use strict";

//* Циклы
let num = 50;

//* Цикл «while»
// while (num <= 55) {
//   console.log(num);
//   num++;
// }

//* Цикл «do while»
// do {
//   console.log(num);
//   num++;
// } while (num <= 55);

// Цикл «for of»
for (let i = 1; i <= 5; i++) {
  console.log(num);
  num++;
}

// «for of» / «break» & «continue»
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    // break;
    continue;
  }
  console.log(i);
}

 
