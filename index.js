const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8" });

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  writeableStream.write(chunk);
});
