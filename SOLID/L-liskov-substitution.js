/*
* The Liskov substitution principle states that
* any class should be substitutable for its parent class
* without unexpected consequences.
*
* Принцип замещения Лисков утверждает,
* что любой класс должен быть заменителем своего родительского класса
* без неожиданных последствий.
*
*
*
* Полиморфизм - это представление одного интерфейса для разных типов данных.
* Например, целые числа (integers),
* числа с плавающей запятой (floats) и
* числа с плавающей запятой двойной точности
* (double) полностью полиморфны:
* независимо от их отличающихся типов,
* их можно складывать, вычитать, перемножать, и так далее.
*
* */

// BAD example
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//
//     setHeight(newHeight) {
//         this.height = newHeight;
//     }
// }
//
// class Square extends Rectangle {}
//
// const rectangle = new Rectangle(4, 5);
// const square = new Square(4, 4);
//
// console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`); // Outputs 'Height: 4, Width: 5' (correct)
// console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 4, Width: 4' (correct)
//
// square.setHeight(5);
// console.log(`Height: ${square.height}, Width: ${square.width}`); // Outputs 'Height: 5, Width: 4' (wrong)


// GOOD example

class Shape {
    get area() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    get area() {
        return this.length * this.width;
    }
}
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    get area() {
        return this.length ** 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
