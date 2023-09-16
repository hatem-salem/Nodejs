const fs = require("fs");
const http = require('http');
http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", (fd) => {
      console.log(`FileDescriptor:${fd}`);
      fileStream.pipe(res);
    });
  } else
    res.end();

}).listen(5000);