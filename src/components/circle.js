// import using require

// declare class


// export class using module.exports
const Shape = require('./shape');
class Circle extends Shape {
    constructor() {
        //fisrt line of subclass constructor should call superclass constructor with appropriate parameters
        super();
    }
    calculateArea() {
        console.log("area" + this.color);
        return 3.14 * 5 * 5;
    }
}
module.exports = Circle;