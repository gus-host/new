'use strict';

const shoeIconEL = document.querySelectorAll('.shoe-icon');
const shoeIcon0EL = document.querySelectorAll('.shoe-icon--0');
const shoeIcon1EL = document.querySelectorAll('.shoe-icon--1');

// console.log(shoeIconEL, shoeIcon0EL, shoeIcon1EL);

for (let i = 0; i < shoeIcon0EL.length; i++) {
  shoeIcon0EL[i].addEventListener('click', function () {
    // console.log('The shoe icon was clicked');
    if (shoeIcon1EL[i].classList.contains('background-color')) {
      shoeIcon1EL[i].classList.remove('background-color');
      shoeIcon0EL[i].classList.add('background-color');
    } else {
      shoeIcon0EL[i].classList.toggle('background-color');
    }
  });
}
for (let i = 0; i < shoeIcon1EL.length; i++) {
  shoeIcon1EL[i].addEventListener('click', function () {
    // console.log('The shoe icon was clicked');
    if (shoeIcon0EL[i].classList.contains('background-color')) {
      shoeIcon0EL[i].classList.remove('background-color');
      shoeIcon1EL[i].classList.add('background-color');
    } else {
      shoeIcon1EL[i].classList.toggle('background-color');
    }
  });
}
