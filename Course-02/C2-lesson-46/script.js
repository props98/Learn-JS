'use strict';

//* Контекст вызова «This»

//! 1. Обычная функция «this = window», при use strict «this = undefined».
// function showThis() {
//   console.log(this); //* «this» становться undefined при «use strict»
// }
// showThis();

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);

// console.clear();

//! 2. Контекст «This» у методов объекта это будет сам объект.
const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
  }
};
obj.sum();

//! Функция shout = undefined
const obj2 = {
  a: 20,
  b: 40,
  sum: function() {
    function shout() {
      console.log(this);
    }
    shout();
  }
};
obj2.sum();

// console.clear();

//! 3. «This» в конструктарах и классах это новый экземпляр объекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello! ${this.name}`);
  }
}
let neo = new User('Neo', 23);
neo.hello();

// console.clear();

//! 4. Ручная привязка «this»: call, apply, bind
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'Mr. Anderson'
}

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(10));

console.clear();

const btn = document.querySelector('button');

//! В обработчиках событий когда используется обычная функция имеем доступ к «this»
//! Если используем стрелочную функцию контекст вызова «this» теряется
//! Исполюзую стрелочную функцию передаем аргумет «event.target»
btn.addEventListener('click', (e) => {
  // console.log(this);
  // this.style.backgroundColor = 'yellow'; // при использовании обычной фнукции
  e.target.style.backgroundColor = 'yellow'; // при использовании стрелочной функции
});

// Стрелочная функция в методе объекта ссылается на сам объект
const obj3 = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    }
    say();
  }
};

obj3.sayNumber();


//* Класическая стрелочная функция
const double2 = (a) => {
  return a * 2;
}

//* Сокращенная версия стрелочной функции
//! Если один аргумент не нужны скобки
//! Если тело функции помещается в одну строку «фигурные скобки и return» можно убрать
const double3 = a => a * 2
console.log(double3(6));