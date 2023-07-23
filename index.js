// Load the express module
const express = require("express");
// Create an instance of express
const app = express();
// Specify the port to use for this server
const port = 3000;

// GET route
app.get("/", (req, res, next) => {
    let products = [{
        "productID": 879,
        "name": "All purpose bike stand"
    }, {
        "productID": 712,
        "name": "AWC logo cap"
    }, {
        "productID": 877,
        "name": "Bike wash - Dissolver"
    },{
        "productID": 843,
        "name": "Cable lock"
    },{
        "productID": 952,
        "name": "Chain"
    }];
    res.json({
        "status": 200,
        "statusText": "OK",
        "message": "All products retrieved.",
        "data": products
    });
});

// Create web server to listen to requests on the specified port
let server = app.listen(port, function () {
    console.log("AdvWorksAPI server is running on port " + port);
});