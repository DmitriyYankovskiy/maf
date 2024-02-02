const PORT = 9999;
const HOST = globalThis.host;

const http = require("http");
const express = require("express");

let APP = express();

app.set("view engine", "hbs");

app.use(express.static("/public"));

app.use("", require("../http-controllers/index.js"));

let server = HTTP.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`http server was started on port: ${PORT}`);
});