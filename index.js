const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(
      "<html><head><title>Home</title></head><body>Home page</body></html>"
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(
      "<html><head><title>Home</title></head><body>About page</body></html>"
    );
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const superHero = {
      firstName: "Bruce",
      lastName: "Wayne",
    };
    return res.end(JSON.stringify(superHero)); // we can't send javascript object as is in response
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // without content type, full string will be sent in response
    return res.end(
      "<html><head><title>404</title></head><body>Page not found</body></html>"
    );
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
