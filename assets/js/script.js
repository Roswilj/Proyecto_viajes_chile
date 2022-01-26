$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#barra").removeClass("navbar");
       $('#barra').addClass("bg-solid");
      } else {
    
       $("#barra").removeClass("bg-solid");
       $('#barra').addClass("navbar");
      }

});

$(document).ready(function () {


    $("a").click(function(event){
        if (this.hash !== "") {
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top - 70
          }, 1000, );
        }
    });  

  })

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})