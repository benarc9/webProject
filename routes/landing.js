var express = require('express');
var router = express.Router();

router.get('/' , function(req , res, next){
    res.render('landing', {
        title: 'Welcome back!'
    });
});

router.post ('/:fileName', function(req, res, next) {
    res.render('imagepost', {fileName: req.params.tagId});
    next();
});

module.exports = router;
