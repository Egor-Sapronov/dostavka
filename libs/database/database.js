'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dostavka');
var db = mongoose.connection;
var RequestSchema = require('./models/request');
var RequestModel = mongoose.model('Request', RequestSchema);

db.on('error', function (err) {
    console.log(err.message);
});

db.once('open', function () {
    console.log('connected to db');
});

module.exports = {
    db: db,
    mongoose: mongoose,
    RequestModel: RequestModel
};