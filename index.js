const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer( (req, res) => {
  //req.method : GET, POST, PUT, DELETE
  if (req.url === "/") { // sending html content
    res.writeHead(200, { "Content-Type": "text/html" }); // without content type text/html, full string will be sent in response
    return res.end(
      "<html><head><title>Home</title></head><body>Home page</body></html>"
    );

  } else if (req.url === "/about") { // sending html from a separate file
    res.writeHead(200, { "Content-Type": "text/html" });
    //const html = fs.readFileSync("./about.html", "utf-8"); // avoid reading complete file synchronously
    //return res.end(html);
    fs.createReadStream("./about.html").pipe(res); // better way than above 2 lines to read html or any file
  
  } else if (req.url === "/dynamic") { // sending dynamic html from a separate file
    const name = "Atul";
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("./index.html", "utf-8"); // avoid reading complete file synchronously
    html.replace("{{name}}", name); // replacing name with Atul
    return res.end(html);
  
  } else if (req.url === "/api") { // sending json
    res.writeHead(200, { "Content-Type": "application/json" });
    const superHero = {
      firstName: "Bruce",
      lastName: "Wayne",
    };
    return res.end(JSON.stringify(superHero)); // we can't send javascript object as is in response
  
  } else { // sending simple plain string
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end(
      "Page Not found"
    );
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
// Browse http://localhost:3000 (or http://127.0.0.0:3000)
