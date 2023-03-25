'use setrict'

//* Функции конструкторы

// Старый вид записи
// const num = new Number(3);
// const newFunc = new Function(3)
// console.log(newFunc);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;

  this.hello = function() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Метод «Prototype»
// Если нет доступа к конструктору
// Будет прототипно наследоваться, и будет у всех потомков после него, 
User.prototype.exit = function() {
  console.log(`User ${this.name} left`);
}

const neo = new User('Neo', 25);
const trinity = new User('Trinity', 20);

// console.log(neo);
// console.log(trinity);
neo.hello();
trinity.hello();

// add method with prototype
neo.exit();
trinity.exit();
