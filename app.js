var createError = require('http-errors');
var express = require('express');
var expresshbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sentencesRouter = require('./routes/sentences');
var labelsRouter = require('./routes/labels');
var demographicRouter = require('./routes/demographic');

var app = express();

require('dotenv').config();

// view engine setup
app.engine('hbs', expresshbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: './views'
}));
app.set('view engine', 'hbs');

app.set('port', process.env.PORT | 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/sentences', sentencesRouter);
app.use('/api/labels', labelsRouter);
app.use('/api/demographic', demographicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
