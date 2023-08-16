window.onscroll = function() {navscrollfunction()};

function navscrollfunction() {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("nav").className = "navbarscroll", "navbar a";
    } else {
      document.getElementById("nav").className = "navbar";
      }
    }

    window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
      }
    }