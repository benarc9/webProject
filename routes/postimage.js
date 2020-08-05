var express = require('express');
var router = express.Router();

router.get('/' , function(req , res, next){
    res.render('postimage', {
        title: 'Post an image'
    });
});

module.exports = router;