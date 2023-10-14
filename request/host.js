import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    console.log(req.host); // stores input from users 
    // res.send(req.host) 
});

app.get("/", (req, res) => {
    // console.log(req.hostname); // stores input from users 
    // console.log(req.ip);
    // console.log(req.method);// res.send(req.hostname) 
    // console.log(req.url);
    // console.log(req.headers);
    console.log(req.params);
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});