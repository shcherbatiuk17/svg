class Shape {
    constructor(options) {
        this.options = options;
    }

    changeText(newText) {
        this.options.text = newText;
    }

    changeTextColor(newColor) {
        this.options.textColor = newColor;
    }

    changeColor(newColor) {
        this.options.logoColor = newColor;
    }

    render() {
        throw new Error("The render method must be implemented by subclasses.");
    }
}

class Circle extends Shape {
    render() {
        const { text, textColor, logoColor } = this.options;
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${logoColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

class Square extends Shape {
    render() {
        const { text, textColor, logoColor } = this.options;
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="25" width="150" height="150" fill="${logoColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    render() {
        const { text, textColor, logoColor } = this.options;
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${logoColor}" />
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

const shapeOptions = {
    text: "Hello",
    textColor: "blue",
    logoColor: "yellow"
};

const circle = new Circle(shapeOptions);
const square = new Square(shapeOptions);
const triangle = new Triangle(shapeOptions);

console.log(circle.render());
console.log(square.render());
console.log(triangle.render());
