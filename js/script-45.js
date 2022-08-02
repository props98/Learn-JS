// "use strict";

//* Функции конструкторы стандарты ES - «5»

//* Функция конструктор для создания пользователей
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 22);
const alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();

//* Добавление методов и свойст через prototype

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

ivan.exit();

//* Пример записи классов (Синктатический сахар)

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Uset ${this.name} left`);
    }
}

let jhon = new User('Jhon', 22);
console.log(jhon);
jhon.hello();
jhon.exit();

