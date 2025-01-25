const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => { // this event will be triggered because of 4th line
  console.log("this is from readable stream close event callback");
})

setImmediate(() => {
  console.log("This is setImmediate 1");
})

setTimeout(() => {
  console.log("This is setTimeout 1");
}, 0)

Promise.resolve().then(() => {
  console.log("This is promise resolve 1");
})

process.nextTick(() => {
  console.log("This is process nexttick 1");
})

/*
  This is process nexttick 1
  This is promise resolve 1
  This is setTimeout 1
  This is setImmediate 1
  this is from readable stream close event callback
*/
// For printing setTimeout where it is, we need to write for loop as we did in other examples to ensure time elapses
