/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 
*/

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
  const promoBg = document.querySelector('.promo__bg'),
        genre = promoBg.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        checkBox = form.querySelector('[type=checkbox]');


  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let newFilm = input.value;
    const favorite = checkBox.checked;

    if (newFilm) {
      
      // Проверяем длину строки и обрезаем после 10 символа
      if (newFilm.length > 10) {
        newFilm = `${newFilm.substring(0, 11)} ...`
      }
      
      // Проверяем на чекбокс
      if (favorite) {
        console.log('Add new film');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }

  });

  // Удаляет рекламные блоки promo
  const deleteAdv = (arr) => {
    arr.forEach(promo => {
      promo.remove();
    })
  };

  // Делает изменение фона главного баннера и текста
  const makeChange = () => {
    promoBg.style.background = 'url(img/bg.jpg)';
    genre.textContent = 'драма';
  };

  // Сортирует массив по алфивиту
  const sortArr = (arr) => {
    arr.sort();
  };

  // Cоздает список фильмов
  const createMovieList = (films, parent) => {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
          <div class="delete"></div>
        </li>
      `;
    });

    // Делаем удаление при клике на иконку корзины
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        // Рекурсия, повторная отрисовка списка
        createMovieList(films, parent);
      })
    })
  };

  deleteAdv(promoAdv);
  makeChange();
  createMovieList(movieDB.movies, movieList)

})();