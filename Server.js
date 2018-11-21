let express = require('express');
let mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/UserCommentDB');

let app = express();
let User = require('./src/UserSchema');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));   
app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

  app.get('/comment', function(req, res){
   User.find ({}, function(err, data){
       if(err){
           res.status(500).send(err)
       }
       else{
           
           res.send(data);
       }
   })
})

app.post("/comment",function(req,res){
    console.log(req.body)
    User.create(req.body , function (err, data) {
        if (err) {
            res.status(500).send(err)
        }
        else{
        console.log(data);
        res.send(data)
        }
    });
})

app.listen(5555);  