const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.addListener("order-pizza", () => console.log("Pizza ordered!"));
emitter.removeListener("order-pizza", () => console.log("Pizza ordered!"));

emitter.emit("order-pizza");

// Result: listener not removed
