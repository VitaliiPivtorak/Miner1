var Gpio = require('onoff').Gpio;
var tcpp = require('tcp-ping');

module.exports.reset=reset;
module.exports.serverTime=serverTime;
module.exports.hardReset=hardReset;
module.exports.pingRig=pingRig;

function reset(gpioId){
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

	tcpp.ping({address: '192.168.1.216'}, callback);
}