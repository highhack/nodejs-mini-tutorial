//File system
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Directory created successfully!");
// });

const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "Hello NodeJS", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File created successfully!");
// });

// fs.appendFile(filePath, "\n Hello again", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File appended successfully!");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  console.log("File read successfully!");
});
