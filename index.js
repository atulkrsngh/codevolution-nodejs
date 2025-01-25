setTimeout(() => console.log("This is setTimeout 1"), 0);
setTimeout(() => {
  console.log("This is setTimeout 2")
    process.nextTick(() => {
      console.log("This is inner next tick inside set timeout");
    })
  }, 0);
setTimeout(() => console.log("This is setTimeout 3"), 0);

process.nextTick(() => {
  console.log("This is process.nextTick1");
})

process.nextTick(() => {
  console.log("This is process.nextTick2");
  process.nextTick(() => {
    console.log("This is inner next tick inside next tick");
  })
})

process.nextTick(() => {
  console.log("This is process.nextTick3");
})

Promise.resolve().then(() => {
  console.log("This is Promise.resolve1");
})

Promise.resolve().then(() => {
  console.log("This is Promise.resolve2");
    process.nextTick(() => {
    console.log("This is inner next tick inside promise resolve");
  })
})

Promise.resolve().then(() => {
  console.log("This is Promise.resolve3");
})

/*
  This is process.nextTick1
  This is process.nextTick2
  This is process.nextTick3
  This is inner next tick inside next tick
  This is Promise.resolve1
  This is Promise.resolve2
  This is Promise.resolve3
  This is inner next tick inside promise resolve
  This is setTimeout 1
  This is setTimeout 2
  This is inner next tick inside set timeout
  This is setTimeout 3
*/

// Here if we notice, after each macrotask queue callback execution, the microtask queue will be checked
