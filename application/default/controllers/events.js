
module.exports = {

    'getIndex': function(req, res, next) {

        // res.json(['getIndex called.']);
        /* Returns view with socketio script to subscribe to publicly available namespace & channel for test events */
        res.render('default_index',
            {
                'title': 'getIndex route'
            }
        );
    }
};