const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url == "/birth") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString().split("-");
        const year = body[0];
        const month = body[1] - 1;
        const day = body[2];

        const birthday = new Date(year, month, day);
        res.end(birthday.toString());
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8002);
console.log("Servidor en la url http://localhost:8002");
