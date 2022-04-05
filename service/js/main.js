'use strict';

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
$(function(){
	$('.slider').slick({
		autoplay: true,
		prevArrow: '<figure class="prev"></figure>',
		nextArrow: '<figure class="next"></figure>'
	});
});