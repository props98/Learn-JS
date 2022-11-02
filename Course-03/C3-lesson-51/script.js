'use strict';

//* JSON формат передачи данных
// JSON - Java Script Object Notation
//* Глубокое клонирование объектов

const person = {
  name: 'Neo',
  tel: '+7555555555'
};

// Изменяем обычный объект в данные JSON методом «stringify()»
// Выходит объект с двойными ковычками
// console.log(JSON.stringify(person));

// Изменяем полученный JSON файл в обычный объект методом «parse()»
console.log(JSON.parse(JSON.stringify(person)));


// Deep Clone
const person2 = {
  name: 'Jhon',
  tel: '+73333333',
  parents: {
    mom: 'Marry',
    dad: 'Mike'
  } 
};

const clone = JSON.parse(JSON.stringify(person2));

clone.parents.mom = 'Diana';

console.log(person2);
console.log(clone);