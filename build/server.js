"use strict";
const express = require("express");
// Import the ProductRoutes module
const ProductRoutes = require("./routes");
// Create an Express application
const app = express();
// Set the port for the server
const port = 3000;
// Middleware to parse incoming JSON requests
app.use(express.json());
// Mount the ProductRoutes at the specified path
app.use("/api", ProductRoutes);
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
