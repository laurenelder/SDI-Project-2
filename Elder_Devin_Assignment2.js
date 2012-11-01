// Devin "Lauren" Elder
// SDI 1211
// Project 2
// "Date"

// My Variables
//var gasTank = myBoolean
//var battVolt = myNumber
//var compInput = myString
//var sparkPlug = myArray

// Procedure
var keyTurns = function(keyTurns) {
	var key = 1;
		if (keyTurns - key > 0) {
			console.log("The ignition is on and the car is able to run.");
		} else {
			console.log("The ignition is not turned on and the car will not run.");
		};
};

// Boolean Function
var fuel = function(hasGas, gettingGas) {
		if (hasGas > 0, gettingGas > 0) {
		var gasTank = "gas"
		console.log("The engine is getting enough fuel to start.");
	} else {
		var gasTank = "no gas"
		console.log("The engine is not getting fuel and therefor will not start.");
	};
};	

// Number Function
var voltage = function(volt) {
	console.log("Charge the battery with a battery charger till it is fully charged.");
	var maxVoltage = 15
while (volt < 15) {
	console.log("The battery is at " + volt + " volts and still charging, please wait.")
	volt++};
console.log("The battery is now fully charged.")
};

// String Function



// Array Function



// My Functions
keyTurns(2)
// Input a 0 if the tank is empty or if gas is not getting to the engine.
fuel(1, 1)
voltage(8)

// My Outputs



// Main Function