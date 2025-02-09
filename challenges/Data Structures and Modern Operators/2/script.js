const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//* Solutions

//! 1

// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${name}`);
// }

//! 2

// let sumOdds = 0;
const odds = game.odds;

// for (const odd of odds) {
//   sumOdds += odd;
// }

// console.log(sumOdds / odds.length);

//! 3

// for (const [team, value] of Object.entries(odds)) {
//   console.log(`Odd of ${team === 'x' ? 'draw' : `victory ${game[team]}`}: ${value}`);
// }

//! 4

// const scorers = {};

// for (const scorer of game.scored) {
//   scorers[scorer] = (scorers[scorer] || 0) + 1;
// }

// console.log(scorers);
