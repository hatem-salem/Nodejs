const fs = require("fs");
const http = require('http');
http.createServer((req, res) => {
  const text = fs.readFileSync("./content/big.txt", "utf-8");
  res.end(text);
}).listen(5000);