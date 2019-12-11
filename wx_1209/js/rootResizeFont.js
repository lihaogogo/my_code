(function() {
  var rootHtml = $(":root");
  var rootResize = function() {
      var fontSize = $(window).width() < 640 ? $(window).width() / 16 : 40;
      rootHtml.css("font-size", fontSize);
  }
  rootResize();
  $(window).resize(function() {
      rootResize();
  });
})();