require("../config.js");

require("./http-server.js");

let stdIn = process.openStdin();
stdIn.addListener("data", (cin) => {
    process.exit();
});