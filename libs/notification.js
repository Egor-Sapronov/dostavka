'use strict';

var nodemailer = require('nodemailer');

module.exports = (function () {

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sapronov.egor@gmail.com',
      pass: 'E23998066r'
    }
  });

  function notificateByEmail(message) {
    var mailOptions = {
      from: 'Egor <sapronov.egor@gmail.com>',
      to: 'sapronov.egor@gmail.com',
      subject:'New order',
      text: message
    };

    transporter.sendMail(mailOptions,function(err, info){
      console.log(err);
      console.log(info);
      console.log('New order message sent');
    });
  }

  return {
    notificateByEmail: notificateByEmail
  };
})();
