"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let  numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '0');

            a.slice(0, 2).toLocaleLowerCase();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    };
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно давольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// function showMyDB () {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    };
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(genres.toLocaleLowerCase()); //! Методом .push()
    };
}


rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();

console.log(personalMovieDB);
