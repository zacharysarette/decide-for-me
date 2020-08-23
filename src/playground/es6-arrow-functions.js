//console.log("Running Arrows")

//const square = function (x) {
//  return x * x
//}

//const squareArrow = x => x * x

//console.log(square(17))
//console.log(squareArrow(18))

//const fullName = 'Jennifer Robbins'

//const getFirstName = fullName => fullName.split(' ')[0]

//console.log(getFirstName(fullName))

// arguments object - no longer bound with arrow functions

const add = (a,b) => {
  // console.log(arguments) -- requires es5 function
  return a + b
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)
    })
  }
}
user.printPlacesLived()

const user2 = {
  name: 'James',
  cities: ['Boston', 'Milan', 'Cape Town'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}
console.log(user2.printPlacesLived())

// Challenge area

const multiplier = {
  numbers: [7, 20, 15, 45, 2, 1],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number)
  }
}

console.log(multiplier.multiply())