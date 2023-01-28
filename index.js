const fs = require("node:fs");

// t1 - read a file
const fileContents = fs.readFileSync("./myFile.txt", "utf-8"); // utf-8 is the default, no need to pass it
// this (blocking - "sync") is fine if all subsequent ops are dependent on this
console.log(fileContents);

// t2 - read a file, asynchronously
console.log("First");
fs.readFile("./myFile.txt", "utf-8", (error, data) => {
  // "utf-8" is important here, otherwise it'll return the buffer as is
  // this (error = null, data) is called the error first callback pattern
  if (error) {
    console.log(err);
    return;
  }

  console.log("Third - inside")
  console.log(data);
});
console.log("Second")
// Result - First, Third - inside, Second

// t3 - writing to a file
fs.writeFileSync("./greet.txt", "Hello, world");

// t4 - writing to a file, asynchronously
fs.writeFile("./greet.txt", "Hello, world async", (err, data) => {
  console.log("File written");
});

// t5 - write in append mode
fs.writeFileSync("./greet.txt", "Hello, world append", { flag: "a" });
// or asynchronously
fs.writeFile(
  "./greet.txt",
  "Hello, world async append",
  { flag: "a" },
  (err, data) => {
    console.log("File written");
  }
);
