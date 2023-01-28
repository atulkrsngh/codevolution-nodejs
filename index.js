const EventEmitter = require("node:events");

const emitter = new EventEmitter();

const callback1 = () => console.log("Pizza ordered!");
const callback2 = () => console.log("Pizza ordered!");

emitter.addListener("order-pizza", callback1);
emitter.removeListener("order-pizza", callback2);

emitter.emit("order-pizza");

// Result: listener not removed, since functions cannot be compared.
// Removal worked previously by comparing the reference (memory address). Here the two have different address.
