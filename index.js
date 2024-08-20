const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("This is readfile 1");
})

process.nextTick(() => {
  console.log("This is process nexttick 1");
})

Promise.resolve().then(() => {
  console.log("This is promise resolve 1");
})

setTimeout(() => {
  console.log("This is setTimeout 1");
}, 0)

setImmediatek(() => {
  console.log("This is setImmediate 1");
})

for(let i = 0; i < 20000000000; i++) {} // This line will ensure that setTimeout timer elapses when event loop goes to timer queue for callback check

/*
  This is process nexttick 1
  This is promise resolve 1
  This is setTimeout 1
  This is setImmediate 1 (I/O events are polled and callback functions are added to the I/O queue only after the I/O operation is completed)
  This is readfile 1
*/

// Because of for loop, the timer of setTimeout expires and since it's timer queue, it will be executed before check queue where setimmediate is present
