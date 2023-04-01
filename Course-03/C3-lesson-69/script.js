'use strict';

//* Инкапсуляция
// Один из принципов объектно ориентированного программирования

//* Функции конструкторы //////////////////////////////////
function User(name, age) {
  this.name = name;
  // this.age = age;

  // Делаем инкапсуляцию
  let userAge = age;

  this.say = function() {
    console.log(`Hello: ${this.name}, your age is ${userAge}`);
  };

  this.getAge = function() {
    return userAge;
  };

  this.setAge = function(age) {
    // userAge = age;
    if (typeof age === 'number' && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.error('Alert age!');
    }
  };
};

const neo = new User('Neo', 25);

// console.log(neo.name);
// console.log(neo.userAge);
// // Возможное вмешательство из вне, изменение данных переменных
// neo.userAge = 30; 
// // neo.name = 'Thomas';
// neo.say();

console.log(neo.getAge());
neo.setAge(30);
neo.setAge(300);
console.log(neo.getAge());
console.log(neo.getAge());

neo.say();

console.clear();

//! Классы /////// С Гетерами и Сетеррами
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Нижнее подчеркивание не синтаксис а соглашение для блокировки от внешних изменений
  }

  // Эксперементальная фитча - Привратное свойство в классах «#»
  #surname = 'Anderson';

  say = () => {
    console.log(`Hello: ${this.name} ${this.#surname}, your age is ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.error('Alert age!');
    }
  }
}

const trinity = new User('Trinity', 22);
console.log(trinity.age);
trinity.age = 99;
console.log(trinity.age);

console.log(trinity.surname);
trinity.surname = 'mmm';

trinity.say();

console.clear();

//! Training

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  #wheels = 5;

  carInfo() {
    console.log(`Car: ${this.model}, color: ${this.color}, wheels: ${this.#wheels}`);
  }
}

const jeep = new Car('Jeep', 'red');
console.log(jeep);

jeep.carInfo();

jeep.wheels = 10;
jeep.color = 'green';

jeep.carInfo();