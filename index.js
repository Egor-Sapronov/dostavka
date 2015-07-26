'use strict';

var app = require('./app');
var bot = require('./libs/telegramBot');

app.listen(process.env.PORT || 3000, function () {
	console.log('ok');
	
	bot.setWebHook();
});
