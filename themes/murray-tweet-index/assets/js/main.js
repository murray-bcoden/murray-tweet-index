// @codekit-prepend "plugins.js";
// @codekit-prepend "vendor/greensock/plugins/CSSPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/ScrollToPlugin.min.js";
// @codekit-prepend "vendor/greensock/easing/EasePack.min.js";
// @codekit-prepend "vendor/greensock/TweenLite.min.js";
// @codekit-prepend "vendor/slick-carousel/slick.min.js";
// @codekit-prepend "vendor/match-height/match-height.js";
// @codekit-prepend "vendor/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/animation.gsap.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/debug.addIndicators.min.js";
// @codekit-prepend "vendor/lazyload/jquery.lazyload.min.js";
// @codekit-prepend "vendor/remodal/remodal.min.js";
// @codekit-prepend "vendor/jquery.nanoscroller.min.js";


jQuery(document).ready(function($){



	/*  ==========================================================================
	    Top 100
	    ========================================================================== */
	    $("img.lazy").lazyload({container: $(".top-list-wrapper"), effect: "fadeIn", threshold: 200});
	    $(".nano").nanoScroller({ iOSNativeScrolling: true, alwaysVisible: true });


	/*  ==========================================================================
	    Categories
	    ========================================================================== */

	$('.category-title-wrapper').matchHeight();

	// Initialise Selectric Dropdown and Slick Carousel
	//$('#categories').selectric();
  
	$('.responsive').slick({
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: true,
		easing: Expo.easeInOut,
		useTransform: true,
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
				arrows: true,
				touchMove: true
			}
		}, {
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: true,
				touchMove: true
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
				arrows: false,
				touchMove: true
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false,
				touchMove: true
			}
		}]
	});

	// Get index of the selected item in the dropdown and move the carousel to that index
	// var categoryCurrentIndex = 0;
	// $('#categories').change(function(e) {
	// 	categoryCurrentIndex = $(this).prop('selectedIndex');
	// 	var categoryCurrentSlide = $('.responsive').slick('slickCurrentSlide');
	// 	$('.responsive').slick('slickGoTo', parseInt(categoryCurrentIndex));
	// });

	var $openOldCatPanel = null;
	var $openNewCatPanel = null;
	var $catBtnSelected = null;

	// Expand the Top 5 lists for categories
	$(".btn-expand-categories").click(function(e) {

		var speed = 0.1;
		
		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded');
			var $tempPanel1 = $openOldCatPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			if($openOldCatPanel != null) {
				TweenLite.to($openOldCatPanel, speed, {bottom:100, opacity:0, ease:Circ.easeIn, onComplete:function() { $tempPanel1.css('display', 'none') } } ); // hide the open panel
			}
		}
		else {
			//resetCategoriesTop5();

			$openNewCatPanel = $(this).next() // find the panel to open
			$openNewCatPanel.css('display', 'block'); // make the new panel visible

			if($catBtnSelected != null) {
				$catBtnSelected.removeClass('btn-expanded');
			}
			$(this).addClass('btn-expanded'); // make the current button selected
			$catBtnSelected = $(this);

			var $tempPanel2 = $openOldCatPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			if($openOldCatPanel != null) {
				TweenLite.to($openOldCatPanel, speed, {bottom:100, opacity:0, ease:Circ.easeIn, onComplete:function() { $tempPanel2.css('display', 'none'); } } ); // hide the open panel
			}
			$openOldCatPanel = $openNewCatPanel;
			TweenLite.to($openNewCatPanel, speed, {bottom:75, opacity:1, ease:Circ.easeOut} );

		}
		
		e.preventDefault();
		e.stopPropagation();

	});

	$(document).on('click', function () {
		if($catBtnSelected != null) {
       		$catBtnSelected.removeClass('btn-expanded');
       	}
		if($openOldCatPanel != null) {
			TweenLite.to($openOldCatPanel, 0.1, {bottom:100, opacity:0, ease:Circ.easeIn, onComplete:function() { $(this).css('display', 'none') } } ); // hide the open panel
		}
    });
	
	/*  ==========================================================================
	    Parameters panels
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
			$(this).next().find('.params-panel-link').css('display', 'block'); // show the links
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
		$paramsPanel.find('.params-panel-link').css('display', 'none'); // hide the links
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
		var paramMax = Number($paramsPanel.find('.params-panel-item:first-child').find('.params-panel-num').html().replace(/[^0-9\.]/g, '')); // remove comma from string
		TweenLite.set($paramsPanel.find('.params-bar span'), {width:0});
		var paramCount = 0;
		$listItems.each(function() {
			var $paramItem = $(this).find('.params-bar span');
		    var paramValue = Number($(this).find('.params-panel-num').html().replace(/[^0-9\.]/g, '')); // get each value
		    var paramPerc = ((paramValue/paramMax)*100)+"%"; // get percentage for each value
		    TweenLite.to($paramItem, 1, {width:paramPerc, ease:Power2.easeOut, delay:0+paramCount/5});
		    paramCount++;
		});

		
	}

	/*  ==========================================================================
	    Twitter follow
	    ========================================================================== */
	$('#twitter-follow').on('click', function(e) {
		e.preventDefault();
		window.open('https://twitter.com/intent/follow?screen_name=MurrayIRL&user_id=2373580801','TwitterFollow', 'width=800, height=600');
	});

	/*  ==========================================================================
	    Twitter share
	    ========================================================================== */

	$('.mti-twitter-share').on('click', function(e) {

		var url = $(this).attr('href');
		window.open(url, "","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=550,height=235");

		ga('send', 'event', 'button', 'click', 'social share buttons');

	  	e.preventDefault();

	});

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
