'use strict';

//* Инкапсуляция

//* Функции конструкторы //////////////////////////////////
function User(name, age) {
  this.name = name;
  let userAge = age; // Доступ только изнутри

  this.say = function() {
    console.log(`User name: ${this.name}, Age: ${userAge}`);
  };

  this.getAge = function() {
    return userAge;
  };

  this.setAge = function(age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      userAge = age;
    } else {
      console.log('Недопустимое значение!');
    }
  };
}

const neo = new User('Neo', 27);
console.log(neo.name);
// console.log(neo.userAge);
console.log(neo.getAge());

neo.setAge(30);
neo.setAge(300);
// neo.name = 'Anderson';
console.log(neo.getAge());

neo.say();

//* Классы //////////////////////////////////
class User {
  constructor(name, age) {
    this.name = name;
    // let userAge = age; // Выдает: undefined
    this._age = age;
  }

  #surname = 'Anderson';

  say = () => {
    console.log(`User name: ${this.name} ${this.#surname}, Age: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
  }

  get surname() {
    return this.#surname;
  }

  set surname(surname) {
    console.log(`New surname: ${surname}`);
  }
}

const trinity = new User('Trinity', 23);
// console.log(trinity.age);
// trinity.age = 99;
// console.log(trinity.age);
console.log(trinity.surname);
trinity.surname = 'Robin'
trinity.say();