import Iphone from './decorator/Iphone.js';
import Case from './decorator/case-decorator.js';
import Glass from './decorator/glass-decorator.js';
import PlaneConveyor from './facade/conveyor.js';
import PlaneConveyorFacade from './facade/facade.js';
import RedColor from './bridge/redcolor.js'
import BlackColor from './bridge/blackcolor.js'
import Bmw from './bridge/bmw.js';
import Mercedes from './bridge/mercedes.js';
import run from './flyweight/flyweight.js';
import currencyProxy from './proxy/currency.js';

//decorator

let iphone = new Iphone();
iphone = new Case(iphone);
iphone = new Glass(iphone);

console.log(iphone.getPrice(), iphone.getDescription());

//facade
const conveyor = new PlaneConveyorFacade(new PlaneConveyor());
let plane = conveyor.assembleyAircraft();
plane = conveyor.changeEngine();
console.log("Aircraft is ready!");

//bridge
const blackBmw = new Bmw(new BlackColor());
const redMercedes = new Mercedes(new RedColor()); 
blackBmw.paint()
redMercedes.paint();

//flyweight
run();


//proxy
const proxy = new currencyProxy();
//When app opens
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));

//second time
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));




