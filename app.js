
var express = require('express');

var config = require('./config/test_config')();

//  Includign mongodb library
var mongoose = require('mongoose');
mongoose.connect(config.getMongodbConnUrl('localhost', 'dbworkplz'));

var app = express();

/* App configuration */
app.set('view engine', 'jade');
app.set('views',
    [
        '.application/common/views',
        './application/default/views',
        './application/test/views'
    ]
);
app.use(express.static('./public'));

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3020);

app.get('/', function(req, res) {

    res.send('Hello world again, using nodemon & socket now.. :)!');
});


// var events = require('./routes/events');
var defaultEvents = require('./routes/default_events');
// app.use('/events', events);
app.use('/de', defaultEvents);

/* Using socket.io integration now. */
// var server = app.listen(3014, function(err) {

//     console.log('Example app listening..');
// });

/* Testing socketio basic features */
var nmsp1 = io.of('/nmsp1').on('connection', function(socket) {
    nmsp1.emit('def_ns_testing_ch', 'This is a test message emitted to everyone.');
});
