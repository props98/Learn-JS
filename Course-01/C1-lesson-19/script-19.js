"use srtict"

//* Callback Функции

function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I'm learning ${lang}`);
  callback();
}

function done() {
  console.log('I\'m passed this lesson');
}

learnJS('JavaScript', done);