// @codekit-prepend "vendor/modernizr-2.8.3.min.js";
// @codekit-prepend "vendor/mmenu/jquery.mmenu.min.js"; 
// @codekit-prepend "vendor/respond.min.js";
// @codekit-prepend "vendor/zurb/responsive-tables.js";
// @codekit-prepend "vendor/plugins.js";
// @codekit-prepend "vendor/outdatedbrowser/outdatedbrowser.js";


jQuery(document).ready(function($){
	$("#main-menu").mmenu({
         // options
    }, {
		// configuration
		clone: true // clones the menu to create a separate off canvas one to help with bespoke styling of menus.
    });
});