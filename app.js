var express = require('express');
var exphbs  = require('express-handlebars');
var bodyparser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Database = require('./db');

var app = express();

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');
app.set('views' , (__dirname, 'views'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');
var registration = require('./routes/registration');
var imagepost = require('./routes/imagepost');
var postimage = require('./routes/postimage');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login' , login);
app.use('/registration', registration);
app.use('/imagepost', imagepost);
app.use('/postimage', postimage);

app.use(bodyparser.urlencoded({ extended:true }));

app.use(function(err, req, res, next) { 
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    res.status(err.status || 500);
    res.render('error');
 });

//#region Database Setup

    var data = new Database();
    data.authenticate();
    var User = require('./models/user');
    const bodyParser = require('body-parser');
    
    var newuser = Database.seql.models.User.create({
        username: 'sadoifjsoi',
        password: '123',
        id: 0
    }).then(
        () => {
            console.log('**New User Success**');
        },
        () => {
            console.error('**New User Failed**');
        }
    );

//#endregion

module.exports = app;