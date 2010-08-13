jQuery(document).ready(function($) {
  jQuery.each(jQuery.browser, function(i) {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
      var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
      if (ieversion < 9){
        $("#ie_flash").wait(2000).slideDown(1000);
      }
    }
  });
});