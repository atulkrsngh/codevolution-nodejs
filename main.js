setImmediate(() => {
  console.log("This is setImmediate 1");
})

setImmediate(() => {
  console.log("This is setImmediate 2");

  process.nextTick(() => {
    console.log("This is process nexttick inside setImmediate");
  })
  
  Promise.resolve().then(() => {
    console.log("This is promise resolve inside setImmediate");
  })
})

setImmediate(() => {
  console.log("This is setImmediate 3");
})

/*
  This is setImmediate 1
  This is setImmediate 2
  This is process nexttick inside setImmediate
  This is promise resolve inside setImmediate
  This is setImmediate 3
*/
