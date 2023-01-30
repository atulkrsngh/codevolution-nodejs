const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); // status code
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

// Browse http://localhost:3000 (or http://127.0.0.0:3000)
