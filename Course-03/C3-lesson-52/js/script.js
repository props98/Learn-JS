'use strict';

//* Технология AJAX (Асинхронное выполнение задач) - общение с сервером
// Asinchronius Java and XML

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //* Запрос
  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');

  // Создали HTTP загаловок
  request.setRequestHeader('Content-type', 'application/json; charset=urf-8');

  // Отправка запроса
  request.send();

  // Обработка полученого запроса
  // status - 200
  // statusText - 'ok'
  // response - 'Ответ бэкенд разработчика'
  // readyState - Состояние запроса (цифрой)

  //!Редко Первое событие «readystatechange» - Отслеживание запроса в текущий момент
  // request.addEventListener('readystatechange', () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     // console.log(data);
  //     inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
  //   } else {
  //     inputUsd.value = 'Что-то пошло не так!';
  //   }

  // });

  //! Второе событие «load» - Запрос полностью загрузился
  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      // console.log(data);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Что-то пошло не так!';
    }

  });

});







