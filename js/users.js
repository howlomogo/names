var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({
    users: ['User1', 'User2']
  });
});

module.exports = router;