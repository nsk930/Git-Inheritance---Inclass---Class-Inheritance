// declare class
// // Acceptance Criteria

// Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.

// In another module make a class called "Circle" that extends the "Shape" class and overrides the calculateArea method.

// Write code for Shape class in shape.js and Circle in circle.js

// Export the class from each file.


// export class using module.exports


class Shape {
    constructor() {
        this.color = "red";
    }

}
module.exports = Shape;