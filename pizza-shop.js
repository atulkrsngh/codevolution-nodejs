const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super(); // all previous constructors
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber += 1;
    this.emit("order", size, topping); // emit comes from the EventEmitter class
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
