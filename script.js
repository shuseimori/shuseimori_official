
$(function(){
  $("#show-about").click(function(){
    $(".header-about").css("color", "white");
    $(".header-photography").css("color", "");
    $(".header-works").css("color", "");
    $(".header-contact").css("color", "");
    $(".header-home").css("color", "black");

    $(".about").fadeIn();
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
  })

  $("#menu-show-about").click(function(){
    $(".about").fadeIn();
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
  })

  $("#show-photography").click(function(){
    $(".header-about").css("color", "");
    $(".header-photography").css("color", "white");
    $(".header-works").css("color", "");
    $(".header-contact").css("color", "");
    $(".header-home").css("color", "black");

    $(".photography").fadeIn();
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
    $(".about").css("display", "none");
  })

  $("#menu-show-photography").click(function(){
    $(".photography").fadeIn();
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
    $(".about").css("display", "none");
  })

  $("#show-web-design").click(function(){
    $(".header-about").css("color", "");
    $(".header-photography").css("color", "");
    $(".header-works").css("color","white");
    $(".header-contact").css("color", "");
    $(".header-home").css("color", "black");

    $(".works").fadeIn();
    $(".contact").css("display", "none");
    $(".about").css("display", "none");
    $(".photography").css("display", "none");
  })

    $("#menu-show-web-design").click(function(){
      $(".works").fadeIn();
      $(".contact").css("display", "none");
      $(".about").css("display", "none");
      $(".photography").css("display", "none");
    })

  $("#show-contact").click(function(){
    $(".header-about").css("color", "");
    $(".header-photography").css("color", "");
    $(".header-works").css("color", "");
    $(".header-contact").css("color","white");
    $(".header-home").css("color", "black");

    $(".contact").fadeIn();
    $(".about").css("display", "none");
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
  })

  $("#menu-show-contact").click(function(){
    $(".contact").fadeIn();
    $(".about").css("display", "none");
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
  })

  $("#home").click(function(){
    $(".header-about").css("color", "");
    $(".header-photography").css("color", "");
    $(".header-works").css("color", "");
    $(".header-contact").css("color", "");
    $(".header-home").css("");

    $(".about").css("display", "none");
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
  })

  $("#menu-home").click(function(){
    $(".about").css("display", "none");
    $(".photography").css("display", "none");
    $(".works").css("display", "none");
    $(".contact").css("display", "none");
  })

  $("#home").hover(
    function(){
    $(".header-home").css("color","white");
  },function(){
    $(".header-home").css("color", "black");
  })

  $("#show-menu").click(function(){
    $(".header-menu").slideToggle();
  })

  $(".change-btn").click(function(){
    var $displayPhoto = $(".active");
    $displayPhoto.removeClass("active");

    if($(this).hasClass("next-btn")){
     $displayPhoto.next().addClass("active");
   } else {
     $displayPhoto.prev().addClass("active");
   }

   $(".change-btn").show();

     var slideIndex = $(".photo").index($(".active"));
     if(slideIndex == 0){
       $(".prev-btn").hide();
     } else if(slideIndex == $(".photo").length-1){
       $(".next-btn").hide();
     }

   });


});
