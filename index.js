const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", { // read stream to read data in chunks from file.txt
  encoding: "utf-8",
  highWaterMark: 2, // data in chunks of 2 bytes, it's an optional
});

const writeableStream = fs.createWriteStream("./file2.txt", { flags: "a" }); // write stream to write data in chunks to file2.txt
// append mode

let count = 0;
readableStream.on("data", (chunk) => { // adding data event to the readstream
  writeableStream.write(`${count} ${chunk}\n`);
  count += 1;
});

// We can also use pipe to link the readable and writable stream
// Use pipe to link the readable stream to the writable stream
// readableStream.pipe(writableStream);
