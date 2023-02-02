'use strict';

//* Classes -  Классы ES6
// Синктатический сахар

// 1. Помогает для шаблонизации
// 2. Название класса всекда начинаеться с большой буквы

// Концепция
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }

}

// Наследуемость классов от «Rectangle»
class ColoredRectangleWithText extends Rectangle {
  constructor(width, height, text, bgColor) {
    super(width, height); // Вызов свойств от родителя

    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}


// Экземпляры объекта
// const square = new Rectangle(10, 10);
// const long = new Rectangle(50, 10);
// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'tomato');
div.showMyProps();
console.log(div.calcArea());
