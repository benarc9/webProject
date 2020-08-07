var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Database = require('../db');
const { request, urlencoded } = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

router.get('/' , function(req , res, next){
    res.render('registration');
});

router.post('/register', function(req, res, next){
    var newuser = Database.seql.models.User.build({
        username: req.body.newusername,
        password: req.body.confirmpassword
    });
    
    console.log("User: " , req.body.newusername);
    console.log("Pass: " , req.body.confirmpassword);
    res.render('landing');
});

router.get('/landing', function(req, res){
    res.render('landing');
});

module.exports = router;