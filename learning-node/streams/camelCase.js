const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    let data = chunk.toString();
    data.split(" ").map((word) => {
      word.charAt(0).toUpperCase();
      this.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    // this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);
