// creating simple express server
import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();
let read;
let strToobj;
async function send() {
    read = await fs.readFile("./db.json", "utf-8");
    strToobj = JSON.parse(read);
} 
send();

app.get("/", (req, res) => {
    res.end("<h1>Hello</h1>");
});
app.get("/h", (req, res) => {
    res.end("<h1>Sakina</h1>");
});
app.get("/j", (req, res) => {
    res.end("<h1>Banu</h1>");
});
app.get("/k", (req, res) => {
    res.end("<h1>how are you</h1>");
});
app.get("/db", (req, res) => {
    setTimeout(() => { 
        res.json(strToobj);
    }, 5000)
    
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});