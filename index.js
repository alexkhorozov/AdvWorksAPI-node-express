// Load the express module
const express = require("express");
// Create an instance of express
const app = express();
// Specify the port to use for this server
const port = 3000;

// Load product repository module
const repo = require("./repositories/product-file.js");

// GET route
app.get("/", (req, res, next) => {
    // Get products from repository
    let products = repo.get(
        function (data) {
            // SUCCESS: Send response
            res.json({
                "status": 200,
                "statusText": "OK",
                "message": "All products retrieved.",
                "data": data
            });
        }, function (err) {
            // ERROR: Send error response
            next(err);
        }
    );
});

// GET /id Route
app.get('/:id', (req, res, next) => {
    repo.getById(req.params.id, function (data) {
        // SUCCESS: Data received
        if (data) {
            // Send product to caller
            res.send({
                "status": 200,
                "statusText": "OK",
                "message": "Single product retrieved.",
                "data": data
            });
        }
        else {
            // Product not found
            let msg = `The product '${req.params.id}' could not be found.`;
            res.status(404).send({
                "status": 404,
                "statusText": "Not Found",
                "message": msg,
                "error": {
                    "code": "NOT_FOUND",
                    "message": msg
                }
            });
        }
    }, function (err) {
        // ERROR: pass error along to 
        // the 'next' middleware
        next(err);
    });
});

// Create web server to listen to requests on the specified port
let server = app.listen(port, function () {
    console.log("AdvWorksAPI server is running on port " + port);
});