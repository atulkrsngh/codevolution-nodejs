const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200); // status code
  res.end("Hello world");
});

server.listen(0, () => {
  // 0 means random port
  console.log(`Server started on PORT ${server.address().port}`);
});
