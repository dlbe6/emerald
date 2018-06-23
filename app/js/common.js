//$(function() {

	// Custom JS
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			items:1,
			nav: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			loop:true,
			width: 100
		});
		$('.menu-trigger').click(function(){
			$('nav ul').slideToggle(500);
		});
		$(window).resize(function(){
			if($(window).width()>576){
				$('nav ul').removeAttr('style');
			}
			});
	});


//
