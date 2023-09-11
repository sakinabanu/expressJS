import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    // console.log("hello "); // stores input from users 
    res.end("hello ");
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});