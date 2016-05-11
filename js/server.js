// Cool as hell,
// remember  start mongod in terminal
// and run node server (this file name)
// This does make sense and it works

// Ok so currently adding a user everytime you node server, not what I want,

// I want to be able to wrap these in functions like init etc.
// And for them to be called by any section of the application.
// also would like to just start the node server in terminal,

var express = require('express');
var mongoose = require('mongoose');
var app = express();

  // Connect to db
  mongoose.connect('mongodb://localhost/namesdb');

  // Define a schema  - (plan)
  var User = mongoose.model('User', { 
    username: String,
    first_name: String,
    last_name: String,
    gender: String
  });

  app.listen(3000);
  console.log("Connected to namesDB...");


  var user = new User({
    username: 'chris1',
    first_name: 'chris',
    last_name: 'pee',
    gender: 'female'
  });

  user.save(function (err) {
    if (err) {
      console.log('there was an error');
    }
    else {
      console.log("Created new user");
    }
  });

// when you have localhost:3000/Cat
// respond with everything in the Cat collection
app.get('/User', function(req, res) {
  mongoose.model('User').find(function(err, User) {
    res.send(User);
    console.log("HIT  THE USER PAGE");
  });
});

app.get('/User2', function(req, res) {
  User.find({ 'username': 'chris1' }, function (err, docs) {
    console.log(docs);
      res.send(docs);
  });  
});

app.get('/', function (req, res) {
  res.send('Hellhuiohuohniouo World');
});