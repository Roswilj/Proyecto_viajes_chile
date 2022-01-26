$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#barra").removeClass("navbar");
       $('#barra').addClass("bg-solid");
      } else {
    
       $("#barra").removeClass("bg-solid");
       $('#barra').addClass("navbar");
      }

});