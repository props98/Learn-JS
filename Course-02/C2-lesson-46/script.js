'use strict';

//* Контекст вызова «This»

//* 1. Обычная функция «this = window», при 'use strict' «this = undefined».
// function showThis() {
//   console.log(this);
// }
// showThis();

// Example #1
function firstExample(a, b) {
  // console.log(this); // undefined
  function sum() {
    // console.log(this); // undefined
    return a + b;
  }
  console.log(sum());
}
firstExample(2, 2);


//* 2. Контекст «This» у методов объекта это будет сам объект.
const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
  }
};
obj.sum();

const exampleObj = {
  a: 10,
  b: 10,
  sum: function() {
    function shout() {
      console.log(this); // undefined
    }
    shout();
  }
}
exampleObj.sum();


//* 3. «This» в конструктарах и классах это новый экземпляр объекта
function User(name, id) {
  this.name = name,
  this.id = id,
  this.human = true,
  this.hello = function() {
    console.log(`Hello, ${this.name}`);
  }
}

let neo = new User('Neo', 25);
console.log(neo);
neo.hello();


//* 4. Ручная привязка «this»: call, apply, bind
function sayName(surname) {
  console.log(this);
  console.log(this.name + ' ' + surname);
}
const user = {
  name: 'Neo'
};
sayName.call(user);
sayName.apply(user);
// Добавление аргументов
sayName.call(user, 'Anderson');
sayName.apply(user, ['Smith'])


//* ->  «Bind» cоздает новую функцию
function count(num) {
  return this * num;
};
const double = count.bind(2);
console.log(double(5));
console.log(double(50));

console.clear();

//! В обработчиках событий когда используется обычная функция имеем доступ к «this» сам элемент
//! Если используем стрелочную функцию контекст вызова «this» теряется
//! Исполюзую стрелочную функцию передаем аргумет «event.target»
const btn = document.querySelector('button');

//! Обыная функция имеет свой контест вызова
// btn.addEventListener('click', function() {
//   console.log(this);
//   this.style.backgroundColor = 'purple';
// });

//! Стрелрчная функция - нет своего контекста вызова
btn.addEventListener('click', (evt) => {
  
  let color = evt.target.style.backgroundColor;
  
  // color = 'blue';
  // evt.target.style.backgroundColor = 'blue';
  // console.log(color);
  if (color == 'blue') {
    evt.target.style.backgroundColor = 'yellow';
  } else {
    evt.target.style.backgroundColor = 'blue';
  }
})

let obj2 = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};
obj2.sayNumber();

//* Стрелочная функция и сокращение
const calcDouble = (a) => {
  return a * 2;
};
// console.log(calcDouble(3));

//* Сокращенная версия стрелочной функции
//! Если один аргумент не нужны скобки
//! Если тело функции помещается в одну строку «фигурные скобки и return» можно убрать
const calcDoubleShort = a => a * 2;
// console.log(calcDoubleShort(2));
