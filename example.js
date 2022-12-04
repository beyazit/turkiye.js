console.log("Hello", "turkiyejs!");
console.error("Boom!");

const path = "./log.txt";
try {
  const contents = await turkiyejs.readFile(path);
  console.log("Read from a file", contents);
} catch (err) {
  console.error("Unable to read file", path, err);
}

await turkiyejs.writeFile(path, "I can write to a file.");
const contents = await turkiyejs.readFile(path);
console.log("Read from a file", path, "contents:", contents);
console.log("Removing file", path);
turkiyejs.removeFile(path);
console.log("File removed");
