console.log("page loaded...");

function playVideo(element) {
  element.muted = true;
  element.play();
}

function pauseVideo(element) {
  element.pause();
}
