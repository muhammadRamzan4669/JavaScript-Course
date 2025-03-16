'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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


const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
}

const calcDaysPassed = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const calcDate = (date, locale, options) => {
  const currentDate = new Date();

  const daysPassedTillNow = calcDaysPassed(currentDate, date);

  if (daysPassedTillNow === 0)
    return 'Today';

  if (daysPassedTillNow === 1)
    return 'Yesterday';

  if (daysPassedTillNow <= 5)
    return `${daysPassedTillNow} days ago`

  const now = new Date(date);

  return Intl.DateTimeFormat(locale, options).format(date);
}

const formatCur = (value, currency, locale) => Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

const displayMovements = (account, sorted = false) => {
  containerMovements.innerHTML = '';

  const movs = sorted ? account.movements.slice().sort((a, b) => Math.abs(a) - Math.abs(b)) : account.movements;


  movs.forEach((mov, i) => {
    const formatedMov = formatCur(mov, account.currency, account.locale);
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${calcDate(new Date(account.movementsDates[i]), account.locale, options)}</div>
          <div class="movements__value">${formatedMov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const updateUI = (account) => {
  calcDisplayBalance(account);
  calcDisplaySummary(account);
  displayMovements(account);
}

const hideCursor = function () {
  for (const elem of arguments) {
    elem.value = '';
    elem.blur();
  }
}

const calcDisplayBalance = (account) => {


  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0)

  const formatedBalance = formatCur(account.balance, account.currency, account.locale);

  labelBalance.textContent = `${formatedBalance}`;
}

const calcDisplaySummary = (account) => {
  const income = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

  const out = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);

  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate / 100).filter(interest => interest >= 1).reduce((acc, interest) => interest + acc, 0);

  labelSumIn.textContent = `${income.toFixed(2)} PKR`;
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)} PKR`;
  labelSumInterest.textContent = `${interest.toFixed(2)} PKR`;
}

let currentUser;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);


  if (currentUser?.pin === (+inputLoginPin.value)) {
    console.log(`successfull log in`);
    labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(' ')[0]}`

    containerApp.style.opacity = 100;
    hideCursor(inputLoginUsername, inputLoginPin);
    updateUI(currentUser);


    labelDate.textContent = Intl.DateTimeFormat(currentUser.locale, {
      ...options,
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date()) + '';
  }

})

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = (+inputTransferAmount.value);

  if (amount > 0 && reciever !== currentUser && currentUser.balance >= amount && reciever) {
    currentUser.movements.push(-amount)
    currentUser.movementsDates.push(new Date().toISOString())
    reciever.movements.push(amount);
    reciever.movementsDates.push(new Date().toISOString())
    updateUI(currentUser);
  }

  hideCursor(inputTransferAmount, inputTransferTo);
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputCloseUsername.value === currentUser.username && (+inputClosePin.value) === currentUser.pin) {
    accounts.splice(accounts.findIndex(acc => acc === currentUser), 1);
    containerApp.style.opacity = 0;
    hideCursor(inputCloseUsername, inputClosePin);
  }
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = (+inputLoanAmount.value);

  if (currentUser.movements.some((deposit) => amount < 0.1 * deposit) && amount > 0) {
    currentUser.movements.push(Math.trunc(amount));
    currentUser.movementsDates.push(new Date().toISOString());
    updateUI(currentUser);
  }

  hideCursor(inputLoanAmount);
})

let sorted = false;

btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentUser, !sorted);
  sorted = !sorted;
});

const createUsernames = accounts => accounts.forEach(account => account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join(''))

createUsernames(accounts);






