const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
    const PORT = 3000;

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://th.bing.com"],
        scriptSrc: ["'self'", "'nonce-forcedile'"],
        frameSrc: ["'self'"], // which sites we can inject in our using iframes
        frameAncestors: ["'self'"], // which sites can inject us using iframe in their site
        reportUri: "http://localhost:3000/csp-report",
    }
}));

// we are getting custom header in case of csp-report, we need to handle it to parse json body properly
app.use((req, res, next) => {
    if (req.headers['content-type'] && req.headers['content-type'].startsWith('application/csp-report')) {
        let body = '';
        req.on('data', chunk => {
            body += chunk; // Collect the data chunks
        });
        req.on('end', () => {
            try {
                // Parse the body as JSON
                req.body = JSON.parse(body);
                next(); // Proceed to the next middleware
            } catch (err) {
                res.status(400).send('Invalid CSP violation report body');
            }
        });
    } else {
        next(); // Pass control to the next middleware if the content-type doesn't match
    }
});

app.use(express.json());

app.post("/csp-report", (req, res) => {
    // console.log(`request headers `, req.headers); -- getting custom header, because of which
    console.log(`CSP Violation :`, req.body);
    res.sendStatus(204);
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"),{nonce: res.locals.nonce})
})


app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})