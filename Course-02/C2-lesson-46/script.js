'use strict';

//* Контекст вызова «This»

//* 1. Обычная функция «this = window», при use strict «this = undefined».
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(5, 5);


//* 2. Контекст «This» у методов объекта это будет сам объект.
// const obj = {
//   a: 20,
//   b: 20,
//   sum: function() {
//     function shout() { //! Функция shout = undefined
//       console.log(this);
//     }
//     shout();
//   }
// }
// obj.sum();


//* 3. «This» в конструктарах и классах это новый экземпляр объекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  }
}
let neo = new User('Neo', 25);


//* 4. Ручная привязка «this»: call, apply, bind
// function sayName(lastName) {
//   console.log(this);
//   console.log(this.name + ' ' + lastName);
// }

// const user = {
//   name: 'Neo'
// };

// sayName.call(user, 'Anderson');
// sayName.apply(user, ['Smith']);

// //* 4. «Bind» cоздает новую функцию
// function count(num) {
//   return this * num
// }

// const double = count.bind(2);
// console.log(double(6));
// console.log(double(50));

//! В обработчиках событий когда используется обычная функция имеем доступ к «this» сам элемент
//! Если используем стрелочную функцию контекст вызова «this» теряется
//! Исполюзую стрелочную функцию передаем аргумет «event.target»
const btn = document.querySelector('button');

// btn.addEventListener('click', function() { //! Обычная функция
//   console.log(this);
//   this.style.backgroundColor = 'green';
// })

btn.addEventListener('click', (evt) => { //! Стрелочная функция
  console.log(evt.target);
  evt.target.style.backgroundColor = 'green';
})

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this);
      console.log(this.num);
    };
    say();
  }
}
obj.sayNumber();


//* Сокращенная версия стрелочной функции
//! Если один аргумент не нужны скобки
//! Если тело функции помещается в одну строку «фигурные скобки и return» можно убрать
const double = a => a * 2;
console.log(double(55));