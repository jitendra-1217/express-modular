
var express = require('express');
var router = express.Router();

var eventsController = require('../application/test/controllers/events.js');

router.get('/', eventsController.getEvents);
router.get('/:id', eventsController.getEvent);

module.exports = router;
