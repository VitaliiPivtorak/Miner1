var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Miner' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Miner' });
});

router.get('/rigs', function(req, res, next) {
  res.render('rigs', { title: 'Miner -> Rigs' });
});


module.exports = router;
