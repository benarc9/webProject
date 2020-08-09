var express = require('express');
var router = express.Router();

const Database = require('../db');

router.get('/' , function(req , res, next){
    console.log("After Render!");
    var images = Database.seql.models.Image.findAll({attributes: ['imageId']});
    res.render('browse', {
        title: 'Browse Posts',
        images: images
    });
});

router.post('/search', function(req,res){
    console.log('Search: ', req.body.search);
})

module.exports = router;
