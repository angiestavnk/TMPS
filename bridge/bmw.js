import Model from './model.js'
export default class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
       return console.log (`Auto: Bmw, Color: ${this.color.get()}`);
    }
};