window.onscroll = function() {navscrollfunction()};

function navscrollfunction() {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("nav").className = "navbarscroll", "navbar a";
    } else {
      document.getElementById("nav").className = "navbar";
      }
    }


