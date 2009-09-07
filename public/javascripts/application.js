jQuery(document).ready(function($) {
  $("#kenderson").validate();
  $(".portfolio_wrap").animate({ opacity: 0.85 }, 1 );
  $('#facebox').bgiframe();
  $("a.facebox").facebox();
  $("#datepicker").datepicker();
  $('.portfolio_div').cycle({ 
    fx:     'scrollHorz', 
    speed:  'fast',
    timeout: 0, 
    next:   '#next', 
    prev:   '#prev' 
  });  
  $.fn.wait = function(time, type) {
      time = time || 1000;
      type = type || "fx";
      return this.queue(type, function() {
          var self = this;
          setTimeout(function() {
              $(self).dequeue();
          }, time);
      });
  };
  
});