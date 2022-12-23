'use strict';

//* Classes -  Классы ES6
// Синктатический сахар

// 1. Помогает для шаблонизации
// 2. Название класса всекда начинаеться с большой буквы

// Концепция
class Rectangle {
  constructor(width, height) { // Создание экземпляра класса
    this.width = width;
    this.height = height;
  }

  caclArea() { // Создание методов класса - Имя метода без function и :
    return this.width * this.height;
  } // в конце точку с запятой не ставят
}

class ColoredRectangleWithText extends Rectangle { // Наследуемый класс от «Rectangle»
  constructor (width, height, text, bgColor) {
    super(width, height); // Чтобв не копировать свойства и сделать их наследуемыми / всегда первой строчкой
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'Tomato');
div.showMyProps();
console.log(div.caclArea());

const square = new Rectangle(10, 20);
const long = new Rectangle(30, 5);

console.log(square.caclArea()); // Вызываем метод класса square
console.log(long.caclArea()); // Вызываем метод класса square