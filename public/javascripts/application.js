// var fredericksburg_location = "http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=510+Princess+Anne+Street,+Fredericksburg,+VA+22401&amp;sll=37.0625,-95.677068&amp;sspn=33.02306,55.722656&amp;ie=UTF8&amp;ll=38.308326,-77.453442&amp;spn=0.007982,0.013604&amp;z=14&amp;iwloc=addr&amp;output=embed&amp;s=AARTsJql-3Z3DpLyeeCeQx8a6Z9j20swwg"
// 
// var fairfax_location = "http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=4122+leonard+drive,+suite+100,+fairfax,+va,+22030&amp;sll=38.84417,-77.312572&amp;sspn=0.007922,0.013604&amp;g=4122+leonard+drive,+suite+100,+fairfax,+va,+22030&amp;ie=UTF8&amp;ll=38.851874,-77.308388&amp;spn=0.007922,0.013604&amp;z=14&amp;iwloc=addr&amp;output=embed&amp;s=AARTsJpmWNayhAP0_j4LDM4LCamzmMENbg"
var map_switching_time = 2000;
var load_string_in = "#(test)-(test)"
jQuery(document).ready(function($) {
  // $("#fairfax_services").load("http://www.fairfaxcounty.gov/courts/circuit/criminal_forms.htm #centercolumn-full li");
  $("#smhkform").validate();
  // $(".right_content").slideDown(2000);
  $("#lang-en").click(function(){
    $("body").changeLang({lang: "en", file: "../files/lang-example.xml"});
  });
  
  $("#lang-fr").click(function(){
    $("body").changeLang({lang: "fr", file: "../files/lang-example.xml"});
  });
  
  $('#facebox').bgiframe();
  
  $("a.facebox").facebox();

  $("#datepicker").datepicker();
  
  $("#fairfax span").click(function(){
    $("#fredericksburg_map").hide(map_switching_time);
    $("#fairfax_map").show(map_switching_time);
  });
  $("#fredericksburg span").click(function(){
    $("#fairfax_map").hide(map_switching_time);
    $("#fredericksburg_map").show(map_switching_time);
  });

  // $("#fairfax span").click(function(){
  //     $(".dynamic_map iframe").load(function(){  
  //       $(this).attr("src", fairfax_location)
  //     });
  //     // $(".dynamic_map").load("/locations .dynamic_map");
  // });
  // $("#fredericksburg span").click(function(){
  //   $(".dynamic_map iframe").attr("src", fredericksburg_location);
  // });
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