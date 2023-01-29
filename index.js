const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt", { flags: "a" });
// append mode

let count = 0;
readableStream.on("data", (chunk) => {
  writeableStream.write(`${count} ${chunk}\n`);
  count += 1;
});
