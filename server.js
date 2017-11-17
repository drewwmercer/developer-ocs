// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const Sequelize = require('sequelize');
const path = require('path');
// const Model = require('./models/');
const request = require('request');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;


// Use body parser with our app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
