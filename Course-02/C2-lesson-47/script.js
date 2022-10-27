'use strict';

//*Classes -  Классы ES6
// Синктатический сахар

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

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); //! Вызывает свойства и методы сконструктор родителя
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

// Экземпляры
// const square = new Rectangle(10, 10);
// const long = new Rectangle(5, 15);

// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'tomato');

div.showMyProps();
console.log(div.calcArea());
