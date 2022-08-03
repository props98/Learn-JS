'use strict';

//* 2015год -> Классы - в стандарте ES6
//* Синтактический сахар -> красивая обертка функции конструктора
//! Классы всегда называются с БОЛЬШОЙ БУКВЫ

//* Концепция --
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

//* Делаем наследоваемость
class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, bgColor) {
        super(width, height); //* вызываем конструктор родителя (width, height)
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

//* Экземпляры --
// const square = new Rectangle(10, 10);
// const long = new Rectangle(100, 25);

const div = new ColoredRectangleWithText(25, 10, 'Hello!', 'red');

div.showMyProps();
console.log(div.calcArea());

console.log(square.calcArea());
console.log(long.calcArea());

