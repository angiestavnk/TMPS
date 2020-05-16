import PlaneConveyor from './conveyor.js'
export default class PlaneConveyorFacade {
    constructor(plane) {
        this.plane = plane;
    }
    assembleyAircraft() {
        this.plane.setCarcase();
        this.plane.setEngine();
        this.plane.setWing();
        this.plane.setCalcEngine();
        this.plane.setWheels();
        this.plane.addExterior();
    }

    changeEngine() {
        this.plane.getEngine();
        this.plane.setEngine();
    }
}