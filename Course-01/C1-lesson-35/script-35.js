"use strict";

const p = document.querySelectorAll('p');
console.log(p);


//! Динамически вставляем скрипт на страницу
// const script = document.createElement('script');
// script.src = 'test.js';
// script.async = false;
// document.body.append(script);


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('test2.js');