'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContetn = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// smooth scrolling of nav links
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })

// event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  }
})

// menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// sticky navigation using Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.style.opacity = 0.8;
  } else {
    nav.classList.remove('sticky');
    nav.style.opacity = 1;
  }
}
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

// revealing elements on scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

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

// smooth scrooling (Learn more button)
btnScroolTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth'
  });
});

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace sorce atr
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})
imgTargets.forEach(target => {
  imgObserver.observe(target);
})

// tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // active content area
  tabsContetn.forEach(content => content.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`).classList.add('operations__content--active');

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

/**
 * smooth scrolling
 */
// const btnScroolTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScroolTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

//smooth srooling :) but old school way

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth'
// })

//modern way
//   section1.scrollIntoView({
//     behavior: 'smooth'
//   });
// })

/**
 * types of events and event handler
 */
// const h1 = document.querySelector('h1');

// const aletrH1 = function (e) {
//   alert('addEventListener: mouseenter');

// h1.removeEventListener('mouseenter', aletrH1);
// };

// h1.addEventListener('mouseenter', aletrH1);

// setTimeout(() => h1.removeEventListener('mouseenter', aletrH1), 3000);

//old school
// h1.onmouseenter = function (e) {
//   alert('addEventListener: mouseenter');
// }

/**
 * event propagation
 */
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget)
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget)

//   // stop event propagation
//   // e.stopPropagation();
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget)
// }, true) // 1 step of event propagation

/**
 * DOM traversing
 */
// const h1 = document.querySelector('h1');

// going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.backgroundColor = 'pink';
// h1.closest('h1').style.backgroundColor = 'orangered';

// going sideways: sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

/**
 * Intersection Observer API
 */
// const observerCollback = function (entries, observer) {
//   entries.forEach(e => {
//     console.log(e);
//   })
// };
// const observerOptions = {
//   root: null,
//   threshold: 0.1
// };
// const observer = new IntersectionObserver(observerCollback, observerOptions);
// observer.observe(section1);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     nav.classList.add('sticky');
//     nav.style.opacity = 0.8;
//   } else {
//     nav.classList.remove('sticky');
//     nav.style.opacity = 1;
//   }
// }

// const header = document.querySelector(".header");
// const navHeight = nav.getBoundingClientRect().height;
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`
// });
// headerObserver.observe(header);