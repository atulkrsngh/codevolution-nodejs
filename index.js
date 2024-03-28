const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("This is readfile 1");
  setImmediate(() => {
    console.log("This is setImmediate inside readfile");
  })

  process.nextTick(() => {
    console.log("This is process nexttick inside readFile");
  })
  
  Promise.resolve().then(() => {
    console.log("This is promise resolve inside readFile");
  })
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

for(let i = 0; i < 20000000000; i++) {} // This line will ensure that setTimeout timer elapses when event loop goes to timer queue for callback check

/*
  This is process nexttick 1
  This is promise resolve 1
  This is setTimeout 1
  This is readfile 1
  This is process nexttick inside readFile
  This is promise resolve inside readFile
  This is setImmediate inside readfile
*/
