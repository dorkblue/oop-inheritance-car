// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Instance of myMotorcycle')
var myMotorcycle = new Motorcycle('Ferrari', 'M1', 2017, 'red')
assert(myMotorcycle instanceof Motorcycle, 'myMotorcycle not an instance of Motor')
assert(myMotorcycle instanceof Car, 'myMotorcycle not an instance of Car')
success('YAY TEST CONSTRUCTOR NEXT')

console.log('Testing Constructor')
assert.strictEqual(myMotorcycle.make, 'Ferrari', 'Constructor did not set make')
assert.strictEqual(myMotorcycle.model, 'M1', 'Constructor did not set model')
assert.strictEqual(myMotorcycle.year, 2017, 'Constructor did not set year')
assert.strictEqual(myMotorcycle.color, 'red', 'Constructor did not set color')
assert.deepEqual(myMotorcycle.passengers, [], 'Constructor did not set passengers')
success('YAY TEST SEAT NUMBER NEXT')

console.log('Testing default Seat number')
assert.strictEqual(myMotorcycle.seats, 2, 'Seat dont default to 2')
success('YAY TEST WHEELIE NEXT')

console.log('Testing Wheelie!')
assert.strictEqual(myMotorcycle.wheelie(), myMotorcycle.running, 'Cannot wheelie! Engine not started!')
success('YAY ALL TEST DONE WELL DONE ME')
