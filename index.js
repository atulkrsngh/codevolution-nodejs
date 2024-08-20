const crypto = require("node:crypto"); // uses libuv to perform async operation

const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); //password-based key derived function 2: to hash password. It's a CPU-intensive operation and is offloaded to libuv
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // Here, with each call, the console will keep on taking more time. Ex - with one call, console will print t time, for 2 calls, it will print almost 2t times
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);

const MAX_CALLS = 2;
const start1 = Date.now();
for(let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512", () => { // async version
    console.log(`Hash ${i+1)`, Date.now()-start1); // Here both the calls will take almost similar time and will not increase linearly unlike above. Each call runs in a separate thread from libuv threadpool. In their thread, they run synchronously but for main, it will async
  })
}
