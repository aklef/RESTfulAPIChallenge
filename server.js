var express = require('express'),
   mongoose = require('mongoose'),
   bodyParser = require('body-parser');

var Messages = require('./api/models/messagesModel'), // loading model
   routes = require('./api/routes/messagesRoutes'); // loading routes

var config = {
   db: "RESTfulPalindromeAPIChallenge",
   uri: 'mongodb://localhost/Msgdb',
   settings:
   {
      useMongoClient: true
   }
};

// Open DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, config.settings, (err) =>
{
   if (err)
   {
      console.log('Could NOT connect to database: ', err);
   }
   else
   {
      console.log('Connected to database: ' + config.db);
   }
});

// express.js config
var app = express(),
   port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded(
{
   extended: true
}));
app.use(bodyParser.json());

// Register URI Routes
routes(app);

// Start Listening
app.listen(port);
console.log('Message board RESTful API server started on: ' + port);

// Load fallback
app.use(function fallback(req, res)
{
   res.status(404).send(
   {
      url: req.originalUrl + ' not found'
   })
});
