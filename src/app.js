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

}