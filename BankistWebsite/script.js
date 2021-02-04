'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////
// LECTURE

/*// selecting elements
const sections = document.querySelectorAll('.section');
// console.log(sections);
const section1 = document.getElementById('section--1');
// console.log(section1);
const buttons = document.getElementsByTagName('button');
// console.log(buttons);
document.getElementsByClassName('btn');

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality';
message.innerHTML = 'We use cookies for improved functionality. <button class="btn btn--close--cookie">Got it</button>';
const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message)
header.after(message)
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
})

// Styles
message.style.backgroundColor = 'gray';
message.style.width = '120%';

// console.log(message.style.color);
// console.log(getComputedStyle(message).color);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'Test alt atr';
// console.log(logo.alt);
logo.setAttribute('company', 'Bankist');
// console.log(logo)
console.log(logo.getAttribute('src'));

// Data atributes
logo.dataset.versionNumber;

// Classes
logo.classList.add('s');
logo.classList.remove('s');
logo.classList.toggle('s');
logo.classList.contains('d');*/