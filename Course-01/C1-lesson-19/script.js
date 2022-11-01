"use strict";

//* Сallback функция

function first(lang, callback) {
  // Do something
  setTimeout(function() {
    console.log(`${lang} function`);
  }, 500); // Задержка в пол секунды
  callback();
}

// function second() {
//   console.log('second function');
// }

// first();
// second();


// Пример
first('first', () => {
  console.log('second function');
});


 
function learnJS(lang, callback) {
  console.log(`I learn ${lang}`);
  callback();
}

function done() {
  console.log('I\'m callback function');
}

learnJS('JavaScript', done);

