const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const client = require("./client.js");

const PORT = process.env.PORT || 3000;

// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// define endpoints
app.get("/api/customers", (req, res) => {
    client.getAll(null, (err, data) => {
        res.send(data)
    })
})

app.get("/api/customers/:id", (req, res) => {
    const customerId = req.params.id;
    client.get({id: customerId}, (err, data) => {
        res.send(data);
    })
})

app.post("/api/customers", (req, res) => {
    const customer = req.body;
    client.insert(customer, (err, data) => {
        res.send(data);
    })
})

app.put("/api/customers", (req, res) => {
    const customer = req.body;
    client.update(customer, (err, data) => {
        if(err){
            console.log(err.details);
            res.status(404).send(err.details);
        }
        res.send(data);
    })
})

app.delete("/api/customers/:id", (req, res) => {
    const customerId = req.params.id;
    client.remove({id: customerId}, (err, data) => {
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Client server started on PORT:${PORT}`);
})
