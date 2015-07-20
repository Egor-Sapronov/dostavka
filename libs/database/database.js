'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dostavka');
var db = mongoose.connection;
var autoIncrement = require('mongoose-auto-increment');
var RequestSchema = require('./models/request');
autoIncrement.initialize(db);
RequestSchema.plugin(autoIncrement.plugin, {
  model: 'Request',
  field: 'orderId',
  startAt: 1000,
  incrementBy: 23
});

var RequestModel = mongoose.model('Request', RequestSchema);
var UserModel = mongoose.model('User', require('./models/user'));
var AccessTokenModel = mongoose.model('AccessToken', require('./models/token'));

db.on('error', function (err) {
  console.log(err.message);
});

db.once('open', function () {
  console.log('connected to db');
  var user = new UserModel({
    username: 'egor',
    password: '123456'
  });
  var user2 = new UserModel({
    username: 'artem',
    password: '123456'
  });

  UserModel.remove(function () {
    user
      .save(function (err, user) {});
    user2
      .save(function (err, user) {});
  });
});

module.exports = {
  db: db,
  mongoose: mongoose,
  RequestModel: RequestModel,
  UserModel: UserModel,
  AccessTokenModel: AccessTokenModel
};
