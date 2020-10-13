const os = require("os");

// console.log("os.cpus() :>> ", os.cpus());
// console.log(
//   "os.networkInterfaces().en0 :>> ",
//   os.networkInterfaces()["Wi-Fi"].map((i) => i.address)
// );
// console.log("os.freemem() :>> ", os.freemem());
// console.log("os.type() :>> ", os.type());
console.log("os.release() :>> ", os.release());
console.log("Usr info", os.userInfo());
