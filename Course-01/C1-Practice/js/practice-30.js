/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

(function() {

   //! DataBase
   const movieDB = {
      movies: [
          "Логан",
          "Лига справедливости",
          "Ла-ла лэнд",
          "Одержимость",
          "Скотт Пилигрим против...",
          "Апполон",
          "Ямакаси"
      ]
  };

  const promoAdv = document.querySelectorAll('.promo__adv img');
  promoAdv.forEach(promo => {
    promo.remove();
  });

  const promoBg = document.querySelector('.promo__bg'),
        genre = promoBg.querySelector('.promo__genre');

  promoBg.style.background = 'url(img/bg.jpg)';
  genre.textContent = 'драма';

  const movieList = document.querySelector('.promo__interactive-list');
  movieList.innerHTML = '';
  movieDB.movies.sort();

  movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
      </li>
    `;
  })

})();




