'use strict';

//* Ипорт всех сущностей
// Для именнованого синтаксиса, передача переменных из другого модуля.
// Импорт в ввиде деструктуризации
import {one, two} from './main.js';
console.log(`${one} and ${two}`);

// Можно сразу переименовать переданную переменную
import {one as first} from './main.js';
console.log(first);

// Иморт всех переменных и функций с другого модуля
// И сразу можно переименовать
import * as data from './main.js';

// Чтобв обратиться
// console.log(data.one);
// console.log(data.two);
data.sayHy();


//* Импорт по умолчанию
import sayBye from './main.js';
sayBye();