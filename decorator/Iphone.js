import Smartphone from './Smartphone.js'
export default class Iphone extends Smartphone {
    constructor() {
        super();
        this.price = 10000;
        this.model = 'Iphone';
    }
}