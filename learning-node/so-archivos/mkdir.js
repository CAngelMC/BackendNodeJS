const fs = require("fs");

//Esto permite crear varias carpetas de un jalon
fs.mkdir("platzi/escuela-js/node", { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
});
