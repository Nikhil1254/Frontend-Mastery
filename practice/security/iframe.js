const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");


app.get("/iframe1", (req, res) => {
    res.set({
        'Content-Security-Policy': "frame-ancestors 'self'"
    })
    res.sendFile(path.resolve(__dirname, "./public/iframe-1.html"));
})

app.get('/iframe2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/iframe-2.html'));
})


app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})