document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//? Coding Challenge #4

//? Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.Test data (pasted to textarea, including spaces):

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

//? Should produce this output(5 separate console.log outputs):

// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅


document.querySelector('button').addEventListener('click', function () {
  const inputs = document.querySelector('textarea').value.toLowerCase().split('\n');

  for (const [i, input] of inputs.entries()) {

    const underscoreIndex = input.indexOf('_');

    console.log(input.slice(0, underscoreIndex) + input[underscoreIndex + 1].toUpperCase() + input.slice(underscoreIndex + 2).padEnd(20, ' ') + ('✅'.repeat(i + 1)));
  }

})
