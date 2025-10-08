// we will try to get data in js file fro graphql server
import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 4001

// middleware
app.use(bodyParser.json());


app.get("/books", (req, res) => {
    fetch("http://localhost:4000/", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },
        "referrer": "http://localhost:4000/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"query\":\"query ExampleQuery {\\n  books{\\n    id\\n    name\\n  }\\n}\\n\",\"variables\":{},\"operationName\":\"ExampleQuery\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      })
    .then(res=>res.json())
    .then(data => res.status(200).json(data))
})

app.listen(PORT, () => {
    console.log(`Express server started on PORT:${PORT}`);
})