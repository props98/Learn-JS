'use strict';

//* Событя на мобильных устройствах

//* Мобильные события «Touch events»
//? touchstart - касание экрана
//? touchmove - перемещения пальца
//? touchend - отрывание пальца от экрана
//? touchenter - ведем пальцем сработает при поподании пальца 
//? touchleave - палец продолжил скользить
//? touchcancel - точка не регистрируется

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  // console.log(btn);

  // Tap(click) по элементу
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('start');
    console.log(e.touches);
  });

  // Ведение пальцем по объекту
  btn.addEventListener('touchmove', (e) => {
    console.log('move');
    console.log(e.targetTouches[0].pageX);
  })

  // Отрывание/убирание пальца от элемента
  btn.addEventListener('touchend', () => {
    console.log('end');
  })

});

//? touches - Список всех пальцев которые заимодействуют с экраном
//? targetTouches - Список пальцев взаимодействующих с конкретным элементом
//? changedTouches - Cписок пальцев участвующих в этом событии

// Полезная ссылка
/* 

http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya

https://hammerjs.github.io

*/


