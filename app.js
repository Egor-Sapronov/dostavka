'use strict';

var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyparser = require('body-parser');
var db = require('./libs/database/database');

app.use('/static', express.static('./web/dist'));
app.set('view engine', 'jade');
app.set('views', './web/src/templates');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(methodOverride());

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/requests', function (req, res) {
    return db
        .RequestModel
        .find()
        .exec()
        .then(function (result) {
            res.status(200).send(result);
        });
});

app.post('/api/requests', function (req, res) {
    console.log(req.body);
    var request = new db.RequestModel(req.body);
    request
        .save(function (err, result) {
            res.status(201).send(result);
        });
});

module.exports = app;