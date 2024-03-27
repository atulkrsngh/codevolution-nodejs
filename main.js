const fs = require("node:fs");

const fileContents = fs.readFileSync("./myFile.txt", "utf-8"); // reading file synchronously, control will wait here till reading is not done
console.log(fileContents); 
