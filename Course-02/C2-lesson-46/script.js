'use strict';

//* Контекст вызова «This»

//* 1. Обычная функция «this = window», при use strict «this = undefined».
// function showThis(a ,b) {
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
//   b: 15,
//   sum: function() {
//     console.log(this.a);
//   }
// };
// obj.sum();

//! Функция shout = undefined
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();

//* 3. «This» в конструктарах и классах это новый экземпляр объекта
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log('Hello ' + this.name);
//   }
// }
// let ivan = new User('Ivan', 23);

//* 4. Ручная привязка «this»: call, apply, bind
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith', 'Neo');
// sayName.apply(user, ['Anderson', 'John']);

// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);

// console.log(double(3));
// console.log(double(100));

//! В обработчиках событий когда используется обычная функция имеем доступ к «this»
//! Если используем стрелочную функцию контекст вызова «this» теряется
//! Исполюзую стрелочную функцию передаем аргумет «event.target»
const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//   // console.log(this);
//   this.style.backgroundColor = 'blue';
// });

btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'blue';
});

//! btn.addEventListener('click', () => {
//!   this.style.backgroundColor = 'blue';
//! });


//* Сокращенная версия стрелочной функции
//! Если один аргумент не нужны скобки
//! Если тело функции помещается в одну строку «фигурные скобки и return» можно убрать
const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    }

    say();
  }
};
obj.sayNumber();

// const calc = a => a * 2;
const calc = (a, b) => (a + b) * 2;
console.log(calc(50, 50));