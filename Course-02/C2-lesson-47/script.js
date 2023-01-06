'use strict';

//* Classes -  Классы ES6
// Синктатический сахар

// 1. Помогает для шаблонизации
// 2. Название класса всекда начинаеться с большой буквы

// Концепция
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());
// const long  = new Rectangle(10, 200);
// console.log(long.calcArea());

// Наследование класса
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // наследование 
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'tomato');
div.showMyProps();
console.log(div.calcArea());