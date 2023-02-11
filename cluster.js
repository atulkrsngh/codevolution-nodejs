const cluster = require("node:cluster");
const http = require("node:http");

if (cluster.isMaster) {
  console.log(`Master running with pid ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") res.end("Home page");
    else if (req.url === "/slow-page") {
      for (let i = 0; i < 6e9; i++) {} // slow op
      res.end("Slow page");
    }
  });

  server.listen(8000, () =>
    console.log(
      `Worker running with pid ${process.pid} on port ${server.address().port}`
    )
  );
}

const os = require("node:os");
console.log(os.cpus().length); // check number of CPU cores
