var express = require('express');
var router = express.Router();

router.get('/' ,function (req, res, next){
    console.log("In GET HTTP Method");
    res.render('registration');
});

router.post('/', function (req, res, next) {
    console.log("Within POST");
    console.log("UserName: ", req.body.username);
    next();
});
module.exports = router;
