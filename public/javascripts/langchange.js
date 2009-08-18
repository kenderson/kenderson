/**
 * LangChange : a jQuery Plug-in
 * Samuel Garneau <samgarneau@gmail.com>
 * http://samgarneau.com
 * 
 * Released under no license, just use it where you want and when you want.
 */

(function($){
	
	$.fn.changeLang = function(params){
		
		var defaults = {
			file: '../files/lang-example.xml',
			lang: 'en'
		}
		
		var aTexts = new Array();
		
		if(params) $.extend(defaults, params);
		
		$.ajax({
		      type: "GET",
		      url: defaults.file,
		      dataType: "xml",
		      success: function(xml)
					   {
		           			$(xml).find('text').each(function()
							{
								var textId = $(this).attr("id");
		                 		var text = $(this).find(defaults.lang).text();
								
								aTexts[textId] = text;
							});
		
							$.each($("*"), function(i, item)
							{
								//alert($(item).attr("langtag"));
								if($(item).attr("langtag") != null)
									$(item).fadeOut(150).fadeIn(150).text(aTexts[$(item).attr("langtag")]);
							});
		               }
		      });
	};
	
})(jQuery);