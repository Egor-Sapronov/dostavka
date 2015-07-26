'use strict';

var router = require('express').Router();

router.post('/', function(req, res){
	console.log(req.body);

  // if (req.body.message) {
  //   switch (req.body.message.text) {
  //      case '/subscribe':
        
  //      break;
  //   };
  // }

  res.send();
});

module.exports = router;