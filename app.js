'use strict';

var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyparser = require('body-parser');

app.use('/static', express.static('./web/dist'));
app.set('view engine', 'jade');
app.set('views', './web/src/templates');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(methodOverride());

app.get('/', function (req, res) {
	res.render('index');
});

module.exports = app;