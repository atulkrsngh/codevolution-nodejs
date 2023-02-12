const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.url === "/") res.end(JSON.stringify("Home page"))
  else if (req.url === "/slow-page") {
    for (let i = 0; i < 6e9; i++) {} // slow op
    res.end(JSON.stringify(`Slow page`));
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
