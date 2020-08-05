var express = require('express');
var router = express.Router();

router.get('/' , function(req , res, next){
    res.render('login', {
        title: 'Log in here'
    });
});

router.post('register', (req, res) => {
    console.log(req.body);
});

module.exports = router;