import chalk from "chalk";
import * as dataModule from "./data.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import http from "http";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const text = dataModule.default || dataModule;

console.log(chalk.blue(text));
console.log(__dirname);
console.log(__filename);
console.log("http", http);

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end("Error loading index.html");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end("Error loading contact.html");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
// });

const server = http.createServer((req, res) => {
  console.log("yyy", req.url);
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let ext = path.extname(filePath);
  let contentType = "text/html";
  if (!ext) {
    filePath += ".html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".javascript":
      contentType = "text/javascript";
      break;
    case "iso":
      contentType = "text/html";
      break;
    default:
      contentType = "text/html";
  }

  // const obj = {
  //   ".css": "text/css",
  //   ".javascript": "text/javascript",
  //   ".html": "text/html",
  //   ".ico": "text/html",
  // };

  // console.log("filePath", filePath);

  // contentType = obj[ext];

  // console.log("contentType", contentType);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": contentType });
          res.end("Error loading error.html");
        } else {
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
