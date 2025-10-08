const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use((req, res, next) => {
    res.removeHeader("X-Powered-By"); // hiding server info like tech stack
    res.setHeader("referrer-Policy", "strict-origin-when-cross-origin"); // handling referrer-policy
    res.setHeader("X-Content-Type-Options", "nosniff"); // don't want browser to change content type on the basis of content sent by server
    res.setHeader('X-XSS-Protection', '1; mode=block'); // enable xss protection filter for client

    // can't demonstrate about HSTS as our site only running on HTTP
    next();
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/cookie", (req, res) => {
    /**
     * 1. Browser will automatically set this cookies with provided options.
     */
    res.cookie("sessionId", "random1234", { httpOnly: true, secure: true, maxAge: (15 * 60 * 1000), path: "/cookie" });
    res.sendFile(path.join(__dirname, "/public/cookies.html"));
})


app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
});