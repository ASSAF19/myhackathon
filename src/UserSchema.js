mongoose = require('mongoose');

    var UserSchema = new mongoose.Schema({
        username: {type: String},
        text:{ type: String},
    });

    var User = mongoose.model('user', UserSchema);
 
 module.exports= User;