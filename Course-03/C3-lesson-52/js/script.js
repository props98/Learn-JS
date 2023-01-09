'use strict';

//* Технология AJAX (Асинхронное выполнение задач) - общение с сервером
// Asinchronius Java and XML
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //* Запрос
  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/current1.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  // status
  // statusText
  // response
  // readyState

  //! Первое событие «readystatechange»
  // request.addEventListener('readystatechange', () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
  //   } else {
  //     inputUsd.value = 'Something wrong!';
  //   }
  // });

  //! Второе событие «load»
  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Something wrong!';
    }
  });

});


