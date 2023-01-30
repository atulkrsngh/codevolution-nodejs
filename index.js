const http = require("node:http");
// const fs = require("node:fs");
const fsp = require("node:fs/promises");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  // const htmlFileContents = fs.readFileSync("./index.html", "utf-8");
  // res.end(htmlFileContents);

  // // async approach - callback
  // fs.readFile("./index.html", "utf-8", (err, htmlFileContents) => {
  //   if (!err) res.end(htmlFileContents);
  // });

  // // async approach - Promise
  fsp.readFile("./index.html", "utf-8").then((htmlFileContents) => {
    res.end(htmlFileContents);
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
