'use strict';

//* Функции-генераторы

function* generator() {
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
}

const str = generator();

// console.log(str.next()); // 'S'
// console.log(str.next()); // 'c'
// console.log(str.next()); // 'r'
// console.log(str.next()); // 'i'
// console.log(str.next()); // 'p'
// console.log(str.next()); // 't'
// console.log(str.next()); // undefined

console.log(str.next().value);


function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

//* Перебор функции конструктора на каждой итерации
// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);


//* Перебро всей функции конструктора
for (let k of count(7)) {
  console.log(k);
}