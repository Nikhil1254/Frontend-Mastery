const app = require("express")();
const { join } = require("path");
const { v4: uuidv4 } = require("uuid");
const PORT = 3000;

app.get("/sse", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream"); //  Using this only browser knows it's and Event stream 
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive"); // single longed live connection

    res.write(`id:${uuidv4()}\n\ndata: Connection Established\n\n`);

    const id = setInterval(() => {
        res.write(`id:${uuidv4()}\n\ndata: Server time is ${new Date().toLocaleString()}\n\n`);
    }, 1000)


    // when some disconnect will happen it will be triggered
    req.on("close", () => {
        // cleanup
        console.log(`Connection closed.`);
        clearInterval(id);
    })
})

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})


app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})