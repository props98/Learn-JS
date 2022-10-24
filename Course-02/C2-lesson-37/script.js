'use strict';

//* ClassList и делегирование событий

const btns = document.querySelectorAll('button');

//* Получение количество классов у элемента
// console.log(btns[0].classList.length);

//* Узнаем индекс класса у элемента
// console.log(btns[0].classList.item(0));

//* Добавление/Удаление определенного класса
//  Добавлять классы можно через запятую
// console.log(btns[0].classList.add('red', 'someClass'));
// console.log(btns[0].classList.remove('blue'));

//* Переключение классов
//! Если класс есть убирает если класса нет добавляет
// console.log(btns[0].classList.toggle('blue'));

//* Определяет содержит ли элемент определенный класс
// console.log(btns[0].classList.contains('blue'));

//! Не удобный способ но он есть
//* Получение всех классов в ввиде одной строки
console.log(btns[0].className);


//* Preview
// btns[2].classList.add('red')
// if (btns[2].classList.contains('red')) {
//   console.log('class red');
// }

// btns[0].addEventListener('click', () => {
//   if (!btns[1].classList.contains('yellow')) {
//     btns[1].classList.add('yellow');
//   } else {
//     btns[1].classList.remove('yellow');
//   }
// });

// btns[0].addEventListener('click', () => {
//   btns[1].classList.toggle('yellow');
// });


//* Делегирование событий
const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (evt) => {
//   if (evt.target && evt.target.classList.contains('blue')) {
//     btns[3].classList.add('yellow');
//   } else if (evt.target && evt.target.classList.contains('yellow')) {
//     btns[0].classList.remove('blue');
//   }
// });

//* Делегирование через tagName элемента
// wrapper.addEventListener('click', (evt) => {
//   if (evt.target && evt.target.tagName === 'BUTTON') {
//     console.log('Hello');
//   } 
// });

//* Делегирование Google
wrapper.addEventListener('click', (evt) => {
  if (evt.target && evt.target.matches('button.red')) {
    console.log('Hello');
  } 
});

//! Перебор не работает на динамические элементы
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);