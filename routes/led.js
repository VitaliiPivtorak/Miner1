var Gpio = require('onoff').Gpio;
var tcpp = require('tcp-ping');
var sensor = require('ds18x20');
var sensorId = '28-0416b3c34fff';



// (function(){

// 	function power(gpioId)
// 	{
// 		console.log("Power" + gpioId)
// 	}

// var hardResetTime = new Date();
// var hardResetTimeout = 5000;
// 	function hardReset(gpioId)
// 	{
// 		var now = new Date();
// 		if(now - hardResetTime > hardResetTimeout)
// 		{
// 			console.log("HardReset" + gpioId);
// 			hardResetTime = new Date();
// 		}
// 	}

// module.exports.power=power;
// module.exports.serverTime=serverTime;
// module.exports.hardReset=hardReset;
// module.exports.pingRig=pingRig;
// }());

//----------------------------------------------------------------------

(function () {

	function power(gpioId) {
		console.log("Power " + gpioId)
		onOfGPIO(gpioId, 100)
	}

	var hardResetTime = new Date();
	var hardResetTimeout = 5000;

	function hardReset(gpioId) {
		var now = new Date();
		if (now - hardResetTime > hardResetTimeout) {
			onOfGPIO(gpioId, 5000)
			console.log("HardReset" + gpioId);
			hardResetTime = new Date();
		}
	}

	function onOfGPIO(gpioId, time) {
		var led = new Gpio(gpioId, 'out');
		led.writeSync(0);  // Turn LED off.
		led.writeSync(1);

		setTimeout(function () {
			led.writeSync(0)
			led.unexport();    // Unexport GPIO and free resources
		}, time);
	}

        function getTemperature(id,callback){
	        console.log("led.js getTemperature()");
	        sensor.get(id , function(err, temp){
		if(err){
			console.log(err);
			callback(-1);
		}
else
{
		console.log("Temperature: " + temp +'\n\n');
			callback(temp);
}
		});
	}

	module.exports.power = power;
	module.exports.serverTime = serverTime;
	module.exports.hardReset = hardReset;
	module.exports.pingRig = pingRig;
        module.exports.getTemperature = getTemperature;
}());




function serverTime()
{
	return new Date();
}



function pingRig(ip,callback)
{
	console.log("led.js ip=" + ip)
	tcpp.ping({address: ip}, callback);
}