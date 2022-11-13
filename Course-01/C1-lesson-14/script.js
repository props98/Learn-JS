"use strict";

//* Циклы



//////////////////? Задачи

//* Перебор четных цифр от 1 - 30
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}