const { parentPort } = require("node:worker_threads");

let j = 0;
for (let i = 0; i < 6e9; i++) {
  j++;
} // slow op

parentPort.postMessage(j); // sending value back to main thread
