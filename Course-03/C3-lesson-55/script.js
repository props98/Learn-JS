'use strict';

//* Promise
//* .then(() => {}) // .catch(() => {}) // .finally(() => {})

console.log('Запрос данных...'); // Синхронный код (выполниться сразу)

// setTimeout(() => {
//   console.log('Подготовка данных...');

//   const product = {
//     name: 'TV',
//     price: 2000
//   }

//   setTimeout(() => {
//     product.status = 'ordered';
//     console.log(product);
//   }, 3000)

// }, 2000);

//* Пример промисов
const req = new Promise(function(resolve, refect) {
  setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
      name: 'TV',
      price: 2000
    }

    resolve(product);

  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = 'ordered';
        resolve(product);
      }, 3000)
    });
  }).then(data => {
    data.modify = 'true';
    return data;
  }).then((data) => {
    console.log(data);
  }).catch(() => {
    console.error('Error!');
  }).finally(() => {
    console.log('Finally');
  });

  
//! All / Race
const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//* Ждет выполнение всех промисов и тогда делает что-то
// Promise.all([test(1000), test(2000)]).then(() => { 
//   console.log('All');
// });

//* Выполняет действия после первого отработанного промиса
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('All');
});
