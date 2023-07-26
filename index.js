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

// Create web server to listen to requests on the specified port
let server = app.listen(port, function () {
    console.log("AdvWorksAPI server is running on port " + port);
});