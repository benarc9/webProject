var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Database = require('../db');
const { request, urlencoded } = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
// var bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.post('/register', urlencodedParser, function(req, res){
//     console.log("User: " , req.body.newusername);
// });

// app.use(express.bodyParser);

// app.post('/', function(req, res){
//     var newuser = Database.seql.models.User.build({
//         username: req.body.newusername,
//         password: req.body.confirmpassword
//     });
// });
    
//     console.log("User: " , req.body.newusername);
//     console.log("Pass: " , req.body.confirmpassword);
//     res.render('landing');
// });

// app.all('/register', function(req, res) {
//     var newuser = Database.seql.models.User.build({
//         username: req.body.newusername,
//         password: req.body.confirmpassword
//     });
    
//     console.log("User: " , req.body.newusername);
//     console.log("Pass: " , req.body.confirmpassword);
//     res.render('landing');
// });

router.get('/' , function(req , res, next){
    res.render('registration');
    // next();
});

// router.all('/register', function(req, res, next){
//     var newuser = Database.seql.models.User.build({
//         username: req.body.newusername,
//         password: req.body.confirmpassword
//     });
    
//     console.log("User: " , req.body.newusername);
//     console.log("Pass: " , req.body.confirmpassword);
//     res.render('landing');
// });

// if(request.method == 'POST'){
//     var body = '';
//     request.on('newusername' , function(newusername) {
//         body = newusername;
//         console.log('username: ' + body);
//     })
// }

//also tried writing it as /register/ in both places, didn't work
// router.post('/register', function(req, res, next){
//     var newuser = Database.seql.models.User.build({
//         username: req.body.newusername,
//         password: req.body.confirmpassword
//     });
    
//     console.log("User: " , req.body.newusername);
//     console.log("Pass: " , req.body.confirmpassword);
//     res.render('landing');
// });

router.get('/landing', function(req, res){
    res.render('landing');
});

module.exports = router;