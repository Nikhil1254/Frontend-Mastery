const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.redirect(307, '/redirect');
})

app.get("/redirect", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})