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
const modalErrorWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('.close-modal');
const modalTitleMsg = document.querySelector('#title-msg');
const modalMsg = document.querySelector('#err-msg');
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // delete static created movements
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

//displayMovements(account1.movements);

const createUsernames = function (acc) {
  acc.forEach(acc => {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
}
createUsernames(accounts);

const calcAndDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc += mov);
  labelBalance.textContent = `${balance}€`;
}
//calcAndDisplayBalance(account1.movements);

const calcAndDisplaySummary = function (movements, intrestRate) {
  const inserts = movements
    .filter(mov => mov > 0)
    .reduce((cur, mov) => cur += mov);
  labelSumIn.textContent = `${inserts}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((cur, mov) => cur += mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * intrestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc += curr);
  labelSumInterest.textContent = `${interest}€`;
}
//calcAndDisplaySummary(account1.movements);

const closeModalWindow = function () {
  modalErrorWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

buttonClose.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalErrorWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
overlay.addEventListener('click', closeModalWindow);

// Events hendler
let loggedUser;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // prefent form from submiting

  loggedUser = accounts.find(acc => (acc.username === inputLoginUsername.value &&
    acc.pin === Number(inputLoginPin.value)));

  if (loggedUser != null) {
    // Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display UI and message
    labelWelcome.textContent = `Welcome back ${loggedUser.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 100;

    // Display movements/balance/summary
    displayMovements(loggedUser.movements);
    calcAndDisplayBalance(loggedUser.movements);
    calcAndDisplaySummary(loggedUser.movements, loggedUser.interestRate);
  } else {
    modalErrorWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modalTitleMsg.textContent = 'Error during loggin!';
    modalMsg.textContent = 'Invalid username or PIN. Please try again 😀';
    modalMsg.style.fontSize = '40px';
  }
})

/////////////////////////////////////////////////

// LECTURE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2, 4));

// splice
console.log(arr.splice(2)); // usuwa z org
console.log(arr);
console.log(arr.reverse());
console.log(arr);

// concat
const arr2 = ['f', 'g', 'x', 'y']
const letters = arr.concat(arr2);
console.log(letters);

// join
console.log(letters.join(' - '));*/

/*for (const move of movements) {
  if (move > 0) {
    console.log(`You deposited ${move}`)
  } else {
    console.log(`You withdrew ${move}`);
  }
}*/

/*forEach Arrays
movements.forEach(function (move) {
  if (move > 0) {
    console.log(`You deposited ${move}`)
  } else {
    console.log(`You withdrew ${move}`);
  }
})

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movment ${i + 1}: You deposited ${mov}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
})*/

// forEach Maps and Sets

// map
/*currencies.forEach(function (value, key, map) {

  console.log(`${key}: ${value}`);
})

// set
const currenciesUnique = new Set(['USD', 'GBP', 'PLN', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
})*/

// Data transformations (map, filter, reduce)

// Map method
/*const euroToUds = 1.1;
const USDs = movements.map(function (mov) {
  return mov * euroToUds;
})
console.log(movements);
console.log(USDs);*/

// Filter method
/*const deposits = movements.filter(mov => mov > 0 ? mov : null)
console.log(deposits);

// Reduce method accumulaotr -> SNOWBAL
const balance = movements.reduce((acc, curr) => acc += curr)
console.log(balance);*/

// Chaining methods
/*const balnceEurToUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc += mov);
console.log(balnceEurToUsd + '$');*/

// Find method
/*const value = movements.find(mov => mov < 0);
console.log(value);

const account = accounts.find(acc => acc.username === 'js');
console.log(account);*/