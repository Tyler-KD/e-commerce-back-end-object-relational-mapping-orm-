// Import Express.js
const express = require('express');
// Import routes
const routes = require('./routes');
// Import sequelize connection
const sequelize = require('./config/connection')

// Initialize an instance of Express.js
const app = express();

// Specify which port the Express.js server will run.
// process.env.PORT stores the port number on which a web server should listen for incoming connections.
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
// listen() method is responsible for listening for incoming connections on the specified port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});