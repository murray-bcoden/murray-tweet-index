// @codekit-prepend "plugins.js";



jQuery(document).ready(function($){

	
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



});