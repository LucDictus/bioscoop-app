$(document).ready(function () {
  // Maak de navbar en voeg de gewenste klassen toe
  var navbar = $("<nav>");
  navbar.html(
    '<div class="footer-menu">\
          <ul class="side-categories">\
            <li><a href="../home/">Home</a></li>\
            <li><a href="../about/">About</a></li>\
            <li><a href="../pakketen/">Products</a></li>\
          </ul>\
        </div>'
  );
  $("body").append(navbar);
});
