// @codekit-prepend "plugins.js";
// @codekit-prepend "vendor/greensock/plugins/CSSPlugin.min.js";
// @codekit-prepend "vendor/greensock/plugins/ScrollToPlugin.min.js";
// @codekit-prepend "vendor/greensock/easing/EasePack.min.js";
// @codekit-prepend "vendor/greensock/TweenLite.min.js";


jQuery(document).ready(function($){

	
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






