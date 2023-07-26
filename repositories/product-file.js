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
};

// Retrieve a single product object
repo.getById = function (id, resolve, reject) {
    fs.readFile(DATA_FILE, function (err, data) {
        if (err) {
            // ERROR: invoke reject() callback
            reject(err);
        }
        else {
            // SUCCESS: Convert data to JSON
            let products = JSON.parse(data);
            // Find the row by productID
            let product = products.find(
                row => row.productID == id);
            // Invoke resolve() callback
            // product is 'undefined' if not found
            resolve(product);
        }
    });
};