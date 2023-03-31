'use strict';

//* Технология «Local Storage»

// // Создание ключа
// // Установка ключа и значения number: 5
// localStorage.setItem('number', 5);

// // Удаление ключа
// localStorage.removeItem('number');

// // Получения значения Локального хранилища
// console.log(localStorage.getItem('number'));

// // Очищение логального хранилища
// localStorage.clear();

const checkbox = document.getElementById('checkbox'),
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
    form.style.backgroundColor = 'white';
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

// Вывод в формате JSON
console.log(localStorage.getItem('neo'));

// Выводим как обычный объект из locsl Storage из JSON формата
console.log(JSON.parse(localStorage.getItem('neo')));




