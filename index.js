const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const greetingName = "Sanjar"; // or get from DB, or external API

  // using readFileSync just to keep things simple
  let htmlFileContents = fs.readFileSync("./index.html", "utf-8");
  htmlFileContents = htmlFileContents.replace("{{name}}", greetingName);

  res.end(htmlFileContents);
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
