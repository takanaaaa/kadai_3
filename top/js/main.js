'use strict';

$(function(){
	$('.js-slider').slick({
		autoplay: false,
		dots: true,
		prevArrow: '<figure class="prev"></figure>',
		nextArrow: '<figure class="next"></figure>'
	});
});

$(function(){
	$('.service-slider').slick({
		autoplay: true,
    slidesToShow: 2.3,
    centerMode: true
	});
});