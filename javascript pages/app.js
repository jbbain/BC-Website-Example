/*jslint browser: true*/
/*global $, jQuery, alert*/


var main = function () {
    'use strict';
	$('.word_menu').click(function () {
		$('.menu').animate({
			left: '0px'
		}, 200);

		$('word_menu').animate({
			left: '285px'
		}, 200);
	});
    
	$('.closebutton').click(function () {
		$('.menu').animate({
			left: '-285px'
        }, 200);

		$('word_menu').animate({
			left: '0px'
		}, 200);
	});
	
	$('h1').slideDown('slow');
};



$(document).ready(main);