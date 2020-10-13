const fs = require("fs");

fs.copyFile("naranja.txt", "naranjav2.txt", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("txt ha sido copiado");
});
