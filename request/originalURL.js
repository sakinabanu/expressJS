import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    console.log(req.originalUrl); // stores input from users 
    // res.send(req.host) 
});
app.get("/", (req, res) => {
    console.log(req.originalUrl); // stores input from users 
    // res.send(req.host) 
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
