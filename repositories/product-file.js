// Load the node file system module
const fs = require("fs");

// Path to the products.json file
const DATA_FILE = "./db/products.json";

// Product repository object
let repo = exports = module.exports = {};

// Retrieve an array of product objects
repo.get = function (resolve, reject) {
    // Read the JSON file
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            // ERROR: invoke reject() callback
            reject(err);
        } else {
            // SUCCESS: Convert data to JSON
            let products = JSON.parse(data);
            // Invoke resolve() callback passing products
            resolve(products);
        }
    });
}