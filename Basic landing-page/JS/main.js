
(function($){
    "user strict";
    //For navbar scroll
    Navbar= function(){
      if($("#navbar").offset().top > 100){
         $("nav").addClass("navbar_shrink");
      }else{
        $("nav").removeClass("navbar_shrink");
      }
    }
    Navbar();
    $(window).scroll(Navbar); 
})(jQuery);