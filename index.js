const fs = require("node:fs/promises");

console.log("First");
// read file with promises
const fileContentsPromise = fs.readFile("./myFile.txt", "UTF-8");
fileContentsPromise
  .then((fileContents) => {
    console.log(fileContents);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Third");
  });

console.log("Second");
// write to file with promises
const writeFilePromise = fs.writeFile("./greet.txt", "Hello, world");
writeFilePromise
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("no errors");
  });

// read file with async-await
(async () => {
  try {
    const fileContents = await fs.readFile("./myFile.txt", "UTF-8");
    console.log(fileContents);
  } catch (err) {
    console.log(err);
  }
})();

// write to file with async-await
(async () => {
  try {
    await fs.writeFile("./greet.txt", "Hello, world");
    console.log("no errors");
  } catch (err) {
    console.log(err);
  }
})();

// write to file, append mode, with promises
const writeFilePromiseAppendMode = fs.writeFile("./greet.txt", "Hello, world", {
  flag: "a",
});
writeFilePromiseAppendMode
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("no errors");
  });

// write to file, append mode, with async-await
(async () => {
  try {
    await fs.writeFile("./greet.txt", "Hello, world", { flag: "a" });
    console.log("no errors");
  } catch (err) {
    console.log(err);
  }
})();
