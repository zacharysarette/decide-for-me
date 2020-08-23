
// import { square, add } from './utils'
import isSen, { square, add, subtract, isAdult, canDrink } from './utils'

console.log('app.js is running ❤❤❤❤❤❤')
console.log(square(4))
console.log(add(1430, 23))
console.log(subtract(100, 81))
class Person {
  constructor(name = 'Unknown', age = 0){
    this.name = name
    this.age = age
    this.canDrink = this.canDrink.bind(this)
  }
  isAdult() {
    const modifier = canDrink(this.age) ? '' : ' not'
    return `${this.name} is${modifier} an Adult!`
  }
  canDrink() {
    const verb = canDrink(this.age) ? 'can' : 'cannot'
    return `${this.name} ${verb} drink!`
  }
  isSenior() {
    const modifier = isSen(this.age) ? '' : ' not'
    return `${this.name} is${modifier} a senior`
  }
}

const Charles = new Person('Charles', 84)
const Jeff = new Person('Jeff', 24)
const Maki = new Person('Maki', 4)

console.log(Charles.isAdult())
console.log(Charles.canDrink())
console.log(Charles.isSenior())
console.log(Jeff.isAdult())
console.log(Jeff.canDrink())
console.log(Jeff.isSenior())
console.log(Maki.isAdult())
console.log(Maki.canDrink())
console.log(Maki.isSenior())