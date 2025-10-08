const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

/**
 * 1. Only whitelisted domains will be able to access this resource
 * 2. Internally cors package will set access control headers on response object like
 * Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Expose-Headers ...
 */
const allowedOrigins = ['http://127.0.0.1:5500'];

const corsConfigs = {
    origin: allowedOrigins,
    methods: "GET",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization"
}

app.use(cors(corsConfigs));

app.get('/data', (req, res) => {
    res.send({
        name: "Nikhil",
        age: 25,
        pinCode: "411057"
    })
})

app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
})