const express = require("express");
const PORT = 3000;
const path = require("path");
const app = express();

/**
 * Security headers -
 * 1. X-Xss-Protection : deprecated us CSP headres instead
 * 2. X-Content-Type-Options : 'nosniff'
 * 3. X-Powered-By: remove it as it provides extra info to attackers
 */


app.disable("x-powered-by");

app.use((req, res, next) => {
    res.set({
        'x-content-type-options': "nosniff",
        'content-security-policy': "default-src 'self'; script-src 'self';",
        'referrer-policy': 'no-referrer',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    });
    next();
})

app.get("/", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "./public/Security.html"));
})

app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
})