
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//  Embedded document -
var commentSchema = new Schema({
    name: String,
    comment: String,
    created_at: Date,
    updated_at: Date
});

var postSchema = new Schema({
    name: String,
    post: String,
    comments: [commentSchema],  // Embedded document - not using referential approach
    created_at: Date,
    updated_at: Date
});


//  Pre save handlers
postSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)   this.created_at = currentDate;

    next();
});

commentSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)   this.created_at = currentDate;

    next();
});


var Post = mongoose.model('Post', postSchema);

module.exports = Post;
