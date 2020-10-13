const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("Hello pluto");
}, "Pluto is deprecated. It is not a planet anymore");

helloPluto();
