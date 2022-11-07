'use strict';

function hello() {
  console.log('Hello World!');
  debugger;
}
hello();

function hi() {
  console.log('Say hi!');
}
hi();

const arr = [1, 2, 7, 4, 3],
      sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}


console.log(sorted);