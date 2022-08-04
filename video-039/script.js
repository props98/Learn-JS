"use strict";

//* setInterval - setTimeout

//* Вызов анонимной функции через 2сек.
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

//* Передача готовой функции - без вызова «()» функции 
// const getLogger = setTimeout(logger, 2000);

//* очищение интервала
// clearInterval(timerId);

const btn = document.querySelector('.btn');
let getLogger,
    i = 0;

// function logger() {
//     if (i === 3) {
//         clearInterval(getLogger);
//     }
//     console.log('text');
//     i++;
// }

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     getLogger = setInterval(logger, 500);
// });


//* Рекурсивный пример setInterval
//* Когда выполняться все действия произойдет повтор строго через 5сек.
// let id = setTimeout(function log() {
//     console.log('Recursion');
//     id = setTimeout(log, 500);
// }, 500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
