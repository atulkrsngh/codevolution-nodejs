const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/") res.end(JSON.stringify("Home page"));
  else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j) => {
      res.end(JSON.stringify(`Slow page ${j}`));
    });
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
