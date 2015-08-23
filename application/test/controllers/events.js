
module.exports = {

    'getEvents': function(req, res, next) {

        res.json(['getEvents called.']);
    },

    'getEvent': function(req, res, next) {

        var id = req.params.id;
        res.json(['getEvent called with id: ' + id]);
    }
};