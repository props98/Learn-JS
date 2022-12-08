'use strict';

// Проверка над ошибками в браузере
//* Try / Catch

// try {
//   console.log('Good');
//   console.log(a);
//   console.log('result');
// } catch(error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// } finally {

// }

// console.log(a);
// console.log('Stil normal');


// Example


try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  });
} catch(error) {
  // console.log(error);
}

console.log('Normal');