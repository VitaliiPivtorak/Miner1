var Gpio = require('onoff').Gpio;
var tcpp = require('tcp-ping');

module.exports.power=power;
module.exports.serverTime=serverTime;
module.exports.hardReset=hardReset;
module.exports.pingRig=pingRig;

// function power(gpioId)
// {
// 	console.log("Power" + gpioId)
// }

// function hardReset(gpioId)
// {
// 	console.log("HardReset" + gpioId)
// }


function power(gpioId){
	onOfGPIO(gpioId,100)
}

function hardReset(gpioId){
	onOfGPIO(gpioId,5000)
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

function serverTime()
{
	return new Date();
}

function pingRig(callback)
{

	tcpp.ping({address: '172.217.18.78'}, callback);
}