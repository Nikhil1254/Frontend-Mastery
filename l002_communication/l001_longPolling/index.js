const app = require("express")();
const path = require("path");
const PORT = process.env.PORT || 3000;

let data = "Initial Data";

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
})


// localhost:3000/getData
app.get("/getData", (req, res) => {
    let isResponseSent = false;

    const timeout = setTimeout(() => {
        res.status(204).send(); // as data hasn't changed so retuning nothing
        isResponseSent = true;
        clearInterval(intervalId); // clear the interval to avoid memory leaks
        console.log("timeout");
    }, 30000);

    const intervalId = setInterval(() => {
        if (req.query.lastData !== data && !isResponseSent) {
            res.send({ data });
            clearInterval(timeout);
            clearInterval(intervalId);
            isResponseSent = true;
        }
    }, 1000)
})

// localhost:3000/updateData?data="new data"
app.get("/updateData", (req, res) => {
    data = req.query.data;
    res.status(204).send();
})


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
})