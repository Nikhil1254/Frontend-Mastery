const app = require("express")();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIo(server);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

// when user is connected to server this event will be triggered
io.on("connection", (socket) => {
    console.log(`User Connected !`);

    // custom event
    socket.on("message", (msg) => {
        io.emit("message", msg); // broadcast msg to all connections
    })

    // handle disconnect 
    socket.on("disconnect", () => {
        console.log(`User Disconnected !`);
    })
})



server.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
})