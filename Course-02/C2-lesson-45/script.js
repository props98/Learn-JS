'use setrict'

//* Функции конструкторы

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  };
}

// Добавление метода или свойства через «prototype» если нет доступа к конструктору
User.prototype.exit = function() {
  console.log(`User ${this.name} left`);
}

const neo = new User('Neo', 25);
const jhon = new User('Jhon', 40);

neo.exit();

neo.hello();
jhon.hello();

console.log(neo);
console.log(jhon);