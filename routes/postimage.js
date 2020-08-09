var express = require('express');
const multer = require('multer');
const PostImage = require('../models/imagepost');
var router = express.Router();
var imageModel = require('../models/image');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => {
        console.log('Body: ', req.body, 'File: ', file);
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
        const { imageheader, imagedescription } = req.body;
        if (req.session.loggedInUser) {
            const image = await PostImage.create({
                imageName: imageheader,
                description: imagedescription,
                userID: req.session.loggedInUser.id
            });
            var newImage = await Image.create({
                imageId: image.imageName,
                userId: image.userId
            });
            console.log('Image: ', image);
            res.render('imagepost', { image: image.dataValues, fileName: req.file.originalname });
        } else {
            res.render('error');
        }
    } catch (err) {
        console.log('Error: ', err);
    }
});

module.exports = router;
