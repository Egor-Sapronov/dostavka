'use strict';

var Schema = require('mongoose').Schema;

var Subscriber = new Schema({
  chatId: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

module.exports = Subscriber;
