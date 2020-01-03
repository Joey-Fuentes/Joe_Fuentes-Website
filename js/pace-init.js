// Make sure we uncover the cover once the page has loaded
Pace.on('done', function() {
  $("#cover").fadeOut(200);
});