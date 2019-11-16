// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your Password
    password: "root",
    database: "bamazon"
})

// Creates the connection with the server and loads the product data upon a success connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    loadProducts();
});

// Function to load the products table from the database and print result
function loadProducts() {
    // Selects all of the data from MySQL products table
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        // Draw the table in the terminal using the response
        console.table(res);

        // Then prompt the customer their choice of product
        promptCustomerForItem(res);
    });
    }

// Prompt the customer for a product ID
function promptCustomerForItem(inventory) {
    // Promts user for what they would like to purchase
    inquirer
        .prompt(
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would like to purchase? [Quit with Q]",
                validate: function(val) {
                    return val > 0 || val.toLowerCase() === "q" 
            }
}).then(function(answer) {
    if (answer.choice==="q") {
        process.exit(0)
    }
    console.log(answer)

});
};