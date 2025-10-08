const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
   // Cookie 1: simple session cookie
  res.cookie('sessionId', 'abc123');

  // Cookie 2: secure, HTTP only, with expiry
  res.cookie('secureToken', 'secureValue', {
    httpOnly: true, // cookie cant be accessed on client using JS
    secure: true, // cookies will be sent to HTTPS methods only
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });

  // Cookie 3: sameSite strict
  res.cookie('strictCookie', 'strictValue', {
    sameSite: 'Strict',
    path: '/',
    maxAge: 60 * 60 * 1000 // 1 hour
  });

    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`server started on PORT:${PORT}`);
})