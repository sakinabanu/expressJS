import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

// app.get("/", (req, res) => {
//     res.redirect("hi");
// });
app.get("/", (req, res) => {
    // console.log("hello "); // stores input from users 
    res.redirect('http://google.com');
});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});