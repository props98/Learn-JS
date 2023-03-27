'use strict';

//* Classes -  Классы ES6
// Синктатический сахар (Красивая обертка объекта конструктора)

// 1. Помогает для шаблонизации
// 2. Название класса всегда начинается с большой буквы
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

// Дополнительный класс для Rectangle
// Наследуемость классов от «Rectangle»
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, backgroundColor) {
    super(height, width);
    this.text = text;
    this.backgroundColor = backgroundColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.backgroundColor}`);
  }
}

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());
// const long = new Rectangle(20, 100);
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello, Neo!', 'Green');
console.log(div.calcArea());
div.showMyProps();
