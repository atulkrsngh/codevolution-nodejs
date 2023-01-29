const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

// let count = 0;
// readableStream.on("data", (chunk) => {
//   writeableStream.write(`${count} ${chunk}\n`);
//   count += 1;
// });

// simpler, less control but simpler
readableStream.pipe(writeableStream);
