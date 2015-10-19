// Base setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

// Configure express to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting server port
var port = 3000;

// DB setup
var sequelize = new Sequelize('kwizybo_api', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  define: {
    timestamps: false
  }
});

// Check database connection
sequelize.authenticate().then(function(err) {
  if(err)
    console.log('Unable to connect to database: ', err);
  console.log('Connected to database.');
});

// Getting all models
var models = require('./models');

// Getting a model is that simple
var Themes = models.Themes;
var Quizz = models.Quizz;

// Basic routing
var router = express.Router();

// routes
app.use(require('./routes'))

// Starting server
app.listen(port);
console.info('Let the magic happen.');
