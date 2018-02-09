var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/orders', function(req, res, next) {
  res.render('my_order');
});
module.exports = router;
