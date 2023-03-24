// const { EventEmitter } = require("events");
import { EventEmitter } from "events";

// Challenge
export default function app() {
  // TODO 1
  const myEventEmitter = new EventEmitter();

  const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  };

  // TODO 2

  // TODO 3
  myEventEmitter.on("birthday", birthdayEventListener);

  // TODO 4
  myEventEmitter.emit("birthday", "Allam");
}

// Excercise
export function makeCoffeeTubruk() {
  const myEventEmitter = new EventEmitter();

  const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
  };

  const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
  };

  const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
  };

  myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

  myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
}

/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */
