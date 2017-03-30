var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TweetSchema   = new Schema({
    username: String,
    text: String,
    link: String
});

module.exports = mongoose.model('Tweet', TweetSchema);
