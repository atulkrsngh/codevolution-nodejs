const fs = require("node:fs");

const fileContents = fs.readFileSync("./myFile.txt", "utf-8"); // reading file synchronously, control will wait here till reading is not done
console.log(fileContents); 

fs.readFile("./myFile.txt", (error, data) => { // reading file asynchronously and using callbacks instead of promises and async await
  if(error){
    console.log(error);
  } else {
    console.log(data);
  }
})

fs.writeFileSync("./greet.txt", "Hello World"); // a new file greet.txt will be created synchronously with content Hello World in it

fs.writeFile("./greet.txt", "Hello World", {flag: "a"}, (error) => { // 3rd parameter is optional without which writeFile overwrite (default). Here it appends asynchronosuly
  if(error) {
    console.log(error)
  } else {
    console.log("file written");
  }
})
