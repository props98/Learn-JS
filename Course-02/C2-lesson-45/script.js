'use setrict'

//* Функции конструкторы

// Старый вид записи
// const num = new Function(3);
// console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;

  this.hello = function() {
    console.log(`Hello ${this.name}`);
  }
}

// Метод «Prototype»
// Будет прототипно наследоваться, и будет у всех потомков после него, 
// Если нет доступа к конструктору
User.prototype.exit = function(name) {
  console.log(`User ${this.name} go away`);
};

const neo = new User('Neo', 25);
const trinity = new User('Trinity', 23);

neo.hello();
neo.exit();

console.log(neo);
// console.log(trinity);


