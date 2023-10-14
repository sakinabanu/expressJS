import fs from "fs";
import http from "http";
const PORT = 80;
let httpServer = http.createServer((req,res) => {
    res.end("<h1>Hello Banu</h1>");
});

httpServer.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});