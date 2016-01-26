// @codekit-prepend "plugins.js";
// @codekit-prepend "vendor/greensock/plugins/CSSPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/ScrollToPlugin.min.js";
// @codekit-prepend "vendor/greensock/easing/EasePack.min.js";
// @codekit-prepend "vendor/greensock/TweenLite.min.js";
// @codekit-prepend "vendor/selectric/jquery.selectric.min.js";
// @codekit-prepend "vendor/slick-carousel/slick.min.js";
// @codekit-prepend "vendor/match-height/match-height.js";
// @codekit-prepend "vendor/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/animation.gsap.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/debug.addIndicators.min.js";


jQuery(document).ready(function($){



	/*  ==========================================================================
	    Categories
	    ========================================================================== */

	$('.category-title-wrapper').matchHeight();

	// Initialise Selectric Dropdown and Slick Carousel
	$('#categories').selectric();
  
	$('.responsive').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: true,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true,
				arrows: true
			}
		}, {
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				arrows: true
			}
		}, {
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: true
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false
			}
		}]
	});

	// Get index of the selected item in the dropdown and move the carousel to that index
	var categoryCurrentIndex = 0;
	$('#categories').change(function(e) {
		categoryCurrentIndex = $(this).prop('selectedIndex');
		var categoryCurrentSlide = $('.responsive').slick('slickCurrentSlide');
		$('.responsive').slick('slickGoTo', parseInt(categoryCurrentIndex));
	});

	// Expand the Top 5 lists for categories
	$(".btn-expand-categories").click(function(e) {
		
		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded');
			resetParamsTop5();
		}
		else {
			resetCategoriesTop5();
			$currPanel = $(this).parent();
			$(this).addClass('btn-expanded');
			$(this).next().css('display', 'block');
			$(this).next().addClass('categories-panel-display');
			$(this).parent().addClass("top-categories-item-top");
			// initParamGraphs($(this));
		}
		
		e.preventDefault();
		e.stopPropagation();

	});

	$(document).on('click', function () {
       	resetCategoriesTop5();
    });


	function resetCategoriesTop5() {
		// remove all these classes from the popup panel, button and main panel.
		$('.categories-panel').removeClass('categories-panel-display'); 
		$('.btn-expand-categories').removeClass('btn-expanded');
		$('.categories-panel').css('display', 'none');
		$('.top-categories-item').removeClass('top-categories-item-top');
		$('.top-categories-item').parent().removeClass("top-categories-item-top");
	}

	
	/*  ==========================================================================
	    Parameters panels
	    ========================================================================== */


	$(".btn-expand-params").click(function(e) {
		
		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded');
			resetParamsTop5();
		}
		else {
			resetParamsTop5();
			$currPanel = $(this).parent();
			$(this).addClass('btn-expanded');
			$(this).next().css('display', 'block');
			$(this).addClass('btn-expanded');
			$(this).next().addClass('params-panel-display');
			$(this).parent().addClass("top-params-item-top");
			initParamGraphs($(this));
		}
		
		e.preventDefault();
		e.stopPropagation();

	});

	$(document).on('click', function () {
       	resetParamsTop5();
    });


	function resetParamsTop5() {
		// remove all these classes from the popup panel, button and main panel.
		var $paramsPanel = $('.params-panel');
		$paramsPanel.removeClass('params-panel-display'); 
		$paramsPanel.css('display', 'none');
		$('.btn-expand-params').removeClass('btn-expanded');
		$('.top-params-item').removeClass('top-params-item-top');
		$('.top-params-item').parent().removeClass("top-params-item-top");
	}

	/*  ==========================================================================
	    Parameter Graphs
	    ========================================================================== */

	function initParamGraphs($link) {
		var $paramsPanel = $link.next(); // get the containing panel
		var $listItems = $paramsPanel.find('.params-panel-item');
		var paramMax = $paramsPanel.find('.params-panel-item:first-child').find('.params-panel-num').html().replace(/\,/g,""); // remove comma from string
		TweenLite.set($paramsPanel.find('.params-bar span'), {width:0});
		var paramCount = 0;
		$listItems.each(function() {
			var $paramItem = $(this).find('.params-bar span');
		    var paramValue = $(this).find('.params-panel-num').html().replace(/\,/g,""); // get each value
		    var paramPerc = ((paramValue/paramMax)*100)+"%"; // get percentage for each value
		    TweenLite.to($paramItem, 1, {width:paramPerc, ease:Power2.easeOut, delay:0+paramCount/5});
		    paramCount++;
		});

		
	}

	/*  ==========================================================================
	    ScrollMagic
	    ========================================================================== */

	// // BG Animation Setup
	// // .to('@target', @length, {@object})
	// var bg_tween = TweenLite.to('#twitter', 1, {
	// 	backgroundColor: '#FF0000',
	// 	ease: Linear.easeNone
	// });

	// // init ScrollMagic Controller
	// var controller = new ScrollMagic.Controller();

	// // Background Scene
	// var bg_scene = new  ScrollMagic.Scene({
	// 	triggerElement: '#twitter', duration: 300
	// })
	// 	.setTween(bg_tween)
	// 	//.addIndicators({name: "Animate BG Colour"}) // add indicators (requires plugin)
	// 	.addTo(controller);

});
