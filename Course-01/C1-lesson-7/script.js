"use strict";

//* Простое сообщение с пользователем

alert('Message!'); // Работает в браузере - нельзя стилизовать

const result = confirm('Question: Are you here?'); // Работает в браузере
console.log(result); // Ответ булиновые значения «true/false»

const answer = promt('Question: Are you 18?', 'Placeholder: 18');
console.log(answer); // Всегда ответом будет тип данных «String»
console.log(typeof(answer));

// Динамическая типизация
const answerNum = +promt('Question: Are you 18', '15')
console.log(answer + 5); // 20

//! Вся информация получаемая от пользователя будет строкой! ///////


const answers = [];
// answers[0] = promt('What is your name?', '');
// answers[1] = promt('What is your lastname?', '');
// answers[2] = promt('How old are you?', '');
// document.write(answers);

answers[0] = 'Neo';
answers[1] = 'Anderson';
answers[2] = 25;

console.log(answers);
console.log(typeof(answers)); // object
console.log(typeof(null));