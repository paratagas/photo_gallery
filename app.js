const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer({ dest: 'public/photos/' });
// https://gyazo.com/af18066b598fdb5b69f2f2938c005f39
// https://gyazo.com/30a91ee0121c7cc53094540a28819e78

// multer API:
// https://www.npmjs.com/package/multer
// and Express 4 new API:
// http://expressjs.com/ru/guide/migrating-4.html
const photos = require('./routes/photos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

// set path for images used in templates:
app.use('/images', express.static(path.join(__dirname, 'public/photos')));
app.set('photos_path', __dirname + '/public/photos');

app.route('/')
    .get((req, res) => {
        photos.list(req, res);
    });

app.route('/upload')
    .get((req, res) => {
        photos.form(req, res);
    })
    .post(upload.single('fileImage'), (req, res) => {
        photos.submit(upload.single('fileImage'), req, res);
    });

app.route('/photo/:id')
    .get((req, res) => {
        photos.download(req, res);
    });

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
