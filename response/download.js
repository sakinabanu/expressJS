import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    res.download("end.js");    
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});