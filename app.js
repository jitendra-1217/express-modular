
var express = require('express');

var app = express();

app.get('/', function(req, res) {

    res.send('Hello world again, using nodemon now.. :)!');
});


var events = require('./routes/events');
app.use('/events', events);

var server = app.listen(3014, function(err) {

    console.log('Example app listening..');
});

