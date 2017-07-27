var express = require('express');
var router = express.Router();
var onOff = require('./led.js');


/* GET users listing. */
router.post('/power', function(req, res, next) {
	onOff.power(req.body.gpio);
  	res.send();
});


router.post('/hard_reset', function(req, res, next) {
	onOff.hardReset(req.body.gpio);
  	res.send();
});

router.get('/server_time', function(req, res, next) {
  	res.send(onOff.serverTime());
});


router.post('/get_temperature', function(req, res, next) {
	onOff.getTemperature(req.body.id,function(t){
  	res.send(200,t);
      });

});

router.post('/ping_rig', function(req, res, next) {
  	onOff.pingRig(req.body.ip,function (err, data){
			console.log(data.avg);
			res.send(200, data.avg);
	});
});

module.exports = router;

