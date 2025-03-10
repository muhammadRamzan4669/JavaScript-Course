'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP


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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = (movements, sorted = false) => {
  containerMovements.innerHTML = '';

  const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov} PKR</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const updateUI = (account) => {
  calcDisplayBalance(account);
  calcDisplaySummary(account);
  displayMovements(account.movements);
}

const hideCursor = function () {
  for (const elem of arguments) {
    elem.value = '';
    elem.blur();
  }
}


const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${account.balance} PKR`;
}

const calcDisplaySummary = (account) => {
  const income = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

  const out = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);

  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate / 100).filter(interest => interest >= 1).reduce((acc, interest) => interest + acc, 0);

  labelSumIn.textContent = `${income} PKR`;
  labelSumOut.textContent = `${Math.abs(out)} PKR`;
  labelSumInterest.textContent = `${interest} PKR`;
}

let currentUser;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);


  if (currentUser?.pin === Number(inputLoginPin.value)) {
    console.log(`successfull log in`);
    labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(' ')[0]}`

    containerApp.style.opacity = 100;
    hideCursor(inputLoginUsername, inputLoginPin);
    updateUI(currentUser);
  }

})

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);

  if (amount > 0 && reciever !== currentUser && currentUser.balance >= amount && reciever) {
    currentUser.movements.push(-amount)
    reciever.movements.push(amount);
    updateUI(currentUser);
    hideCursor(inputTransferAmount, inputTransferTo);
  }
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputCloseUsername.value === currentUser.username && Number(inputClosePin.value) === currentUser.pin) {
    accounts.splice(accounts.findIndex(acc => acc === currentUser), 1);
    containerApp.style.opacity = 0;
    hideCursor(inputCloseUsername, inputClosePin);
  }
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (currentUser.movements.some((deposit) => amount < 0.1 * deposit) && amount > 0) {
    currentUser.movements.push(amount);
    updateUI(currentUser);
    hideCursor(inputLoanAmount);
  }

})

let sorted = false;

btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentUser.movements, !sorted);
  sorted = !sorted;
});

const createUsernames = accounts => accounts.forEach(account => account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join(''))

createUsernames(accounts);






