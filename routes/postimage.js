var express = require('express');
const multer = require('multer');
const PostImage = require('../models/imagepost');
var router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => {
        console.log('heyyy==>>>>', req.body, 'file==>>>', file);
        return cb(null, file.originalname)
    }
})
const upload = multer({ storage });

router.get('/', function (req, res, next) {
    res.render('postimage', {
        title: 'Post an image'
    });
});

router.post('/', upload.single('image'), async function (req, res, next) {
    try {
        console.log('beforeee')
        const { imageheader, imagedescription } = req.body;
        if (req.session.loggedInUser) {
            const image = await PostImage.create({
                imageName: imageheader,
                description: imagedescription,
                userID: req.session.loggedInUser.id
            });
            console.log('afterr==>>', image)
            res.render('imagepost', { image: image.dataValues, fileName: req.file.originalname })
        } else {
            res.render('error');
        }
    } catch (err) {
        console.log('errrrr==>>>>', err);
    }
});

module.exports = router;