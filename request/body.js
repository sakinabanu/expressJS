import fs from "fs/promises";
import express from "express";
const PORT = 5000;
const app = express();

app.use(express.json()) // used to post or put
app.post("/", (req, res) => {
    console.log(req.body); // stores input from users 
    // res.send(req.body)

});
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});