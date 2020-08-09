var express = require('express');
var router = express.Router();
var Database = require('../db');

router.get('/' , function(req , res, next){
    res.render('registration');
});

router.post('/register', function(req, res, next){
    const newuser = Database.seql.models.User.create({
        username: req.body.newusername,
        password: req.body.confirmpassword
    });
    req.session.loggedInUser = newuser.dataValues;
    console.log("User: " , req.body.newusername);
    console.log("Pass: " , req.body.confirmpassword);
    res.render('landing');
});

router.get('/landing', function(req, res){
    res.render('landing');
});

module.exports = router;