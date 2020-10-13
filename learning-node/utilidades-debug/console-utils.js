// %s string
// %d number
// %j json

// console.log("un %s y un %s", "perrito", "gatito");

// console.info("Hello world");
// console.warn("Warning!");

// console.assert(42 === "42");

// console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");
