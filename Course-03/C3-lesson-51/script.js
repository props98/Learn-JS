'use strict';

//* JSON формат передачи данных
//* JSON - Java Script Object Notation
//* Глубокое клонирование объектов

const person = {
  name: 'Neo',
  tel: '+75555555'
};

// Изменяем обычный объект в данные JSON методом «stringify()»
// console.log(JSON.stringify(person));
const stringJson = JSON.stringify(person);
console.log(stringJson); // Выходит объект с двойными кaвычками

// Изменяем полученный JSON файл в обычный объект методом «parse()»
console.log(JSON.parse(stringJson));

//* Глубокое клонирование объекта
const person2 = {
  name: 'Neo',
  tel: '+75555555',
  parents: {
    mom: 'Ann',
    dad: 'Mike'
  }
};

const clone = JSON.parse(JSON.stringify(person2));
clone.parents.mom = 'Jane'

console.log(person2);
console.log(clone);