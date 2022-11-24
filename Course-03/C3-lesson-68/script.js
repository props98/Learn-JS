'use strict';

//* СВОЙСТВА - Акцессоры / Геттры и Cеттеры - Свойства объекта

const persone = {
  name: 'Neo',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  }
};

console.log(persone.userAge);
console.log(persone.userAge = 30);

