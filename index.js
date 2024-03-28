const https = require("node:https"); // secure version of https module

const MAX_CALLS = 6; // larger than default thread pool size
const start = Date.now();
for(let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`requests $(i+1)`, Date.now() - start); // Here, the console will print same time t at every call, even if we exceed the CPU cores
      })
    })
    .end();
}
