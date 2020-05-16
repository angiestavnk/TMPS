export default class Glass {
    constructor(smartphone) {
        this.smartphone = smartphone;
    }
    getPrice() {
        return this.smartphone.getPrice() + 300;
    }
    getDescription() {
        return `${this.smartphone.getDescription()} with addable glass`;
    }
}