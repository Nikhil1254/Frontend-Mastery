const express = require("express");
const app = express();
const path = require("path");
const PORT = 3002;


app.use(express.static("./public"));
app.use((req, res, next) => {
    if(req.path === "/iframe2"){
        res.setHeader("Content-Security-Policy","frame-ancestors 'self' http://localhost:3001;");
    }
    next();
})

app.get("/iframe1", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/iframe-website1.html"));
})

app.get("/iframe2", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/iframe-website2.html"));
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})