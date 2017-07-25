var Gpio = require('onoff').Gpio;
var tcpp = require('tcp-ping');



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

	module.exports.power = power;
	module.exports.serverTime = serverTime;
	module.exports.hardReset = hardReset;
	module.exports.pingRig = pingRig;
}());




// function power(gpioId){
// 	onOfGPIO(gpioId,100)
// }

// function hardReset(gpioId){
// 	onOfGPIO(gpioId,5000)
// }

// function onOfGPIO(gpioId, time) {
// 	var led = new Gpio(gpioId, 'out');
// 	led.writeSync(0);  // Turn LED off.
//         led.writeSync(1);
		
// 	setTimeout(function () {
// 	        led.writeSync(0)
// 	        led.unexport();    // Unexport GPIO and free resources
// 	    }, time);

// }

function serverTime()
{
	return new Date();
}

function pingRig(callback)
{

	tcpp.ping({address: '172.217.18.78'}, callback);
}