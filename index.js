const fs = require("node:fs");
const zlib = require("node:zlib"); // compress data using gzib

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz")); // chaining - readable to transform to writable
