'use setrict'

//* Функции конструкторы

// Старый вид записи
// const num = new Number(3);
// console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

// Метод «Prototype»
// Будет прототипно наследоваться, и будет у всех потомков после него
User.prototype.exit = function() {
  console.log(`User ${this.name} left!`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();


