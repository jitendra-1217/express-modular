
module.exports = {

    'getIndex': function(req, res, next) {

        // res.json(['getIndex called.']);
        /* Returns view with socketio script to subscribe to publicly available namespace & channel for test events */

        var Post = require('../models/post');

        // Creating new post
        var newPost = new Post({
            'name': 'sami',
            'post': 'This is a sample post.'
        });

        newPost.comments.push({name:'self'});

        newPost.save(function(err) {
            if (err) {
                console.log('Error in saving post - ');
                console.log(err);
            }
        });

        Post.find({}, function(err, posts) {
            if (err) throw err;

            console.log(posts);
        });

        //  Finding a post
        Post.findOne({ name: 'sami' }, function(err, post) {

            if (err) throw err;

            if (post === null) return;

            post.comments.push({name: 'self', comment: 'This is one sample comment.. :)'});

            post.save(function(err) {
                if (err) throw err;
            });

            console.log(post);
        });

        res.render('default_index',
            {
                'title': 'getIndex route'
            }
        );
    }
};