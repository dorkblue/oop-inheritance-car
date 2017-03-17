var Car = require('./Car.js')

// Implement your Motorcycle here
function Motorcycle (make, model, year, color, passengers) {
  Car.call(this, make, model, year, color)
  this.seats = 2
}

Motorcycle.prototype = Object.create(Car.prototype)

Motorcycle.prototype.start = function () {
  this.running = true
  return true
}

Motorcycle.prototype.wheelie = function () {
  if (this.running === true) {
    console.log('Doing a sick wheelie!!')
    return true
  }
  return false
}

module.exports = Motorcycle
