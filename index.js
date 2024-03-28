const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") { // sending html content
    res.writeHead(200, { "Content-Type": "text/html" }); // without content type, full string will be sent in response
    return res.end(
      "<html><head><title>Home</title></head><body>Home page</body></html>"
    );
  } else if (req.url === "/about") { // sending html from a separate file
    res.writeHead(200, { "Content-Type": "text/html" });
    //const html = fs.readFileSync("./about.html", "utf-8"); // avoid reading complete file synchronously
    //return res.end(html);
    fs.createReadStream("./about.html").pipe(res); // better way than above 2 lines to read html or any file
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const superHero = {
      firstName: "Bruce",
      lastName: "Wayne",
    };
    return res.end(JSON.stringify(superHero)); // we can't send javascript object as is in response
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end(
      "<html><head><title>404</title></head><body>Page not found</body></html>"
    );
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
