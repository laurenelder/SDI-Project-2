// Devin "Lauren" Elder
// SDI 1211
// Project 2
// 11/02/2012

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
		var gasTank = "have enough gas.";
		console.log("The engine is getting enough fuel to start.");
	} else {
		var gasTank = "don't have enough gas";
		console.log("The engine is not getting fuel and therefor will not start.");
	};
	return gasTank;
};	

// Number Function
var voltage = function(volt) {
	console.log("Charge the battery with a battery charger till it is fully charged.");
	var maxVoltage = 13;
while (volt < 13) {
	console.log("The battery is at " + volt + " volts and still charging, please wait.");
	volt++};
console.log("The battery is now fully charged.");
return volt;
};

// String Function
var compInput = function(cond, input, sensor) {
	var wiring = " harness";
	var chkWire = "All sensors and wiring have been checked and repaired if needed.";
	if (cond > 0) {
		console.log("The" + sensor + " has been checked and it and the wiring" + wiring
		+ input + ".");
	} else {
		console.log(" The " + sensor + " sensor or its wiring are in need of repair" +
		" before the car is started.");
	};
	return chkWire;
};

// Array Function
	var majorComp = [1, 2, 3] 
var turnOn = function(order) {
	var comp = majorComp[2] * order
	var keyStart = "The car will start when the key is turned.";
for (var i = 0; i < majorComp.length; i++) {
	};
if (comp > 0) {
		console.log("All " + comp + " major components have been turned on. The car" + 
		" should start.");
	} else {
		console.log("None of the major components have been turned on. The car will not" +
		" start.");
	};
	return keyStart;
};

/* My Functions
keyTurns(2)
// Input a 0 if the tank is empty or if gas is not getting to the engine.
fuel(1, 1)
voltage(8)
compInput(" is functioning", " MAF");
compInput(" is functioning", " IAC");
compInput(" is functioning", " O2");
compInput(" is functioning", " Camshaft Position Sensor");
// Input a 0 if not starting the car and a 1 if starting the car
turnOn(1)
*/

// My Returns
keyTurns(2)
// Input a 0 if the tank is empty or if gas is not getting to the engine.
var availFuel = fuel(1, 1);
var myVoltage = voltage(8);
// Input a 0 if the input is not functioning or a 1 if it is functioning
var mafCompInput = compInput(1, " is functioning", " MAF");
var iacCompInput = compInput(1, " is functioning", " IAC");
var o2CompInput = compInput(1, " is functioning", " O2");
var cpsCompInput = compInput(1, " is functioning", " Camshaft Position Sensor");
// Input a 0 if not starting the car and a 1 if starting the car
var keyOn = turnOn(1);

// My Outputs

console.log("To recap")
console.log("You " + availFuel)
console.log("The current battery voltage is " + myVoltage + ".")
console.log(mafCompInput)
console.log(keyOn)