const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream("./big");
  src.pipe(res);
});

server.listen(3000);
console.log("Server in 3000");
