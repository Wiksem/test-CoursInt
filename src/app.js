class Triangle {
    constructor(side) {
        this.side = side;
    }

    getSideLength() {
        return this.side;
    }

    getPerimeter() {
        return this.side * 3;
    }

    getArea() {
        return (Math.sqrt(3) / 4) * Math.pow(this.side, 2);
    }
}
