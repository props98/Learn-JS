'use strict';

//* СВОЙСТВА - Акцессоры / Геттры и Cеттеры - Свойства объекта

const person = {
  name: 'Neo',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num
  }
};

console.log(person.userAge); // get
console.log(person.userAge = 35); // set

console.log(person.userAge);

