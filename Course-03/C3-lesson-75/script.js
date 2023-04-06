'use strict';

// Проверка над ошибками в браузере
//* Try / Catch

try {
  console.log('Normal');
  console.log(a);
  console.log('result'); // Не будет работать из-зи ошибки
} catch (error) {
  // console.error('Error');
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  
}

// console.log(a);
console.log('After try/catch');

console.clear();

try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  });
} catch (error) {
  console.log(error.name);
}

console.log('Normal');