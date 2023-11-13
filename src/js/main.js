$(document).ready(function () {
  // Maak de navbar en voeg de gewenste klassen toe
  var navbar = $("<nav>");
  navbar.html(
    '<div class="footer-menu">\
<<<<<<< Updated upstream
          <ul class="side-categories">\
            <li><a href="../home/">Home</a></li>\
            <li><a href="../about/">About</a></li>\
            <li><a href="../pakketen/">Products</a></li>\
          </ul>\
        </div>'
=======
            <ul class="side-categories">\
              <li><a href="../home/"><img src="src/img/icons/Bookings.svg" alt="bookings"></a></li>\
              <li><a href="../about/"><img src="src/img/icons/home.svg" alt="home"></a></li>\
              <li><a href="../pakketen/"><img src="src/img/icons/profile.svg" alt="profile"></a></li>\
            </ul>\
          </div>'
>>>>>>> Stashed changes
  );
  $("body").append(navbar);
});
