'use strict';

var express = require('express');
var app = express();
var passport = require('./libs/auth/auth');
var methodOverride = require('method-override');
var bodyparser = require('body-parser');
var db = require('./libs/database/database');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var notification = require('./libs/notification');
var crypto = require('crypto');
var bot = require('./libs/telegramBot');

app.use('/static', express.static('./web/dist'));
app.set('view engine', 'jade');
app.set('views', './web/src/templates');
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(methodOverride());
app.use(session({
  secret: 'secret',
  cookie: true,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/bot', function (req, res) {
  console.log('hook');
  console.log(req.body);
  res.send();
});

app.get('/request', function (req, res) {
  res.render('index');
});

app.get('/info', function (req, res) {
  res.render('info', { order: req.query.order });
});

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login',
  passport.authenticate('local', {
    session: true,
    failureRedirect: '/login'
  }),
  function (req, res) {
    db.AccessTokenModel
      .remove({
        userId: req.user._id
      })
      .exec()
      .then(function () {
        var token = new db.AccessTokenModel({
          userId: req.user._id,
          token: crypto.randomBytes(32).toString('base64')
        });

        token.save(function (err, token) {
          res.redirect('/requests' + '#' + token.token);
        });
      });
  });

app.get('/requests',
  ensureAuthenticated,
  function (req, res) {
    res.render('requests');
  });

app.get('/requests/:id',
  ensureAuthenticated,
  function (req, res) {
    res.render('editRequest');
  });

app.get('/api/requests',
  passport.authenticate('bearer', {
    session: false
  }),
  function (req, res) {
    return db
      .RequestModel
      .find(req.query.order ? {
        orderId: req.query.order
      } : null)
      .exec()
      .then(function (result) {
        res.status(200).send(result);
      });
  });

app.get('/api/requests/:id', passport.authenticate('bearer', {
  session: false
}), function (req, res) {
  return db
    .RequestModel
    .findOne({
      _id: req.params.id
    })
    .exec()
    .then(function (item) {
      res.status(200).send(item);
    });
});

app.post('/api/requests',
  function (req, res) {
    var request = new db.RequestModel(req.body);
    request
      .save(function (err, result) {
        notification.notificateByEmail('Новый заказ, номер: ' + result.orderId);

        bot.notifyContacts('message');

        res.status(201).send(result);
      });
  });

app.post('/api/requests/:id',
  passport.authenticate('bearer', {
    session: false
  }),
  function (req, res) {
    return db
      .RequestModel
      .findOne({
        _id: req.params.id
      })
      .exec()
      .then(function (request) {
        request.status = req.body.status;
        request.places = req.body.places;

        return request.save(function (err, result) {
          res.status(200).send(result);
        });
      });
  });

app.delete('/api/requests/:id',
  passport.authenticate('bearer', {
    session: false
  }),
  function (req, res) {
    return db
      .RequestModel
      .find({
        _id: req.params.id
      })
      .remove()
      .exec()
      .then(function () {
        res.status(200).send({});
      });
  });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = app;
