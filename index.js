const http = require("node:http");
const fs = require("node:fs");
// const fsp = require("node:fs/promises");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  // const htmlFileContents = fs.readFileSync("./index.html", "utf-8");
  // res.end(htmlFileContents);

  // // async approach - callback
  // fs.readFile("./index.html", "utf-8", (err, htmlFileContents) => {
  //   if (!err) res.end(htmlFileContents);
  // });

  // // async approach - Promise
  // fsp.readFile("./index.html", "utf-8").then((htmlFileContents) => {
  //   res.end(htmlFileContents);
  // });

  // // using streams
  // const htmlFileReadStream = fs.createReadStream("./index.html", {
  //   encoding: "utf-8",
  //   highWaterMark: 1e3, // for demo. File is 1.4e6 bytes
  // });
  // htmlFileReadStream.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // htmlFileReadStream.on("end", () => {
  //   res.end();
  // });

  // using steams - piping
  fs.createReadStream("./index.html", {
    encoding: "utf-8",
    highWaterMark: 1e3, // for demo. File is 1.4e6 bytes
  }).pipe(res);
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
