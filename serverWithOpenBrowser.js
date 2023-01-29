const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200); // status code
  res.end("Hello world");
});

const { exec } = require("child_process");

function startBrowser(argument = "", command = "xdg-open") {
  exec(`${command} ${argument}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

server.listen(0, () => {
  console.log(`Server started on PORT ${server.address().port}`);
  const port = server.address().port;
  startBrowser(`http://127.0.0.0:${port}`);
});
