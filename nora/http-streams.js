let http = require("http");
let fs = require("fs");
const { Stream } = require("stream");

http
  .createServer(function (req, res) {
    //const text = fs.readFileSync("./content/big.txt", "utf8");
    //res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () =>
      //what did ypu do here to stop it from loading favicon
      {
        fileStream.pipe(res);
      }
    );
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5001);
