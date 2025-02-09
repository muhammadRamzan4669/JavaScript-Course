const gameEvents = new Map([
  [17, '⚽ GOAL'],//17
  [36, '🔁 Substitution'], //19
  [47, '⚽ GOAL'],//11
  [61, '🔁 Substitution'],//14
  [64, '🔶 Yellow card'],//3
  [69, '🔴 Red card'],//5
  [70, '🔁 Substitution'],//1
  [72, '🔁 Substitution'],//2
  [76, '⚽ GOAL'],//4
  [80, '⚽ GOAL'],//4
  [92, '🔶 Yellow card'],//12
]);

//? 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
// console.log(events);

//? 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events and then log.

gameEvents.delete(64);
// console.log(gameEvents);

//? 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

//? 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL

// for (const [time, event] of gameEvents) {
//   console.log(`${time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${time}: ${event}`);
// }
