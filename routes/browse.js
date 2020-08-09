var express = require('express');
var router = express.Router();

router.get('/' , function(req , res, next){
    res.render('browse', {
        title: 'Browse Posts'
    });
});

router.post('/search', function(req,res){
    console.log('Search: ', req.body.search)
})

module.exports = router;