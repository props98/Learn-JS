'use strict';

// Техническая переменная
let path = require('path');

module.exports = {
  mode: 'development', // Режим работы Webpack «dev or prod»

  entry: './src/js/script.js', // С этого файла начинаем

  output: { // Файлы выхода
    filename: 'bundle.js', // название конечного файла
    path: __dirname + '/dist/js' // путь конечного файла
  },

  watch: true,

  devtool: "source-map",

  module: {}, // Модули и их настройки

  // plugins: {} // Плагины если вдруг нужны 
};
