import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("file name", path.basename(__filename));
console.log("directory name", path.dirname(__filename));
console.log("file type", path.extname(__filename));
console.log("parse", path.parse(__filename));
console.log("parse", path.join(__dirname, "server", "index.html"));
