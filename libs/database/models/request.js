'use strict';

var Schema = require('mongoose').Schema;

var Request = new Schema({
  status: {
    type: String,
    default: 'wait',
    enum: ['wait', 'work', 'finish']
  },
  places: [{
    place: String,
    name: String,
    phone: String,
    comment: String
  }]
});

module.exports = Request;
