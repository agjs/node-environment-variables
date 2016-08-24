var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    surname: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;