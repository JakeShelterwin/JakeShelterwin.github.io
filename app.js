console.log("collegato");

$( document ).ready(function() {
  // il menu rimane fisso, allo scorrere della pagina viene colorato per restare visibile
  window.onscroll = function() {
    mostraHeaderFisso();
    mostraTopScroller();
    
};

  function mostraHeaderFisso() {
      if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
          if ($(window).width() < 992) {
              $("header").addClass("scrollato");
              $(".fixedHeader").addClass("scrollato");
            }
        } else {
            $("header").removeClass("scrollato");
            $(".fixedHeader").removeClass("scrollato");
            $('.mostraContattiMobile, .contattiHeader').removeClass("cliccato");
        }
    }
  function mostraTopScroller() {
        var winH = $(window).height() / 2;
        /* console.log(winH); */
        if (document.body.scrollTop > winH || document.documentElement.scrollTop > winH){
            $("footer").addClass("scrollato");
        } else {
            $("footer").removeClass("scrollato");
            
        }
    }

    $('.mostraContattiMobile').on("click", function(){
        $(this).toggleClass("cliccato");
        $('.contattiHeader').toggleClass("cliccato");
    })



    // Add smooth scrolling to all links
    $("a#toTop").on('click', function(e) {
        /* console.log("ciaociao"); */
        /// 1
        e.preventDefault();
        // 2
        const href = $(this).attr("href");
        // 3
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    });
});