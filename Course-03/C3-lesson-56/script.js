'use strict';

////////* API - Aplication Programming Interface
// Код программного обеспечения

////////* Fletch API
// для проверки сайт JSONPlaceholder - https://jsonplaceholder.typicode.com
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

//* Fetch запрос
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Neo',
    headers: {
      'Content-type': 'application/json'
    }
  })
})
  .then(response => response.json())
  .then(json => console.log(json));