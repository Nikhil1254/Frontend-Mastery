const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

app.use(express.static("./public"));

app.get("/example1", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/example1.html"));
})

app.get("/example2", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/example2.html"));
})

app.get("/example3", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/example3.html"));
})

app.get("/example4", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/example4.html"));
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})