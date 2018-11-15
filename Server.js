let express = require('express');
let app = express();
let User = require('./src/UserSchema');
var bodyParser = require('body-parser')
app.listen(5555);
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })


app.post("/comment",function(req,res){
    User.create(req.body, function (err, data) {
        if (err) {
            res.status(500).send(err)
        }
        else{
        console.log(data);
        res.send(data)
        }
    });
})