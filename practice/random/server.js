const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send(path.resolve(__dirname, "public", "index.html"));
});

app.get("/data", (req, res) => {
    const id = setInterval(() => {
        res.write(JSON.stringify(new Date().toLocaleTimeString()));
    }, 1000);


    setTimeout(() => {
        clearInterval(id);
        res.end();
    }, 12000)
})


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})