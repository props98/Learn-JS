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

    // Tap(click) по элементу
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
        // console.log(e.targetTouches);
        // console.log(e.changedTouches);
    });

    // Ведение пальцем по объекту
    btn.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });

    // Отрывание/убирание пальца от элемента
    btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

});

//? touches - Список всех пальцев которые заимодействуют с экраном
//? targetTouches - Список пальцев взаимодействующих с конкретным элементом
//? changedTouches - Cписок пальцев участвующих в этом событии