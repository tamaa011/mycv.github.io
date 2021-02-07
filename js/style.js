$(".me").click(function(){
    $(".main-page").removeClass("hidden");
    $(".me i").addClass("active");
    $(".work i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".work-examples").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".cv").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".contact").addClass("hidden");
  });

$(".work").click(function(){
    $(".main .text").css("animation-name", "exampleTextOut");
    $(".main .pic").css("animation-name", "exampleImgOut");
    $(".main .text").removeAttr( "exampleTextIn");
    $(".main .pic").removeAttr( "exampleImgIn");
    
    $(".main .text").css("animation-delay", "0s");
    $(".main .pic").css("animation-delay", "0s");    

    $(".work-examples").css("animation-name", "exampleWork");
    $(".work-examples").css("animation-delay", "0.5s");
    $(".cv").removeAttr( "cv");
    $(".cv").css("animation-name", "cvOut");
    $(".cv").css("animation-delay", "0s");
    
    $(".cv").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".contact").addClass("hidden");
    $(".work i").addClass("active");
    $(".me i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".main-page").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".work-examples").removeClass("hidden");
  });

$(".cv-cv").click(function(){
    
    $(".main .text").css("animation-name", "exampleTextOut");
    $(".main .pic").css("animation-name", "exampleImgOut");
    $(".main .text").removeAttr( "exampleTextIn");
    $(".main .pic").removeAttr( "exampleImgIn");
    
    $(".main .text").css("animation-delay", "0s");
    $(".main .pic").css("animation-delay", "0s");  
    
    $(".work-examples").css("animation-name", "exampleWorkOut");
    $(".work-examples").css("animation-delay", "0s");
    $(".work-examples").removeAttr( "exampleWork");
    
    $(".cv").css("animation-name", "cv");
    $(".cv").css("animation-delay", "0.5s");
    $(".work-examples").css("animation-delay", "0s");
    
    $(".main-page").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".work-examples").delay(500).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
    $(".contact").addClass("hidden");
    $(".cv-cv i").addClass("active");
    $(".work i").removeClass("active");
    $(".me i").removeClass("active");
    $(".contact-c i").removeClass("active");
    $(".cv").removeClass("hidden");
  });

$(".contact-c").click(function(){
    $(".main-page").addClass("hidden");
    $(".work-examples").addClass("hidden");
    $(".cv").addClass("hidden");
    $(".contact-c i").addClass("active");
    $(".me i").removeClass("active");
    $(".work i").removeClass("active");
    $(".cv-cv i").removeClass("active");
    $(".contact").removeClass("hidden");
  });

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
  setInterval(function(){ $("#text-one").toggleClass("hidden"); }, 2200);
  setInterval(function(){ $("#text-two").toggleClass("hidden"); }, 2200);
    });