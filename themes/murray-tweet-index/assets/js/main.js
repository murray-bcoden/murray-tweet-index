// @codekit-prepend "vendor/modernizr-2.8.3.min.js";
// @codekit-prepend "vendor/mmenu/jquery.mmenu.min.js"; 
// @codekit-prepend "vendor/respond.min.js";
// @codekit-prepend "vendor/zurb/responsive-tables.js";
// @codekit-prepend "vendor/selectric/jquery.selectric.min.js";
// @codekit-prepend "vendor/slick-carousel/slick.min.js";
// @codekit-prepend "vendor/plugins.js";
// @codekit-prepend "vendor/outdatedbrowser/outdatedbrowser.js";


jQuery(document).ready(function($){
	$("#main-menu").mmenu({
         // options
    }, {
		// configuration
		clone: true // clones the menu to create a separate off canvas one to help with bespoke styling of menus.
    });


	// Initialise Selectric Dropdown and Slick Carousel
	$('#categories').selectric();
  
	$('.responsive').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{
			breakpoint: 1440,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				infinite: true,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			}
		}, {
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});

	var currentIndex = 0;
	$('#categories').on('change', function() {
	currentIndex = $(this).prop('selectedIndex');
	var currentSlide = $('.responsive').slick('slickCurrentSlide');
	$('.responsive').slick('slickGoTo', parseInt(currentIndex));
	});


	$('.category .show-more-link').on('click', function() {
	$(this).next().css('display', 'block');
	});


	$('.category .close').on('click', function() {
	$(this).parent().css('display', 'none');
	});

});