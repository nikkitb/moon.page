
//append prepros js/jQuery.js
	$(document).ready(function($) {
	$('.wrapper').addClass('loaded');

	$('.menu__icon').click(function(event) {
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');

	});  

	function ibg() {
		$.each($('.ibg'), function(index, val){
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
	}		
	ibg();	

	$('#link_about').on('click', function(event){
		event.preventDefault ();
		let top = $('#aboutme').offset().top;
		$('html, body').animate({
			scrollTop: top
		}, 1000);
	});

	$('#contact_link').on('click', function(event){
		event.preventDefault ();
		let top = $('#contact').offset().top;
		$('html, body').animate({
			scrollTop: top
		}, 1000);
	});

	$('#js-btn').on('click', function(event){
		event.preventDefault ();
		let top = $('#header').offset().top;
		$('html, body').animate({
			scrollTop: top
		}, 2000);
	});


      

//_________Scroll function_____________//
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$('#js-btn').fadeIn();
		} else {
			$('#js-btn').fadeOut();
		}
	})

//__________Filter____//

$('.portfolio_nav').click(function(event) {
		$(this).toggleClass('active-filter');
		$('.filter').toggleClass('active-filter');
	});  

//___main page slider____//

$('.slider1__body').slick({
	autoplay: false,
	infinite:false,
	dots:true,
	arrows:false,
	accessibility:false,
	slidesToShow:1,
	autoplaySpeed:3000,
	adaptiveHeight: true,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint:768,
			settings: {},
		}]
	});

//____offer page slider_____//

$('.slider-single').slick({
	autoplay: false,
	adaptiveHeight: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-single',
	dots: false,
	centerMode: false,
	focusOnSelect: true,
	arrows: true,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	      }
	    }	    
    ]
});

$('a[data-slide]').click(function(e) {
	e.preventDefault();
	var slideno = $(this).data('slide');
	$('.slider-nav').slick('slickGoTo', slideno - 1);
});

});