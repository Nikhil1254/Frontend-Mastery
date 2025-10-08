const express = require('express');
const app = express();
const path = require("path");
const PORT = 3001;

const personData = {
  name: "Ramesh",
  age: 26
}

// allow all origins for CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');  // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.get("/short-polling", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/ShortPolling.html"));
})

app.get("/long-polling", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/LongPolling.html"));
});

app.get("/api/longPolling/:name", (req, res) => {
  let responseSent = false;
  const name = req.params.name;
  const timeout = setTimeout(() => {
    responseSent = true;
    clearInterval(id);
    res.sendStatus(204);
  }, 10000)

  const id = setInterval(() => {
    if (name !== personData.name && !responseSent) {
      clearInterval(id);
      clearTimeout(timeout);
      responseSent = true;
      res.send(personData);
    }
  }, 2000)
})

app.get("/api/shortPolling", (req, res) => {
  res.send(personData);
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});