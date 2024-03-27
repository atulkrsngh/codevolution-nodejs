const EventEmitter = require("node:events"); // returns a class EventEmitter which encapsulates functionality to emit events and respond to events, that's why named EventEmitter

const emitter = new EventEmitter(); // Instantiating class

const callback1 = () => console.log("Pizza ordered!");
const callback2 = () => console.log("Pizza ordered!");

emitter.on("order-pizza", (size, toppings) => { // responding to event order-pizza (listener)
  console.log(`Baking ${size} pizza with ${toppings} topping`);
});

emitter.on("order-pizza", (size) => { // we can add multiple listener to an event
  if(size === "large") {
    console.log("serving complimentary drink");
  }
});

emitter.addListener("order-pizza", callback1);
emitter.removeListener("order-pizza", callback2);

console.log("Do work"); // This will be printed first as the event is getting emitted after this
emitter.emit("order-pizza", "large", "mushroom"); // emit order-pizza event, large and mushroom are arguments(optional) which we want to pass to listener

// Result: listener not removed, since functions cannot be compared.
// Removal works by comparing the reference (memory address). Here the two have different addresses.
