'use strict';

//* Local Storage

// 1.
// Установка ключа и значения number: 5
// У LocalStorage есть лимит в 5мб
                    //ключ     значение
// localStorage.setItem('number', 5);
// localStorage.setItem('neo', 1);

// localStorage.removeItem('neo'); // удаление
// localStorage.clear(); // полная очистка

// console.log(localStorage.getItem('neo')); // null

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
} 

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'tomato';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'tomato';
  }
});

// Создаем объект
const person = {
  name: 'Neo',
  age: 25
};

// Превращаем объект в JSON формат и записываем в новую переменую
const serialezedPerson = JSON.stringify(person);
// Сохраняем в Local storage
localStorage.setItem('neo', serialezedPerson);
// Выводим как обычный объект из locsl Storage из JSON формата
console.log(JSON.parse(localStorage.getItem('neo')));
