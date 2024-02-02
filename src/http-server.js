const PORT = 9999;
const HOST = globalThis.host;

const http = require("http");
const express = require("express");

const app = express();

app.use(express.static("/public"));

app.use("/", require("../http-controllers/index.js"));

let server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`http server was started on port: ${PORT}`);
});