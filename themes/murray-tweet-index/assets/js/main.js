// @codekit-prepend "plugins.js";
// @codekit-prepend "vendor/greensock/plugins/CSSPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/ScrollToPlugin.min.js";
// @codekit-prepend "vendor/greensock/easing/EasePack.min.js";
// @codekit-prepend "vendor/greensock/TweenLite.min.js";
// @codekit-prepend "vendor/modernizr-2.8.3.min.js";
// @codekit-prepend "vendor/mmenu/jquery.mmenu.min.js"; 
// @codekit-prepend "vendor/respond.min.js";
// @codekit-prepend "vendor/zurb/responsive-tables.js";
// @codekit-prepend "vendor/selectric/jquery.selectric.min.js";
// @codekit-prepend "vendor/slick-carousel/slick.min.js";
// @codekit-prepend "vendor/match-height/match-height.js";
// @codekit-prepend "vendor/plugins.js";
// @codekit-prepend "vendor/outdatedbrowser/outdatedbrowser.js";


jQuery(document).ready(function($){



	/*  ==========================================================================
	    4 Categories
	    ========================================================================== */

	$('.category-title-wrapper').matchHeight();

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
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
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
			$(this).removeClass('btn-expanded')
			resetParamsTop5();
		}
		else {
			resetCategoriesTop5();
			$currPanel = $(this).parent();
			$(this).addClass('btn-expanded')
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
		$('.top-categories-item').removeClass('top-categories-item-top');
		$('.top-categories-item').parent().removeClass("top-categories-item-top");
	}

	
	/*  ==========================================================================
	    6 Parameters
	    ========================================================================== */


	$(".btn-expand-params").click(function(e) {
		
		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded')
			resetParamsTop5();
		}
		else {
			resetParamsTop5();
			$currPanel = $(this).parent();
			$(this).addClass('btn-expanded')
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
		$('.params-panel').removeClass('params-panel-display'); 
		$('.btn-expand-params').removeClass('btn-expanded');
		$('.top-params-item').removeClass('top-params-item-top');
		$('.top-params-item').parent().removeClass("top-params-item-top");
	}

	/*  ==========================================================================
	    6 Parameters
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

});
