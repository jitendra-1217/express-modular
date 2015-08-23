
var express = require('express');
var router = express.Router();

var eventsController = require('../application/test/controllers/events.js');

router.get('/', eventsController.getEvents);

module.exports = router;
