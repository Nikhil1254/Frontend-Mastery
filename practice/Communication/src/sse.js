const { randomUUID } = require("crypto");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/Sse.html"))
})

app.get("/events", (req, res) => {
    res.set({
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache": "no-cache"
    });
    const connId = randomUUID();
    res.write(`data: ${new Date().toLocaleTimeString()}\n\nid: ${connId}`);

    const id = setInterval(() => {
        res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
    }, 1000);

    req.on("close", () => {
        console.log(`closing the connection !`);
        clearInterval(id);
        res.end();
    })
})


app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})