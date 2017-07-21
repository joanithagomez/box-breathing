function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}



$(document).ready(function() {
  $(".play").on("click", function() {
    $(".play").velocity("transition.fadeOut");

    launchIntoFullscreen(document.getElementById("doc"));
    $(".inner")
      .velocity({
        width: "98%",
        height: "98%"
      }, {
        duration: 4000
      })
      .velocity("reverse", {
        delay: 4000,
        loop: true
      });
  });

  //  exitFullscreen();
});
