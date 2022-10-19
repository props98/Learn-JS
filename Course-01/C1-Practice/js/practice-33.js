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

document.addEventListener('DOMContentLoaded', () => {
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
  
  
   const promoAdv = document.querySelectorAll('.promo__adv img'),
         promoBg = document.querySelector('.promo__bg'),
         genre = promoBg.querySelector('.promo__genre'),
         movieList = document.querySelector('.promo__interactive-list');
  
   const form = document.querySelector('form.add'),
         addInput = form.querySelector('.adding__input'),
         checkbox = form.querySelector('[type=checkbox]');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let newFilm = addInput.value; //! без текстка false
      const favorite = checkbox.checked;

      if (newFilm) {

        if (newFilm.length > 10) {
          newFilm = `${newFilm.substring(0, 11)} ...`;
        }

        if (favorite) {
          console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
  
        creatMovieList(movieDB.movies, movieList);
      }

      e.target.reset();
    });
  
    const deleteAdv = (arr) => {
      arr.forEach(promo => {
        promo.remove();
      });
    };

    const makeChanges = () => {
      promoBg.style.background = 'url(img/bg.jpg)';
      genre.textContent = 'драма';
    };

    const sortArr = (arr) => {
      arr.sort();
    };

    function creatMovieList(films, parent) {
      parent.innerHTML = '';
      sortArr(films);

      films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
              <div class="delete"></div>
            </li>
          `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
          btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            //! Рекурсия повторная отрисовка списка, не теряеться нумерация 
            creatMovieList(films, parent);
          });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();

    creatMovieList(movieDB.movies, movieList);
  
  })();
});
