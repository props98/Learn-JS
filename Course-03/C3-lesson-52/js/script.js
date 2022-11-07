'use strict';

//* Технология AJAX - общение с сервером
// Asinchronius Java and XML

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  // 1.method, 2.url, 3.async, 4.login, 5.password
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  //* Свойства
  // status
  // statusText
  // response - ответ
  // readyState - текущее состояние запроса

  //* Методы
  // readystatechange

  //! Первое событие «readystatechange»
  // request.addEventListener('readystatechange', () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
  //   } else {
  //     inputUsd.value = "Что то пошло не так";
  //   }
  // });


  //! Второе событие «load»
  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так"; // Если ошибка 404
    }
  });
});
