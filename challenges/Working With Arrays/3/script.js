'use strict'

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀


const calcAverageHumanAge = (ages) => {
  return ages.map(age => age > 2 ? 16 + age * 4 : 2 * age).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

const averageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const averageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(averageAge1);
console.log(averageAge2);
