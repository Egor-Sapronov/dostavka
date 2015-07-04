'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var db = require('../database/database');

passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function (id, done) {
  db.UserModel
    .findOne({
      _id: id
    })
    .exec()
    .then(function (user) {
      return done(null, user);
    });
});

passport.use(new LocalStrategy({},
  function (username, password, done) {
    db.UserModel
      .findOne({
        username: username
      })
      .exec()
      .then(function (user) {
        if (!user) {
          return done(null, false);
        }
        if (!user.checkPassword(password)) {
          return done(null, false);
        }

        return done(null, user);
      });
  }
));

passport.use(new BearerStrategy(
  function (accessToken, done) {
    db.AccessTokenModel
      .findOne({
        token: accessToken
      })
      .exec()
      .then(function (token) {
        if (!token) {
          return done(null, false);
        }

        return db.UserModel.findOne({
            _id: token.userId
          })
          .exec()
          .then(function (user) {
            if (!user) {
              return done(null, false);
            }

            return done(null, user);
          });
      });
  }
));

module.exports = passport;
