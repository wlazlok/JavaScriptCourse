'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

/*for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', openModal);
}*/
buttonsOpenModal.forEach(button => button.addEventListener('click', openModal));

buttonClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//close modal when pressing ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});