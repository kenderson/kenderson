// Wait Plugin
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
// Custom sorting plugin
(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

jQuery(document).ready(function($) {
  $('#pic_frame').cycle({
       fx:     'scrollHorz',
       speed:  'slow',
       timeout: 7000
   });
  jQuery.each(jQuery.browser, function(i) {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
      var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
      if (ieversion < 9 ){
        $.fn.qtip.styles.mystyle = { 
          padding: 0, 
          border: { color: '#ce8429', radius: 7 },
          'background':'#ce8429',
          color: 'black',
          textAlign: 'center',
          tip: 'bottomMiddle',
          width: { min: 135 }   
        }
      }
      else {
        $.fn.qtip.styles.mystyle = { 
          padding: 0, 
          border: { color: '#ce8429', width: 0 },
          'background':'transparent',
          color: 'black',
          textAlign: 'center',
          tip: 'bottomMiddle',
          width: { min: 135 }
        }
      }
    }
    else {
      $.fn.qtip.styles.mystyle = { 
        padding: 0, 
        border: { color: '#ce8429', width: 0 },
        'background':'##ce8429',
        color: 'black',
        textAlign: 'center',
        tip: 'bottomMiddle',
        width: { min: 135 }
      }
    }
  });
  $("a.fancybox").fancybox({
    	'autoScale'		: false,
      'width' : 500,
  		'transitionIn'		: 'elastic',
  		'transitionOut'		: 'elastic',
  		'titlePosition' 	: 'over'
  });
  $('[tooltip]').each(function() {
    $(this).qtip({
      content: $(this).attr('tooltip'),
      position: {
        adjust: { resize: true, screen: false },
        corner: {
          target: 'topRight',
          tooltip: 'bottomLeft'
        }
      },
      style: {
        border: {
          width: 2,
          radius: 10
        },
        textAlign: 'center',
        tip: 'bottomLeft', 
        name: 'light'
      }
    });
  });
  
  $('a.fancybox').live("click", function(){
    $.fancybox($("#"+this.href.split("#")[1]).html());
  });
  $('#navigation li a').each(function() {
    if ($(this).hasClass("current")) {
      $(this).qtip({
        content: $(this).attr('tooltip_menu'),
        show: { ready: true},
        hide: false,
        position: {
          adjust: { resize: true, screen: false },
          corner: {
            target: 'topMiddle',
            tooltip: 'bottomMiddle'
          }
        },
        style: 'mystyle'
      });
    }
    else {
      $(this).qtip({    
        content: $(this).attr('tooltip_menu'),
        position: {
          corner: {
            target: 'topMiddle',
            tooltip: 'bottomMiddle'
          }
        },
        style: 'mystyle',
        api: {
          beforeShow: function() {
            $(".qtip").hide();
          },
          beforeHide: function() {
            $('#navigation li a.current').qtip({    
              content: $('#navigation li a.current').attr('tooltip_menu'),
              show: { ready: true},
              hide: false,
              position: {
                corner: {
                  target: 'topMiddle',
                  tooltip: 'bottomMiddle'
                }
              },
              style: 'mystyle'
            });
          }
        }
      });
    }
  });
  // $('.backgound_color_select').ColorPicker({
  //  color: '#fff',
  //  onShow: function (colpkr) {
  //    $(colpkr).fadeIn(500);
  //    return false;
  //  },
  //  onHide: function (colpkr) {
  //    $(colpkr).fadeOut(500);
  //    return false;
  //  },
  //  onChange: function (hsb, hex, rgb) {
  //    $('.color_changer').css('backgroundColor', '#' + hex);
  //  }
  // });
  // $('.text_color_select').ColorPicker({
  //  color: '#000',
  //  onShow: function (colpkr) {
  //    $(colpkr).fadeIn(500);
  //    return false;
  //  },
  //  onHide: function (colpkr) {
  //    $(colpkr).fadeOut(500);
  //    return false;
  //  },
  //  onChange: function (hsb, hex, rgb) {
  //    $('.color_changer p').css('color', '#' + hex);
  //  }
  // });
  //   $("#accordion").accordion();
  $("#kenderson").validate();
  // $('#facebox').bgiframe();
  // $("a.facebox").facebox();
  // DOMContentLoaded
  $(function() {
    // bind radiobuttons in the form
    var $filterType = $('#filter input[name="type"]');
    var $filterSort = $('#filter input[name="sort"]');
    // get the first collection
    var $applications = $('#applications');
    // clone applications to get a second collection
    var $data = $applications.clone();
    // attempt to call Quicksand on every form change
    $filterType.add($filterSort).change(function(e) {
      if ($($filterType+':checked').val() == 'all') {
        var $filteredData = $data.find('li');
      } else {
        var $filteredData = $data.find('li[data-type=' + $($filterType+":checked").val() + ']');
      }
      // if sorted by size
      if ($('#filter input[name="sort"]:checked').val() == "size") {
        var $sortedData = $filteredData.sorted({
          by: function(v) {
            return parseFloat($(v).find('span[data-type=size]').text());
          }
        });
      } else {
        // if sorted by name
        var $sortedData = $filteredData.sorted({
          by: function(v) {
            return $(v).find('strong').text().toLowerCase();
          }
        });
      }   
      // finally, call quicksand
      $applications.quicksand($sortedData, {
        adjustHeight: 'dynamic',
        duration: 800,
        easing: 'easeInOutQuad'      
      });
    });
  });
});
