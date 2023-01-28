const EventEmitter = require("node:events");

const emitter = new EventEmitter();

const callback = () => console.log("Pizza ordered!");

emitter.addListener("order-pizza", callback);
emitter.removeListener("order-pizza", callback);

emitter.emit("order-pizza");

// Result: nothing gets printed
