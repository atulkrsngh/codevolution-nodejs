setTimeout(() => {
  console.log("This is setTimeout 1");
}, 0)

setImmediate(() => {
  console.log("This is setImmediate 1");
})

/*
  order of execution will not be always same, anything could be printed first
*/
