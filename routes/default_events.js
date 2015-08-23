
var express = require('express');
var router = express.Router();

var eventsController = require('../application/default/controllers/events.js');

router.get('/', eventsController.getIndex);

module.exports = router;
