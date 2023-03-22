'use strict';

//* ClassList и делегирование событий

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//* Получение количество классов у элемента
// console.log(btns[0].classList.length);

//* Узнаем индекс класса у элемента
// console.log(btns[0].classList.item(0)); // class -> blue

//* Добавление/Удаление определенного класса
console.log(btns[0].classList.add('addRedClass', 'secondAddClass'));
console.log(btns[0].classList.remove('blue'));

//* Переключение классов
//! Если класс есть убирает если класса нет добавляет
console.log(btns[0].classList.toggle('blue'));

//* Определяет содержит ли элемент определенный класс
if (btns[0].classList.contains('some')) {
  console.log('class - some');
}

console.clear();

// Имитация бургер меню
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('blue')) {
    btns[1].classList.add('blue')
  } else {
    btns[1].classList.remove('blue');
  }
});

//! Не удобный способ но он есть
//* Получение всех классов в ввиде одной строки
console.log(btns[0].className);



//* Делегирование событий

wrapper.addEventListener('click', (evt) => {
  // console.dir(evt.target);

  // if (evt.target && evt.target.tagName === 'BUTTON') {
  //   console.log('Button');
  // }

  // if (evt.target && evt.target.classList.contains('delig')) {
  //   console.log('Deligation');
  // }

  //* Делегирование Google
  if (evt.target && evt.target.matches('button.blue')) {
    console.log('Google');
  }

});

//! forEach() ->  Делегирование не работает на динамические созданные элементы
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   })
// })

const btn = document.createElement('button');
btn.classList.add('yellow');
wrapper.append(btn);