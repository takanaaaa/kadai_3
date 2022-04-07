'use strict'

document.getElementById('hamburger-btn').addEventListener('click', hamburger, false);

function hamburger() {
  document.getElementById('js-line1').classList.toggle('line_1');
  document.getElementById('js-line2').classList.toggle('line_2');
  document.getElementById('js-line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
  document.querySelector('body').classList.toggle('hidden');
}

function toggle() {
  const content = this.nextElementSibling;
  content.classList.toggle('is-open');
}

const tabs = document.querySelectorAll('.tab__group-item')
for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}

function tabSwitch() {
  document.getElementsByClassName('is-active')[1].classList.remove('is-active');
  this.classList.add('is-active');

  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('panel__group--item')[index].classList.add('is-show');
}