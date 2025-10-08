const app = require("express")();
const path = require("path");
const PORT = process.env.PORT || 3001

let data = "Initial data"

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

app.get("/getData", (req, res) => {
    res.send({ data });
})

// use POST and PUT, for browser purpose using get
app.get("/updateData", (req, res) => {
    data = 'Updated Data';
    res.send({ data });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});