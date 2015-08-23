
var socket = io('http://localhost:3020');
var logger = Logger();

socket.on('connect', function() {

    // console.log('Socket created');
    logger.log('Socket created.');
});

socket.on('def_ns_testing_ch', function(data) {

    logger.log(data);
});