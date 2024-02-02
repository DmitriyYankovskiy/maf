require("../config.js");

require("./http-server.js");
console.log("http server was started on port");



let stdIn = process.openStdin();
stdIn.addListener("data", (cin) => {
    process.exit();
});