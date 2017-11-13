// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Article = require('./models/article');
const request = require('request');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Use body parser with our app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'client/build')));
// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Database configuration with mongoose
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://heroku_w3v57k0l:nja21grj4djleb825m2qub8lk1@ds249415.mlab.com:49415/heroku_w3v57k0l',
  {
    useMongoClient: true
  }
);

const db = mongoose.connection;

// Show any mongoose errors
db.on('error', error => {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', () => {
  console.log('Mongoose connection successful.');
});


// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
