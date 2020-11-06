// import using require

// declare class


// export class using module.exports
import shape from './shape';
export default class Circle extends Shape {
    constructor() {
        //fisrt line of subclass constructor should call superclass constructor with appropriate parameters
        super();
    }
    calculateArea() {
        console.log("area");
        return 3.14 * 5 * 5;
    }
}