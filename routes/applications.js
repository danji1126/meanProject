var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../app/index.html'));
});
router.get('/view2', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../app/view2/view2.html'));
});

module.exports = router;