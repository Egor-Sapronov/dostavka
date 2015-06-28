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

app.get('/requests', function (req, res) {
    res.render('requests');
});

app.get('/requests/:id', function (req, res) {
    res.render('editRequest');
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

app.get('/api/requests/:id', function (req, res) {
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

app.delete('/api/requests/:id', function (req, res) {
    return db
        .RequestModel
        .find({_id: req.params.id})
        .remove()
        .exec()
        .then(function () {
            res.status(200).send({});
        });
});

app.put('/api/requests/:id', function (req, res) {
    return db
        .RequestModel
        .update({_id: req.params.id}, req.body, {})
        .exec()
        .then(function (result) {
            res.status(200).send(result);
        });
});

app.post('/api/requests', function (req, res) {
    var request = new db.RequestModel(req.body);
    request
        .save(function (err, result) {
            res.status(201).send(result);
        });
});

module.exports = app;