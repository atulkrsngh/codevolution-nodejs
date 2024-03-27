const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter { // after extending, PizzaShop can emit it's own event
  constructor() {
    super(); // all previous constructors
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber += 1;
    this.emit("order", size, topping); // emit is available because of inheritance
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
