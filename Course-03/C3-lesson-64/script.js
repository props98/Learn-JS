'use strict';

//* Local Storage

// 1.
// Установка ключа и значения number: 5
// localStorage.setItem('number', 5);

// // 2.
// // Получение данных из Local Storage
// console.log(localStorage.getItem('number'));

// // 3.
// // Удаление ключа из Local Storage по названию
// localStorage.removeItem('number');

// // .4
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
};

if (localStorage.getItem('bg') === 'changed') {
  localStorage.setItem('isChecked', true);
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'lightgrey';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const persone = {
  name: 'Neo',
  age: 25
}

// const serializedPersone = JSON.stringify(persone);
localStorage.setItem('neo', persone);

console.log(localStorage.getItem('neo'));