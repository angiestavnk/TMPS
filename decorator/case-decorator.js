export default class Case {
    constructor(smartphone) {
        this.smartphone = smartphone;
    }

    getPrice() {
        return this.smartphone.getPrice() + 100;
    }
    getDescription(){
        return `${this.smartphone.getDescription()} with case`;
    }
};