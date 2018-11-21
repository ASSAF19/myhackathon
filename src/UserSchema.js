var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        username: {type: String},
        text:{ type: String},
        img:{type: String}
    });

    var User = mongoose.model('user', UserSchema);
 
 module.exports= User;