class Shape {
    constructor(name, colour) {
        this.id = Date.now() + Math.random();
        this.name = name;
        this.colour = colour;
    }

    describe() {
        return `This is a ${this.name} and is ${this.colour} in colour`;
    }

    static compare(a, b) {
        return a.area() > b.area() ? a : b;
    }
}

class Circle extends Shape {
    constructor(radius, colour) {
        super("Circle", colour)
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }

    perimeter() {
        return 2 * 3.14 * this.radius;
    }

    describe () {
        return `${super.describe()} and Radius: ${this.radius}`;
    }
}

class Rectangle extends Shape {
    constructor(w, h, colour){
        super("Rectangle", colour);
        this.w = w;
        this.h = h;
        this.colour  = colour;
    }

    area() {
        return this.w * this.h;
    }

    perimeter() {
        return 2 * (this.w + this.h);
    }

    describe () {
        return `${super.describe()} and Width: ${this.w} and Height: ${this.h}`;
    }
}

class Triangle extends Shape {
    constructor(base, height, colour) {
        super("Triangle", colour);
        this.base = base;
        this.height = height;
        this.colour = colour;
    }

    area () {
        return 0.5 * this.base * this.height
    }

    describe () {
        return `${super.describe()} and base: ${this.base} and height: ${this.height}`;
    }
}

class ShapeCollection {
    constructor() {
        this.shapes = [];
    }

    add (shape) {
        this.shapes.push(shape);
    }

    removeById(id) {
        this.shapes = this.shapes.filter(
            shape => shape.id !== id
        );
    }

    getByType(type) {
        return this.shapes.filter(
            shape => shape.constructor.name === type
        );
    }

    sortByArea() {
        return this.shapes.sort((a, b) => a.area() - b.area());
    } 

    getTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.area(), 0);
    }
}

const c1 = new Circle(5, "Red");
const r1 = new Rectangle(5, 4, "Blue");
const t1 = new Triangle(8, 5, "Yellow");

const collection = new ShapeCollection();
collection.add(c1);
collection.add(r1);
collection.add(t1);

console.log(c1.describe());
console.log(r1.describe());
console.log(t1.describe());

console.log(Shape.compare(c1, r1));

console.log(collection.getByType("Circle"));
console.log(collection.sortByArea());
console.log(collection.getTotalArea());

collection.removeById(r1.id);

console.log(c1 instanceof Shape);
console.log(Object.getPrototypeOf(c1));
console.log(c1.constructor.name);