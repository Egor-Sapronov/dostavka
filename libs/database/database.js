'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dostavka');
var db = mongoose.connection;
var RequestModel = mongoose.model('Request', require('./models/request'));
var UserModel = mongoose.model('User', require('./models/user'));
var AccessTokenModel = mongoose.model('AccessToken', require('./models/token'));

db.on('error', function (err) {
  console.log(err.message);
});

db.once('open', function () {
  console.log('connected to db');
});

module.exports = {
  db: db,
  mongoose: mongoose,
  RequestModel: RequestModel,
  UserModel: UserModel,
  AccessTokenModel: AccessTokenModel
};
