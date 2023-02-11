const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") res.end("Home page");
  else if (req.url === "/slow-page") {
    for (let i = 0; i < 6e9; i++) {} // slow op
    res.end("Slow page");
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
