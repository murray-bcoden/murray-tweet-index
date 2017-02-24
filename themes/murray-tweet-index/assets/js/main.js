// @codekit-prepend "plugins.js";
// /*@codekit-prepend "vendor/modernizr-custom.js";*/
// @codekit-prepend "vendor/modernizr-2.8.3.min.js";
// @codekit-prepend "vendor/greensock/plugins/CSSPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/ScrollToPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/MorphSVGPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/DrawSVGPlugin.min.js";
// @codekit-prepend "vendor/greensock/TweenMax.min.js";
// @codekit-prepend "vendor/slick-carousel/slick.min.js";
// @codekit-prepend "vendor/match-height/match-height.js";
// @codekit-prepend "vendor/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/animation.gsap.min.js";
// @codekit-prepend "vendor/scrollmagic/minified/plugins/debug.addIndicators.min.js";
// @codekit-prepend "vendor/lazyload/jquery.lazyload.min.js";
// @codekit-prepend "vendor/jquery.nanoscroller.min.js";
// @codekit-prepend "vendor/ssm.min.js";

jQuery(document).ready(function($){

	var $html = $('html');
	var $body = $('body');
	var devMode = false;

	if(devMode) {
		$body.removeClass('no-scroll');
	}

	window.onload = function() {
		var loaderTL = new TimelineMax({onComplete:loaderComplete});
		loaderTL.to('.rotatorWrapper', 1, {
			//css: { top: "100%", opacity: "0" },
			y: 400,
			opacity: 0,
			delay: 0.5,
			ease: Back.easeIn
		})
		.to('.cover', 1, {
			autoAlpha: 0
		});
	};

	function loaderComplete() {
		$body.removeClass('no-scroll');
		show100Badge();
	}

	

/*  ==========================================================================
    Top 100
    ========================================================================== */

    $("img.lazy").lazyload({container: $(".top-list-wrapper"), effect: "fadeIn", threshold: 200});
    $(".nano").nanoScroller({ iOSNativeScrolling: true, alwaysVisible: true });

    $('.top-100-badge-link').click(function(e) {
    	TweenLite.to(window, 0.7, {scrollTo:{y:$('.top-100').position().top}, ease:Power2.easeOut});
    	e.preventDefault();
    });

    // animate in top 100 badge after cover has faded out
    function show100Badge() {
    	var topTL = new TimelineMax({ delay: 0.2 });
	    var $t100Circ = $('.t100-circ');
	    var $t100Grad = $('.t100-grad');
	    var $t100Top = $('.t100-top');
	    var $t100100 = $('.t100-100');

	    TweenMax.set('.t100', {
			visibility: 'visible'
		});

	    topTL.set([$t100Circ, $t100Grad], { scale: 0, transformOrigin: '50% 50%' })
	    	 .to($t100Circ, 0.4, { scale: 1, ease: Back.easeOut })
	    	 .to($t100Grad, 0.4, { scale: 1, ease: Back.easeOut }, 0.1)
	    	 .fromTo($t100Top, 0.4, { y: 20 , opacity: 0 }, { y: 0, opacity: 1, ease:Back.easeOut}, 0.1)
	    	 .fromTo($t100100, 0.4, { y: 20, opacity: 0 }, { y: 0, opacity: 1, ease:Back.easeOut}, 0.2);
    }
	    

/*  ==========================================================================
    Categories
    ========================================================================== */

	$('.category-title-wrapper').matchHeight();
  
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

	var $openOldCatPanel = null;
	var $openNewCatPanel = null;
	var $catBtnSelected = null;
	var speed = 0.3;

	if($html.hasClass('no-touch')) {

		$( ".category" ).each(function() {
			var $name = $(this).find('.name');
			var $jobTitle = $(this).find('.job-title');
			var $catTitle = $(this).find('.category-title-wrapper');
			var catEasing = Elastic.easeOut.config(0.5, 0.4);

			$(this).hover(
				function() {
					TweenMax.to($catTitle, 0.7, { y: -10, ease: catEasing });
				}, function() {
					TweenMax.to($catTitle, 0.7, { y: 0, ease: catEasing });
				}
			);
		});

	}

	// Expand the Top 5 lists for categories
	$(".btn-expand-categories").click(function(e) {
		
		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded');
			var $tempPanel1 = $openOldCatPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			if($openOldCatPanel != null) {
				TweenLite.to($openOldCatPanel, speed, {y:0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $tempPanel1.css('display', 'none') } } ); // hide the open panel
			}
		}
		else {

			$openNewCatPanel = $(this).next(); // find the panel to open
			$openNewCatPanel.css('display', 'block'); // make the new panel visible

			if($catBtnSelected != null) {
				$catBtnSelected.removeClass('btn-expanded');
			}
			$(this).addClass('btn-expanded'); // make the current button selected
			$catBtnSelected = $(this);

			var $tempPanel2 = $openOldCatPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			if($openOldCatPanel != null) {
				TweenLite.to($openOldCatPanel, speed, {y:0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $tempPanel2.css('display', 'none'); } } ); // hide the open panel
			}
			$openOldCatPanel = $openNewCatPanel;
			TweenLite.to($openNewCatPanel, speed, {y:25, autoAlpha:1, ease:Power2.easeOut} );

		}
		
		e.preventDefault();
		e.stopPropagation();

	});

	$(document).on('click', function () {
		if($catBtnSelected != null) {
       		$catBtnSelected.removeClass('btn-expanded');
       	}
		if($openOldCatPanel != null) {
			TweenLite.to($openOldCatPanel, speed, {y:0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $(this).css('display', 'none') } } ); // hide the open panel
		}
    });
	
/*  ==========================================================================
    Parameters panels
    ========================================================================== */


	var $openOldParamPanel = null;
	var $openNewParamPanel = null;
	var $paramBtnSelected = null;
	var $oldSelectedParamItem = null;
	var yDist = 40;

	$(".btn-expand-params").click(function(e) {

		var speed = 0.3;

		// if already expanded ?
		if($(this).hasClass('btn-expanded')) {
			$(this).removeClass('btn-expanded');
			
			var $tempPanel1 = $openOldParamPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			var $tempItem1 = $oldSelectedParamItem; // same as above
			if($openOldParamPanel != null) {
				// TweenLite.to($openOldParamPanel, speed, {top:itemYposOut, opacity:0, ease:Circ.easeIn, onComplete:function() { $tempPanel1.css('display', 'none'); $tempItem1.removeClass('top-params-item-top'); } } ); // hide the open panel
				TweenLite.to($openOldParamPanel, speed, { y: 0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $tempItem1.removeClass('top-params-item-top'); } } ); // hide the open panel
			}
		}
		else {
			$(this).parent().addClass("top-params-item-top");

			$openNewParamPanel = $(this).next() // find the panel to open
			$openNewParamPanel.css('display', 'block'); // make the new panel visible

			$selectedParamItem = $(this).parent();

			if($paramBtnSelected != null) {
				$paramBtnSelected.removeClass('btn-expanded');
			}
			$(this).addClass('btn-expanded'); // make the current button selected
			$paramBtnSelected = $(this);

			var $tempPanel2 = $openOldParamPanel; // create a temp variable for the old panel so doesn't get overwritten before the onComplete below can trigger
			var $tempItem2 = $oldSelectedParamItem; // same as above
			if($openOldParamPanel != null) {
				TweenLite.to($openOldParamPanel, speed, { y: 0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $tempItem2.removeClass('top-params-item-top'); } } ); // hide the open panel
			}

			$openOldParamPanel = $openNewParamPanel;
			$oldSelectedParamItem = $selectedParamItem;
			TweenLite.to($openNewParamPanel, speed, { y: -yDist, autoAlpha:1, ease:Power2.easeOut} );

			initParamGraphs($(this));
		}
		
		e.preventDefault();
		e.stopPropagation();

	});

	$(document).on('click', function () {
       	//resetParamsTop5();
       	if($paramBtnSelected != null) {
       		$paramBtnSelected.removeClass('btn-expanded');
       	}
		if($openOldParamPanel != null) {
			TweenLite.to($openOldParamPanel, speed, { y: 0, autoAlpha:0, ease:Power2.easeIn, onComplete:function() { $('.top-params-item').removeClass('top-params-item-top'); } } ); // hide the open panel
		}
    });

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
    Animated SVG Circ Gains Graph
    ========================================================================== */

    TweenMax.set('.circ-graph-svg', {
		visibility: 'visible'
	});

	TweenMax.set('#center-circ', {
		transformOrigin: '50% 50%'
	});

	TweenMax.set(['#base-lines path','#mid-lines path','#top-lines path'], {
		drawSVG:'0% 0%'
	});

	TweenMax.set('.circ', {
		opacity: 0,
		xPercent:-50,
		yPercent:-50,
		x: 15,
		y: 15
	})

/*  GLOBAL VARIABLES
    ========================================================================== */  

	var total = 218;
	var vals = [55, 62, 67, 142, 155];
	var percs;
	var baseTime = 0.7;

	/* Cached jQuery objects */
	var values = $(".value");
	var circs = $(".circ");

/*  FUNCTIONS
    ========================================================================== */  

	function initPercs() {
		percs = [];
		for(i=0; i<vals.length; i++) {
			percs.push(100*vals[i]/155);
		}
	};

	function setValues() {
		var tempVals = vals.reverse();
		for(i=0; i<values.length; i++) {
			values[i].textContent = Math.round(tempVals[i]);
		}
	};

	function positionValues() { // called oncomplete of last circ
		for(i=0; i<values.length; i++) {
			var newText = values[i];
			newText.setAttributeNS(null,"x",circs[i]._gsTransform.x + circs[i]._gsTransform.xOrigin - 9);     
			newText.setAttributeNS(null,"y",circs[i]._gsTransform.y + circs[i]._gsTransform.yOrigin + 5); 
		}
	};

	initPercs();
	setValues();

/*  TIMELINE
    ========================================================================== */  

	var tl = new TimelineMax();
	
	var linesPerc = ["0% "+percs[0]+"%", "0% "+percs[1]+"%", "0% "+percs[2]+"%", "0% "+percs[3]+"%", "0% "+percs[4]+"%"];

	var motionPath0 = MorphSVGPlugin.pathDataToBezier(".line0", {align:".circ0"});
	var bezierTween0 = TweenMax.to(".circ0", 1, {bezier:{values: motionPath0, type: "cubic"}, ease:Linear.easeNone}).pause();
	var percent0 = percs[0]/100;

	var motionPath1 = MorphSVGPlugin.pathDataToBezier(".line1", {align:".circ1"});
	var bezierTween1 = TweenMax.to(".circ1", 1, {bezier:{values: motionPath1, type: "cubic"}, ease:Linear.easeNone}).pause();
	var percent1 = percs[1]/100;

	var motionPath2 = MorphSVGPlugin.pathDataToBezier(".line2", {align:".circ2"});
	var bezierTween2 = TweenMax.to(".circ2", 1, {bezier:{values: motionPath2, type: "cubic"}, ease:Linear.easeNone}).pause();
	var percent2 = percs[2]/100;

	var motionPath3 = MorphSVGPlugin.pathDataToBezier(".line3", {align:".circ3"});
	var bezierTween3 = TweenMax.to(".circ3", 1, {bezier:{values: motionPath3, type: "cubic"}, ease:Linear.easeNone}).pause();
	var percent3 = percs[3]/100;

	var motionPath4 = MorphSVGPlugin.pathDataToBezier(".line4", {align:".circ4"});
	var bezierTween4 = TweenMax.to(".circ4", 1, {bezier:{values: motionPath4, type: "cubic"}, ease:Linear.easeNone}).pause();
	var percent4 = percs[4]/100;


	tl.fromTo('#center-circ', baseTime, { scale: 0 }, { 
		scale: 1,
		delay: 0.2,
		ease: Elastic.easeOut.config(0.5, 0.4)
	}, 0.15)

	.fromTo('#gain', 0.3, {
		opacity:0 }, {
		opacity:1,
		ease: Linear.easeNone
	}, "-=0.5")

	.set('.circ', {opacity: 1}, "-=0.6")

	.staggerFrom('.circ', baseTime*3, {
		cycle: {
			y: function(i) { return 235-i*40; }
		},
		ease: Power3.easeInOut
	}, 0.15, "-=0.8")

	.staggerTo('#base-lines path', baseTime, {
		drawSVG: '0% 100%',
		ease: Power2.easeInOut
	}, 0.15, "-=1.3")

	.staggerTo('#mid-lines path', baseTime, {
		drawSVG: '0% 100%',
		ease: Power2.easeInOut
	}, 0.15, "-=1.1")

	.staggerTo('#top-lines path', baseTime*2, {
		cycle: {
			drawSVG: function(i) { return linesPerc[i]; }
		},
		ease: Power3.easeInOut
	}, 0.15, "-=0.3")

	.staggerFromTo('#horz-lines line', baseTime/2, {
		scaleX:0 }, {
		scaleX: 1,
		ease: Power2.easeOut
	}, 0.15, "-=2.4")

	.staggerFromTo('.person', baseTime/2, {
		opacity:0, x:20 }, {
		opacity: 1, x:0,
		ease: Power2.easeOut
	}, 0.1, "-=2.2")

	//.set('.circ', {opacity: 1}, "-=2")

	.to(bezierTween0, baseTime*2, {progress:percent0, ease:Power3.easeInOut}, "-=1.99")

	.to(bezierTween1, baseTime*2, {progress:percent1, ease:Power3.easeInOut}, "-=1.84")

	.to(bezierTween2, baseTime*2, {progress:percent2, ease:Power3.easeInOut}, "-=1.69")

	.to(bezierTween3, baseTime*2, {progress:percent3, ease:Power3.easeInOut}, "-=1.54")

	.to(bezierTween4, baseTime*2, {progress:percent4, ease:Power3.easeInOut, onComplete: positionValues }, "-=1.39")

	// .set('.value', { xPercent: -50, yPercent: -50 }) // ??
	
	.to('.value', 0.5, {opacity:1, ease: Linear.easeNone});

/*  ==========================================================================
    Followers SVG Animation
    ========================================================================== */

	var ftl = new TimelineMax({ repeat: 0 });

	ftl.fromTo('.base-mask', 0.6, { attr:{height: 5} }, { attr:{height: 100}, ease: Power2.easeIn})
		.to('.base-mask', 0.4, { attr:{height: 228}, ease: Power2.easeOut})
		.fromTo('.sidebars-mask', 0.6, { attr:{height: 5} }, { attr:{height: 100}, ease: Power2.easeIn}, "-=0.8")
		.to('.sidebars-mask', 0.4, { attr:{height: 166}, ease: Power2.easeOut}, "-=0.2")
		.from('.fback-p-transp', 1, { y: 200, ease: Elastic.easeOut.config(0.9, 0.8) }, "-=0.6")
		.from('.fback-p', 0.6, { y: 200, ease: Power2.easeInOut }, "-=1.0" )
		.from('.fback-c-transp', 1, { y: 285, ease: Elastic.easeOut.config(0.9, 0.8) }, "-=0.9")
		.from('.fback-c', 0.6, { y: 285, ease: Power2.easeInOut }, "-=1.0" )
		.from('.fback-l', 0.6, { y: 158, ease: Power2.easeInOut }, "-=1" )
		.from('.fback-r', 0.6, { y: 208, ease: Power2.easeInOut }, "-=0.9" )
		.from('.vs', 0.6, { y:100, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")
		.from('.fyear-l', 0.6, { x:20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")
		.from('.fyear-r', 0.6, { x:-20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.6")
		.from('.totals-base-circ', 0.3, { scale: 0, transformOrigin: '50% 50%' }, "-=0.7")
		.to('.totals-base-circ', 0.6, { morphSVG:'.totals-base', ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")
		.from('.totals-title', 0.3, { opacity: 0 }, "-=0.6")
		.from('.total-l', 0.6, { x:20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")
		.from('.total-r', 0.6, { x:-20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.6")
		.from('.fup', 0.6, { y: 20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")
		.from('.fperc', 0.6, { y: 20, opacity: 0, ease: Elastic.easeOut.config(1.1, 0.7) }, "-=0.5")


/*  ==========================================================================
    Media Type Animation
    ========================================================================== */  

/*  Global variables
    ========================================================================== */  

	var percs = [22, 17, 57, 4];
	var percsRange = []; // array of percentage ranges for the arcs to animate from to
	var percsEnd = []; // array of percentages for the divider lines to animate to
	var markersAngles = []; // array of percentages for markers to be positioned mid arcs
	var $sLine = $('.mt-line'); // starting line
	var $mtText = $('.mt-text'); // media type text
	var $ring = $('.mt-ring'); // each percentage arc
	var $percLine = $('.mt-perc-line'); // percentage divider lines
	var $mtBase2 = $('.mt-base-2'); // thick white ring
	var $mtTrack = $('.mt-base-2-track'); // thick ring track
	var $mtMarker =$('.mt-marker'); // marker lines

/*  Init media type items
    ========================================================================== */  

	TweenMax.set('.media-type-graph', {
		visibility: 'visible'
	});

	TweenMax.set($sLine, {
		drawSVG: '0px 2px'
	});

	TweenMax.set($percLine, {
		transformOrigin: '1px 200px',
		opacity: 0
	});

	TweenMax.set($mtBase2, {
		transformOrigin: '50% 50%',
		rotation: -90,
		drawSVG: '0% 0%'
	});

	TweenMax.set($mtTrack, {
		transformOrigin: '50% 50%',
		drawSVG: '0% 0%'
	});

	TweenMax.set($mtMarker, {
		transformOrigin: '1px 277px',
		drawSVG: '0% 0%'
	});


/*  Set each ring to its starting position and populate arrays
    ========================================================================== */  

	var addPercs = 0;
	$ring.each( function(i, val) {
		percsEnd.push(addPercs);

		var tempStart = addPercs;
		// set the starting positions
		TweenMax.set('.mt-ring-'+i, {
			drawSVG: addPercs + '% ' + addPercs + '%'
		});
		// get the ending positions and set the drawSVG ranges in an array
		addPercs = addPercs + percs[i];
		var rangeString = tempStart + '% ' + addPercs + '%';
		percsRange.push(rangeString);
		markersAngles.push((tempStart + (addPercs-tempStart)/2)/100*360);

	}); 

	percsEnd.reverse(); // reverse the array so the line travelling furthest goes first, and so on
	markersAngles.reverse(); // reverse the array so the line travelling furthest goes first, and so on


/*  Media type timeline animation
	========================================================================== */  

	var mtl = new TimelineMax();
		// animate the base line
		mtl.to($sLine, 0.4, {
			drawSVG: '0px 200px',
			ease: Power3.easeIn,
			delay: 0.3
		})
		.to($sLine, 0.3, {
			drawSVG: '200px 150px',
			ease: Power3.easeOut
		})
		.set($sLine, {
			opacity: 0
		})
		.set($percLine, {
			opacity: 1
		})
		// animate the title text
		.from($mtText, 0.7, { 
			y: 50, 
			autoAlpha: 0, 
			ease: Elastic.easeOut.config(1.1, 0.3) 
		}, "-=0.25")
		// animate the base circle
		.to($mtBase2, 1.4, {
			drawSVG: '0% 100%',
			ease: Power4.easeInOut
		}, "-=0.8")
		// animate the base circle track
		.to($mtTrack, 1, {
			drawSVG: '0% 100%',
			ease: Power4.easeInOut
		}, "-=1.05")
		// animate the perctage lines
		.staggerTo($percLine, 1.4, {
			cycle: {
				rotation: function(i) {
					return percsEnd[i]/100 * 360;
				}
			},
			ease:Power4.easeInOut
		}, 0.1, "-=1.2")
		// animate in marker lines
		.staggerTo($mtMarker, 0.8, {
			cycle: {
				rotation: function(i) {
					return markersAngles[i];
				}
			},
			drawSVG: '0% 100%',
			ease: Power3.easeOut
		}, 0.1, "-=0.9")
		// animate the rings
		.staggerTo($ring, 1.4, {
			cycle: {
				drawSVG: function(i) { return percsRange[i] }
			},
			ease: Power4.easeInOut
		}, 0, "-=1.3")
		.from('.mt-figures', 1, {
			opacity: 0
		}, "-=0.5");

/*  ==========================================================================
    Most Tweeters Bar Graphs
    ========================================================================== */	

	var $mostList = $('.most-list');
	var $mostItem = $('.most-list-item');
	var $mostBar = $mostItem.find('span');
	var mostMax = Number($mostList.find('.most-list-item:first-child').find('.most-num').html().replace(/[^0-9\.]/g, '')); // remove comma from string
	var mostCount = 0;
	$mostItem.each(function() {
		var $mostItem = $(this).find('.most-bar span');
	    var mostValue = Number($(this).find('.most-num').html().replace(/[^0-9\.]/g, '')); // get each value
	    var mostPerc = ((mostValue/mostMax)*100)+"%"; // get percentage for each value
	    $mostItem.attr('data-most-num', mostPerc);
	    mostCount++;
	});

	TweenMax.set($mostBar, {
		width:0
	});

	var mostTL = new TimelineMax();

		mostTL.staggerTo($mostBar, 1, {
			cycle: {
				width: function(i) {
					return this.attributes[1].nodeValue;
				}
			},
			ease: Power3.easeInOut
		}, 0.1);

/*  ==========================================================================
    ScrollMagic
    ========================================================================== */

	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

/*  General Scene
    ========================================================================== */

   	if($html.hasClass('no-touch')) {
	    $('.scene').each(function() {
	    	var genScene = new ScrollMagic.Scene({
				triggerElement: this, 
				triggerHook: 0.7,
				duration: 0,
				reverse: false
			})
			.setClassToggle(this, 'in-scene')
			//.addIndicators()
			.addTo(controller);
	    });
	}

/*  Blockquotes
    ========================================================================== */

    if($html.hasClass('no-touch')) {
    	$('blockquote').each(function() {
	    	var quoteScene = new ScrollMagic.Scene({
				triggerElement: this, 
				triggerHook: 0.9,
				duration: 0
			})
			.setTween(TweenMax.from(this, 0.5, { y: 30, opacity: 0, ease: Power1.easeOut }))
			//.addIndicators()
			.addTo(controller);
	    });
    }

/*  Top Device List
    ========================================================================== */

    if($html.hasClass('no-touch')) {
    	var deviceScene = new ScrollMagic.Scene({
			triggerElement: '.top-device', 
			triggerHook: 0.8,
			duration: 0
		})
		.setTween(TweenMax.from('.top-device', 0.5, { y: 30, opacity: 0, scale: 0.98, ease: Power2.easeOut }))
		//.addIndicators()
		.addTo(controller);
    }

/*  Gains Scene
    ========================================================================== */

	var gainsScene = new ScrollMagic.Scene({
		triggerElement: '.gains-info-wrapper', 
		triggerHook: 0.7,
		duration: 0
	})
	.setTween(tl)
	// .addIndicators()
	.addTo(controller);

/*  Followers Scene
    ========================================================================== */

	var fScene = new ScrollMagic.Scene({
		triggerElement: '.followers-image-wrapper', 
		triggerHook: 0.6,
		duration: 0
	})
	.setTween(ftl)
	// .addIndicators()
	.addTo(controller);


/*  6 Parameters Scene
    ========================================================================== */
    if($html.hasClass('no-touch')) {

		var $params = $('.top-params-item');
		var paramsScene = new ScrollMagic.Scene({
			triggerElement: '.top-params', 
			triggerHook: 0.75,
			duration: 0
		})
		.setTween( TweenMax.staggerFrom( $params, 0.6, { y: 40, autoAlpha: 0, delay: 0.2, ease:Power2.easeOut }, 0.10 ))
		//.addIndicators()
		.addTo(controller);

	}

/*  Media Type Scene
    ========================================================================== */

	var mediaScene = new ScrollMagic.Scene({
		triggerElement: '.media-type-wrapper', 
		triggerHook: 0.7,
		duration: 0
	})
	.setTween(mtl)
	// .addIndicators()
	.addTo(controller);

/*  Most Tweeters Scene
    ========================================================================== */

	var meostScene = new ScrollMagic.Scene({
		triggerElement: '.media-type-wrapper', 
		triggerHook: 0.7,
		duration: 0
	})
	.setTween(mostTL)
	// .addIndicators()
	.addTo(controller);

/*  Slider
    ========================================================================== */

  //   if($html.hasClass('no-touch')) {
  //   	var sliderScene = new ScrollMagic.Scene({
		// 	triggerElement: '.slider', 
		// 	triggerHook: 0.5,
		// 	duration: 0
		// })
		// .setTween(TweenMax.from('.slider', 0.5, { y: 30, opacity: 0, ease: Power2.easeOut }))
		// //.addIndicators()
		// .addTo(controller);
  //   }




});



