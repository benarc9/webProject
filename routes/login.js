var express = require('express');
var router = express.Router();
var Database = require('../db');
const BC = require('bcrypt');

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Database.seql.models.User.findOne({
            where: { username }
        });
        if (BC.compareSync(password, user.password)) {
            req.session.loggedInUser = user.dataValues;
            res.redirect('/landing');
        } else {
            res.render('error');
        }
    } catch(err) {

    }
});

module.exports = router;