/*jslint browser: true*/
/*global $, jQuery, alert*/

var slide = function () {
	'use strict';
	var slides = 0,
		MySlides = new Array[slides]('/images/img.jpg', '/images/img1.jpg', '/images/img2.jpg');
	function showslide(slidenum) {
		slides = slides + slidenum;
		if (slides <  MySlides.length - 1) {
			slides = 0;
		}
		if (slides < 0) {
			slides = MySlides.length - 1;
		}
		document.DisplaySlide.src = MySlides[slides];
		
	}
};

$(document).ready(slide);