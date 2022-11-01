"use strict";

//* События и их обработчики

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() { //! Старый способ
//   alert('click');          //! Уже не исаользуют
// };

// btn.onclick = function() { //! Старый способ
//   alert('Second click');   //! Второй клик не сработает
// };

let i = 0;

const deleteElement = (evt) => {
      console.log(evt.target);
      // console.log(evt.currentTarget); // Всплытие событий от вложенного элемента к родителю
      // console.log(evt.type);
      // evt.target.remove();
      // i++;
      // if (i == 2) {
      //   btn.removeEventListener('click', deleteElement);
      // }
    }


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

// link.addEventListener('click', (evt) => {
//   evt.preventDefault(); //Отмена радного события

//   console.log(evt.target);
// });

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true})
});
