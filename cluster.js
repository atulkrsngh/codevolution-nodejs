const cluster = require("node:cluster");
const http = require("node:http");

if (cluster.isMaster) { // true if file is treated as master
  console.log(`Master running with pid ${process.pid}`);
  cluster.fork(); // creating workers which master only can do. Creating 2 workers here
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
// Here if we load slow-page first followed by home page, home page load will not be blocked because of slow-page. It will get loaded in worker separately. two worker will be used for loading 2 pages

const os = require("node:os");
console.log(os.cpus().length); // check number of CPU cores
