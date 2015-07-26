'use strict';

var fetch = require('node-fetch');

var headers = {
	get: {
		method: 'GET',
		headers: {
			accept: 'applications/json',
			contentType: 'application/json'
		}
	}
};

function status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

function json(response) {
	return response.json();
}

module.exports = (function () {

	var urls = {
		telegram: 'https://api.telegram.org/bot121819846:AAGs0yWBVbPXTsEZwICeTFrD3RaDK8PlekY/'
	};

	function getUpdates() {
		return fetch(urls.telegram + 'getupdates', headers.get)
			.then(status)
			.then(json)
			.then(function (result) {
				result.result.forEach(function (item) {
					console.log(item);
				});
			});
	}

	function notifyContacts(message) {
		return fetch(urls.telegram + 'getme', headers.get)
			.then(status)
			.then(json)
			.then(function (result) {
				console.log(result);
			});
	}

	function setWebHook() {
		return fetch(urls.telegram + 'setwebhook?url=https://dostavka.herokuapp.com/bot', {
			method: 'POST',
			headers: {
				accept: 'applications/json',
				contentType: 'application/json'
			}
		})
			.then(status)
			.then(json)
			.then(function (result) {
				console.log(result);
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	return {
		notifyContacts: notifyContacts,
		getUpdates: getUpdates,
		setWebHook: setWebHook
	};
})()