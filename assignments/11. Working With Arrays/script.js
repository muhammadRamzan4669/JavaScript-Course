'use strict'

//? Use Array.from method to create an array that contains 100 randomly generated dice rolls

const diceRolls = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));

// console.log(diceRolls);

//? calculate the total amount deposited in the bank from the below data

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const totalDeposit = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, deposit) => deposit + sum, 0);

// console.log(totalDeposit);

//? count/calculate How many deposits are there in the bank with atleast 1000 dollars

const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

// another way

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((sum, mov) => mov >= 1000 ? ++sum : sum, 0);

// console.log(numDeposits1000);

//? create an object named sums which contains sum of deposits and withdrawals using reduce method

const sums = accounts.flatMap(acc => acc.movements).reduce((sums, mov) => {
  sums[mov < 0 ? 'withdrawals' : 'deposits'] += mov;
  return sums
}, { deposits: 0, withdrawals: 0 })

// console.log(sums);

//? create a function convertTitleCase that converts a string to title case

const convertTitleCase = (str) => {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = str.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');

  return capitalize(titleCase);
}

// console.log(convertTitleCase('aND this is a nice BuT title'));


