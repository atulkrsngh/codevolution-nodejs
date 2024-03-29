const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") res.end("Home page");
  else if (req.url === "/slow-page") {
    for (let i = 0; i < 6e9; i++) {} // simulating slow operation
    res.end("Slow page");
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));

// Here, if we load slow-page first and then Home Page, Home page will also takes time to get loaded because the main thread is blocked in loading slow-page and it won't load Home-page meanwhile
