import Model from './model.js'
export default class Mercedes extends Model {
    constructor(color) {
        super(color);
    }
    paint() {
        return console.log (`Auto: Mercedes, Color: ${this.color.get()}`);
    }
};
