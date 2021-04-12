jQuery(document).ready(function ($) {

    // Header fixed on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  


  });


  

  

  
  
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

