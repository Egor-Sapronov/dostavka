'use strict';

var router = require('express').Router();
var db = require('../libs/database/database');

router.post('/', function (req, res) {
  console.log(req.body);

  if (req.body.message) {
    var data = req.body.message;
    switch (data.text) {
      case '/subscribe':
        db.SubscriberModel.findOne({
          chatId: data.chat.id
        }, function (err, result) {

          if (!result) {
            var subscriber = new db.SubscriberModel({
              chatId: data.chat.id,
              first_name: data.chat.first_name,
              last_name: data.chat.last_name
            });

            subscriber.save(function (err, savedSubscriber) {
              console.log('new subscriber: ' + savedSubscriber.first_name);
            });
          }
        });

        break;

      default:
        break;
    };
  }

  res.send();
});

module.exports = router;