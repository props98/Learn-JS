"use strict";

//* Действия с элементами на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // поиск в wrapper
      oneHeart = wrapper.querySelector('.heart'); // поиск в wrapper

console.dir(box);
box.style.backgroundColor = 'purple';
box.style.width = '50vw';

let borderRadius = 5;
box.style.cssText = `background-color: lightblue; border-radius: ${borderRadius}%`;

btns[1].style.backgroundColor = 'tomato';

console.log(circles);
for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = 'yellow';
}
circles[0].style.backgroundColor = 'lightgreen';

hearts.forEach(item => {
  item.style.backgroundColor = 'beige';
});

//* Создание элементов
const div = document.createElement('div');
// const text = document.createTextNode('Hello, Neo!'); //! Редко используется


//* Добавление класса элементу
div.classList.add('black');

//* Размещение элемента
// document.body.append(div); // В конце перед закрывающим тегом body
// wrapper.append(div); // В конце wrapper

//! Старые команды - могут пригодиться
// wrapper.prepend(div); // В начале wrapper
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

//! Новые команды
wrapper.before(div);
// circles[0].remove(); // Удаление элемента
// hearts[0].after(div); // После первого элемента в wrapper
// hearts[0].replaceWith(btns[4]); // Замена элементов


//* Добавление текста и HTML элемента
// div.innerHTML = 'Hello, Neo!';
div.innerHTML = '<h1>Hello, Neo!</h1>';
// div.textContent = 'Hello!'


//* Расположение после или до выбранного элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
//! afterbegin - внутри элемента в начале
// afterend - после элемента
// beforebegin - перед элементом
//! beforeend - внутри элемента в конце

