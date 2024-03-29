const express = require("express");
var logger=require('./logger');

// Import the ProductRoutes module
const ProductRoutes = require("./routes");

// Create an Express application
const app = express();

// Set the port for the server
const port = 3001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the ProductRoutes at the specified path
app.use("/api", ProductRoutes);

 app.get("/", (req:any, res:any) => {
//     res.send("Hello, World!");
       req.log.info(req,'Request to server');
       res.send({hello:"world"});
 });

// Start the server and listen on the specified port
app.listen(port, () => {
    logger.info(`App listening on port ${port}`);
});
