// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('\nTesting Instance of myTruck\n')
var myTruck = new Truck ('Daihatsu', 'Monster', 2020, 'green')
console.log(myTruck)
assert(myTruck instanceof Truck, 'myTruck not instance of Truck Constructor')
assert(myTruck instanceof Car, 'myTruck not instance of Car Constructor, check Truck.prototype')
success()

console.log('\nTesting the Constructor Parameters of Truck\n')

assert.strictEqual(myTruck.make, 'Daihatsu', 'Constructor did not set make')
assert.strictEqual(myTruck.model, 'Monster', 'Constructor did not set model')
assert.strictEqual(myTruck.year, 2020, 'Constructor did not set year')
assert.strictEqual(myTruck.color, 'green', 'Constructor did not set color')
assert.deepEqual(myTruck.passengers, [], 'Constructor did not set passengers')
success()

console.log('\nTesting default Seat numbers\n')
assert.strictEqual(myTruck.seats, 3, 'must default to 3 seats')
success()
