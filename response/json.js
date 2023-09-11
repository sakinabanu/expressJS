import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    // console.log("hello "); // stores input from users 
    res.json({ user: 'sakina', dob: '04/07/2001' })
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});