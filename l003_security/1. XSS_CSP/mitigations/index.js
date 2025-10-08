const app = require("express")();
const path = require("path");
const PORT = 3001;

// we should not use `unsafe-inline` in this example to show inline scripts I have enabled it
// If we don't specify it browser will not execute inline scripts
// we have created a middleware, so for any request first this CSP headers will be set
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-random123';img-src 'self' https://media.licdn.com/");
    next();
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`)
})