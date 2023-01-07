'use strict';

//* JSON формат передачи данных
//* JSON - Java Script Object Notation
//* Глубокое клонирование объектов

const person = {
  name: 'Neo',
  tel: '+79995555555'
};


// Изменяем обычный объект в данные JSON методом «stringify()»
// Выходит объект с двойными ковычками
console.log(JSON.stringify(person));

// Изменяем полученный JSON файл в обычный объект методом «parse()»
console.log(JSON.parse(JSON.stringify(person)));

//* Глубокое клонирование объекта
const deepObjPerson = {
  name: 'Trinity',
  tel: '+75555555',
  parents: {
    captain: 'Morphius',
    friend: 'Dozer'
  }
};

const clone = JSON.parse(JSON.stringify(deepObjPerson));
// console.log(clone);

clone.parents.friend = 'rabbit'
console.log(clone);

console.log(deepObjPerson);