var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Database = require('../db');

router.get('/' , function(req , res, next){
    res.render('registration');
});

router.post('/register', function(req, res, next){
    var newuser = Database.seql.models.User.build({
        username: req.body.newusername,
        password: req.body.password
    });
});

module.exports = router;