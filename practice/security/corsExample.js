const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
const path = require("path");
const helmet = require("helmet");

app.use(cors({
    origin: "http://127.0.0.1:5500",
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // server can accept credentials
    methods: ["GET"],
}));

// Permissions-Policy
app.use((req,res,next)=>{
    res.setHeader("Permissions-Policy","camera=()");
    next();
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/cors.html"));
})

app.get("/api/person", (req, res) => {
    res.send({ name: "Nikhil", age: 24 });
})

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})