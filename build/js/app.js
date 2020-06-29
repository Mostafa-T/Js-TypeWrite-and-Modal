/*
  1.0) Type Write
  2.0) Modal
*/

// Variables call from HTML

const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');

const modalContainer = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

// open Modal function 

modalBtn.addEventListener('click', function() {
  modalContainer.classList.add('modal-container-active');
  overlay.classList.add('overlay-open');
})

//close function

closeBtn.addEventListener('click', function() {
  modalContainer.classList.remove('modal-container-active');
  overlay.classList.remove('overlay-open');
})